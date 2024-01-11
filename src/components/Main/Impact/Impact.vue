<template>
  <section class="grid gap-6 lg:grid-cols-2 lg:px-16 lg:pl:20">
      <ImpactText />
      <HeroMap />
  </section>
</template>

<script>
import ImpactText from "./ImpactText.vue"
import HeroMap from "../Hero/HeroMap.vue"
export default {
    components: {ImpactText, HeroMap}
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