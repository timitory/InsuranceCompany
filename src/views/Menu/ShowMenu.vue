<template>
  <div class="relative">
    <Cards class=""/>
  </div>
</template>

<script>
import Cards from "@/components/ProductsCards"
import axios from 'axios'
import baseURL from "@/main"

export default {
  components:{
    Cards
  },
  methods:{
    getDependants(){
      axios.get(`${baseURL}/dependants`)
      .then(res=>{
        this.$store.commit('setDependants',res.data.data)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    getUnderwriters(){
      axios.get(`${baseURL}/underwriter`)
      .then(res=>{
        this.$store.commit('setUnderwriters', res.data.data)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    getChiVehicleResources(){
      axios.get(`${baseURL}/vehicle/resources`)
      .then(res=>{
        this.$store.commit('setChiVehicleResources', res.data.data)
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    getAiicoVehicleResources(){
      axios.get(`${baseURL}/vehicle/resources/aiico`)
      .then(res=>{
        this.$store.commit('setAiicoVehicleResources', res.data.data)
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    getHomeResources(){
      // this.$store.commit('startLoading')
      axios.get(`${baseURL}/homecontent/resources`)
      .then(res=>{
        this.$store.commit('setHomeResources', res.data.data)
        this.$store.commit('endLoading')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    getChiHealthResources(){
      axios.get(`${baseURL}/health/resources/1`)
      .then(res=> {
        this.$store.commit('setChiHealthResources', res.data.data)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    }
  },
  mounted(){
    this.$store.commit('setCollapse', false)
    this.$store.commit('endLoading')
  },
  created(){
    this.getDependants()
    if(this.$store.state.underwriters.length == 0){
      this.getUnderwriters()
      this.getChiVehicleResources()
      this.getAiicoVehicleResources()
      this.getHomeResources()
      this.getChiHealthResources()
    }
  }
}
</script>

<style>

</style>