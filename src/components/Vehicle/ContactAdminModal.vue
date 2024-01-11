<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-6 pb-8 px-10 relative">
            <font-awesome-icon icon="times-circle" class="absolute  cursor-pointer text-red-500 text-xl right-2 top-2" @click="$emit('close')"/>
            <h1 class="text-center font-bold text-2xl">Send Message to Paddycover Admin</h1>
            <textarea v-model="message" class="border-solid border rounded mt-6 mx-auto w-full p-2 focus:outline-none">  
            </textarea>
            <button @click="sendMessage" class="block w-full mt-6 text-white text-sm rounded bg-green-500 p-2 focus:outline-none">Send Message</button>
          </div>
      </div>
    </div>
</template>

<script>
import axios from "axios"
import baseURL from "@/main"
export default {
    props: ['enrollee'],
    data(){
        return {
            message: ''
        }
    },
    methods: {
      sendMessage(){
        this.$store.commit('startLoading')
        axios({url:`${baseURL}/support/admin`, data: {message: this.message}, method: 'POST'})
        .then(res => {
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          this.$emit('close')
          this.$store.commit('endLoading')
        })
        .catch(err => {
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
        })
      },
    },
    mounted(){
      this.message = `I bought a ${this.enrollee.policy.vehicle_category} policy for ${this.enrollee.policy.enrollee.firstname} ${this.enrollee.policy.enrollee.firstname} but the status is ${this.enrollee.policy.status}`
    }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 100px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}
textarea{
    height: 150px
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 60%;
    max-width: 600px;
  }
}
</style>