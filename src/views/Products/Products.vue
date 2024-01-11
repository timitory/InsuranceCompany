<template>
  <div>
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> 
  </div>
</template>

<script>
import NavBar from "@/components/Nav/HomeNavBar"
export default {
  components: {NavBar}
}
</script>

<style>
.arrow1{
    animation-name: arrow;
    animation-duration: 1s;
    animation-delay: 0;
    animation-iteration-count: infinite;
}
@keyframes arrow{
    0%{
        transform: translateX(-2px);
        opacity: 0
    }
    80%{
        transform: translateX(2px);
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateX(0px);
    }
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