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
          <h1 class="text-army text-3xl lg:text-5xl font-extrabold text-center">Verify Account</h1>
          <p class="mt-4 text-charcoal text-center">Enter the OTP sent to your mail</p>
           <div class="mt-6 flex justify-between item-center mx-auto w-3/5 lg:w-2/5 otps">
            <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d1" id="d1" v-model="digit1" maxlength="1" @keyup="keyMonitor" required />
            <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d2" id="d2" v-model="digit2"  maxlength="1"  @keyup="keyMonitor" required />
            <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d3" id="d3" v-model="digit3"  maxlength="1" @keyup="keyMonitor" required />
            <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d4" id="d4" v-model="digit4"  maxlength="1" @keyup="keyMonitor" required />

          </div>
          
          <p class="text-red-500 mt-4 text-center">{{errorMsg}}</p>
          <a class="text-army mt-4 text-center cursor-pointer" @click="resendOtp">Resend OTP</a>
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
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
    }
  },
  methods:{
    validateForm(){
      this.$store.commit('startLoading')
      const otp = this.digit1.concat(this.digit2, this.digit3, this.digit4)
      axios({url: `${baseURL}/otp/verify`, data: {otp: otp}, method: 'POST'})
      .then((res) => {
        this.$store.commit('endLoading')
        this.$router.push('/login')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      })
      .catch(err => {
        this.$store.commit('endLoading')
        if(err.response){
          // console.log(err.response)
          if(err.response.data.message == "User not found"){
            this.errorMsg = "Invalid OTP"
          }else{
            this.errorMsg = "Invalid OTP"
          }
        }
      })
    },
    keyMonitor(event){
      if(event.key == "Backspace" || event.key == "Delete"){
        this.del(event.target.id)
      }else{
        this.next(event.target.id)
      }
    },
    next(id){
      if(id == "d1"){
        this.$refs.d2.focus()
      }else if(id == "d2"){
        this.$refs.d3.focus()
      }else if(id == "d3"){
        this.$refs.d4.focus()
      }
    },
    del(id){
      if(id == "d1"){
        this.$refs.d1.value = ""
      }else if(id == "d2"){
        this.$refs.d2.value = ''
        this.$refs.d1.focus()
      }else if(id == "d3"){
        this.$refs.d3.value = ''
        this.$refs.d2.focus()
      }else if(id == "d4"){
        this.$refs.d4.value = ''
        this.$refs.d3.focus()
      }
    },
    resendOtp(){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/otp/resend`, data: {email: this.$route.query.email}, method: 'POST'})
          .then((res) => {

            this.$store.commit('endLoading')
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
    console.log(this.$route.query.email)

    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  }
}
</script>

<style scoped>


div.otps input{
  width: 30px;
	height: 50px;
  outline: none;
  border-radius: 5px;
  line-height: 50px;
	text-align: center;
	font-size: 24px;
}

@media only screen and (min-width: 1024px){
  .flexcont{
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 30px
  }
}
</style>