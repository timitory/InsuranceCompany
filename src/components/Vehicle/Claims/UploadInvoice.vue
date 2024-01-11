<template>
    <div class="l-modal">
        <form @submit.prevent="submit" class="bg-white relative top-16 rounded mx-auto max-w-sm p-4" v-on-clickaway="close">
            <div class="grid gap-2">
               
                <label for="text" class=""></label>
                <div class="mt-4">
                    <label class="text-sm font-bold">Invoice(png, jpg, pdf)<span style="color:red">*</span></label>
                    <div class="mt-4 md:w-full">
                        <label for="frontImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                        <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{ImageName}}</p>
                        <input id="frontImage" type="file" ref="frontImage" v-on:change="ImageUpload()" class="hidden fileinput">
                    </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.image">Please upload a valid image file</p>
                </div>
                  
            </div>
             
           
            <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full">Upload Invoice</button>
        </form>
    </div>
  </template>
  
  <script>
  import { directive as onClickaway } from 'vue-clickaway';

  import axios from "axios"
  import baseURL from "@/main"
  export default {
    props:['policy'],
      components:{
        
      },
      data(){
          return {
            error: {
                image: false,
            },
            Image: '',
            ImageName: '',
              
          }
      },
      methods:{
          close(){
              this.$emit('close')
          },
          ImageUpload(){
            this.ImageName = this.$refs.frontImage.files[0].name 
            
            this.error.image = false
            let fileToLoad = this.$refs.frontImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.Image = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
            
        
  },
          submit(){
            if(this.ImageName == ''){
                this.error.image  = true
                return
            }else if (this.ImageName.includes(".png") || this.ImageName.includes(".jpg") || this.ImageName.includes(".jpeg") ||  this.ImageName.includes(".pdf")){
              //this.$emit('submit', this.amount)
             
              this.$store.commit('startLoading')
              axios({url: `${baseURL}/claim/vehicle/invoice`, data: {
                  invoice_image : this.Image,
                  claim_id: this.policy.id
              }, method: 'PATCH'})
              .then(()=>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: 'Invoice sent'})
              this.close()
              })
              .catch(err=>{
              this.$store.commit('endLoading')
              this.$store.commit('setError', {status: true, msg: err.response.data.message})
              this.close()
              // if(err.response.data.message == "dependant already exist"){
              //     this.error.email = true
              // }else{
              //     this.$store.commit('setError', {status: true, msg: err.response.data.message})
              // }
              // console.log(err)
              })
          }else{
            this.error.image  = true
            return
          }
       
        }
      },
      directives: {
          onClickaway: onClickaway,
      }
  }
  </script>
  
  <style>
  
  </style>