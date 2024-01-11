<template>
  <div class="mt-6">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">{{ this.page === 4 && this.policytype === 1 ? 'Personal Information' : this.page === 4
        && this.policytype === 2 ? 'Company Information' : 'Dog Information' }}</p>
      <hr class="mt-4">

      <Petkyc v-if="this.page === 4 && this.policytype === 1" :petform="petform" :back="this.back" :page="this.page"
        :petdata="this.petdata" :paymentmode="this.paymentmode" />
      <Petkyc_coporate v-if="this.page === 4 && this.policytype === 2" :petform="petform" :back="this.back"
        :page="this.page" :coporatedata="this.coporatedata" :paymentmode="this.paymentmode" />
      <SingleDogForm v-if="this.page === 5" :petform="petform" :back="this.back" :page="this.page"
        :petdata="this.petdata" v-on:submitSingle="BuySinglePet" :coporatedata="this.coporatedata" />
      <PetBulkform v-if="this.page === 6" :petform="petform" :back="this.back" :page="this.page" :petdata="this.petdata"
        v-on:submitSingle="BuySinglePet" v-on:submitBulk="BuyBulkPet" />
      <Livestockform v-if="this.page === 8" :petform="petform" :back="this.back" :page="this.page" :policytype="this.policy" :callnext="this.callnext" :callback="this.callback"/>
      <div v-show="showPaystack">
        <Paystack ref="paystackbutton"
          class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
          :amount="paystackData.amount" :email="paystackData.email" :paystackkey="paystackData.public_key"
          :reference="paystackData.reference" :callback="verifyPayment" :close="closePayment"
          :channels="paystackData.channels">
        </Paystack>
      </div>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard" />
      </transition>
      <transition name="scale">
        <Cardsmodal v-if="showCardsmodal" v-on:useCard="payWithCard" :user_id="user_pet_id" user_key="user_pet_id" product="pet"  :close="close" />
      </transition>
      <transition name="scale">
        <PreviewQuote v-if="this.showQuote"  v-on:close="closeQuote" v-on:submit="getInitiate" :details="this.quotedetails" :type="this.batch"  />
      </transition>
      <transition name="scale">
        <ReviewModal v-if="showReviewModal"  :close="closeReview" tett="/pet/managepet" />
      </transition>
      <transition name="scale">
        <PopUp v-if="this.popup" v-on:close="this.popup = false"/>
      </transition>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import Petkyc from "./Petkyc"
import Petkyc_coporate from "./Petkyc_coporate"
import SingleDogForm from "./SingleDogForm"
import PetBulkform from "./PetBulkform"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"
import Cardsmodal from "@/components/Cardsmodal"
import Paystack from "vue-paystack";
import Livestockform from './Livestockform.vue'
import ReviewModal from '../Vehicle/ReviewModal.vue'
import PreviewQuote from "./PreviewQuote.vue";
import PopUp from "@/components/Pet/PopUp.vue";
export default {
  components: {
    PopUp,
    PreviewQuote,
    Petkyc, Petkyc_coporate, PaymentMethod, Paystack, SingleDogForm, PetBulkform,
    Livestockform, Cardsmodal,
    ReviewModal,
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
      user_pet_id: 0,
      batch: "",
      reference: '',
      popup: false,
      showQuote: false,
      quotedetails: {},
      showCardsmodal: false,
      showReviewModal: false,
    }
  },
  props: [
    'petform',
    'page',
    'back',
    'policy',
    'policytype',
    'petdata',
    'coporatedata',
    'callnext',
    'callback',
    'paymentmode'
  ],
  methods: {
    close() {
      this.showCardsmodal = false
    },
    closeQuote() {
      this.showQuote = false
    },
    getInitiate() {
      this.showQuote = false
      this.initiatePayment()
    },

    BuySinglePet(data) {
      console.log(data)
      this.$store.commit('startLoading')
      axios({ url: `${baseURL}/pet/dog/policy/${data.pet_category_id}`, data: data, method: 'POST' })
        .then(res => {
          console.log(res.data.data)
          this.user_pet_id = res.data.data.user_pet_id
          this.showQuote = true
          this.batch = "Single"
          this.quotedetails = res.data.data
          this.$store.commit('endLoading')
          let obj = {
            user_pet_id: res.data.data.user_pet_id,
            user: {
              address: data.address,
              email: data.email,
              idtype: data.customer_id_type,
              idnumber: data.customer_id_number,
              name: data.customer_name,
              telephone: data.phone
            }
          }
          console.log("state:", obj)
          this.$store.commit('setUserData', obj)

          // this.initiatePayment()

        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
    },

    BuyBulkPet(excel) {
      this.$store.commit('startLoading')

      if (this.petdata.pet_category_id === 1) {
        let data = new FormData();
        data.append("underwriter_id", this.petdata.underwriter_id);
        data.append("enrollee_id", this.petdata.enrollee_id,);
        data.append("pet_type_id", this.petdata.pet_type_id,);
        data.append("pet_category_id", this.petdata.pet_category_id,);
        data.append("customer_name", this.petdata.customer_name,);
        data.append("dob", this.petdata.dob,);
        data.append("nationality", this.petdata.nationality,);
        data.append("address", this.petdata.address,);
        data.append("email", this.petdata.email,);
        data.append("occupation", this.petdata.occupation,);
        data.append("employer", this.petdata.employer,);
        data.append("customer_id_type", this.petdata.customer_id_type,);
        data.append("customer_id_issue_date", this.petdata.customer_id_issue_date,);
        data.append("tax_id", this.petdata.tax_id,);
        data.append("account_number", this.petdata.account_number,);
        data.append("account_name", this.petdata.account_name,);
        data.append("account_type", this.petdata.account_type,);
        data.append("bank_name", this.petdata.bank_name,);
        data.append("bank_branch", this.petdata.bank_branch,);
        data.append("signature", this.petdata.signature,);
        data.append('excel', excel);

        axios.post(`${baseURL}/pet/dog/policy/bulk/${this.petdata.pet_category_id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then(res => {
            console.log(res)
            this.reference = res.data.data.reference
            this.showQuote = true
            this.batch = "bulk"
            this.quotedetails = res.data.data
            this.$store.commit('endLoading')
            let obj = {
              user: {
                address: data.address,
                email: data.email,
                idtype: data.customer_id_type,
                idnumber: data.customer_id_number,
                name: data.customer_name,
                telephone: data.phone
              }
            }
            console.log("state:", obj)
            this.$store.commit('setUserData', obj)

          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
      } else {
        let data = new FormData();
        data.append("underwriter_id", this.coporatedata.underwriter_id);
        data.append("enrollee_id", this.coporatedata.enrollee_id,);
        data.append("pet_type_id", this.coporatedata.pet_type_id,);
        data.append("pet_category_id", this.coporatedata.pet_category_id,);
        data.append("company_name", this.coporatedata.company_name,);
        data.append("incorporation_number", this.coporatedata.incorporation_number,);
        data.append("incorporation_date", this.coporatedata.incorporation_date,);
        data.append("incorporation_state", this.coporatedata.incorporation_state,);
        data.append("email", this.coporatedata.email,);
        data.append("phone", this.coporatedata.phone,);
        data.append("tax_id", this.coporatedata.tax_id,);
        data.append("business_type", this.coporatedata.business_type,);
        data.append("website", this.coporatedata.website,);
        data.append("office_address", this.coporatedata.office_address,);
        data.append("account_number", this.coporatedata.account_number,);
        data.append("account_name", this.coporatedata.account_name,);
        data.append("account_type", this.coporatedata.account_type,);
        data.append("bank_name", this.coporatedata.bank_name,);
        data.append("bank_branch", this.coporatedata.bank_branch,);
        data.append("signature", this.coporatedata.signature,);
        data.append("director_name", this.coporatedata.director_name,);
        data.append("director_position", this.coporatedata.director_position,);
        data.append("director_phone", this.coporatedata.director_phone,);
        data.append("director_idtype", this.coporatedata.director_idtype,);
        data.append("director_idnumber", this.coporatedata.director_idnumber,);
        data.append("director_idissuedate", this.coporatedata.director_idissuedate,);
        data.append("director_idexpirydate", this.coporatedata.director_idexpirydate,);
        data.append("director_occupation", this.coporatedata.director_occupation,);
        data.append("director_dob", this.coporatedata.director_dob,);
        data.append("director_nationality", this.coporatedata.director_nationality,);
        data.append("director_email", this.coporatedata.director_email,);
        data.append("director_title", this.coporatedata.director_title,);
        data.append("director_gender", this.coporatedata.director_gender,);
        data.append("director_address", this.coporatedata.director_address,);
        data.append('excel', excel);

        axios.post(`${baseURL}/pet/dog/policy/bulk/${this.petdata.pet_category_id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then(res => {
            console.log(res)
            this.reference = res.data.data.reference
            this.showQuote = true
            this.quotedetails = res.data.data
            this.$store.commit('endLoading')
            let obj = {
              user: {
                address: data.address,
                email: data.email,
                idtype: data.customer_id_type,
                idnumber: data.customer_id_number,
                name: data.customer_name,
                telephone: data.phone
              }
            }
            console.log("state:", obj)
            this.$store.commit('setUserData', obj)

          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
      }

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

      if(this.policy === 0) {
        data = {
        user_pet_id: this.user_pet_id,
        card_id: 0
        }

        axios({ url: `${baseURL}/pet/payment/init`, data: data, method: 'POST' })
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
      } else {
          data = {
          reference: this.reference,
          card_id: 0
        }

        axios({ url: `${baseURL}/pet/payment/bulk/init`, data: data, method: 'POST' })
        .then(res => {
          this.showPaystack = true
          this.paystackData = res.data.data
          this.paystackData.channels = this.paystackChannels

          this.$refs.paystackbutton.payWithPaystack(this.paystackData)
        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
      }
      
      
    },
    verifyPayment() {
      if(this.policy === 0){
        axios({ url: `${baseURL}/pet/payment/verify`, data: { 'reference': this.paystackData.reference }, method: 'POST' })
        .then(res => {
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', { status: true, msg: res.data.message })
          this.$router.push('/pet/completeform')
          // this.showReviewModal = true
        })
        .catch(err => {
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.commit('setError', { status: true, msg: err.response.data.message })
        })
      } else {
        axios({ url: `${baseURL}/pet/payment/bulk/verify`, data: { 'reference': this.paystackData.reference }, method: 'POST' })
        .then(res => {
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', { status: true, msg: res.data.message })
          // this.$router.push('/pet/completeform')
          this.showReviewModal = true
          // this.popup = true
        })
        .catch(err => {
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.commit('setError', { status: true, msg: err.response.data.message })
        })
      }
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