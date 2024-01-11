<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition> 
    <Loading v-if="$store.state.loading" />
    <Success v-if="$store.state.showSuccess" />
    <Error v-if="$store.state.showError" />
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import Success from '@/components/SuccessModal'
import Error from '@/components/FailureModal'
export default {
  components:{
    Loading, Success, Error
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: "Avenir";
  font-display: auto;
  src: local("Avenir"),
   url(./fonts/Avenir/AvenirNextLTPro-Regular.otf) format("opentype");
}
:root{
  --greentext: #38bb7d;
  --deepgreentext: #00A859;
  --deepbluetext: #131b47;
}
#app {
  font-family: 'Avenir', sans-serif;
  height: 100%;
}
.l-modal{
    display: block;
    position: fixed;
    z-index: 110;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0, 0.3);
  }
  .loading-modal{
    min-height: 350px; 
    
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
