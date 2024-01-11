<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-6 pb-8 px-10 relative" v-click-outside="close">
            <font-awesome-icon icon="times-circle" class="absolute  cursor-pointer text-red-500 text-xl right-2 top-2" @click="$store.commit('setSuccess', {status: false, msg: 'Success'})"/>
            <svg class="block w-full" width="80" height="80" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.2622 35.9049C68.6697 34.3103 66.0809 34.3103 64.4884 35.9049L46.9586 53.4326L39.6372 46.1132C38.0447 44.5187 35.4559 44.5187 33.8634 46.1132C32.2688 47.7078 32.2688 50.2925 33.8634 51.8871L44.0717 62.0954C44.868 62.8937 45.9133 63.2918 46.9586 63.2918C48.004 63.2918 49.0493 62.8937 49.8456 62.0954L70.2622 41.6787C71.8568 40.0842 71.8568 37.4994 70.2622 35.9049Z" fill="#52B95E"/>
                <path d="M93.9167 44.9167C91.6627 44.9167 89.8333 46.746 89.8333 49C89.8333 71.5155 71.5155 89.8333 49 89.8333C26.4845 89.8333 8.16667 71.5155 8.16667 49C8.16667 26.4845 26.4845 8.16667 49 8.16667C59.9617 8.16667 70.2517 12.4501 77.9774 20.2288C79.5638 21.8315 82.1505 21.8397 83.7512 20.2493C85.3519 18.6608 85.36 16.0761 83.7716 14.4754C74.5025 5.14092 62.1524 0 49 0C21.9806 0 0 21.9806 0 49C0 76.0194 21.9806 98 49 98C76.0194 98 98 76.0194 98 49C98 46.746 96.1707 44.9167 93.9167 44.9167Z" fill="#52B95E"/>
            </svg>
            <p class="text-xl text-black font-bold text-center pt-6 pb-3">{{msg}}</p>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  computed:{
    msg(){
      return this.$store.state.successMsg
    }
  },
  methods:{
    close(){
      this.$store.commit('setSuccess', {status: false, msg: 'Success'})
    }
  }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 20px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 40%;
    max-width: 450px;
  }
}
</style>