<template>
  <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-6 pb-8 px-10 relative">
            <font-awesome-icon icon="times-circle" class="absolute  cursor-pointer text-red-500 text-xl right-2 top-2" @click="$emit('close')"/>
            <p class="text-gray-500 mt-4">Select a preferred plan</p>
            <form  @submit.prevent="validate">
                <div class="lg:flex mt-6 lg:mt-4 justify-between plans">
                <div v-for="(plan, index) in newPlans" :key="index" class="relative border border-solid pb-8 plan" v-bind:class="[planId == plan.id ? 'border-green-500' : 'border-gray-300']">
                    <div class="py-3 px-6 mt-4">
                    <div class="flex justify-between items-center">
                        <p class="text-base mr-3">{{plan.name}}</p>
                        <p class="lg:mt-0 ml-3 text-green-500 font-light"><span class="font-extrabold text-lg">{{plan.amount}}</span>/per month</p>
                    </div>
                    <hr class="mt-4">
                    <ul class="mt-4">
                        <li class="flex items-center">
                        <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                        <p>
                            2 sessions of surgeries in a year
                        </p>  
                        </li>
                        <li class="mt-4 flex items-center">
                        <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                        <p>A single dental care check per quarter</p>
                        </li>
                        <li class="mt-4 flex items-center">
                        <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                        <p>
                        2 dependants eligible
                        </p>
                        </li>
                        <li class="mt-4 flex items-center">
                        <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                        <p>
                            Gym sessions for 6 months
                        </p>
                        </li>
                        <li class="absolute lastitem">
                        <label class="container col1"> 
                            <input type="radio" v-model="planId" :value="plan.id" >
                            <span class="checkmark"></span>
                        </label>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div class="hidden lg:block mt-10">
                <button class="block w-full text-green-500 text-right focus:outline-none" v-if="selected">
                    Proceed 
                    <font-awesome-icon icon="arrow-right" class="text-green-500" />
                </button>
                <p class="text-green-500 text-right opacity-50" v-else>Proceed<font-awesome-icon icon="arrow-right" class="ml-2 text-green-500" /></p>
                </div>
                <div class="block lg:hidden mt-10">
                <button class="block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden outline-none focus:outline-none" v-if="selected">
                    Proceed 
                    <font-awesome-icon icon="arrow-right" class="ml-3" />
                </button>
                <p class="bg-green-500 text-white py-3 text-center rounded opacity-70" v-else>Proceed<font-awesome-icon icon="arrow-right" class="ml-2" /></p>
                </div>
            </form>
          </div>
      </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import axios from 'axios'
import baseURL from "@/main"
export default {
    props:['plans'],
    data(){
      return {
          planId: '',
          selected: false
      }
    },
    watch:{
      planId(){
          if(this.planId !== ''){
              this.selected = true
          }else{
              this.selected = false
          }
      }
    },
    computed:{
      ...mapState({
      enrollee: state => state.enrollee,
      }),
      newPlans(){
        return this.plans.filter(plan=> 
          plan.name !== this.enrollee.policy.plan
        )
      }
    },
    methods: {
      validate(){
          this.$store.commit('startLoading')
          this.$emit('close')
          const data = {
              enrollee_id : this.enrollee.policy.enrollee_id,
              plan_id : this.planId
          }
          axios({url: `${baseURL}/health/upgrade`, data : data, method: 'POST'})
          .then(res=>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          })
          .catch(err =>{
              this.$store.dispatch('handleError', err)
              this.$store.commit('endLoading')
          })
      }
    },
    destroyed(){
      this.$store.commit('setActiveModal', 0)
    },
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 20px;
  width: 80%;
  border-radius: 16px;
}
.lastitem{
  bottom: 10px;
  right: 5px;
}
.plan{
  margin-bottom: 20px
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
  opacity: 0.2
}
.col1 .checkmark{
  background-color: #00A859;
}


/* When the checkbox is checked, add a blue background */
.col1 input:checked ~ .checkmark {
  background-color:#00A859;
  opacity: 1;
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
@media only screen and (min-width: 1024px){
  .plans{
    flex-wrap: wrap;
  }
  .plan{
    flex: 0 1 46%;
    margin-bottom: 20px
  }
}
@media only screen and (min-width: 1280px){
    .loader{
        max-width: 1050px
    }
}

</style>