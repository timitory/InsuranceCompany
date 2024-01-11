<template>
  <div class="mt-6">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Biodata Form</p>
      <ChiForm  v-if="underwriterId === 1"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ChiForm from "../../components/Health/Policy/Chi/Chi.vue"
export default {
  components: {ChiForm},
  computed: {
    ...mapState({
      underwriterId: state => state.underwriter_id,
    })
  }
}
</script>

<style>

</style>