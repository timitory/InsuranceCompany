<template>
    <form class="mt-6" @submit.prevent="callnext">
        <p class="text-green-500">Individual/Personal Details</p>
        <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
                <div class="lg:flex"></div>
<!--                <div class="mt-4 lg:flex">-->
<!--                    <div class="lg:w-full lg:mr-3">-->
<!--                        <label class="text-sm font-bold">NAME (FIRSTNAME, SURNAME) </label>-->
<!--                        <input :value="this.gadgetdata.firstname" type="text" @input="(event) => (this.gadgetdata.firstname = event.target.value)-->
<!--                            "-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:ml-3 lg:mr-3">-->
<!--                        <label class="text-sm font-bold">E-MAIL ADDRESS:</label>-->
<!--                        <input :value="this.gadgetdata.email" type="email"-->
<!--                            @input="(event) => (this.gadgetdata.email = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            placeholder="" required />-->
<!--                    </div>-->
<!--                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">-->
<!--                        <label class="text-sm font-bold">TEL</label>-->
<!--                        <input :value="this.gadgetdata.phone1" type="tel"-->
<!--                            @input="(event) => (this.gadgetdata.phone1 = event.target.value)"-->
<!--                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
<!--                            required />-->
<!--                    </div>-->
<!--                </div>-->
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">ADDRESS</label>
                        <input :value="this.gadgetdata.address" type="text"
                            @input="(event) => (this.gadgetdata.address = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                        <!-- <p class="text-red-500 text-sm" v-if="error.bvn">Please enter a valid BVN</p> -->
                    </div>
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">DATE OF BIRTH</label>
                        <input :value="this.gadgetdata.dob" type="date"
                            @input="(event) => (this.gadgetdata.dob = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">NATIONALITY</label>
                        <input :value="this.gadgetdata.nationality" type="text" @input="(event) => (this.gadgetdata.nationality = event.target.value)
                            "
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required />
                    </div>
                </div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">OCCUPATION</label>
                        <input :value="this.gadgetdata.occupation" type="text"
                            @input="(event) => (this.gadgetdata.occupation = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required />
                    </div>
                    <div class="lg:w-full lg:ml-3 lg:mr-3">
                        <label class="text-sm font-bold">EMPLOYER</label>
                        <input :value="this.gadgetdata.employer" type="text"
                            @input="(event) => (this.gadgetdata.employer = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="" required />
                    </div>
                    <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                        <label class="text-sm font-bold">EMPLOYER ADDRESS</label>
                        <input :value="this.gadgetdata.employer_address" type="tel"
                            @input="(event) => (this.gadgetdata.employer_address = event.target.value)"
                            class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required />
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">Identification Details</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">ID TYPE</label>
                                <select :value="this.gadgetdata.customer_id_type" @input="(event) => (this.gadgetdata.customer_id_type = event.target.value)"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                                <option value="" disabled>Select ID</option>
                                <option value="passport" >Passport</option>
                                <option value="National Id" >National Id</option>
                                <option value="Driver lisense" >Driver lisense</option>
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
                        <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                            <label class="text-sm font-bold">ID ISSUE DATE</label>
                            <input :value="this.gadgetdata.customer_id_issue_date" type="date" @input="(event) =>
                                (this.gadgetdata.customer_id_issue_date = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required />
                        </div>
                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">ID EXPIRY DATE</label>
                            <input :value="this.gadgetdata.id_expiry_date" type="date" @input="(event) =>
                                (this.gadgetdata.id_expiry_date = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">TAX IDENTIFICATION NUMBER</label>
                            <input :value="this.gadgetdata.tax_id" type="text"
                                @input="(event) => (this.gadgetdata.tax_id = event.target.value)"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">Account Details</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">A/C NAME</label>
                            <input :value="this.gadgetdata.account_name" type="text" @input="(event) => (this.gadgetdata.account_name = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">A/C TYPE</label>
                            <input :value="this.gadgetdata.account_type" type="text" @input="(event) => (this.gadgetdata.account_type = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                            <label class="text-sm font-bold">A/C NO</label>
                            <input :value="this.gadgetdata.account_number" type="text" @input="(event) => (this.gadgetdata.account_number = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required />
                        </div>
                    </div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Bank Name</label>
                            <input :value="this.gadgetdata.bank_name" type="text" @input="(event) => (this.gadgetdata.bank_name = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Branch</label>
                            <input :value="this.gadgetdata.bank_branch" type="text" @input="(event) => (this.gadgetdata.bank_branch = event.target.value)
                                "
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="" required />
                        </div>
                        <div class="lg:w-full lg:ml-3 lg:mr-3">
                            <label class="text-sm font-bold">Payment frequency</label>
                            <select :value="this.gadgetdata.payment_frequency_id" @input="(event) => (this.gadgetdata.payment_frequency_id = JSON.parse(event.target.value))"
                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                                <option value="" disabled>Select Payment frequency</option>
                                <option :value="data.id" v-for="data in this.paymentmode" :key="data.id">{{ data.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3 text-2xl">Signature</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label for="signature">
                                <img src="../../assets/images/uploadicon.svg" alt=""
                                    class="mt-4 mx-auto max-w-max lg:w-full img" style="max-width: 8.5%;">
                            </label>
                            <input id="signature" type="file" ref="signature" v-on:change="idUpload"
                                class="fileinput hidden" required>
                            <p class="text-center">Upload Signature <label for="signature"
                                    class="cursor-pointer text-blue-600">Here</label></p>
                            <p class="text-center ml-3">{{ idImageName }}</p>
                            <a href="/bronchure/example.xlsx" download class="block text-center dowloadtag text-md"><span class="text-red-600 text-md">Note*:</span> All signature should be on a plain white paper</a>
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
            idImageName: '',
            signature: '',
            money: {
                thousands: ",",
                prefix: "₦ ",
                precision: 0,
                masked: false,
            },
        };
    },
    props: ["next", "page", "back", "gadgetdata", "paymentmode"],
    methods: {
        callnext() {
            this.next(this.page);
        },
        previous() {
            this.back(this.page);
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
