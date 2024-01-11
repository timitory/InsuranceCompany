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
        <form @submit.prevent="validateForm" class="w-full lg:ml-40 mt-12 lg:mt-0 text-center">
          <h1 class="text-army text-3xl lg:text-5xl font-extrabold text-center">Resend OTP</h1>
          <p class="mt-4 text-charcoal text-center">Enter the email used to register</p>
           <div class="mt-6 flex justify-between item-center mx-auto ">
            <!-- <input type="email" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d1" id="d1" v-model="digit1" maxlength="1" @keyup="keyMonitor" required /> -->
           <input type="email" v-model="email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent focus:border-0"  ref="email" id="email"  required>
           <!-- <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d2" id="d2" v-model="digit2"  maxlength="1"  @keyup="keyMonitor" required />
            <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d3" id="d3" v-model="digit3"  maxlength="1" @keyup="keyMonitor" required />
            <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d4" id="d4" v-model="digit4"  maxlength="1" @keyup="keyMonitor" required /> -->

          </div>
          
          <p class="text-red-500 mt-4 text-center">{{errorMsg}}</p>
          <button class="mt-10 rounded focus:outline-none bg-army py-2 w-full text-white">Submit</button>
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
      errorMsg: '',
      email: '',
    }
  },
  methods:{
    validateForm(){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/otp/resend`, data: {email: this.email}, method: 'POST'})
      .then((res) => {
        
        this.$store.commit('endLoading')
        this.$router.push('/verifyotp')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      })
      .catch(err => {
        this.$store.commit('endLoading')
        if(err.response){
          // console.log(err.response)
          if(err.response.data.status == false){
            this.errorMsg = "Error resending OTP"
          }else{
            this.errorMsg = "Error re-sending OTP"
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


div.otps input{
  width: 100%;
	height: 50px;
  outline: none;
  border-radius: 5px;
  line-height: 50px;
	text-align: center;
	font-size: 15px;
}

@media only screen and (min-width: 1024px){
  .flexcont{
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 30px
  }
}
</style>