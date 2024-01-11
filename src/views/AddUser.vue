<template>
  <div class="lg:pt-6 lg:pl-12">
    <section class="mt-8">
      <div class="flex lg:block justify-between">
        <h1 class="text-xl lg:text-2xl text-green-500">Dashboard</h1>
        <div class="lg:hidden relative ml-6" @click="showList = !showList">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 30px;">
          <div v-if="showList" class="bg-white rounded absolute py-6 px-6 -left-32 top-4 showList shadow-md" style="width: 180px; z-index: 100000">
            <router-link to='/app/dashboard/adduser' class="block text-sm text-blue-500">Add Dependant</router-link>
            <router-link to='/app/dashboard/viewdependants' class="mt-2 block text-sm text-blue-500">View Dependants</router-link>
          </div>
        </div>
      </div>
      <div class="mt-4 relative lg:flex justify-between items-start lg:pr-20">
        <div class="">
          <p class="lg:mt-4 font-bold lg:text-xl">Add new user</p>
          <p class="lg:mt-2">By adding others under you, they can benefit from various policies.</p>
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
    <div class="mt-6 lg:w-1/2">
      <form @submit.prevent="validateForm">
        <div class="flex justify-between">
          <p class="text-sm mt-4 cursor-pointer">
            <font-awesome-icon icon="user-plus" class="text-green-500" />
            Add Single User
          </p>
        </div>
        <div class="mt-8 ">
          <div class="lg:mr-3 lg:w-full">
            <div class="lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm text-left">First Name</label>
                <input type="text" v-model="dependant.firstname" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              </div>
              <div class="mt-4 lg:mt-0 lg:w-full lg:ml-3">
                <label class="text-sm text-left">Last Name</label>
                <input type="text" v-model="dependant.lastname" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              </div>
            </div>
            <div class="lg:mt-4 lg:flex">
              <div class="mt-4 lg:mt-0 lg:w-full lg:mr-3">
                <label class="text-sm text-left">Email address</label>
                <input type="email" v-model="dependant.email" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <p v-if="error.email" class="text-red-500 text-sm mt-2">A user with this email already exists</p>
              </div>
              
              <div class="mt-4 lg:mt-0 lg:w-full lg:ml-3">
                <label class="text-sm text-left">Phone number</label>
                <input type="numeric" v-model="dependant.phone" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <p v-if="error.phone" class="text-red-500 text-sm mt-2" :class="[dependant.phone.length > 0 ? 'block' : 'hidden']">Please enter a valid phone number</p>
              </div>
            </div>
          </div>
          <div class="mt-4 lg:w-full">
            <div class="">
              <label class="text-sm">Home address</label>
              <input type="text" v-model="dependant.address" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
            </div>
            <button style="background: #131b47" class="hidden lg:inline-block w-1/3 mt-12 text-white px-12 py-2 rounded focus:outline-none" :class="[Object.values(this.error).includes(true) ? 'opacity-30' : '']">Add </button>
            <button style="background: #131b47" class="block lg:hidden w-full mt-12 text-white px-12 py-2 rounded focus:outline-none" :class="[Object.values(this.error).includes(true) ? 'opacity-40' : '']">Add </button>
          </div>
        </div>
      </form>
    </div>
    <hr class="mt-4">
    <div class="mt-10 lg:w-1/2">
      <div class="flex gap-4 items-end">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4ZM13 17H11V14H8V12H11V9H13V12H16V14H13V17Z" fill="#10B981"></path>
        </svg>
        <p class="">Batch Upload</p>  
      </div>
      <form @submit.prevent="submit" class="py-6" style="min-height: 30vh">
        <p>For batch uploads, please upload an excel sheet using this <span><a class="text-blue-500" :href="templateLink" download="batch_upload_template">format</a></span></p>
        <input type="file" ref="excelfile" id='file' class="hidden" v-on:change="upload">
        <div class="input rounded relative border border-solid border-green-500">
          <label for="file" class="cursor-pointer">
            <svg class="absolute filesvg" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M18.9999 20H5.99992C2.87429 20.0018 0.270809 17.6038 0.0162787 14.4886C-0.238251 11.3733 1.94144 8.58453 5.02592 8.07899C6.44563 5.56188 9.11003 4.0035 11.9999 3.99993C13.8019 3.99312 15.5524 4.60129 16.9619 5.72399C18.346 6.82185 19.33 8.34497 19.7619 10.058C22.3458 10.455 24.1877 12.7755 23.9879 15.3821C23.7882 17.9887 21.6141 20.0014 18.9999 20ZM11.9999 5.99998C9.83163 6.00255 7.83259 7.17209 6.76792 9.06099L6.29992 9.89999L5.35091 10.055C3.3012 10.3984 1.85592 12.2543 2.02513 14.3257C2.19433 16.3971 3.92164 17.9938 5.99992 18H18.9999C20.5685 18.0016 21.8735 16.7946 21.9941 15.2307C22.1147 13.6667 21.0102 12.2739 19.4599 12.035L18.1439 11.835L17.8219 10.543C17.1572 7.8698 14.7545 5.99495 11.9999 5.99998ZM13.4499 16H10.5499V13H7.99992L11.9999 8.99999L15.9999 13H13.4499V16Z" fill="#10B981"></path>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="24" height="24" fill="white"></rect>
              </clipPath>
              </defs>
            </svg>
          </label>
          <div v-if="!fileError" class="flex items-center justify-center p-2">
              <p class="text-green-500 text-xs font-bold mr-2">{{filename}}</p>
              <font-awesome-icon icon="check-circle" class="cursor-pointer text-green-500 text-xl"/>
            </div>
            <div v-else class="flex items-center justify-center p-2">
              <p class="text-red-500 text-xs font-bold mr-2">{{filename}}</p>
              <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-xl" :class="[filename.length > 0 ? '' : 'opacity-0']" />
            </div>
        </div>
        <p class="text-red-500 mt-2 font-bold" v-if="fileError" :class="[filename.length > 0 ? '' : 'opacity-0']">Please upload a valid excel file</p>
        <button class="mt-4 bg-green-500 lg:w-1/3 text-white block w-full focus:outline-none px-4 py-2 rounded" :class="[fileError ? 'opacity-30' : '']" :disabled="fileError">Submit</button> 
      </form> 
    </div>
  </div>
</template>

<script>
import baseURL from "@/main"
import axios from "axios"

export default {
  data(){
    return {
      dependant: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: ""
      },
      filename: '',
      excelfile: '',
      fileError: true,
      error:{
        phone: true,
        email: false,
      },
      showList: false,
      templateLink: `${baseURL}/dependant/template`,
    }
  },
  computed:{
    phone(){
      return this.dependant.phone
    },
    email(){
      return this.dependant.email
    }
  },
  watch:{
    phone(){
      if(/^\d{11}$/.test(this.dependant.phone)){
        this.error.phone = false;
      }else{
        this.error.phone = true;
      }
    },
    email(){
      if(this.email.length > 1){
        this.error.email = false
      }
    }
  },
  methods: {
    validateForm(){
      if(Object.values(this.error).includes(true)){
        return
      }else{
        this.$store.commit('startLoading')
        axios({url: `${baseURL}/dependant/add`, data: this.dependant, method: 'POST'})
        .then(()=>{
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', {status: true, msg: 'Dependant added successfully'})
          this.$router.push('/app/dashboard')
          this.dependant = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: ""
          }
          // this.error.phone = false
        })
        .catch(err=>{
          this.$store.commit('endLoading')
          if(err.response.data.message == "dependant already exist"){
            this.error.email = true
          }else{
            this.$store.dispatch('handleError', err)
          }
          // console.log(err)
        })
      }
    },
    upload(){
      this.filename = this.$refs.excelfile.files[0].name 
      this.excelfile = this.$refs.excelfile.files[0]
      switch(this.$refs.excelfile.files[0].type){
        case "application/vnd.ms-excel": 
          this.fileError = false
        break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": 
          this.fileError = false
        break;
        case "application/excel": 
          this.fileError = false
        break;
        case "application/x-excel": 
          this.fileError = false
        break;
        case "application/x-msexcel": 
          this.fileError = false
        break;
        default : 
        this.fileError = true
      }
    },
    submit(){
      this.$store.commit('startLoading')
      let formData = new FormData;
      formData.append('excel', this.excelfile);
      axios.post(`${baseURL}/dependant/batch/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res =>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.$router.push("/app/dashboard")
      })
      .catch(err => {
        this.$store.dispatch('handleError', err)
      })
    },
  },
}
</script>

<style scoped>
input{
  background-color: #e2f5ec;
}
.filesvg{
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.input{
  /* background-color: #27293d;
  border-color: #2b3553; */
  border-width: 1px;
  width: 100%;
  height: 150px
}
</style>