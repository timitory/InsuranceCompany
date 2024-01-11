<template>
  <section class="grid gap-6 lg:grid-cols-2 lg:px-16 lg:pl:20 md:mb-16 lg:mb-0">
      <HeroText />
      <HeroMap />
  </section>
</template>

<script>
import HeroText from "./HeroText.vue"
import HeroMap from "./HeroMap.vue"
export default {
    components: {HeroText, HeroMap}
}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
    section{
        padding-left: 10%;
        padding-right: 10%;
    }
}
</style>