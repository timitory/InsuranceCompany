<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white rounded mx-auto px-2">
            <p class="text-lg lg:text-xl font-bold lg:text-center py-6 px-4">Please confirm these meter credentials are accurate</p>
            <div class="pt-6 px-4">
              <p>Meter Owner: <span class="font-bold">{{meterData.name}}</span></p>
              <p class="mt-4">Phone no: <span class="font-bold">{{meterData.phone}}</span></p>
              <p class="mt-4">Account No: <span class="font-bold">{{meterData.account_no}}</span></p>
              <p class="mt-4">House Address: <span class="font-bold">{{meterData.address}}</span></p>
            </div>
            <div class="mt-8 px-4 lg:flex justify-between pb-8">
              <button class="w-full bg-red-500 lg:mr-3 text-white py-2 px-3 rounded focus:outline-none" @click="$emit('cancel')">No, go back</button>
              <button class="w-full bg-green-500 lg:ml-3 mt-4 lg:mt-0 text-white py-2 px-3 rounded focus:outline-none" @click="$emit('proceed')">Yes, Proceed</button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  props:[
    'meterData'
  ],
  computed:{
    msg(){
      return this.$store.state.errorMsg
    }
  }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 20px;
  width: 80%;
  z-index: 110
}
.times{
  top: -50px
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 40%
  }
}
</style>