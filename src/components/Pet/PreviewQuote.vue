<template>
    <div class="l-modal">
        <div class="loading-modal w-full">
            <div class="loader bg-white w-2/4 mx-auto rounded px-4 lg:px-8 pb-6 " v-on-clickaway="close">
                <div class="pt-6 relative">
                  <div class=" ">
                    <p class="text-green-500">Pet Cover</p>
                    <div class="mt-4 ">
<!--                       <div class="lg:w-full lg:mr-3"> -->
                      <div class="" v-if="type === 'Single'">
                        <div class="mt-4 lg:flex lg:justify-between">
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Breed Type</label>
                            <p>{{ this.details.pet_breed }}</p>
                          </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Age</label>
                            <p>{{ this.details.pet_age }}</p>
                          </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Health Status</label>
                            <p>{{ this.details.health_status }}</p>
                          </div>
                        </div>
                        <div class="mt-4 lg:flex lg:justify-between">
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Medication Recieved</label>
                            <p>{{ this.details.medication_received }}</p>
                          </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Acquisition Cost</label>
                            <p>{{ this.details.acquisition_cost }}</p>
                          </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Maintenance Cost</label>
                            <p>{{ this.details.maintenance_cost }}</p>
                          </div>
                        </div>
                        <!-- <div class="mt-4 lg:flex lg:justify-between">
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">No of Children</label>
                                <p>{{ this.details.country }}</p>
                            </div>
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">Purpose Of Travel </label>
                                <p>{{ this.details.country }}</p>
                            </div>
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">"No Of People</label>
                                <p>{{ this.details.country }}</p>
                            </div>
                        </div> -->
                      </div>
                      <div class="" v-else>
                        <div class="mt-4 lg:flex lg:justify-between" v-for="(type, index) in this.details.pets" :key="index">
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Breed Type</label>
                            <p>{{ type.breed_type }}</p>
                          </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Acquisition Cost</label>
                            <p>{{ type.acquisition_cost }}</p>
                          </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Maintenance Cost</label>
                            <p>{{ type.maintenace_cost }}</p>
                          </div>
                        </div>
<!--                        <div class="mt-4 lg:flex lg:justify-between">-->
<!--                          <div class="lg:w-full lg:mr-3">-->
<!--                            <label class="text-sm font-bold">Medication Recieved</label>-->
<!--                            <p>{{ this.details.medication_received }}</p>-->
<!--                          </div>-->
<!--                          <div class="lg:w-full lg:mr-3">-->
<!--                            <label class="text-sm font-bold">Acquisition Cost</label>-->
<!--                            <p>{{ this.details.acquisition_cost }}</p>-->
<!--                          </div>-->
<!--                          <div class="lg:w-full lg:mr-3">-->
<!--                            <label class="text-sm font-bold">Maintenance Cost</label>-->
<!--                            <p>{{ this.details.maintenance_cost }}</p>-->
<!--                          </div>-->
<!--                        </div>-->
                        <!-- <div class="mt-4 lg:flex lg:justify-between">
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">No of Children</label>
                                <p>{{ this.details.country }}</p>
                            </div>
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">Purpose Of Travel </label>
                                <p>{{ this.details.country }}</p>
                            </div>
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">"No Of People</label>
                                <p>{{ this.details.country }}</p>
                            </div>
                        </div> -->
                      </div>
                      <!-- </div> -->
                    </div>
                    <div class="pt-6">
                        <hr>
                        <div class="mt-6">
                            <div class="mt-4">
                            </div>
                        </div>
                        <div class="lg:ml-3">
                        </div>
                      <div class="mt-4" >
                        <label class="font-bold">TOTAL AMOUNT</label>
                        <p class="font-extrabold">{{ this.details.total_quote }}</p>
                      </div>
                        <div class="mt-4" >
                            <label class="font-bold">MONTHLY AMOUNT</label>
                            <p CLASS="font-extrabold">{{ this.details.repayment_amount }}</p>
                        </div>


                    </div>

                    <div class="hidden lg:flex justify-between mt-10">

                      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                        <a @click="hide"
                            class="w-full lg:w-auto text-green-500 lg:float-left mt-12 block text-center">
                          <font-awesome-icon icon="arrow-left" class="mr-8" />
                          Back
                        </a>
                      </button>
                      <button @click="intiateTransaction"
                          class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                        Continue
                        <font-awesome-icon icon="arrow-right" class="ml-3" />
                      </button>
                    </div>
                    <div class="block lg:hidden mt-10">
                      <button @click="intiateTransaction"
                          class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white py-2 rounded focus:outline-none">
                        Continue
                        <font-awesome-icon icon="arrow-right" class="ml-3" />
                      </button>
                      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                        <a @click="hide"
                            class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                          <font-awesome-icon icon="arrow-left" class="mr-8" />
                          Back
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { directive as onClickaway } from 'vue-clickaway';
import { mapState } from 'vuex'
export default {
    components: {
    },
    props: [ 'details', 'type'],
    data() {
        return {
            error: {
                value: false,
            },
        }
    },
    directives: {
    onClickaway: onClickaway,
  },
    methods: {
    hide() {
      this.$emit('close')
    },
      intiateTransaction() {
        this.$emit('submit')
      }
    },
    watch: {
    },
    computed: {
        ...mapState({
            vehicle_category_id: state => state.vehicle_category_id,
            beneficiary: state => state.beneficiary,
            underwriterId: state => state.underwriter_id,
            data: state => state.vehicle.chiResources
        }),
    },
    mounted() {

    }
}
</script>
  
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
</style>