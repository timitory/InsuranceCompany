<template>
    <div>
      <div class="mt-8 px-6 py-6 relative shadow-lg bg-white whitebox" style="box-shadow: 0px 20px 33px #00000029;">
        <router-link to="/app/dashboard" class="absolute left-4 top-2">
          <font-awesome-icon icon="times-circle" class="text-green-600 " />
        </router-link>
        <div class="lg:flex items-center">
          <img src="@/assets/images/menu/gadgetcard.svg" alt="" class="inline img" style="">
          <p class="text-lg font-bold inline ml-4 lg:hidden">Gadget Insurance</p>
          <div class="ml-3 w-full lg:flex justify-between items-center">
            <p class="text-lg font-bold lg:w-1/5 hidden lg:block">Gadget Insurance</p>
            <div class=" lg:w-3/4">
              <hr class="mt-2">
              <hr class="mt-2">
              <hr class="mt-2 border-green-500 bg-green-500 border-2">
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
      <p class="mt-8 text-sm text-center">Terms and conditions apply.<span class="text-indigo-900 font-semibold"> See policy</span></p>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .img{
    height: 100px;
    width: 120px
  }
  .whitebox{
    min-height: 100vh;
  }
  @media only screen and (min-width: 1240px){
    .img{ 
      height: 140px; width: 170px
    }
    .whitebox{
      min-height: 120vh
    }
  }
  </style>