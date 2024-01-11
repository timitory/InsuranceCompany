<template>
    <form class="mt-6" @submit.prevent="callnext">
        <p class="text-green-500">SECTION 3: INFORMATION ON ANIMALS</p>
        <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
                <div class="lg:flex"></div>
                <div class="mt-4 lg:flex">
<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Type of Livestock </label>-->
<!--                        <input v-model="updatedata.livestock_type"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">Total Number of Pet</label>
                        <input v-model="updatedata.total_animal"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
                  <div class="lg:w-full lg:mr-3">
                    <label class="text-sm font-bold"> Total Number of Pens</label>
                    <input v-model="updatedata.total_pens"
                           class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                           placeholder="" required />
                  </div>
                  <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                    <label class="text-sm font-bold">Date of Stocking</label>
                    <input v-model="updatedata.stocking_date" type="date"
                           class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                           required />
                  </div>
<!--                    <div  class="lg:w-full lg:ml-3 mt-4 lg:mt-0">-->
<!--                        <label class="text-sm font-bold">Total number of Pet for Insurance</label>-->
<!--                        <input v-model="updatedata.total_animal_insurance"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required />-->
<!--                    </div>-->
                </div>
                <div class="mt-4 lg:flex">

<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Breed of Animal</label>-->
<!--                        <input v-model="updatedata.animal_breed"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->

                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Age of Pet</label>
                        <input v-model="updatedata.animal_age"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">Source of Pet</label>
                      <select v-model="updatedata.animal_source" required
                              class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                        <option>Breeding</option>
                        <option>Purchase</option>
                        <option>Birth</option>
                      </select>
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">Purpose of Pet</label>
                        <select v-model="updatedata.animal_purpose"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                            <option>Breeding</option>
                            <option>Security</option>
                            <option>Meat Production</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
                '<div class="mt-4 lg:flex">
                    <div v-if="updatedata.animal_purpose === 'Others'" class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">If Others Specify</label>
                        <input v-model="updatedata.animal_purpose"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
<!--                    <div class="lg:w-full lg:ml-3 lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Source of Feed</label>-->
<!--                        <input v-model="updatedata.feed_source"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">-->
<!--                        <label class="text-sm font-bold">Source of Water</label>-->
<!--                        <input v-model="updatedata.water_source"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required />-->
<!--                    </div>-->
                </div>
            </div>
        </div>
        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">SECTION 4: VETERINARY PERSONNEL & MEDICATION</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold"> Is there a qualified Vet Doctor that look after the
                                animals?</label>
                            <select v-model="updatedata.is_doctor_qualfied"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                                <option :value=true>Yes</option>
                                <option :value=false>No</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="updatedata.is_doctor_qualfied === true">
                        <p class="mt-4">
                            If Yes
                        </p>
                        <div class="mt-4 lg:flex">
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">Name</label>
                                <input v-model="updatedata.doctor_name"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    placeholder=""  />
                            </div>
                            <div class="lg:w-full lg:mr-3">
                                <label class="text-sm font-bold">Qualification</label>
                                <input v-model="updatedata.doctor_qualification"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    placeholder=""  />
                            </div>
                          <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">VCN No</label>
                            <input v-model="updatedata.doctor_vcn_no"
                                   class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                   placeholder=""  />
                          </div>
<!--                            <div class="lg:w-full lg:ml-3 lg:mr-3">-->
<!--                                <label class="text-sm font-bold">Year of Graduation</label>-->
<!--                                <input v-model="updatedata.doctor_grad_year"-->
<!--                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                                    placeholder=""  />-->
<!--                            </div>-->
                        </div>
                        <div class="mt-4 lg:flex">

<!--                            <div class="lg:w-full lg:mr-3">-->
<!--                                <label class="text-sm font-bold">If Qualified Veterinary Doctor is not employed, then on-->
<!--                                    whose service do you depend on?</label>-->
<!--                                <input v-model="updatedata.dotor_service"-->
<!--                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                                    placeholder=""  />-->
<!--                            </div>-->
                            <div class="lg:w-full  lg:mr-3">
                                <label class="text-sm font-bold">Give details of vaccinations and or medication administered
                                    in the last six months</label>
                                <input v-model="updatedata.doctor_vaccination_details"
                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    placeholder=""  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex justify-between mt-10">
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <a @click="previous" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </a>
            </button>
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Next
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
        </div>
        <div class="block lg:hidden mt-10">
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Next
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <a @click="previous"
                    class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </a>
            </button>
        </div>
    </form>
</template>

<script>
import { mapState } from "vuex";

export default {
    components: {
    },
    data() {
        return {
            qualified_vet: 0,
            animal_purpose: ''
        };
    },
    props: ["next", "steps", "back", "updatedata"],
    methods: {
        callnext() {
            this.next(this.steps);
        }, 
        previous() {
            this.back(this.steps)
        }
    },
    watch: {},
    computed: {
        ...mapState({
            beneficiary: (state) => state.beneficiary,
            underwriterId: (state) => state.underwriter_id,
        }),
    },
    mounted() { },
};
</script>

<style scoped>
input,
select,
.input {
    background-color: #e2f5ec;
}

.fileinput {
    background-color: #fff;
}

.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 10px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ccc;
    border-radius: 50%;
}

/* When the radio button is checked, add a blue background */
.container input:checked~.checkmark {
    background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked~.checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}

@media only screen and (min-width: 1024px) {
    .platebox {
        width: 193px;
    }
}</style>
