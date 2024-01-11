<template>
  <div class="mt-6">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Quotation Form</p>
      <p class="mt-2" v-if="vehicle_category_id == 1">Third party Vehicle Cover</p>
      <p class="mt-2" v-else-if="vehicle_category_id == 2">Comprehensive Vehicle Cover</p>
      <p class="mt-2" v-else-if="vehicle_category_id == 3">ChiPrime Vehicle Cover</p>
      <p class="mt-2" v-else-if="vehicle_category_id == 4">ChiPrime Silver Vehicle Cover</p>
      <p class="mt-2" v-else-if="vehicle_category_id == 5">ChiPrime Gold Vehicle Cover</p>
      <hr class="mt-4">
      
      <ChiForm v-on:submitComprehensive="buyComprehensive" v-on:submitThirdParty="buyThirdParty" v-on:submitPrime="buyPrime" v-if="underwriterId === 1"/>
      <AIICOForm v-on:submitComprehensive="buyComprehensive" v-on:submitThirdParty="buyThirdParty" v-else-if="underwriterId === 2"/>
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
          :channels="paystackData.channels"
        >
        </Paystack>
      </div>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
      </transition>
      <transition name="scale">
        <ReviewModal v-if="showReviewModal" v-on:useCard="payWithCard" :close="closeReview" tett="managevehicle" />
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import ChiForm from "@/components/Vehicle/Policy/Chi"
import AIICOForm from "@/components/Vehicle/Policy/AIICO"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"
import Paystack from "vue-paystack";
import ReviewModal from "@/components/Vehicle/ReviewModal"
export default {  
  components: {
    ChiForm, AIICOForm, PaymentMethod, Paystack, ReviewModal
  },
  data(){
    return{  
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      paystackChannels: ['card', 'bank', 'mobile_money', 'bank_transfer'],
      showPaystack: false,
      check: [],
      showError : false,
      showTermsModal: false,
      showMethodModal: false,
      user_vehicle_id: 0,  
      showReviewModal: false,
      managevehicle: 'managevehicle'
    }
  },
  methods: {
    closeReview() {
      // this.showReviewModal = false
      // // this.$store.commit('setReviewmodal', true)
      // // console.log(page);
      // this.$router.push(`/app/dashboard/managevehicle`)
    },
    
    buyThirdParty(data){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/thirdparty/create`, data: data, method:'POST' })
      .then(res=>{
          this.$store.commit('endLoading')
          this.$store.commit('saveQuote', res.data.data)
          this.user_vehicle_id = res.data.data.user_vehicle_id
          this.initiatePayment()
          //this.$router.push('/app/dashboard/managevehicle')
      })
      .catch(err=>{
          // console.log(err)
          this.$store.dispatch('handleError', err)
      })
    },
    buyComprehensive(data){
      // console.log(data)
      
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/comprehensive/create`, data: data, method:'POST' })
      .then(res=>{
          // console.log(res)
          this.$store.commit('endLoading')
          this.$store.commit('saveQuote', res.data.data)
          this.user_vehicle_id = res.data.data.user_vehicle_id
          this.initiatePayment()
          //console.log(res.data.data.user_vehicle_id)
          //this.$router.push('/app/dashboard/managevehicle')
      })
      .catch(err=>{
          // console.log(err)
          this.$store.dispatch('handleError', err)
      })
      
    },
    buyPrime(data){
      // console.log("buying prime")
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/chiprime/create`, data: data, method:'POST' })
      .then(res=>{
          // console.log(res)
          this.$store.commit('endLoading')
        this.$store.commit('saveQuote', res.data.data)
          //this.$store.commit('saveQuote', res.data.data)
            //console.log("yes")
          this.user_vehicle_id = res.data.data.user_vehicle_id
           this.initiatePayment()

      })
      .catch(err=>{
          this.$store.dispatch('handleError', err)
      })
    },
    initiatePayment(){
      // if(!this.check.length > 0) return this.showError = true
      // if(!this.user.has_card) return this.payNow()
      this.showMethodModal = true
      
    },
    payWithCard(str){
      this.showMethodModal = false
      if(str === 'old'){
        this.$router.push('/app/dashboard/buyvehicle/5')
      }else if(str === 'new'){
        this.payNow()
      }
      return
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        user_vehicle_id : this.user_vehicle_id,
        card_id : 0
      }
      axios({url: `${baseURL}/vehicle/payment/init`, data: data, method: 'POST'})
      .then(res=>{
        this.showPaystack = true
        this.paystackData = res.data.data
        this.paystackData.channels = this.paystackChannels
       
        this.$refs.paystackbutton.payWithPaystack(this.paystackData)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    verifyPayment(){
      axios({url: `${baseURL}/vehicle/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.showReviewModal = true
        // this.$store.commit('setReviewmodal', true)
        // this.$router.push('/app/dashboard/managevehicle')
      })
      .catch(err=>{
        // console.log(err)
        this.$store.commit('endLoading')
        this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    }
  },
  
  computed:{
    ...mapState({
      vehicle_category_id: state => state.vehicle_category_id,
      beneficiary: state => state.beneficiary,
      underwriterId: state => state.underwriter_id,
      reviewmodal: state => state.reviewmodal,
    }),
  },
  mounted(){
  }
}
</script>

<style scoped>


</style>