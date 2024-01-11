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
          <p class="mt-4 text-charcoal">Enter the email address you registered with</p>
          <div class="mt-4 lg:mt-6 lg:w-4/5">
            <label class="greent font-semibold">Email Address</label>
            <input type="email" v-model="email" class="mt-2 bg-white w-full py-2 px-3 border border-gray-200 rounded outline-none focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" required>
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
      email : '',
      errorMsg:''
    }
  },
  methods:{
    validateForm(){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/password/forgot`, data: {email: this.email}, method: 'POST'})
      .then((res) => {
        this.$store.commit('endLoading')
        if(res.data.message == 'success, reset password code sent')
        this.$store.commit('setSuccess', {status: true, msg: 'A reset password code has been sent to your mail'})
        this.$router.push('/resetpassword?email='+this.email)
      })
      .catch(err => {
        this.$store.commit('endLoading')
        if(err.response){
          // this.$store.commit('setError', {status: true, msg: err.response.data.message})
          if(err.response.data.message == "user does not exist"){
            this.errorMsg = err.response.data.message
          }
        }
      })
    },
    
  },
  created(){
    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  }
}
</script>

<style scoped>
.greent{
  color: #2CB675
}
.img{
  z-index: 100
}
.img1{
  width: 170px; top: -40px; left: 70px
}
.img2{
  width: 150px; top: 100px; left: -40px 
}
.img3{
  width: 150px; top: 100px; right: -40px
}
.innertext{
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  margin: auto;    
}
.welcome{
  width: 70%;
  margin: 0 auto
}
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
}
@media only screen and (min-width: 768px){
  .img1{
    width: 300px; top: -60px; left: 0; right: 0; margin: 0 auto
  }
  .img2{
    width: 300px; top: 0; bottom:0; margin: auto; 
  }
  .img3{
    width: 300px; top: 0; bottom:0; margin: auto; 
  }
  .innertext{
    bottom: 120px
  }
}
@media only screen and (min-width: 1024px){
  .flexcont{
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 30px
  }
  
  .img{
    z-index: 100
  }
  
  .img1{
    width: 270px; top: -60px; 
  }
  .img2{
    width: 220px; top: 100px; left: -50px; margin: 0
  }
  .img3{
    width: 220px; top: 100px; right: -60px; margin: 0
  }
  .innertext{
    bottom: 120px
  }
}
</style>