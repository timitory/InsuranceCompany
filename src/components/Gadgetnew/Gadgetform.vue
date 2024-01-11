<template>
  <div class="mt-6">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Personal Information</p>
      <hr class="mt-4">

      <Gadgetkyc v-if="this.page === 2" :next="this.next"  :back="this.back" :page="this.page" :gadgetdata="this.gadgetdata" :paymentmode="this.paymentmode" />
      <completeForm v-if="this.page === 3" :next="this.next" :back="this.back" :page="this.page" :gadgetdata="this.gadgetdata" v-on:submitSingle="BuySinglePet"  />
      <div v-show="showPaystack">
        <Paystack ref="paystackbutton"
          class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
          :amount="paystackData.amount" :email="paystackData.email" :paystackkey="paystackData.public_key"
          :reference="paystackData.reference" :callback="verifyPayment" :close="closePayment"
          :channels="paystackData.channels">
        </Paystack>
      </div>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard" v-on:close="closePaymentmodal" />
      </transition>
      <transition name="scale">
        <Cardsmodal v-if="showCardsmodal" v-on:useCard="payWithCard" :user_id="user_gadget_id"  user_key="user_gadget_id" product="gadget"  :close="close" />
      </transition>
      <transition name="scale">
        <ReviewModal v-if="showReviewModal"  :close="closeReview" tett="/gadget/managegadget" />
      </transition>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import Gadgetkyc from "./Gadgetkyc"
import completeForm from "./completeForm"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"
import Cardsmodal from "@/components/Cardsmodal"
import Paystack from "vue-paystack";
import ReviewModal from '../Vehicle/ReviewModal.vue'
export default {
  components: {
    Gadgetkyc, PaymentMethod, completeForm, Paystack, Cardsmodal, ReviewModal
},
  data() {
    return {
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      paystackChannels: ['card', 'bank', 'mobile_money', 'bank_transfer'],
      showPaystack: false,
      check: [],
      showError: false,
      showTermsModal: false,
      showMethodModal: false,
      user_gadget_id: 0,
      reference: '',
      showCardsmodal: false,
      showReviewModal: false,
    }
  },
  props: [
    'next',
    'page',
    'back',
    'gadgetdata',
    'callnext',
    'callback',
    'paymentmode'
  ],
  methods: {
    close() {
      this.showCardsmodal = false
    },
    closePaymentmodal() {
      this.showMethodModal = false
    },

    BuySinglePet(data) {
      this.$store.commit('startLoading')
      axios({ url: `${baseURL}/gadget/policy/create`, data: data, method: 'POST' })
        .then(res => {
          // console.log(res)
          this.user_gadget_id = res.data.data.user_gadget_id
          this.$store.commit('endLoading')
          this.initiatePayment()

        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
    },

    
    initiatePayment() {
      this.showMethodModal = true

    },
    payWithCard(str) {
      this.showMethodModal = false
      if (str === 'old') {
        this.showCardsmodal = true
      } else if (str === 'new') {
        this.payNow()
      }
      return
    },
    payNow() {
      this.$store.commit('startLoading')
      let data = {}

        data = {
        user_gadget_id: this.user_gadget_id,
        card_id: 0
        }

        axios({ url: `${baseURL}/gadget/payment/init`, data: data, method: 'POST' })
        .then(res => {
          console.log(res);
          this.showPaystack = true
          this.paystackData = res.data.data
          this.paystackData.channels = this.paystackChannels

          this.$refs.paystackbutton.payWithPaystack(this.paystackData)
        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
      
      
    },
    verifyPayment() {
        axios({ url: `${baseURL}/gadget/payment/verify`, data: { 'reference': this.paystackData.reference }, method: 'POST' })
        .then(res => {
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', { status: true, msg: res.data.message })
          // this.$router.push('/pet/managepet')
          this.showReviewModal = true
        })
        .catch(err => {
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.commit('setError', { status: true, msg: err.response.data.message })
        })
     
    },
    closePayment() {
      this.$store.commit('endLoading')
      this.$store.commit('setError', { status: true, msg: "Payment cancelled" })
    }
  },

  computed: {
    ...mapState({
      self: state => state.user,
      beneficiary: state => state.beneficiary,
      underwriterId: state => state.underwriter_id
    }),
  },
  mounted() {
    // console.log(this.policytype);
  }
}
</script>
  
<style scoped></style>