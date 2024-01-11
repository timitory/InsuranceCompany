<template>
  <div>
      <!-- <p class="mt-2">{{plan.category}} Cover</p> 
      <hr class="mt-4"> -->
      <family v-if="plan.category == 'family'" v-on:buyPolicy="buyFamily"></family>
      <individual v-else v-on:buyPolicy="buyIndividual"></individual>
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
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
      </transition>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import {mapState} from 'vuex'
import Family from './Family/Family.vue'
import Individual from './Individual.vue'
import Paystack from "vue-paystack";
import PaymentMethod from "@/components/Health/PaymentMethod"
export default {
    components: { Individual, Family, Paystack, PaymentMethod},
    data(){
        return {
            health_id: '',
            paystackData: {
                public_key: '',
                email: '',
                amount: 0,
                reference: ''
            },
            payStackChannels: ['card', 'bank', 'bank_transfer'],
            showPaystack: false,
            showMethodModal: false
        }
    },
    computed: {
        ...mapState({
            plan : state => state.health.plan,
            user : state => state.user
        })
    },
    methods: {
        buyIndividual(data){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/health/policy/individual`, data: data, method: 'POST'})
            .then((res) => {
                this.health_id = res.data.data.user_health_id
                this.$store.commit('setUserHealthId', this.health_id)
                this.$store.commit('endLoading')
                this.initiatePayment()
            })
            .catch((err) => {
                this.$store.dispatch('handleError', err)
            })
        },
        buyFamily(data){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/health/policy/family`, data: data, method: 'POST'})
            .then((res) => {
                this.health_id = res.data.data.user_health_id
                this.$store.commit('setUserHealthId', this.health_id)
                this.$store.commit('endLoading')
                this.initiatePayment()
            })
            .catch((err) => {
                this.$store.dispatch('handleError', err)
            })
        },
        initiatePayment(){
            if(!this.user.has_card) return this.payNow()
            this.showMethodModal = true
        },
        payNow(){
            this.$store.commit('startLoading')
            let data = {
                user_health_id : this.health_id,
                card_id : 0
            }
            axios({url: `${baseURL}/health/payment/init`, data: data, method: 'POST'})
            .then(res=>{
                this.showPaystack = true
                this.paystackData = res.data.data
                this.paystackData.channels = this.payStackChannels
                this.$refs.paystackbutton.payWithPaystack(this.paystackData)
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        },
        verifyPayment(){
            axios({url: `${baseURL}/health/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
            .then(res=>{
                this.$store.commit('endLoading')
                this.$store.commit('setSuccess', {status: true, msg: res.data.message})
                this.$router.push('/app/dashboard/managehealth')
            })
            .catch(err=>{
                this.$store.commit('endLoading')
                this.$store.commit('setError', {status: true, msg: err.response.data.message})
            })
        },
        closePayment(){
            this.$store.commit('endLoading')
            this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
        },
        payWithCard(str){
            this.showMethodModal = false
            if(str === 'old'){
                this.$router.push('/app/dashboard/buyhealth/4')
            }else if(str === 'new'){
                this.payNow()
            }
            return
        },
    },
}
</script>

<style>

</style>