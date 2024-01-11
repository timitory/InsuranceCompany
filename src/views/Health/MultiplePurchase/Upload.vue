<template>
  <div class="mt-10 lg:w-3/4 lg:mx-auto">
      <div class="flex gap-4 items-end">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4ZM13 17H11V14H8V12H11V9H13V12H16V14H13V17Z" fill="#10B981"></path>
        </svg>
        <p class="">Batch Upload</p>  
      </div>
      <form @submit.prevent="submit" class="py-6 lg:pb-20" style="min-height: 30vh">
        <p class="mb-4">To purchase health policies for multiple beneficiaries, please upload an excel sheet using this <span><a class="text-blue-500 underline" :href="templateLink" download="batch_upload_template">format</a></span></p>
        <div class="lg:w-full lg:mr-3 mb-6">
          <label class="text-sm font-bold">Payment Frequency</label>
          <div class="relative">
            <select v-model="payment_frequency" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required style=" background-color: #e2f5ec;">
              <option value="1">1 Month</option>
                            <option value="2">2 Months</option>
                            <option value="3">3 Months</option>
                            <option value="4">4 Months</option>
                            <option value="5">5 Months</option>
                            <option value="6">6 Months</option>
                            <option value="7">7 Months</option>
                            <option value="8">8 Months</option>
                            <option value="9">9 Months</option>
                            <option value="10">10 Months</option>
                            <option value="11">11 Months</option>
                            <option value="12">12 Months</option>
            </select>
          </div>
        </div>
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
        <button class="mt-10 bg-green-500 text-white block lg:inline focus:outline-none px-4 py-2 lg:px-10 rounded float-right" :class="[fileError ? 'opacity-30' : '']" :disabled="fileError">Submit</button> 
      </form> 
    </div>
</template>

<script>
import baseURL from "@/main"
import axios from "axios"
import {mapState} from 'vuex'
export default {
    data(){
        return {
          filename: '',
          excelfile: '',
          fileError: true,
          templateLink: `${baseURL}/health/policy/template/individual`,
          payment_frequency: '',
        }
    },
    computed: {
        ...mapState({
            underwriterId: state => state.underwriter_id,
            healthPlan: state => state.health.plan,
            resources : state => state.health.chiHealthResources,
        })
    },
    methods:{
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
          // this.$router.push("/app/dashboard/buyhealth/multiple/view")
          //console.log("ggggg:" , JSON.stringify(this.healthPlan) )
          this.$store.commit('startLoading')
          let formData = new FormData;
          formData.append('excel', this.excelfile);
          formData.append('underwriter_id', this.underwriterId);
          formData.append('plan_id', JSON.stringify(this.healthPlan.ID));
          formData.append('payment_frequency', this.payment_frequency);
          axios.post(`${baseURL}/hmo/policy/bulk`, formData, {
              headers: {
              'Content-Type': 'multipart/form-data'
              }
          })
          .then(res =>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: res.data.message})
              this.$router.push({
                name: 'bulkPurchaseView',
                query: {
                  reference : res.data.data.reference
                }
              })
          })
          .catch(err => {
              this.$store.dispatch('handleError', err)
          })
      },
    },
   
}
</script>

<style scoped>
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
@media only screen and (min-width: 1024px){
    .input{
        height: 200px
    }
}
</style>