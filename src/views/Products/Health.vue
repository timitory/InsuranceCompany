<template>
  <section class="px-4 py-10">
    <div>
      <p class="text-grey text-sm text-center">Your health matters a lot</p>
      <h1 class="text-navy font-bold text-4xl mt-4 text-center lg:w-1/2 lg:mx-auto">Health is wealth, get health insurance</h1>
      <p class="text-current mt-4 text-center lg:w-3/5 lg:mx-auto">Tiered Health insurance plans for the low to middle class, women specific and family. Also get personal accident and one time cover for your health needs.</p>
    </div>
    <Plans />
  </section>
</template>

<script>
import Plans from "@/components/Main/Products/HealthPlans"
export default {
  components: {Plans}
}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
  section{
    padding-left: 10%;
    padding-right: 10%
  }
}

</style>