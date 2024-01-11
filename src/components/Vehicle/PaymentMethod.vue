<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6">
            <div class="flex justify-end pt-6" @click="close">
              <svg data-v-e1915176="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-green-600 svg-inline--fa fa-times-circle"><path data-v-e1915176="" fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
            </div>
            <div class="pt-6 relative">
                <div class="py-4">
                     <h1 class="font-bold text-xl text-center">Pay with existing card or use a new card?</h1>              
                     <div class="mt-8 md:flex md:w-3/4 md:mx-auto md:items-center gap-6">
                         <button @click="useOldCard" class="focus:outline-none block w-full rounded border border-solid border-green-500 text-green-500 text-white md:px-3 py-2">Yes, proceed</button>
                         <button @click="useNewCard" class="mt-4 md:mt-0 block w-full focus:outline-none rounded border border-solid border-red-500 text-red-500 text-white md:px-3 py-2">No. new card</button>
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