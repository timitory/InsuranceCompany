<template>
  <div class="mt-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <div class="lg:flex justify-between">
        <p class="font-bold">Available Plans & Prices</p>
        <p class="text-gray-500 lg:text-right mt-4 lg:mt-0">Select your preferred plan</p>
      </div>
      <skeleton v-if="plans.length == 0"></skeleton>
      <form v-else @submit.prevent="validate">
        <div class="relative">
          <button 
            v-if="plans.length > 2" 
            type="button" 
            @click="scrollLeft" 
            class="focus:outline-none absolute svg svgleft flex items-center justify-center rounded-full bg-white shadow-lg border"
            style="width: 50px; height: 50px"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.28809 12L14.2981 18.01L15.7121 16.596L11.1121 11.996L15.7121 7.39601L14.2981 5.99001L8.28809 12Z" fill="#2E3A59"></path>
            </svg>
          </button>
          <button 
            v-if="plans.length > 2" 
            type="button" 
            @click="scrollRight" 
            class="focus:outline-none absolute svg flex svgright items-center justify-center rounded-full bg-white shadow-lg border"
            style="width: 50px; height: 50px"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z" fill="#2E3A59"></path>
            </svg>
          </button>
          <div class="lg:flex mt-6 lg:mt-4 justify-between plans" ref="plans">
            <div v-for="(plan, index) in plans" :key="index" @click="addListeners(index, plan)"  class="plan cursor-pointer relative lg:w-full border border-solid mt-4 pb-4" v-bind:class="[planId == plan.id ? 'border-green-500' : 'border-gray-300']">
              <div class="py-3 px-6 ">
                <div class="flex justify-between items-center">
                  <p class="text-base">{{plan.name}}</p>
                  <p class="lg:mt-0 text-green-500 font-light"><span class="font-extrabold text-lg">{{plan.cost}}</span>/per month</p>
                </div>
                <hr class="mt-4">
                <ul class="mt-4">
                  <li v-for="(benefit, index) in plan.benefits" :key="index" class="flex items-center mb-4">
                    <font-awesome-icon  icon="check" class="text-sm text-gray-300 mr-4"/>
                    <p class="text-sm">
                      {{benefit.name}}
                    </p>  
                  </li>
                  <li class="lastitem flex items-center mt-4">
                    <a class="block relative mt-4 mb-2 download" href="/bronchure/HomeContent.png" download="home-content.png" target="_blank" rel="noopener noreferrer">
                      <svg class="absolute left-0" width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 22H5V20H19V22ZM12 18L6 12L7.41 10.59L11 14.17V2H13V14.17L16.59 10.59L18 12L12 18Z" fill="#2E3A59"></path>
                      </svg>
                      <p class="plantext text-xs shadow-md">Download brochure</p>
                    </a>
                    <label class="container col1" v-bind:class="[planId == plan.id ? 'text-green-500' : 'text-gray-300']"> 
                      <input type="radio" v-model="planId" :value="plan.id"  >
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- ==== Show on large screens === -->
        <div class="hidden lg:flex justify-between mt-10">
          <router-link to="/app/dashboard/buyhome/1" class="bg-gray-500 py-2 rounded text-white block px-6 text-center">
            Back
          </router-link>
           <button class="block text-center bg-green-500 rounded py-2 px-6 text-white outline-none focus:outline-none" :disabled="!selected" :class="[!selected ? 'opacity-30' : '']">
            Proceed 
            <font-awesome-icon icon="arrow-right" class="ml-3" />
          </button>
        </div>
        <!-- ==== Show on small screens === -->
        <div class="block lg:hidden mt-10">
          <button class="block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden outline-none focus:outline-none" :disabled="!selected" :class="[!selected ? 'opacity-30' : '']">
            Proceed 
            <font-awesome-icon icon="arrow-right" class="ml-3" />
          </button>
          <router-link to="/app/dashboard/buyhome/1" class="bg-gray-500 py-3 rounded text-white block w-full mt-4 text-center">
            Back
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
import Skeleton from "@/components/skeleton/PlansSkeleton"
export default {
  components:{Skeleton},
  data(){
    return {
      selected: false,
      planId: '',
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
      dependants: state => state.dependants,
      plans: state => state.home.resources.plans
    })
  },
  methods: {
    scrollRight(){
      this.$refs.plans.scrollLeft += 200
    },
    scrollLeft(){
      this.$refs.plans.scrollLeft -= 200
    },
    validate(){
      this.$store.commit('setHomePlanId', this.planId)
      // this.$store.commit('startLoading')
      this.$router.push('/app/dashboard/buyhome/3')
    },
    addListeners(index, plan){
      let plans = document.getElementsByClassName('plan')
      plans[index].querySelector('.lastitem > .container input').checked = true
      // console.log(plan.id)
      this.planId = plan.id
    },
    getPlans(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/homecontent/resources`)
      .then(res=>{
        this.$store.commit('setHomeResources', res.data.data)
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        // console.log(err)
        this.$store.dispatch('handleError', err)
      })
    }
  },
  mounted(){
    if(Object.keys(this.plans).length == 0){
      this.getPlans()
    }
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
.yellow-border{
  border-color:#FBBA00
}
.lastitem{
  bottom: 10px;
  right: 5px;
}
.plan{
  margin-bottom: 20px
}
.download{
  left: 15px
}
.svg{
  display: none;
}
.plantext{
  visibility: hidden;
  width: 120px;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  left: 20px;
}
.download:hover .plantext {
  visibility: visible;
}
/* The container */
.container {
  display: block;
  padding: 0;
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
.col2 .checkmark{
  background-color: #131b47;
}
.col3 .checkmark{
  background-color: #FBBA00
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
.col3 input:checked ~ .checkmark {
  background-color:#FBBA00;
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
  .svg{
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  .svgleft{
    left: -60px;
  }
  .svgright{
    right: -30px
  }
  .plans{
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .plan{
    box-sizing: border-box;
    flex: 0 0 47%;
    min-width: 395px;
    margin-right: 3%;
    margin-bottom: 0
  }
  .plan:last-child{
    margin-right: 0
  }
  .plan:nth-child(3){
    margin-right: 20px
  }
  ul::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  .ul::-webkit-scrollbar{
    width: 0px
  }
  .plans::-webkit-scrollbar
  {
    margin-top: 20px;
    height: 0px;
    background-color: #F5F5F5;
  }
  .lastitem{
    position: absolute;
    left: 0;
    top: 80%;
  }
}

</style>