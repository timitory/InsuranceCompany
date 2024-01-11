<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
            <div class="pt-6 relative">
                <div class="py-4">
                     <h1 class="font-bold text-xl text-center">Activate this card</h1>              
                     <div class="mt-8 md:flex md:w-3/4 md:mx-auto md:items-center gap-6">
                         <button @click="activate" class="focus:outline-none block w-full rounded border border-solid border-green-500 text-green-500 text-white md:px-3 py-2">Yes, proceed</button>
                         <button @click="close" class="mt-4 md:mt-0 block w-full focus:outline-none rounded border border-solid border-red-500 text-red-500 text-white md:px-3 py-2">No. cancel</button>
                     </div>
                </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import axios from 'axios'
import baseURL from "@/main"
export default {
  mixins: [ clickaway ],
  props: ['card'],
  data(){
    return {
      
    }
  },
  methods:{
    close(){
      this.$emit('close')
    },
    activate(){
        this.$store.commit('startLoading')
        axios({url: `${baseURL}/card/activate`, data: {card_id: parseInt(this.card.id)}, method: 'PATCH'})
        .then(()=>{
            this.$store.commit('endLoading')
            this.$emit('activated')
        })
        .catch((err)=>{
            this.$store.dispatch('handleError', err)
        })
    }
  }
  
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 100px;
  max-width: 420px;
}
input{
  background-color: #e2f5ec;
}
</style>