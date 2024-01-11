<template>
  <div class="mt-6">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Quotation Form</p>
      <p class="mt-2" v-if="vehicle_category_id == 1">Third party Vehicle Cover</p>
      <p class="mt-2" v-else-if="vehicle_category_id == 2">Comprehensive Vehicle Cover</p>
      <p class="mt-2" v-else-if="vehicle_category_id == 3">Prime Vehicle Cover</p>
      <hr class="mt-4">
      
      <ChiForm v-on:updateComprehensive="buyComprehensive" v-on:updateThirdParty="buyThirdParty" v-on:updatePrime="buyPrime" v-if="underwriterId === 1"/>
      <AIICOForm v-on:updateComprehensive="buyComprehensive" v-on:updateThirdParty="buyThirdParty" v-else-if="underwriterId === 2"/>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import ChiForm from "@/components/Vehicle/Policy/ChiUpdate"
import AIICOForm from "@/components/Vehicle/Policy/AIICOUpdate"
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
      axios({url: `${baseURL}/vehicle/thirdparty/update`, data: data, method:'PATCH' })
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
      axios({url: `${baseURL}/vehicle/comprehensive/update`, data: data, method:'PATCH' })
      .then(res=>{
          
          this.$store.commit('endLoading')
          this.$store.commit('saveQuote', res.data.data)
         
          console.log(res.data.data)
          this.$router.push('/app/dashboard/buyvehicle/4')
      })
      .catch(err=>{
         
          this.$store.dispatch('handleError', err)
      })
      
    },
    buyPrime(data){
      // console.log("buying prime")
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/chiprime/update`, data: data, method:'POST' })
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
      underwriterId: state => state.underwriter_id,
      userVehicleId: state => state.vehicleQuote.user_vehicle_id
    }),
  },
  mounted(){
  }
}
</script>

<style scoped>


</style>