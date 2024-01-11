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
              <label>First Name</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata.firstname}}</p>
            </div>
            <div>
              <label>Last Name</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata.lastname}}</p>
            </div>
            <div>
              <label>Email</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.email}}</p>
            </div>
            <div>
              <label>Phone</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.phone}}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">
            <div>
              <label>Occupation</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.Occupation}}</p>
            </div>
            <div>
              <label>Country</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.Country}}</p>
            </div>

            <div>
              <label>Departure Date</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.StartDate}}</p>
            </div>
            <div>
              <label>Arrival Date</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.EndDate}}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">
            <div>
              <label>Marital Status</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.MaritalStatusID}}</p>
            </div>
            <div>
              <label>Passport No</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.PassportNumber}}</p>
            </div>
            <div>
              <label>Address</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.Address}}</p>
            </div>
            <div>
              <label>ZipCode</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.ZipCode}}</p>
            </div>
          </div>
          <div class="flex justify-start p-2.5">
            <div>
              <label>Next of Kin Name</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.NextOfKinName}}</p>
            </div>
            <div>
              <label>Next of Kin Phone</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.NextOfKinPhone}}</p>
            </div>
            <div>
              <label>Next of Kin Relationship</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.NextOfKinRelationship}}</p>
            </div>
            <div>
              <label>Next of Kin Address</label>
              <p class="font-semibold">{{this.enrollee?.policy?.metadata?.NextOfKinAddress}}</p>
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
  //max-width: 600px;
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}

.metaData_container div div {
  width: 25%;
}
</style>