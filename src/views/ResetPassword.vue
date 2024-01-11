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
          <h1 class="text-army text-3xl lg:text-5xl font-extrabold text-center">Reset Password</h1>
          <div class="mt-4 text-center" v-if="step2">
            <button type="button" class="mt-4 text-sm cursor-pointer  block text-left focus:outline-none" @click="step2 = false"><font-awesome-icon class="mr-1" icon="arrow-left"/> Back</button>
            <label class="mt-6 text-army font-bold  block text-left">Enter new password</label>
            <div class="mt-2 w-full  rounded relative">
              <input type="password" v-model="password" ref="password" class="w-full py-2 px-3 rounded outline-none bg-white focus:outline-none border border-gray-200 focus:ring-1 focus:ring-army focus:border-transparent" required>
              <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
              <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
            </div>
            <p v-if="error.password" class="text-red-500 text-sm mt-2 lg:w-4/5 lg:mx-auto block text-left">Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)</p>
            <button class="mt-10 outline-none bg-army py-2 rounded w-full text-white focus:outline-none">Sign up</button>
          </div>
          <div v-else>
            <p class="mt-4 text-center">Enter the OTP sent to your mail</p>
            <div class="mt-6 flex justify-between item-center mx-auto w-3/5 lg:w-2/5 otps">
              <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d1" id="d1" v-model="digit1" maxlength="1" @keyup="keyMonitor" required />
              <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d2" id="d2" v-model="digit2"  maxlength="1"  @keyup="keyMonitor" required />
              <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d3" id="d3" v-model="digit3"  maxlength="1" @keyup="keyMonitor" required />
              <input type="text" class="bg-white outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent" ref="d4" id="d4" v-model="digit4"  maxlength="1" @keyup="keyMonitor" required />
            </div>
            
            <p class="text-red-500 mt-4 text-center">{{errorMsg}}</p>

            <div class="mt-4">
              <a @click="resend" class="text-army mt-8 md:mt-0 text-sm cursor-pointer">Resend OTP</a>
            </div>
            <button v-if='error.otp' class="mt-10 rounded focus:outline-none bg-army py-2 w-full lg:mx-auto lg:w-4/5 text-white opacity-50">Proceed</button>
            <button v-else class="mt-10 rounded focus:outline-none bg-army py-2 w-full lg:mx-auto lg:w-4/5 text-white" @click="step2 = true">Proceed</button>
          </div>
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
      password: '',
      step2: false,
      showEye: true,
      error:{
        otp: true,
        password: false
      }
    }
  },
  methods:{
    validateForm(){
      if(Object.values(this.error).includes(true)){
        return
      }
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/password/reset`, data: {otp: this.otp, password: this.password}, method: 'POST'})
      .then((res) => {
        this.$store.commit('endLoading')
        if(res.data.message == 'success, password reset successfull')
        this.$store.commit('setSuccess', {status: true, msg: 'Password reset successfull'})
        this.$router.push('/login')
      })
      .catch(err => {
        this.$store.commit('endLoading')
        if(err.response){
          // console.log(err.response)
          this.$store.commit('setError', {status: true, msg: err.response.data.message})
          if(err.response.data.message == "User not found"){
            this.errorMsg = "Invalid OTP"
          }else{
            this.errorMsg = "Invalid OTP"
          }
        }
      })
    },
    resend(){
      // this.$store.commit('startLoading')
      axios({url: `${baseURL}/otp/resend`, data: {email: this.$route.query.email}, method: 'POST'})
      .then((res) => {
        console.log(res)
        // this.$store.commit('endLoading')
        // if(res.data.message == 'OTP resent, Please check your email for verification')
        this.$store.commit('setSuccess', {status: true, msg: 'OTP resent'})

        // this.$router.push('/resetpassword?email='+ this.$route.query.email)
      })
      .catch(err => {
        this.$store.commit('endLoading')
        if(err.response){
          // console.log(err.response)
          this.$store.commit('setError', {status: true, msg: err.response.data.message})
          
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
    showPassword(){
      this.$refs.password.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.showEye = true
    }
    
  },
  computed:{
    otp(){
      return this.digit1.concat(this.digit2, this.digit3, this.digit4)
    }
  },
  watch:{
    password(){
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.password)){
        this.error.password = false
      }else{
        this.error.password = true
      }
    },
    otp(){
      if(this.otp.length !== 4){
        this.error.otp = true
      }else{
        this.error.otp = false
      }
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
.greent{
  color: #2CB675
}
.blue-bg{
  background-color: #E2F5EC;
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

div.otps input{
  width: 30px;
	height: 50px;
  outline: none;
  background-color: #E2F5EC;
  border-radius: 5px;
  line-height: 50px;
	text-align: center;
	font-size: 24px;
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