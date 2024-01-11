<template>
    <form class="mt-6" @submit.prevent="submit">
        <p class="text-green-500">SECTION 4: ESTIMATED PRODUCTION COST</p>
        <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
                <div class="lg:flex"></div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Cost of purchase of Pet </label>
                        <input v-model="updatedata.purchase_cost"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">Cost Of Feed</label>
                        <input v-model="updatedata.feed"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">Cost Of Vaccinations</label>
                        <input v-model="updatedata.vaccination"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required />
                    </div>
                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Cost of Medication</label>
                        <input v-model="updatedata.medication"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
<!--                    <div class="lg:w-full lg:ml-3 lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Cost of Utilities</label>-->
<!--                        <input v-model="updatedata.utilities"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">-->
<!--                        <label class="text-sm font-bold">Interest on Loan (if any)</label>-->
<!--                        <input v-model="updatedata.interest"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required />-->
<!--                    </div>-->
                </div>
<!--                <div class="mt-4 lg:flex">-->
<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Others (specify)</label>-->
<!--                        <input v-model="updatedata.others"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->

<!--                </div>-->
            </div>
        </div>
        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">SECTION 5: PREVIOUS LOSS HISTORY</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Year</label>
                            <input v-model="updatedata.loss_year"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Breed Of Pet</label>
                            <input v-model="updatedata.loss_class"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                            <label class="text-sm font-bold">Total No of Pet Lost</label>
                            <input v-model="updatedata.loss_number"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required />
                        </div>
                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Cause of Loss</label>
                            <input v-model="updatedata.loss_cause"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Effort to minimize Loss</label>
                            <input v-model="updatedata.loss_effort"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Value of Loss (N)</label>
                            <input v-model="updatedata.loss_value"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">What do you consider to be the biggest threat to your
                                Pet?</label>
                            <input v-model="updatedata.loss_threat"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <!-- <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Effort to minimize Loss</label>
                            <input 
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Value of Loss (N)</label>
                            <input 
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div> -->
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
                Complete Form
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
        </div>
        <div class="block lg:hidden mt-10">
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Complete Form
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <a @click="previous" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </a>
            </button>
        </div>
    </form>
</template>

<script>
//import {Money} from 'v-money'
import { mapState } from "vuex";
// import axios from 'axios'
// import baseURL from "@/main"
export default {
    components: {
        //Money
    },
    data() {
        return {

        };
    },
    props: ["next", "steps", "back", "updatedata"],
    methods: {
        callnext() {
            this.next(this.steps);
        },
        previous() {
            this.back(this.steps)
        },
        submit() {
            let data = {
                "user_pet_id": this.userdata.user_pet_id,
                "village": 'nill',
                "state": 'nill',
                "district": 'nill',
                "total_farm_area": 'nill',
                "lga": 'nill',
                "livestock_type": "dog",
                "total_animal": this.updatedata.total_animal,
                "stocking_date": this.updatedata.stocking_date,
                "animal_breed": this.updatedata.animal_breed,
                "animal_age": this.updatedata.animal_age,
                "animal_source": this.updatedata.animal_source,
                "animal_purpose": this.updatedata.animal_purpose,
                "feed_source": this.updatedata.feed_source,
                "water_source": this.updatedata.water_source,
                "is_doctor_qualfied": this.updatedata.is_doctor_qualfied,
                "doctor_name": this.updatedata.doctor_name,
                "doctor_qualification": this.updatedata.doctor_qualification,
                "doctor_grad_year": this.updatedata.doctor_grad_year,
                "doctor_vcn_no": this.updatedata.doctor_vcn_no,
                "doctor_service": this.updatedata.dotor_service,
                "doctor_vaccination_details": this.updatedata.doctor_vaccination_details,
                "purchase_cost": this.updatedata.purchase_cost,
                "feed": this.updatedata.feed,
                "vaccination": this.updatedata.vaccination,
                "medication": this.updatedata.medication,
                "utilities": this.updatedata.utilities,
                "interest": this.updatedata.interest,
                "others": this.updatedata.others,
                "loss_year": this.updatedata.loss_year,
                "loss_class": this.updatedata.loss_class,
                "loss_number": this.updatedata.loss_number,
                "loss_cause": this.updatedata.loss_cause,
                "loss_effort": this.updatedata.loss_effort,
                "loss_value": this.updatedata.loss_value,
                "loss_threat": this.updatedata.loss_threat
            }
            this.$emit('BuyPolicy', data)
        }
    },
    watch: {},
    computed: {
        ...mapState({
            beneficiary: (state) => state.beneficiary,
            underwriterId: (state) => state.underwriter_id,
            userdata: (state) => state.userdata
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
}
</style>
