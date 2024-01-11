<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6">
            <div class="pt-6 relative">
                <div class="py-4">
                     <h1 class="font-bold text-xl text-center">Pay with existing card or use a new card?</h1>              
                     <div class="mt-8 md:flex md:w-3/4 md:mx-auto md:items-center gap-6" style="min-width: 300px">
                         <button @click="useOldCard" class="focus:outline-none block w-full rounded border border-solid border-green-500 text-green-500 text-white md:px-3 py-2">Use added card</button>
                         <button @click="useNewCard" class="mt-4 md:mt-0 block w-full focus:outline-none rounded border border-solid border-blue-500 text-blue-500 text-white md:px-3 py-2">Use new card</button>
                     </div>
                </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    close(){
      this.$emit('close')
    },
    useOldCard(){
        this.$emit('useCard', 'old')
    },
    useNewCard(){
        this.$emit('useCard', 'new')
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