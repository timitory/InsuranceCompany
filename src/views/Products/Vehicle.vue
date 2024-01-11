<template>
  <section class="px-4 py-10">
    <div>
      <p class="text-grey text-sm text-center">Drive on the streets with confidence</p>
      <h1 class="text-navy font-bold text-4xl mt-4 text-center lg:w-1/2 lg:mx-auto">Instant, Simple and Stress free vehicle insurance</h1>
      <p class="text-current mt-4 text-center lg:w-3/5 lg:mx-auto">Pay-small-small vehicle insurance for customers. Now you can pay monthly for your vehicle insurance.</p>
    </div>
    <Plans />
  </section>
</template>

<script>
import Plans from "@/components/Main/Products/VehiclePlans"
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