<template>
  <div class="">
    <MobileNav />
    <WebNav />
  </div>
</template>

<script>
import MobileNav from "./HomeMobileNav.vue"
import WebNav from "./WebNav.vue"
export default {
  components:{MobileNav, WebNav}, 
 
}
</script>

<style scoped>

@media only screen and (min-width: 1024px){
  .showAbout{
    z-index: 100000
  }
  .logo{
    width: 70px
  }
  /* .router-link-active{
    color: #00381D;
    font-weight: bold;
    position: relative
  } */
  
}
</style>