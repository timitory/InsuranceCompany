<template>
    <form class="mt-6" @submit.prevent="validateForm" autocomplete="off">
        <!-- <p class="text-green-500 ">Dog Details</p> -->
        <div class="mt-4 lg:flex">
            <div class="lg:w-3/4 lg:mr-3">
                <div class="lg:flex">

                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">COLOR </label>
                        <input :value="this.petdata.dog_color" type="text"
                            @input="event => (this.petdata.dog_color = event.target.value, this.coporatedata.dog_color = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required>
                    </div>
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">BREED TYPE</label>
                        <input :value="this.petdata.breed_type" type="text"
                            @input="event => (this.petdata.breed_type = event.target.value, this.coporatedata.breed_type = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required>
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">AGE (YEARS)</label>
                        <input :value="this.petdata.breed_age" type="text"
                            @input="event => (this.petdata.breed_age = event.target.value, this.coporatedata.breed_age = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                    </div>
                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">ACQUISITION COST (₦)</label>
                        <!-- <input :value="this.petdata.acquisition_amount" type="text" @input="event => this.petdata.acquisition_amount = event.target.value"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required> -->
                        <!-- <money v-model="acquisition_amount" v-bind="money" :min="0" oninput="validity.valid||(value=0)"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required></money> -->

                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                ₦
                            </span>
                            <input type="text" id="aquisitionInput"
                                class="block pl-6 mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required />
                        </div>

                    </div>
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">MAINTENANCE COST (₦)</label>
                        <!-- <input :value="this.petdata.maintenance_cost" type="text" @input="event => this.petdata.maintenance_cost = event.target.value"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required> -->

                            <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                ₦
                            </span>
                            <input type="text" id="maintainceInput"
                                class="block pl-6 mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required />
                        </div>
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">MEDICATION RECEIVED</label>
                        <input :value="this.petdata.medication_received" type="text"
                            @input="event => (this.petdata.medication_received = event.target.value, this.coporatedata.medication_received = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/4 lg:ml-3 mt-4 lg:mt-0">
                <div class="mt-4">
                    <label class="text-sm font-bold">HEALTH STATUS</label>
                    <input :value="this.petdata.health_status" type="text"
                        @input="event => (this.petdata.health_status = event.target.value, this.coporatedata.health_status = event.target.value)"
                        class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        required>
                </div>

            </div>
        </div>

        <div class="hidden lg:flex justify-between mt-10">
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <div @click="previous" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </div>
            </button>
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Pay
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
        </div>
        <div class="block lg:hidden mt-10">
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Pay
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <router-link to="" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </router-link>
            </button>
        </div>
    </form>
</template>
  
<script>
// import { Money } from 'v-money'
// import VueNumeric from 'vue-numeric'
// import { mapState } from 'vuex'
// import axios from 'axios'
// import baseURL from "@/main"
export default {
    components: {
        
    },
    data() {
        return {
            price: '',
            money: {
                thousands: ',',
                prefix: '₦ ',
                precision: 0,
                masked: false,
                min: 0
            },
            inputValue: 0,
            inputValue2: 0,

        }
    },
    props: [
        'petform',
        'back',
        'page',
        'petdata',
        'coporatedata'
    ],
    methods: {
        previous() {
            this.back(this.page)
        },
        next() {
            this.petform()
        },

        validateNumericInput(event) {
            const inputValue = event.target.value;
            // Use a regular expression to check for numeric input
            if (!/^\d*\.?\d*$/.test(inputValue)) {
                // If not numeric, set the input value to 0
                this.acquisition_amount = 0;
            }
        },

        validateForm() {
            if (this.petdata.pet_category_id === 1) {
                this.$emit('submitSingle', this.petdata)
            } else {
                this.$emit('submitSingle', this.coporatedata)
            }

        },

    },
    watch: {
    },
    computed: {
        acquisition_amount: {
            get() {
                return this.petdata.acquisition_amount.toString()
            },
            set(val) {
                this.petdata.acquisition_amount = Number(val * 100)
                this.coporatedata.acquisition_amount = Number(val * 100) 
            }
        },
        maintenance_cost: {
            get() {
                return this.petdata.maintenance_cost.toString()
            },
            set(val) {
                let data= Number(val * 100)
                this.petdata.maintenance_cost = data.toString()
                this.coporatedata.maintenance_cost = data.toString()
            }
        }
    },
    mounted() {
        const AquisitionElement = document.getElementById('aquisitionInput');
        const MaintainceInput = document.getElementById('maintainceInput');

        AquisitionElement.addEventListener('input', (event) => {
            let value = event.target.value;
            // Remove non-digit characters
            value = value.replace(/[^0-9]/g, '');
            if (value < 0) {
                value = 0;
            }

            // Format with currency separators
            value = new Intl.NumberFormat('en-US').format(value);
            // Format currency and remove non-digit character
            let formatted = value.replace(/[^0-9]/g, '');
            // Pass formatted value to the form data
            this.petdata.acquisition_amount = JSON.parse(formatted)
            this.coporatedata.acquisition_amount = JSON.parse(formatted)


            // Update the input value
            AquisitionElement.value = value;

            // Update the Vue data property
            this.inputValue = value;
        });

        MaintainceInput.addEventListener('input', (event) => {
            let value = event.target.value;
            // Remove non-digit characters
            value = value.replace(/[^0-9]/g, '');
            if (value < 0) {
                value = 0;
            }
            // Format with currency separators
            value = new Intl.NumberFormat('en-US').format(value);
            // Format currency and remove non-digit character
            let formatted = value.replace(/[^0-9]/g, '');
            // Pass formatted value to the form data
            this.petdata.maintenance_cost = JSON.parse(formatted)
            this.coporatedata.maintenance_cost = JSON.parse(formatted)


            // Update the input value
            MaintainceInput.value = value;

            // Update the Vue data property
            this.inputValue2 = value;
        });
    },

}

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
    background-color: #2196F3;
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
        width: 193px
    }
}
</style>