<template>
  <div class="mt-4 lg:mt-6 lg:px-12 lg:pb-10">
    <MobileNav :currentStep="currentStep" class="md:hidden" />
    <WebNav :currentStep="currentStep" class="hidden md:block" />
    <transition name="slide">
      <Step1 v-if="currentStep == 1"/>
    </transition>
   
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MobileNav from "./MobileStepNav.vue"
import WebNav from "./WebStep.vue"
import Step1 from "./Step1.vue"

export default {
  components:{Step1, MobileNav, WebNav},
  data(){
    return {
    }
  },
  watch:{
    currentStep(){
      window.scrollTo(0, 300);
    }
  },
  computed:{
    ...mapState({
      currentStep : state => state.chiclaim.currentStep
    })
  },
  methods:{ 

  },
  destroyed(){
    this.$store.commit('resetChiClaimStep')
    this.$store.commit('resetChiClaimData')
  }
}
</script>

<style scoped>
.slide-enter-active{
  animation-name: slide-in;
  animation-duration: .5s;
}
.slide-leave-active{
  /* animation: slide-in .5s reverse; */
  transition: opacity .1s ease-out;
}
.slide-leave-to{
  opacity: 0
}
@keyframes slide-in {
  0%{
    transform: translateX(400px);
  }
  100%{
    transform: translateX(0);
  }
}
</style>