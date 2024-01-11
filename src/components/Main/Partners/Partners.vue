<template>
  <section class="mt-10 px-4">
      <div class="py-6 rounded-2xl px-4 whitebox lg:px-20 lg:py-24">
            <div>
                <h3 class="text-darker text-2xl font-bold">Our Partners</h3>
                <p class="font-medium text-sm mt-6 text-darker lg:text-lg">We work with selected underwriters, aggregators and Partners to provide the best insurance cover for you</p>
            </div>
            <Logos />
      </div>
  </section>
</template>

<script>
import Logos from "./PartnerLogos.vue"
export default {
    components: {Logos}
}
</script>

<style scoped>
.whitebox{
    box-shadow: 0px 15px 34px rgba(15, 34, 23, 0.1);
}
@media only screen and (min-width: 1024px){
    h3{
        font-size: 40px;
        line-height: 39px
    }
}
</style>