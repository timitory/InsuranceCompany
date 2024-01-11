<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
        
          <div class="loader bg-white mx-auto py-6 pb-8 px-10 relative">
            <font-awesome-icon icon="times-circle" class="absolute  cursor-pointer text-red-500 text-xl right-2 top-2" @click="$emit('close')"/>
            <h1 class="text-center font-bold text-2xl">Hi Our Paddy, we will like to know why you are cancelling your policy</h1>
            
            <br>
            <label class="container"> 
              <input type="radio" v-model="message" value="I sold my car">I sold my car
              <span class="checkmark"></span>
            </label>
            <br>
            <br>
            <label class="container"> 
              <input type="radio" v-model="message" value="I want to change the Underwriter/Insurance provider">I want to change the Underwriter/Insurance provider
              <span class="checkmark"></span>
            </label>
            <br>
            <br>
            <label for="">Others (please state reason)</label>
            <textarea v-model="message" value="" class="border-solid border rounded mx-auto w-full p-2 focus:outline-none">  
            </textarea>
            <button @click="sendMessage" class="block w-full mt-6 text-white text-sm rounded bg-red-500 p-2 focus:outline-none">Initiate Cancel</button>
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
            message: '',
            soldCar: "I sold my car",
            changeUnderwriter: "I want to change Undewriter/Insurance provider"
        }
    },
    methods: {
      sendMessage(){
        
        this.$store.commit('startLoading')
        axios({url: `${baseURL}/vehicle/policy/cancel`, data: {user_vehicle_id : this.enrollee.policy.user_vehicle_id, reason : this.message}, method: 'POST'})
        .then(res=>{
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          this.$emit('close')
          this.$store.commit('endLoading')
        }).catch(err => {
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
        })
      },
    },
    mounted(){
     
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