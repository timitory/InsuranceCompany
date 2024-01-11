<script >

import {mapState} from "vuex";


export default {
  components: {

  },
  props: [
    "close",
    'enrollee'
  ],
  data() {
    return {
      value: this.value,
      message: '',
    };
  },
  computed: {
    ...mapState({
      ratings: state => state.ratings
    })
  },
  methods: {

  }

}
</script>

<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-1/2 mx-auto rounded px-4 lg:px-8 py-6">
        <div class="flex justify-between p-2.5">
          <h1>MetaData</h1>
          <div  class="top-2" @click="this.close">
            <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </div>
        </div>
        <div class="pt-6 relative metaData_container">
          <div class="flex justify-between p-2.5">
            <div>
              <label>Identification No</label>
              <p class="font-semibold">{{this.enrollee.metadata.id_no }}</p>
            </div>
            <div>
              <label>Breed Type</label>
              <p class="font-semibold">{{this.enrollee.metadata.breed_type}}</p>
            </div>
            <div>
              <label>Age</label>
              <p class="font-semibold">{{this.enrollee.metadata.age}}</p>
            </div>
            <div>
              <label>Health Status</label>
              <p class="font-semibold">{{this.enrollee.metadata.health_status}}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">
            <div>
              <label>Medication recieved</label>
              <p class="font-semibold">{{this.enrollee.metadata.medication_received}}</p>
            </div>
            <div>
              <label>Acquisition Cost</label>
              <p class="font-semibold">{{this.enrollee.metadata.acquisition_cost}}</p>
            </div>
            <div>
              <label>Maintainace Cost</label>
              <p class="font-semibold">{{this.enrollee.metadata.maintenance_cost}}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}
.metaData_container div div {
  width: 25%;
}
</style>