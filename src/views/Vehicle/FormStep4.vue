<template>
  <div class="mt-6 lg:pb-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Quotation Form</p>
      <p v-if="$store.state.vehicle_category_id == 2" class="mt-2">Comprehensive Vehicle Cover</p>
      <p v-else-if="$store.state.vehicle_category_id == 1" class="mt-2">Third-Party Cover</p>
      <p class="mt-2" v-else-if="$store.state.vehicle_category_id == 3">ChiPrime Vehicle Cover</p>
      <p class="mt-2" v-else-if="$store.state.vehicle_category_id == 4">ChiPrime Silver Vehicle Cover</p>
      <p class="mt-2" v-else-if="$store.state.vehicle_category_id == 5">ChiPrime Gold Vehicle Cover</p>
      <hr class="mt-4">
      <ul class="mt-8 md:mt-10 md:flex md:gap-10">
        <li>
          <ul class="flex justify-between md:gap-10">
            <li class="item">
              <p>Vehicle Make</p>
              <p class="mt-4 font-bold">{{quote.vehicle_make}}</p>
            </li>
            <li class="item">
              <p>Vehicle Model</p>
              <p class="mt-4 font-bold">{{quote.vehicle_model}}</p>
            </li>
          </ul>
        </li>
        <li class="item mt-6 md:mt-0">
          <p>Vehicle Type</p>
          <p class="mt-4 font-bold">{{quote.vehicle_class}}</p>
        </li>
      </ul>
      <ul class="mt-6 md:mt-8 md:flex md:gap-10">
        <li>
          <ul class="flex justify-between md:gap-10">
            <li class="item">
              <p>Excess Buyback</p>
              <p class="mt-4 font-bold">{{quote.excess_buyback}}</p>
            </li>
            <li class="item">
              <p>Flood Damage</p>
              <p class="mt-4 font-bold">{{quote.flood_cover}}</p>
            </li>
          </ul>
        </li>
        <!-- <li class="item mt-6 md:mt-0 ">
          <p>Strike, Riot & Civil commotion</p>
          <p class="mt-4 font-bold">Covered</p>
        </li> -->
      </ul>
      <div class="py-8 md:py-12 md:flex md:w-3/4 md:justify-between">
        <div v-if="$store.state.vehicle_category_id == 1 || $store.state.vehicle_category_id == 3 || $store.state.vehicle_category_id == 4 || $store.state.vehicle_category_id == 5" class="md:mr-4">
          <p class="text-green-500 font-bold">Total Premium</p>
          <p class="mt-4 font-bold">{{quote.price}}</p>
        </div>
        <!-- financed_premium -->
        <div v-else class="md:mr-4">
          <p class="text-green-500 font-bold">Total Premium</p>
          <p class="mt-4 font-bold">{{quote.financed_premium}}</p>
        </div>
        <!-- <div v-if="$store.state.vehicle_category_id == 1" class="mt-6 md:mt-0 md:ml-4">
          <p class="text-green-500 font-bold">Third-Party Property Damage Limit</p>
          <p class="mt-4 font-bold">#1,000,000</p>
        </div> -->
      </div>
      <hr>
      <div class="md:flex md:justify-between md:items-end">
        <div>
          <div v-if="$store.state.payment_frequency_id == 3">
            <!-- $store.state.vehicle_category_id  -->
            <p class="mt-6 md:mt-8 text-green-500 font-bold">
              {{quote.repayment_premium_text}}
            </p>
            <p class="mt-4 text-xl md:text-2xl font-extrabold">{{quote.price}}</p>
          </div>
          <div v-else-if="$store.state.payment_frequency_id == 1">
            <p class="mt-6 md:mt-8 text-green-500 font-bold">
              {{quote.repayment_premium_text}}
            </p>
            <p class="mt-4 text-xl md:text-2xl font-extrabold">{{quote.repayment_amount}}</p>
          </div>
          <div v-else>
            <p class="mt-6 md:mt-8 text-green-500 font-bold">
              {{quote.repayment_premium_text}}
            </p>
            <p class="mt-4 text-xl md:text-2xl font-extrabold">{{quote.repayment_amount}}</p>
          </div>
          <div>
            <div class="mt-4 flex items-center gap-2">
              <input type="checkbox" v-model="check" :value="1">
              <p class="text-sm">I accept <button type="button" @click="showTermsModal = true" class="text-blue-500">terms and conditions</button></p>
            </div>
            <p class="text-red-500 text-xs mt-2" v-if="showError">Please accept terms</p>
          </div>

          
        </div>
        <router-link to="/app/dashboard/buyvehicle/getquote" >
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
        >
        </Paystack>
      </div>
      <transition name="scale">
        <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false"/>
      </transition>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
      </transition>
      <!-- <transition name="scale">
        <ReviewModal v-if="showReviewModal" v-on:useCard="payWithCard"/>
      </transition> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Paystack from "vue-paystack";
import axios from 'axios'
import baseURL from "@/main"
import TermsModal from "@/components/TermsModal"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"
// import ReviewModal from "@/components/Vehicle/ReviewModal"
export default {
  components:{
    Paystack,
    TermsModal,
    PaymentMethod,
    // ReviewModal
},
  data(){
    return {
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      paystackChannels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      showPaystack: false,
      check: [],
      showError : false,
      showTermsModal: false,
      showMethodModal: false,
      // showReviewModal: true,
    }
  },
  computed:{
    ...mapState({
      quote: state => state.vehicleQuote,
      user : state => state.user,
      planId: state => state.payment_frequency_id
    })
  },
  watch:{
    
  },
  methods:{
    initiatePayment(){
      // if(!this.check.length > 0) return this.showError = true
      // if(!this.user.has_card) return this.payNow()
      // this.showMethodModal = true
      this.$router.push('/app/dashboard/buyvehicle/3')
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
        user_vehicle_id : this.quote.user_vehicle_id,
        card_id : 0
      }
      axios({url: `${baseURL}/vehicle/payment/init`, data: data, method: 'POST'})
      .then(res=>{
        this.showPaystack = true
        this.paystackData = res.data.data
        // console.log(this.paystackData)
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
        // this.showReviewModal = true
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
  mounted(){
    //console.log(this.quote)
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