<template>
    <div class="l-modal">
        <div class="loading-modal w-full">
            <div class="loader bg-white w-2/4 mx-auto rounded px-4 lg:px-8 pb-6 pt-4" v-on-clickaway="close">
                <div class="mt-6">
                  <div class="flex justify-between p-2.5">
                    <p class="text-green-500 font-bold">Travel Quote</p>

                    <div class=" lg:w-3/4">
                      <hr class="mt-2">
                      <hr class="mt-2">
                      <hr class="mt-2 border-green-500 bg-green-500 border-2">
                    </div>
                  </div>

                    <div class="mt-4 ">
                        <!-- <div class="lg:w-full lg:mr-3"> -->
                            <div class="">
                                <div class="mt-4 lg:flex lg:justify-between">
                                    <div class="lg:w-full lg:mr-3">
                                        <label class="text-sm font-bold">Country</label>
                                        <p>{{ this.details.country }}</p>
                                    </div>
                                    <div class="lg:w-full lg:mr-3">
                                        <label class="text-sm font-bold">Depature Date</label>
                                        <p>{{ this.details.cover_start }}</p>
                                    </div>
                                    <div class="lg:w-full lg:mr-3">
                                        <label class="text-sm font-bold">Arrival Date</label>
                                        <p>{{ this.details.cover_end }}</p>
                                    </div>
                                </div>
                                <div class="mt-4 lg:flex lg:justify-between">
                                    <div class="lg:w-full lg:mr-3">
                                        <label class="text-sm font-bold">Round Trip</label>
                                        <p>{{ this.details.is_multi_trip }}</p>
                                    </div>
                                    <div class="lg:w-full lg:mr-3">
                                        <label class="text-sm font-bold">No Of People </label>
                                        <p>{{ this.details.no_people }}</p>
                                    </div>
                                    <div class="lg:w-full lg:mr-3">
                                        <label class="text-sm font-bold">No of Children</label>
                                        <p>{{ this.details.no_children }}</p>
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
                            <label class="font-bold">AMOUNT</label>
                            <p>{{ this.details.amount }}</p>
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
                        <button @click="callnext"
                            class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                            Continue
                            <font-awesome-icon icon="arrow-right" class="ml-3" />
                        </button>
                    </div>
                    <div class="block lg:hidden mt-10">
                        <button @click="callnext"
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
</template>
  
<script>
import { directive as onClickaway } from 'vue-clickaway';
import { mapState } from 'vuex'
export default {
    components: {
    },
    props: ['next', 'steps', 'close', 'details'],
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
      this.close()
    },
    callnext() {
            // this.$emit('close')
      this.close()
        this.next(this.steps)
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
        if (Object.keys(this.data).length == 0) {
            this.getResources()
        }
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