<template>
  <div class="relative">
    <NavBar class=""/>
    <section class="bg-white px-6 lg:pr-12 lg:pl-0">
      <div class="lg:flex lg:justify-between lg:pt-12 lg:items-start flexcont">
        <div class="hidden mt-20 lg:mt-0 w-full lg:block ">
          <h1 class="text-dark font-extrabold text-4xl">Pay as you go insurance you control.</h1>
          <p class="mt-6 text-charcoal font-medium text-base">You can use PaddyCover to get monthly Home Content Insurance from as low as N250 per week OR monthly Vehicle Insurance</p>
          <div class="mt-8">
            <img src="@/assets/images/landingpage/map.png" alt="map-img" class="block w-full">
          </div>
        </div>
        <form @submit.prevent="validateForm" class="w-full lg:ml-40 mt-12 lg:mt-0">
          <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to PaddyCover, 👏🏽</h1>
          <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p>
          <div class="mt-4 lg:mt-6">
            <label class="text-army font-semibold">Email Address</label>
            <input type="email" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent focus:border-0" required>
          </div>
          <div class="mt-4 lg:mt-6">
            <label class="text-army font-semibold">Password</label>
            <div class="mt-2 bg-white w-full rounded relative">
              <input type="password" v-model="user.password" ref="password" class="w-full py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent focus:border-0" required>
              <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
              <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
            </div>
          </div>
          <p class="text-red-500 mt-4">{{errorMsg}}</p>
          <button class="mt-6 rounded focus:outline-none bg-army py-2 text-center w-full text-white">Proceed</button>
          <router-link to="/signup" class="inline-block mt-6 text-center rounded focus:outline-none bg-gray-100 text-charcoal py-2 w-full text-white">Create a new account in 2mins</router-link>
          <div class="mt-4">
            <router-link to="/forgotpassword" class="text-army mt-8 md:mt-0 text-sm">Forgot password?</router-link>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import NavBar from "@/components/Nav/HomeNavBar"
// import baseURL from "@/main"
// import axios from "axios"

export default {
  components: {
    NavBar,
  },
  data(){
    return {
      showEye: true,
      user: {
        email: "",
        password: "",
      },
      // remember: false,
      errorMsg: ""
    }
  },
  methods:{
    validateForm(){
      this.$store.commit('startLoading')
      this.$store.dispatch('loginUser', this.user)
      .then(()=>{
        // console.log(res)
        this.$store.commit('endLoading')
        this.$router.push('/app')
      })
      .catch(err=>{
        this.errorMsg = err.data.message
        if(err.data.message == 'Please verify account first'){
          this.$router.push('/verifyotp')
          this.$store.commit('setError', {status: true, msg: err.data.message})
        }
        // this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    },
    showPassword(){
      this.$refs.password.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
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

.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
  display: inline;
  -ms-display: none
}

@media only screen and (min-width: 1024px){
  section{
    padding-left: 10%;
    padding-right: 10%
  }
}
</style>