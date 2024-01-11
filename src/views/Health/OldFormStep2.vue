<template>
  <div class="mt-8">
    <div class="lg:w-3/4 lg:mx-auto">
     <div class="lg:flex justify-between">
        <p class="font-bold">Available Plans & Prices</p>
        <p class="text-gray-500 lg:text-right mt-4 lg:mt-0">Select your preferred health cover plan</p>
      </div>
      <skeleton v-if="plans.length == 0"></skeleton>
      <form  v-else @submit.prevent="validate">
        <div class="lg:flex mt-6 lg:mt-4 justify-between plans">
          <div v-for="(plan, index) in plans" :key="index" class="relative border border-solid pb-4 plan" v-bind:class="[planId == plan.id ? 'border-green-500' : 'border-gray-300']">
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
                <li class="lastitem w-full flex items-center mt-4">
                  <a class="block relative mt-4 mb-2 download" href="#" target="_blank" rel="noopener noreferrer">
                    <svg class="absolute left-0" width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 22H5V20H19V22ZM12 18L6 12L7.41 10.59L11 14.17V2H13V14.17L16.59 10.59L18 12L12 18Z" fill="#2E3A59"></path>
                    </svg>
                    <p class="plantext text-xs shadow-md">Download brochure</p>
                  </a>
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
      <div v-show="showPaystack">
        <Paystack
          ref="paystackbutton"
          class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
          :amount="paystackData.amount"
          :email="paystackData.email"
          :paystackkey="paystackData.public_key"
          :reference="paystackData.reference"
          :callback="verifyPayment"
          :close="closePayment"
        >
        </Paystack>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Paystack from "vue-paystack";
import axios from 'axios'
import baseURL from "@/main"
import Skeleton from "@/components/skeleton/PlansSkeleton"
export default {
  components:{
    Paystack, Skeleton
  },
  data(){
    Skeleton
    return {
      selected: false,
      planId: '',
      plans: [],
      paystackData: {},
      showPaystack: false
    }
  },
  computed:{
    ...mapState({
       beneficiary: state => state.beneficiary,
       beneficiaries: state => state.beneficiaries,
       beneficiaryCount: state => state.beneficiaryCount
    })
  },
  watch:{
    planId(){
      if(this.planId !== ''){
        this.selected = true
        // console.log(this.planId)
      }else{
        // console.log(this.planId)
        this.selected = false
      }
    }
  },
  methods: {
    validate(){
      this.$store.commit('setHealthPlanId', this.planId)
      this.$store.commit('startLoading')
      if(this.beneficiaries.length > 1){
        let arr = []
        this.beneficiaries.map((item)=>{
          arr.push(item.user_id)
        })
        let data = {
          'health_plan_id': this.planId,
          'payment_frequency': 'monthly',
          'enrolleeIDs': arr
        }
        // console.log(data)
        axios({url: `${baseURL}/health/multipayment/init`, data: data, method: 'POST'})
        .then(res=>{
          this.showPaystack = true
          this.paystackData = res.data.data
          this.$refs.paystackbutton.payWithPaystack(this.paystackData)
        })
        .catch(err=>{
          // console.log(err)
          this.$store.dispatch('handleError', err)
        })
      }else{
        let data = {
          'health_plan_id': this.planId,
          'payment_frequency': 'monthly',
          'enrollee_id': this.beneficiary.user_id
        }
        axios({url: `${baseURL}/health/payment/init`, data: data, method: 'POST'})
        .then(res=>{
          this.showPaystack = true
          this.paystackData = res.data.data
          // console.log(this.paystackData)
          this.$refs.paystackbutton.payWithPaystack(this.paystackData)
        })
        .catch(err=>{
          // console.log('Error ti wa o')
          this.$store.dispatch('handleError', err)
        })
      }
      // this.$router.push('/app/dashboard/buyhealth/3')
    },
    verifyPayment(){
      if(this.beneficiaryCount === 'single'){
        axios({url: `${baseURL}/health/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
        .then(res=>{
          this.$store.commit('endLoading')
          // console.log(res.data.data)
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          this.$router.push('/app/dashboard/managehealth')
        })
        .catch(err=>{
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
          // this.$store.commit('setError', {status: true, msg: err.response.data.message})
        })
      }else{
        axios({url:`${baseURL}/health/multipayment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
        .then(res=>{
          this.$store.commit('endLoading')
          // console.log(res.data.data)
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          let vm = this
          setTimeout(()=>{
            vm.$router.push('/app/dashboard/managehealth')
          }, 2000)
          
        })
        .catch(err=>{
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
          // this.$store.commit('setError', {status: true, msg: err.response.data.message})
        })
      }
      
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
      // console.log('closed')
    }
  },
  mounted(){
    if(this.beneficiaryCount == 'single'){
      this.$store.commit('setBeneficiaries', [] )
    }else{
      this.$store.commit('setBeneficiary', {})
    }
  },
  created(){
    // this.$store.commit('startLoading')
    axios.get(`${baseURL}/health/plans`)
    .then(res=>{
      // this.$store.commit('endLoading')
      this.plans = res.data.data
      // console.log(this.plans)
    })
    .catch(err=>{
      this.$store.dispatch('handleError', err)
    })
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
.download{
  left: 15px
}
.plan{
  margin-bottom: 20px
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
@media only screen and (min-width: 1024px){
  .plans{
    flex-wrap: wrap;
  }
  .plan{
    flex: 0 1 46%;
    margin-bottom: 20px
  }
}
@media only screen and (min-width: 1240px){
  /* .plans{
    max-width: 1020px
  } */
}
</style>