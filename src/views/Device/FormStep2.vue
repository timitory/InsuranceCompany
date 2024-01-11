<template>
  <div class="mt-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <div class="lg:flex justify-between">
        <p class="font-bold">Available Plans & Prices</p>
        <p class="text-gray-500 lg:text-right mt-4 lg:mt-0">Select your preferred vehicle cover plan</p>
      </div>
      <form @submit.prevent="validate"> 
        <div class="lg:flex justify-between">
          <div class="relative lg:mr-3 lg:w-full border border-solid mt-4 pb-8" v-bind:class="[plan == 'basic' ? 'border-green-500' : 'border-gray-300']">
            <div class="py-3 px-6">
              <div class="flex justify-between items-center">
                <p class="text-base">Basic Plan</p>
                <p class="lg:mt-0 text-green-500 font-light"><span class="font-extrabold text-lg">N50,000</span>/per month</p>
              </div>
              <hr class="mt-4">
              <ul class="mt-4">
                <li class="flex items-center">
                  <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                  <p>
                    Vehicle tracking
                  </p>  
                </li>
                <li class="mt-4 flex items-center">
                  <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                  <p>Excess buyback</p>
                </li>
                <li class="mt-4 flex items-center">
                  <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                  <p>
                    Flood extension
                  </p>
                </li>
                <li class="mt-4 flex items-center">
                  <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                  <p>
                    Fire outbreak
                  </p>
                </li>
                <li class="absolute lastitem">
                  <label class="container col1" v-bind:class="[plan == 'basic' ? 'text-green-500' : 'text-gray-300']"> 
                    <input type="radio" v-model="plan" value="basic" >
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="relative mt-4 lg:w-full lg:mr-3 border border-solid pb-8" v-bind:class="[plan == 'premium' ? 'blueBorder' : 'grayBorder']">
            <div class=" py-3 px-6 ">
              <div class="flex justify-between items-center">
                <p class="text-base w-full">Premium Plan</p>
                <p class="lg:mt-0 font-light w-full" style="color: #131B47"><span class="font-extrabold text-lg">N120,000</span>/per month</p>
              </div>
              <hr class="mt-4">
              <ul class="mt-4">
                <li class="flex items-center">
                  <font-awesome-icon  icon="circle" class="text-sm text-gray-300 mr-4"/>
                  <p>Full body work</p>
                </li>
                <li class="mt-4 flex items-center">
                  <font-awesome-icon  icon="circle" class="text-sm text-gray-300 mr-4"/>
                  <p>Outright replacement</p>
                </li>
                <li class="mt-4 flex items-center">
                  <font-awesome-icon  icon="circle" class="text-sm text-gray-300 mr-4"/>
                  <p>Payment on expenses</p>
                </li>
                <li class="absolute lastitem">
                  <label class="container col2" v-bind:class="[plan == 'premium' ? 'text-blue-900' : 'text-gray-300']">
                    <input type="radio" v-model="plan" value="premium" >
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div class="hidden lg:block mt-10">
        <router-link to="/app/dashboard/buydevice/3" class="block text-green-500 text-right" v-if="selected">
          Proceed 
          <font-awesome-icon icon="arrow-right" class="text-green-500" />
        </router-link>
        <p class="text-green-500 text-right opacity-70" v-else>Proceed<font-awesome-icon icon="arrow-right" class="ml-2 text-green-500" /></p>
      </div>
      <div class="block lg:hidden mt-10">
        <router-link to="/app/dashboard/buydevice/3" class="block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden" v-if="selected">
          Proceed 
          <font-awesome-icon icon="arrow-right" class="ml-3" />
        </router-link>
        <p class="bg-green-500 text-white py-3 text-center rounded opacity-70" v-else>Proceed<font-awesome-icon icon="arrow-right" class="ml-2" /></p>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      selected: false,
      plan: ''
    }
  },
  computed:{
    ...mapState({
       beneficiary: state => state.beneficiary,
    })
  },
  watch:{
    plan(){
      if(this.plan !== ''){
        this.selected = true
      }else{
        this.selected = false
      }
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.blueBorder{
  border-color: #131B47;
}
.gray-border{
  border-color: rgba(209, 213, 219, 1)
}
.lastitem{
  bottom: 10px;
  right: 5px;
}
/* The container */
.container {
  display: block;
  padding: 10px;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  opacity: 0.5
}
.col1 .checkmark{
  background-color: #00A859;
}
.col2 .checkmark{
  background-color: #131b47;
}

/* When the checkbox is checked, add a blue background */
.col1 input:checked ~ .checkmark {
  background-color:#00A859;
  opacity: 1;
}
.col2 input:checked ~ .checkmark{
  background-color: #131b47;
  opacity: 1
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Show the checkmark even when not checked */
.container input ~ .checkmark:after{
  display: block;
}
/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 7px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>