<template>
<u-animate-container>
  <u-animate
    name="slideInRight"
    delay="0s"
    duration="1s"
    :iteration="1"
    animateClass="animated"
    :begin="true"
    class="loader bg-white rounded px-2 py-3 shadow bg-green-100"
  >
  <!-- <div> -->
    <div>
      <div class="flex justify-between items-start">
        <p class="text-base font-semibold text-green-500">{{msg}}</p>
        <svg  class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="$store.commit('setSuccess', {status: false, msg: ''})">
          <path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#2E3A59"></path>
        </svg>
      </div>
    </div> 
  <!-- </div> -->
  </u-animate>
</u-animate-container>
  
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
  },
  mounted(){
    setTimeout(()=>{
      this.close()
    }, 6000)
  }
}
</script>

<style scoped>
.loader{
  position: fixed;
  top: 100px;
  right: 50px;
  z-index: 1000000;
}
@media only screen and (min-width: 1024px){
  .loader{
    min-width: 250px;
    max-width: 450px;
  }
}
</style>