<template>
  <div class="pt-6 lg:pl-12 lg:pb-10">
    <section class="mt-8">
      <div class="flex lg:block justify-between">
        <h1 class="text-xl lg:text-2xl text-green-500">Account Setup & Settings</h1>
        <div class="lg:hidden relative ml-6" @click="showList = !showList">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 30px;">
          <div v-if="showList" class="bg-white rounded absolute py-6 px-6 -left-32 top-4 showList shadow-md" style="width: 180px; z-index: 100000">
            <router-link to='/app/dashboard/adduser' class="block text-sm text-blue-500">Add Dependant</router-link>
            <router-link to='/app/dashboard/viewdependants' class="mt-2 block text-sm text-blue-500">View Dependants</router-link>
          </div>
        </div>
      </div>
      <div class="mt-4 relative flex justify-between items-start lg:pr-20">
        <div class="">
          <p class=" text-lg lg:mt-4 font-bold lg:text-xl">Welcome {{name}},</p>
          <p class="lg:mt-2">Below are the necessary steps to get you up to speed, please do fill them accurately.</p>
        </div>
        <div class="absolute flex top-0 right-0 hidden lg:block">
          <router-link to="/app/dashboard/transactionhistory" class="text-green-500 inline underline font-semibold mr-6">View Transaction History</router-link>
          <div class="inline relative ml-6" @click="showList = !showList">
            <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 50px; display: inline">
            <div v-if="showList" class="bg-white rounded absolute py-6 px-6 -left-24 top-4 showList shadow-md" style="width: 180px; z-index: 100000">
              <router-link to='/app/dashboard/adduser' class="block text-sm text-blue-500 focus:underline">Add Dependant</router-link>
              <router-link to='/app/dashboard/viewdependants' class="mt-2 block text-sm text-blue-500">View Dependants</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="mt-6">
      <p class="font-bold text-lg lg:text-xl">Bio</p>
      <form @submit.prevent="updatebio">
        <div class="mt-8 lg:flex justify-between formdiv">
          <div class="lg:mr-3 lg:w-full ">
            <div class="lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm">First Name</label>
                <input type="text" v-model="firstname" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
              <div class="mt-4 lg:mt-0 lg:w-full lg:ml-3">
                <label class="text-sm">Last Name</label>
                <input type="text" v-model="lastname" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm">Email address</label>
              <p class="email rounded py-2 px-4">{{email}}</p>
              <!-- <input type="email" v-model="email" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"> -->
            </div>
            <div class="mt-4">
              <label class="text-sm">Phone number</label>
              <input type="text" v-model="phone" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
          </div>
          <div class="lg:ml-32 lg:w-full">
            <div class="mt-4 lg:mt-0">
              <label class="text-sm">Home address</label>
              <input type="text" v-model="address" required class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
          </div>
        </div>
        <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block">Save</button>
        <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full">Save</button>
      </form> 
      <hr class="mt-6">
      <div class="mt-8">
        <p class="font-bold text-lg lg:text-xl">Reset Password</p>
        <form v-if="showPassword" @submit.prevent="resetPassword">
          <div class="mt-8 lg:mt-18 formdiv">
            <div class="mt-4 lg:w-1/3">
              <label class="text-sm">Current password</label>
              <input type="password" v-model="currentpassword" ref="confirm" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4 lg:w-1/3">
              <label class="text-sm">New password</label>
              <div class="mt-2 blue-bg ring-1 ring-blue-300 w-full rounded relative">
                <input type="password" v-model="newpassword" ref="password" class="w-full py-2 px-3 rounded blue-bg outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showePassword"/>
                <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
              </div>
            </div>
            <p v-if="error.password" class="text-red-500 text-sm mt-2">Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)</p>
          </div>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block">Reset password</button>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full">Reset Password</button>
        </form>
        <div v-else>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded hidden lg:inline-block" @click="showPassword = true">Change password</button>
          <button style="background: #131b47" class="mt-12 text-white px-12 py-2 rounded lg:hidden block w-full" @click="showPassword = true">Change Password</button>
        </div>
      </div>

      <hr class="mt-6">
      <CardManagement />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
import CardManagement from "@/components/Settings/CardManagement"
export default {
  components:{
    CardManagement
  },
  data(){
    return {
      showList: false,
      currentpassword: '',
      newpassword: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      address: '',
      showPassword: false,
      error:{
        password: false
      },
      showEye: true,
    }
  },
  computed:{
    ...mapState({
      user : state => state.user
    }),
    name(){
      return this.$store.state.user.firstname
    }
  },
  watch:{
    newpassword(){
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.newpassword)){
        this.error.password = false
      }else{
        this.error.password = true
      }
    },
  },
  methods:{
    showePassword(){
      this.$refs.password.type = 'text'
      this.$refs.confirm.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.$refs.confirm.type = 'password'
      this.showEye = true
    },
    updatebio(){
      this.$store.commit('startLoading')
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        address: this.address
      }
      axios({url: `${baseURL}/profile/update`, data : data, method: 'PATCH'})
      .then(res => {
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.$store.commit('setUser', res.data.data)
        if(this.$store.state.addAddress){
          this.$store.commit('addAddress', false)
          this.$router.push('/app/dashboard/buyvehicle/1')
        }
      })
      .catch(err =>{
        this.$store.commit('endLoading')
        this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    },
    resetPassword(){
      this.$store.commit('startLoading')
      const data = {
        current_password: this.currentpassword,
        new_password: this.newpassword
      }
      axios({url: `${baseURL}/password`, data: data, method: 'PATCH'})
      .then(res => {
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      })
      .catch(err =>{
        this.$store.commit('endLoading')
        this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    }
  },
  mounted(){
    this.$store.commit('changeview', 'settings')
    this.$store.commit('setCollapse', false)
    this.firstname = this.user.firstname
    this.lastname = this.user.lastname
    this.email = this.user.email
    this.phone = this.user.phone
    this.address = this.user.address
  },

}
</script>

<style scoped>
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
}
input, .email{
  background-color: #e2f5ec;
}
.filelabel{
  cursor: pointer;
  display: block;
  padding: 10px 10px;
  position: relative;
  background: #131b47;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.radiobtn{
  cursor: pointer;
  /* display: block; */
  padding: 8px 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filelabel input, .radiobtn input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

@media only screen and (min-width: 1024px){
  .formdiv{
    max-width: 80%
  }
}

@media only screen and (min-width: 1280px){
  .formdiv{
    max-width: 70%
  }
}

</style>