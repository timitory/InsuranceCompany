<template>
  <div class="relative">
    <NavBar class=""/>
    <section class="bg-white px-6">
      <div class="lg:flex lg:justify-between lg:pt-12 lg:items-start flexcont">
        <div class="hidden mt-20 lg:mt-0 w-full lg:block ">
          <h1 class="text-dark font-extrabold text-4xl">Pay as you go insurance you control.</h1>
          <p class="mt-6 text-charcoal font-medium text-base">You can use PaddyCover to get monthly Home Content Insurance from as low as N250 per week OR monthly Vehicle Insurance</p>
          <div class="mt-8">
            <img src="@/assets/images/landingpage/map.png" alt="map-img" class="block w-full">
          </div>
        </div>
        <div class="w-full lg:ml-40 mt-12 lg:mt-0 lg:w-full">
          <h1 class="text-dark text-2xl font-semibold lg:text-center">It's time to Get you Covered,🚀</h1>
          <p class="mt-2 text-charcoal lg:text-center">Create your account in two simple steps. It will only take a minute.</p>
          <Step1 v-if="!shownext" v-on:setUser="setUser" v-bind:user="user" /> 
          <Step2 v-else v-on:hideNext="shownext = false"  v-on:updateUser="updateUser"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import NavBar from "@/components/Nav/HomeNavBar"
import Step1 from "./Step1"
import Step2 from "./Step2"
export default {
  components: {
    NavBar,
     Step1, 
     Step2
  },
  data(){
    return {
      shownext: false,
      user: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        customer_type: 1
      },
    }
  },
  computed: {
    
  },
  watch:{
    
  },
  methods:{
    setUser(obj){
      this.user = obj
      this.shownext = true
    },
    updateUser(obj){
      this.user = {...this.user, ...obj}
      this.register()
    },
    register(){
        const {firstname, lastname, email, phone, password, address, customer_type} = this.user
        this.$store.dispatch('registerUser', {firstname, lastname, email, phone, password, address, customer_type})
        .then((res)=>{
            this.$router.push(`/verifyotp?email=${this.user.email}`)
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        })
        .catch((err)=>{
          if(err.data.message == 'Email exists already'){
            this.$router.push('/login')
            this.$store.commit('setError', {status: true, msg: 'That email is registered on our platform already'})
          }else{
            this.$store.commit('setError', {status: true, msg: err.data.message})
          }
        })
    },
    showPassword(){
      this.$refs.password.type = 'text'
      this.$refs.confirm.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.$refs.confirm.type = 'password'
      this.showEye = true
    }
  },
  created(){

    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
  section{
    padding-left: 10%;
    padding-right: 10%
  }
  
  
}

</style>