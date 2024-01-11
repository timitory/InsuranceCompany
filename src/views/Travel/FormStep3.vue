<template>
  <div class="mt-6 lg:pb-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Quotation Form</p>
     
      <hr class="mt-4">
      <ul class="mt-8 md:mt-10 md:flex md:gap-10">
        <li>
          <ul class="flex justify-between md:gap-10">
            <li class="item">
              <p>Country Category</p>
              <p class="mt-4 font-bold">{{quote.result.Result.countryCategory}}</p>
            </li>
            <li class="item">
              <p>Premium</p>
              <p class="mt-4 font-bold">{{`₦${ Intl.NumberFormat().format(quote.result.Result.premium)}`}}</p>
            </li>
          </ul>
        </li>
        <li class="item mt-6 md:mt-0">
          <p>Sum Assured</p>
          <p class="mt-4 font-bold">{{`${quote.result.Result.currencySymbol}${new Intl.NumberFormat().format(quote.result.Result.sumAssured)}`}}</p>
        </li>
      </ul>
      <!-- <ul class="mt-6 md:mt-8 md:flex md:gap-10">
        <li>
          <ul class="flex justify-between md:gap-10">
            <li class="item">
              <p>Currency</p>
              <p class="mt-4 font-bold">{{quote.result.excess}}</p>
            </li>
            
          </ul>
        </li> -->
        <!-- <li class="item mt-6 md:mt-0 ">
          <p>Strike, Riot & Civil commotion</p>
          <p class="mt-4 font-bold">Covered</p>
        </li> -->
      <!-- </ul> -->
      <div class="py-8 md:py-12 md:flex md:w-3/4 md:justify-between">
        
      </div>
      <hr>
      <div class="md:flex md:justify-between md:items-end">
        <div>
         
          
        </div>
        <router-link to="/app/dashboard/buytravel/2" >
          <button class="block w-full lg:w-auto lg:float-left bg-gray-500 mt-16 text-white px-12 py-2 rounded focus:outline-none">Back</button>
        </router-link>
        <div class="">
          <button @click="initiatePayment" class="block w-full bg-green-500 mt-12 md:mt-0 text-white px-12 py-2 rounded focus:outline-none">Buy Policy</button>
        </div>
      </div>
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
          :channels="payStackChannels"
        >
        </Paystack>
      </div>
      <transition name="scale">
        <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false"/>
      </transition>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
      </transition>
      <transition name="scale">
        <ReviewModal v-if="showReviewModal" tett="managetravel" />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Paystack from "vue-paystack";
import axios from 'axios'
import baseURL from "@/main"
import TermsModal from "@/components/TermsModal"
import PaymentMethod from "@/components/Travel/PaymentMethod"
import ReviewModal from "@/components/Vehicle/ReviewModal"
export default {
  components:{
    Paystack, TermsModal, PaymentMethod, ReviewModal
  },
  data(){
    return {
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      showPaystack: false,
      payStackChannels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      check: [],
      showError : false,
      showTermsModal: false,
      showMethodModal: false,
      travelId: 0,
      showReviewModal: false,
      managetravel: 'managetravel'
    }
  },
  computed:{
    ...mapState({
      quote: state => state.travelPremium,
      user : state => state.user,
      details : state => state.travelDetails
    })
  },
  watch:{
    
  },
  methods:{
    initiatePayment(){
     
      //if(!this.check.length > 0) return this.showError = true
      if(!this.user.has_card) return this.payNow()
      this.showMethodModal = true
    },
    async saveTravelData(details){
      let data = {
        underwriter_id : details.underwriter_id,
        enrollee_id : details.enrollee_id,
        premium_id : this.quote.id,
        titleId : details.title_id,
        countryId : details.destination_country_id,
        sms : details.sms,
        preMedical : details.preMedical,
        medical : details.medical,
        next_of_kin_address : details.next_of_kin_address,
        next_of_kin_relationship : details.next_of_kin_relationship,
        next_of_kin_name : details.next_of_kin,
        passportNumber : details.passport_number,
        start_date : details.start_date,
        end_date : details.end_date,
        passportUrl : details.passportUrl,
        dob: details.dob,
      }

  
      axios({url: `${baseURL}/travel/policy`, data: data, method: 'POST'})
      .then(res=>{
       
        console.log(res.data.data.user_travel_id)
        
        this.travelId =  res.data.data.user_travel_id
        this.$store.commit('saveTravelId', res.data.data)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    payWithCard(str){
      this.showMethodModal = false
      
      if(str === 'old'){
        //var travel_id = this.saveTravelData(this.details)
        this.$router.push('/app/dashboard/buytravel/4')
      }else if(str === 'new'){
        
        this.payNow()
      }
      return
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        user_travel_id : this.travelId,
        card_id : 0
      }
      console.log(data)
      axios({url: `${baseURL}/travel/payment/init`, data: data, method: 'POST'})
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
      axios({url: `${baseURL}/travel/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.showReviewModal = true
        // this.$router.push('/app/dashboard/managetravel')
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
  mounted(){
    this.saveTravelData(this.details)
    
  }
}
</script>

<style scoped>
.scale-enter-active{
  animation-name: scale;
  animation-duration: .5s;
}
.scale-leave-active{
  animation: scale .5s reverse;
  /* transition: opacity .1s ease-out; */
}
@keyframes scale {
  0%{
    transform: scale(0, 0);
  }
  100%{
    transform: scale(1, 1);
  }
}
@media only screen and (min-width: 1024px){
  .item{
    min-width: 180px;
    max-width: 180px;
  }
}
</style>