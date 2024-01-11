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
          <h1 class="text-army text-3xl lg:text-5xl font-extrabold">Reset Password</h1>
          <p class="mt-4 text-charcoal">Enter the details sent to your mail</p>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">Email Address</label>
            <input type="email" v-model="email" class="mt-2 bg-white w-full py-2 px-3 border border-gray-200 rounded outline-none focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
            <!-- <p class="mt-2 text-red-500 ">{{errorMsg}}</p> -->
          </div>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">Old Password</label>
            <input type="password" v-model="old_password" class="mt-2 bg-white w-full py-2 px-3 border border-gray-200 rounded outline-none focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
            <!-- <p class="mt-2 text-red-500 ">{{errorMsg}}</p> -->
          </div>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">New Password</label>
            <input type="password" v-model="new_password" class="mt-2 bg-white w-full py-2 px-3 border border-gray-200 rounded outline-none focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
           
            <!-- <p class="mt-2 text-red-500 ">{{errorMsg}}</p> -->
          </div>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">Confirm Password</label>
            <input type="password" v-model="confirm_password" class="mt-2 bg-white w-full py-2 px-3 border border-gray-200 rounded outline-none focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
           
            <p class="mt-2 text-red-500 ">{{errorMsg}}</p>
          </div>
          
          <button class="mt-10 rounded focus:outline-none bg-army py-2 w-full lg:w-4/5 text-white">Proceed</button>
          <p class="mt-4 text-sm">Don't have an account? <router-link to="/signup" class="greent font-bold">Register</router-link></p>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import NavBar from "@/components/Nav/HomeNavBar"
import baseURL from "@/main"
import axios from "axios"

export default {
  components: {
    NavBar,
  },
  data(){
    return {
      showEye: true,
      email: "",
      old_password: "",
      new_password: "",
      confirm_password: "",
      // remember: false,
      errorMsg: ""
    }
  },
  methods:{
    validateForm(){
      this.errorMsg = ""
      if (this.new_password != this.confirm_password) {
        this.errorMsg = "Passwords do not match"
      }else{

      this.$store.commit('startLoading')
      axios({url: `${baseURL}/newuser/password/change`, data: {email: this.email, old_password: this.old_password, new_password: this.new_password}, method: 'PATCH'})
      .then((res) => {
        this.$store.commit('endLoading')
        // if(res.data.message == 'success, reset password code sent')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.$router.push('/login')
      })
      .catch(err => {
        this.$store.commit('endLoading')
        this.$store.commit('setError', {status: true, msg: err.response.data.message})
        // if(err.response){
        //   // this.$store.commit('setError', {status: true, msg: err.response.data.message})
        //   if(err.response.data.message == "user does not exist"){
        //     this.errorMsg = err.response.data.message
        //   }
        // }
      })
    }
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