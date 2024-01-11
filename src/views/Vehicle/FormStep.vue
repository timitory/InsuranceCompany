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
      
      <ChiForm v-on:submitComprehensiveQuote="buyComprehensive" v-on:submitThirdPartyQuote="buyThirdParty" v-on:submitPrimeQuote="buyPrime" v-if="underwriterId === 1"/>
      <AIICOForm v-on:submitComprehensiveQuote="buyComprehensive" v-on:submitThirdPartyQuote="buyThirdParty" v-else-if="underwriterId === 2"/>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import ChiForm from "@/components/Vehicle/Policy/ChiGetQuote"
import AIICOForm from "@/components/Vehicle/Policy/AIICOGetQuote"
export default {  
  components: {
    ChiForm, AIICOForm
  },
  data(){
    return{      
    }
  },
  methods: {
    buyThirdParty(data){
      
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/thirdparty/quote`, data: data, method:'POST' })
      .then(res=>{
          this.$store.commit('endLoading')
          this.$store.commit('saveQuote', res.data.data)
          this.$router.push('/app/dashboard/buyvehicle/4')
      })
      .catch(err=>{
          
          this.$store.dispatch('handleError', err)
      })
    },
    buyComprehensive(data){
     
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/comprehensive/quote`, data: data, method:'POST' })
      .then(res=>{
          
          this.$store.commit('endLoading')
          this.$store.commit('saveQuote', res.data.data)
         
         
          this.$router.push('/app/dashboard/buyvehicle/4')
      })
      .catch(err=>{
        
          this.$store.dispatch('handleError', err)
      })
      
    },
    buyPrime(data){
      // console.log("buying prime")
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/chiprime/quote`, data: data, method:'POST' })
      .then(res=>{
          // console.log(res)
          this.$store.commit('endLoading')
          this.$store.commit('saveQuote', res.data.data)
          this.$router.push('/app/dashboard/buyvehicle/4')
      })
      .catch(err=>{
          this.$store.dispatch('handleError', err)
      })
    }
  },
  
  computed:{
    ...mapState({
      vehicle_category_id: state => state.vehicle_category_id,
      beneficiary: state => state.beneficiary,
      underwriterId: state => state.underwriter_id
    }),
  },
  mounted(){
  }
}
</script>

<style scoped>


</style>