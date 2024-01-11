<template>
    <form class="mt-6" @submit.prevent="submit">
        <p class="text-green-500 ">Gadget Details</p>
        <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
                <div class="lg:flex">

                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Title </label>
                        <input :value="this.gadgetdata.title" type="text"
                            @input="(event) => (this.gadgetdata.title = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required>
                    </div>
                  <div class="lg:w-full lg:mr-3">
                    <label class="text-sm font-bold">BVN</label>
                    <input :value="this.gadgetdata.bvn" type="text"
                           @input="(event) => (this.gadgetdata.bvn = event.target.value)"
                           class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                           placeholder="" required>
                  </div>
                  <div class="lg:w-full lg:mr-3">
                    <label class="text-sm font-bold">Occupation</label>
                    <input :value="this.gadgetdata.occupation" type="text"
                           @input="(event) => (this.gadgetdata.occupation = event.target.value)"
                           class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                           placeholder="" readonly>
                  </div>
<!--                    <div class="lg:w-full lg:ml-3 lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Full Name</label>-->
<!--                        <input :value="this.gadgetdata.firstname" type="text"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" readonly>-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">-->
<!--                        <label class="text-sm font-bold">Surname</label>-->
<!--                        <input :value="this.gadgetdata.lastname" type="text"-->
<!--                            @input="(event) => (this.gadgetdata.lastname = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required>-->
<!--                    </div>-->
                </div>
                <div class="mt-4 lg:flex">
<!--                    <div class="lg:w-full lg:ml-3 lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Email</label>-->
<!--                        <input :value="this.gadgetdata.email" type="email"-->
<!--                            @input="(event) => (this.gadgetdata.email = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required>-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:mr-3 mt-4 lg:mt-0">-->
<!--                        <label class="text-sm font-bold">TEL</label>-->
<!--                        <input :value="this.gadgetdata.phone2" type="tel"-->
<!--                            @input="(event) => (this.gadgetdata.phone2 = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required>-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">BVN</label>-->
<!--                        <input :value="this.gadgetdata.bvn" type="text"-->
<!--                            @input="(event) => (this.gadgetdata.bvn = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required>-->
<!--                    </div>-->
                </div>
                <div class="mt-4 lg:flex">
<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">Occupation</label>-->
<!--                        <input :value="this.gadgetdata.occupation" type="text"-->
<!--                            @input="(event) => (this.gadgetdata.occupation = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" readonly>-->
<!--                    </div>-->
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">Business Address</label>
                        <input :value="this.gadgetdata.business_address" type="text"
                            @input="(event) => (this.gadgetdata.business_address = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">Registered Address</label>
                        <input :value="this.gadgetdata.registered_address" type="text"
                            @input="(event) => (this.gadgetdata.registered_address = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                    </div>
                  <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                    <label class="text-sm font-bold">Source of fund for this transaction</label>
                    <input :value="this.gadgetdata.fund_source" type="text"
                           @input="(event) => (this.gadgetdata.fund_source = event.target.value)"
                           class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                           required>
                  </div>
                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Address of dwelling to be insured (if different from
                            business/registered address, above)</label>
                        <input :value="this.gadgetdata.address_of_insured" type="text"
                            @input="(event) => (this.gadgetdata.address_of_insured = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" >
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">Select a Date and Time the insurance required from</label>
                        <input :value="this.gadgetdata.start_date" type="datetime-local"
                            @input="(event) => (this.gadgetdata.start_date = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                    </div>
                  <div class="lg:w-full lg:ml-3">
                    <label class="text-sm font-bold">How much is the expected premium from this transaction</label>
                    <money v-model="price" v-bind="money"
                           class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                           required></money>
                  </div>
                </div>
<!--                <div class="mt-4 lg:flex">-->
<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">How much is the expected premium from this transaction</label>-->
<!--                        &lt;!&ndash; <input :value="this.gadgetdata.expected_premium" type="text"-->
<!--                            @input="(event) => (this.gadgetdata.expected_premium = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" readonly> &ndash;&gt;-->
<!--                        <money v-model="price" v-bind="money"-->
<!--                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required></money>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
        <div class="pt-6">
            <hr>
            <p class="text-green-500 pt-3">Identification Details</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex">

                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">ID TYPE</label>
                            <select :value="this.gadgetdata.customer_id_type"
                                @input="(event) => (this.gadgetdata.customer_id_type = event.target.value)"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required>
                                <option value="" disabled>Select ID</option>
                                <option value="passport">Passport</option>
                                <option value="National Id">National Id</option>
                                <option value="Driver lisense">Driver lisense</option>
                            </select>
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">ID NUMBER</label>
                            <input :value="this.gadgetdata.customer_id_number" type="text" @input="(event) =>
                                (this.gadgetdata.customer_id_number = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Has any company declined your proposal</label>
                            <select :value="this.gadgetdata.declined_proposal"
                                @input="(event) => (this.gadgetdata.declined_proposal = event.target.value)"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required>
                                <option value="" disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Do you have any other insurance on the abovementioned</label>
                            <select :value="this.gadgetdata.other_insurer"
                                @input="(event) => (this.gadgetdata.other_insurer = event.target.value)"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required>
                                <option value="" disabled>Select </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3" v-if="this.gadgetdata.declined_proposal === 'Yes'">
                            <label class="text-sm font-bold">What is your claim experience</label>
                            <input :value="this.gadgetdata.claim_experience" type="text"
                                @input="(event) => (this.gadgetdata.claim_experience = event.target.value)"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required>
                        </div>
                        <div class="lg:w-full lg:mr-3" v-if="this.gadgetdata.other_insurer === 'Yes'">
                            <label class="text-sm font-bold">If “YES”, please state with what company</label>
                            <input :value="this.gadgetdata.insurance_company" type="text" @input="(event) =>
                                (this.gadgetdata.insurance_company = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3" v-if="this.gadgetdata.other_insurer === 'Yes'">
                            <label class="text-sm font-bold">Name of banker</label>
                            <input :value="this.gadgetdata.name_of_banker" type="text" @input="(event) =>
                                (this.gadgetdata.name_of_banker = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-6">
            <hr>
            <div class="flex justify-between pt-3">
                <p class="text-green-500 pt-3">Gadgets Details</p>
                <button type="button" class="border border-green-500 px-7 rounded text-green-600" @mouseover="mouseOver"
                    @mouseleave="showTooltip = false" @click="addnew">Add</button>
                <div v-if="showTooltip" class="tooltip">
                    This is the tooltip content.
                </div>
            </div>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex">

                    </div>
                    <div class="mt-4 lg:flex" v-for="index in gadgetlist" :key="index">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Gadget {{ index }}</label>
                            <input :value="gadgetdetails['gadget_name_' + index]"
                                @input="(e) => gadgetdetails['gadget_name_' + index] = e.target.value" type="text"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required>
                        </div>
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Value {{ index }}</label>
                            <!-- <input :value="gadgetdetails['gadget_value_' + index]"
                                @input="(e) => gadgetdetails['gadget_value_' + index] = e.target.value" type="text"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required> -->
                            <money v-model="gadgetdetails['gadget_value_' + index]" v-bind="money"
                                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required></money>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">Signature</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label for="signature">
                                <img src="../../assets/images/uploadicon.svg" alt=""
                                    class="mt-4 mx-auto max-w-max lg:w-full img">
                            </label>
                            <input id="signature" type="file" ref="signature" v-on:change="idUpload"
                                class="fileinput hidden">
                            <p class="text-center">Upload file <label for="signature"
                                    class="cursor-pointer text-blue-600">Here</label></p>
                            <p class="text-center ml-3">{{ idImageName }}</p>
                            <a href="/bronchure/example.xlsx" download class="block text-center dowloadtag text-md"><span
                                    class="text-red-600 text-md">Note*:</span> All signature should be on a plain white
                                paper</a>
                        </div>

                    </div>
                </div>
            </div>
        </div> -->
        <div class="hidden lg:flex justify-between mt-10">
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <a @click="previous" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </a>
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
                <router-link to="/app/dashboard/buyvehicle/4"
                    class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </router-link>
            </button>
        </div>
    </form>
</template>
  
<script>
import { Money } from 'v-money'
import { mapState } from 'vuex'
// import axios from 'axios'
// import baseURL from "@/main"
export default {
    components: {
        Money
    },
    data() {
        return {
            gadgetlist: 1,
            gadgetdetails: {},
            showTooltip: false,
            money: {
                thousands: ',',
                prefix: '₦ ',
                precision: 0,
                masked: false
            },
            price: 0
        }
    },
    props: [
        'petform',
        'page',
        'back',
        'gadgetdata',
        'paymentmode'
    ],
    methods: {
        next() {
            this.petform(this.page)
        },
        previous() {
            this.back(this.page)
        },
        idUpload() {
            this.idImageName = this.$refs.signature.files[0].name
            // this.error.signature = false
            let fileToLoad = this.$refs.signature.files[0];
            let fileReader = new FileReader();
            let vm = this.gadgetdata
            fileReader.onload = function (fileLoadedEvent) {
                // console.log(fileLoadedEvent.target.result);
                vm.signature = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
        mouseOver() {
            if (this.gadgetdetails.gadget_name === "" && this.gadgetdetails.gadget_value === "") {
                this.showTooltip = true
            }
        },
        addnew() {
            // if (this.gadgetdetails.gadget_name === "" && this.gadgetdetails.gadget_value === "") {

            // }else {
            this.gadgetlist = this.gadgetlist + 1

        },
        submit() {
            let result = []
            for (let key in this.gadgetdetails) {
                if (key.startsWith('gadget_name_')) {
                    const index = key.slice('gadget_name_'.length); // Extract the index
                    const valueKey = `gadget_value_${index}`; // Form the corresponding value key

                    // Check if the value key exists using safer Object.hasOwnProperty method
                    if (Object.prototype.hasOwnProperty.call(this.gadgetdetails, valueKey)) {
                        // Pair the name and value in an object and push it to the result array
                        result.push({
                            gadget_name: this.gadgetdetails[key],
                            gadget_price: `${this.gadgetdetails[valueKey]}`
                        });
                    }
                }
            }
            console.log(result);
            this.gadgetdata.gadget = result
            this.gadgetdata.enrollee_id = this.self.user_id
            this.gadgetdata.expected_premium = `${this.price}`
            console.log(this.gadgetdata);
            this.$emit('submitSingle', this.gadgetdata)
        },
    },
    watch: {
        gadgetdetails: {
            deep: true, // Watch for changes deeply within the object
            handler(newVal) {
                console.log('gadgetdetails changed:', newVal);
            }
        }
    },
    computed: {
        ...mapState({
            beneficiary: state => state.beneficiary,
            underwriterId: state => state.underwriter_id,
            self: state => state.user,
        }),
    },
    mounted() {
        console.log(this.gadgetdetails);
    }
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

.tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    display: inline-block;
    position: absolute;
    z-index: 1;
    /* Add any desired styling for the tooltip */
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