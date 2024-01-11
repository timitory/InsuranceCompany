<template>
  <div class="mt-6 lg:pb-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Quotation Form</p>
      <p class="mt-2">{{quote.policy.vehicle_category}} Vehicle Cover</p>
      <hr class="mt-4">
      <ul class="mt-8 md:mt-10 md:flex md:gap-10">
        <li>
          <ul class="flex justify-between md:gap-10">
            <li class="item">
              <p>Vehicle Make</p>
              <p class="mt-4 font-bold">{{quote.policy.vehicle_make}}</p>
            </li>
            <li class="item">
              <p>Vehicle Model</p>
              <p class="mt-4 font-bold">{{quote.policy.vehicle_model}}</p>
            </li>
          </ul>
        </li>
        <li class="item mt-6 md:mt-0">
          <p>Vehicle Type</p>
          <p class="mt-4 font-bold">{{quote.policy.vehicle_class}}</p>
        </li>
      </ul>
      <ul class="mt-6 md:mt-8 md:flex md:gap-10">
        <li>
          <ul class="flex justify-between md:gap-10">
            <li class="item">
              <p>Excess Buyback</p>
              <p v-if="quote.policy.vehicle_category_id == 'Third Party'" class="mt-4 font-bold">No</p>
              <p v-else class="mt-4 font-bold">Yes</p>
            </li>
            <li class="item">
              <p>Flood Damage</p>
              <p class="mt-4 font-bold">{{quote.policy.flood_cover}}</p>
            </li>
          </ul>
        </li>
       
      </ul>
      <div class="py-8 md:py-12 md:flex md:w-3/4 md:justify-between">
        <div class="md:mr-4">
          <p class="text-green-500 font-bold">Actual Premium</p>
          <p class="mt-4 font-bold">{{quote.policy.total_amount}}</p>
        </div>
     
      </div>
      <hr>
      <div class="md:flex md:justify-between md:items-end">
        <div>
          <div v-if="$store.state.vehicle_category_id == 1">
            <p class="mt-6 md:mt-8 text-green-500 font-bold">
              Annual Premium
            </p>
            <p class="mt-4 text-xl md:text-2xl font-extrabold">{{quote.price}}</p>
          </div>
          <div v-else>
            <p class="mt-6 md:mt-8 text-green-500 font-bold">
              Monthly Premium
            </p>
            <p class="mt-4 text-xl md:text-2xl font-extrabold">{{quote.policy.amount}}</p>
          </div>
          <div>
            <div class="mt-4 flex items-center gap-2">
              <input type="checkbox" v-model="check" :value="1">
              <p class="text-sm">I accept <router-link to="/terms" class="text-blue-500">terms and conditions</router-link></p>
            </div>
            <p class="text-red-500 text-xs mt-2" v-if="showError">Please accept terms</p>
          </div>
          
        </div>
        <div class="">
          <!-- <button class="block w-full bg-green-500 mt-12 md:mt-0 text-white px-12 py-2 rounded focus:outline-none">Buy Policy</button> -->
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
          :channels="paystackData.channels"
        >
        </Paystack>
       
      </div>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Paystack from "vue-paystack";
import axios from 'axios'
import baseURL from "@/main"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"


export default {
  components:{
    Paystack, PaymentMethod
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
      showMethodModal:false,
    }
  },
  computed:{
    ...mapState({
      quote: state => state.vehicleQuote,
      user : state => state.user,
    })
  },
  watch:{
    
  },
  methods:{
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
      if(this.check.length > 0){      
        this.$store.commit('startLoading')
        let data = {
          user_vehicle_id : this.quote.user_vehicle_id
        }
        axios({url: `${baseURL}/vehicle/payment/init`, data: data, method: 'POST'})
        .then(res=>{
          this.showPaystack = true
          this.paystackData = res.data.data
          this.paystackData.channels = this.paystackChannels
          
          this.$refs.paystackbutton.payWithPaystack(this.paystackData)
        })
        .catch(err=>{
          // console.log(err)
          this.$store.dispatch('handleError', err)
        })
      }else{
        this.showError = true
      }
    },
    verifyPayment(){
      axios({url: `${baseURL}/vehicle/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
        .then(res=>{
          this.$store.commit('endLoading')
          // console.log(res.data.data)
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          this.$router.push('/app/dashboard/managevehicle')
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
    // console.log(this.$route.params.id)
    // console.log(this.quote)
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
  .item{
    min-width: 180px;
    max-width: 180px;
  }
}
</style>