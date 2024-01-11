<template>
  <form @submit.prevent="submit" class="px-4 py-6 mt-6 lg:py-10" style="min-height: 30vh">
        <p class="mb-4">For batch uploads, please upload an excel sheet using this <span><a class="text-blue-500" :href="templateLink" download="batch_upload_template">format</a></span></p>
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
          <div v-if="!fileError" class="flex items-center lg:justify-center p-2 ">
            <p class="text-green-500 text-xs font-bold mr-2">{{filename}}</p>
            <font-awesome-icon icon="check-circle" class="cursor-pointer text-green-500 text-xl"/>
          </div>
          <div v-else class="flex items-center justify-center p-2">
            <p class="text-red-500 text-xs font-bold mr-2">{{filename}}</p>
            <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-xl" :class="[filename.length > 0 ? '' : 'opacity-0']" />
          </div>
        </div>
        <p class="text-red-500 mt-2 font-bold" v-if="fileError" :class="[filename.length > 0 ? '' : 'opacity-0']">Please upload a valid excel file</p>
        <button class="mt-4 bg-green-500 text-white block w-full focus:outline-none px-4 py-2 rounded" :class="[fileError ? 'opacity-30' : '']" :disabled="fileError">Submit</button> 
    </form>
</template>

<script>
import baseURL from "@/main"
import axios from 'axios'
export default {
    data(){
        return {
            filename: '',
            excelfile: '',
            fileError: true,
            templateLink: `${baseURL}/dependant/template`,
        }
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
          this.$store.commit('startLoading')
          let formData = new FormData;
          formData.append('excel', this.excelfile);
          axios.post(`${baseURL}/dependant/batch/add`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(()=>{
            this.$store.dispatch('getDependants')
            .then(()=>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: 'Dependant added successfully'})
              this.$emit('close')
            })
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
        },
    }

}
</script>

<style scoped>
.filesvg{
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.input{
  border-width: 1px;
  width: 100%;
  height: 150px
}

</style>