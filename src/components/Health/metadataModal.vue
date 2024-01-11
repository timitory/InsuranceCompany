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
      <div class="loader bg-white w-3/4 mx-auto rounded px-4 lg:px-8 py-6">
        <div class="flex justify-end">
          <div  class="top-2" @click="this.close">
            <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </div>
        </div>
        <div class="flex justify-between p-2.5">
          <p class="text-green-500 font-bold">Policy Details</p>

          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
        <div class="pt-6 relative metaData_container">
          <div class="flex justify-between p-2.5">
            <div>
              <label>Hospital</label>
              <p class="font-semibold">{{this.enrollee?.metadata.hospital}}</p>
            </div>
            <div>
              <label>Name</label>
              <p class="font-semibold">{{this.enrollee?.enrollee.name}}</p>
            </div>
            <div>
              <label>dob</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.dob}}</p>
            </div>
            <div>
              <label>Email</label>
              <p class="font-semibold">{{this.enrollee?.enrollee?.email}}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">
            <div>
              <label>Address</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.address}}</p>
            </div>
            <div>
              <label>Occupation</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.occupation}}</p>
            </div>

            <div>
              <label>Country</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.country}}</p>
            </div>
            <div>
              <label>Blood group</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.blood_group}}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">
            <div>
              <label>Plan</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.plan}}</p>
            </div>
            <div>
              <label>Marital Status</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.marital_status}}</p>
            </div>
            <div>
              <label>Genotype</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.genotype}}</p>
            </div>
            <div>
              <label>Medical History</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.medical_history}}</p>
            </div>
          </div>
          <div class="flex justify-start p-2.5">
            <div>
              <label>Employer</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.lga_of_residence}}</p>
            </div>

            <div>
              <label>Payment Frequency</label>
              <p class="font-semibold">{{this.enrollee?.metadata?.payment_frequency}} Month(s)</p>
            </div>

          </div>
          <hr class="p-2.5"/>
          <section class="w-10/12">

          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.loader {
  position: relative;
  top: 100px;
  /* max-width: 600px; */
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}

.metaData_container div div {
  width: 25%;
}
</style>