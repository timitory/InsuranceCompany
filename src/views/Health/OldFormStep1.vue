<template>
  <div class="mt-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-semibold">Who's this policy for?</p>
      <form @submit.prevent="validate">
        <div class="mt-4 lg:flex lg:justify-between ">
          <div class="lg:w-full lg:mr-4">
            <label class="container border border-solid rounded" v-bind:class="[user.includes(self) ? 'border-green-500' : 'border-gray-300']">Myself ({{self.firstname}} {{self.lastname}})
              <input type="checkbox" v-model="user" :value="self">
              <span class="checkmark"></span>
            </label>
            <p class="mt-6 text-sm hidden lg:block" v-if="$store.state.dependants.length < 1">Once a user has been added, you can continue by clicking the <span class="text-green-500">“Proceed for a plan”</span> button</p>
            <p class="mt-6 text-sm hidden lg:block" v-else>You currently have more than one dependent, you can select multiple at the same time, and proceed to buy policies for them by clicking the <span class="text-green-500">“Proceed for a plan”</span> button</p>
          </div>
          <div class="lg:w-full lg:ml-4 mt-6 lg:mt-0">
           <CustomLabel :options="dependants" ref="label" v-on:sendValue="getDependantList" />
           <p class="mt-6 text-sm lg:hidden" v-if="$store.state.dependants.length < 1">Once a user has been added, you can continue by clicking the <span class="text-green-500">“Proceed for a plan”</span> button</p>
            <p class="mt-6 text-sm lg:hidden" v-else>You currently have more than one dependent, you can select one of them, then proceed to buy policies for them by clicking the <span class="text-green-500">“Proceed for a plan”</span> button</p>
            <p class="text-right text-sm mt-4 cursor-pointer" @click="showAddDependant">
              <font-awesome-icon icon="user-plus" class="text-green-500" />
              Add user
            </p>
          </div>
        </div>
        <div class="hidden lg:block mt-10">
          <button class="block w-full text-green-500 text-right focus:outline-none" v-if="beneficiaryAdded">
            Proceed for a plan
            <font-awesome-icon icon="arrow-right" class="text-green-500" />
          </button>
          <p class="text-green-500 text-right opacity-70" v-else>Proceed for a plan <font-awesome-icon icon="arrow-right" class="ml-2 text-green-500" /></p>
        </div>
        <div class="block lg:hidden mt-10">
          <button class=" block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden focus:outline-none" v-if="beneficiaryAdded">
            Proceed for a plan
            <font-awesome-icon icon="arrow-right" class="ml-3" />
          </button>
          <p class="bg-green-500 text-white py-3 text-center rounded opacity-70" v-else>Proceed for a plan <font-awesome-icon icon="arrow-right" class="ml-2" /></p>
        </div>
      </form>
      <AddDependent v-if="addDependent" v-on:close="closeModal" />
    </div>
  </div>
</template>

<script>
import AddDependent from '@/components/AddDependant/AddDependentModal'
import CustomLabel from '@/components/Health/CustomLabel'
import { mapState } from 'vuex'
// import axios from 'axios'
// import baseURL from "@/main"

export default {
  components: {
    AddDependent, CustomLabel
  },
  data(){
    return {
      user : [],
      dependantsList: [],
      beneficiaryAdded : false,
      addDependent: false,
      
    }
  },
  watch:{
    user(){
     if(this.user.length > 0){
        // console.log(this.user)
        this.beneficiaryAdded = true
      }else if(this.user.length < 1 && this.dependantsList.length < 1){
        this.beneficiaryAdded = false
      }
    },
    dependantsList(){
      if(this.dependantsList.length > 0){
        this.beneficiaryAdded = true
        // console.log(this.dependantsList)
      }else if(this.user.length < 1 && this.dependantsList.length < 1){
        this.beneficiaryAdded = false
      }
    }
  },
  computed:{
    ...mapState({
       dependants: state => state.dependants,
       self: state => state.user
    }),
    filteredDependants(){
      return  this.dependants.filter(dependant=> dependant.email.length !== 0)
    },
  },
  methods: {
    getDependantList(val){
      this.dependantsList = val
    },
    validate(){
      if(this.user.length > 0 && this.dependantsList.length > 0){
        let arr = []
        arr.push(this.user[0])
        this.dependantsList.map((item)=>{
          arr.push(item)
        })
        this.$store.commit('setBeneficiaries', arr)
        this.$store.commit('setBeneficiaryCount', 'multiple')
        this.$router.push('/app/dashboard/buyhealth/2')
      }else if(this.dependantsList.length > 1){
        let arr = []
        this.dependantsList.map((item)=>{
          arr.push(item)
        })
        this.$store.commit('setBeneficiaries', arr)
        this.$store.commit('setBeneficiaryCount', 'multiple')
        this.$router.push('/app/dashboard/buyhealth/2')
      }else if(this.dependantsList.length == 1){
        this.$store.commit('setBeneficiary', this.dependantsList[0])      
        this.$store.commit('setBeneficiaryCount', 'single')
        this.$router.push('/app/dashboard/buyhealth/2')
      }else{
        this.$store.commit('setBeneficiary', this.user[0])      
        this.$store.commit('setBeneficiaryCount', 'single')
        this.$router.push('/app/dashboard/buyhealth/2')
      }
    },
    showAddDependant(){
      this.addDependent = true;
      this.$store.commit('setActiveModal', 1)
    },
    closeModal(){
      this.addDependent = false;
      this.$store.commit('setActiveModal', 0)
    }
  },
}
</script>

<style>
/* The container */
.container {
  display: block;
  padding: 10px 10px;
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
  opacity: 0.2;
  background-color: #00A859;
}


/* When the checkbox is checked, add a green background */
.container input:checked ~ .checkmark {
  background-color:#00A859;
  opacity: 1
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
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