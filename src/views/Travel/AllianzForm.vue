<template>
    <div class="mt-8 lg:w-3/4 lg:mx-auto">
        <div v-if="this.steps === 1">
            <p class="text-green-500">QUOTATION</p>
            <hr />
            <form @submit.prevent="validate">
                <div class="mt-4 lg:flex lg:justify-between">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Purpose Of Travel</label>
                        <input v-model="quote.purpose_of_travel" type="text"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                    </div>
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Booking Type </label>
                        <select v-model.number="quote.booking_type_id"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                            <option disabled selected value="">Select Booking Type</option>
                            <option v-for="booking in bookingType" :key="booking.id" :value="booking.id">{{ booking.name }}
                            </option>
                        </select>
                    </div>
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Email</label>
                        <input :value="user.email" type="email" readonly
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                    </div>
                
                </div>

                <div class="mt-4 lg:flex lg:justify-between">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Phone</label>
                        <input :value="user.phone" type="tel" @input="(e) => validatePhoneNumber(e.target.value)"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                      <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
                    </div>
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Date Of Birth</label>
                        
                        <input v-model="quote.dob" type="date" :max="this.today"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                            <span v-if="quote.booking_type_id === 2" class="block py-1.5 text-red-500 text-sm">* The dob of the oldest member</span>
                    </div>

                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Departure Date</label>
                        <input v-model="quote.cover_begins" type="date" :min="this.today"
                            class="block mt-4 bg-blue-100 px-4 py-2 cursor-pointer w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                    </div>
                </div>

                <div class="mt-4 lg:flex lg:justify-between">
                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Arrival Date</label>
                        <input v-model="quote.cover_ends" type="date" :min="quote.cover_begins"
                            :disabled="quote.cover_begins === ''"
                            class="block mt-4 bg-blue-100 px-4 py-2 cursor-pointer w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                    </div>

                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Country </label>
                        <select v-model="quote.country_id"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                            <option disabled selected value="">Select Country</option>
                            <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}
                            </option>
                        </select>
                    </div>

                    <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Round Trip </label>
                        <select v-model.number="quote.is_round_trip"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            required>
                            <option disabled selected value="">Select Booking Type</option>
                            <option value=false>No</option>
                            <option value=true>Yes</option>
                        </select>
                    </div>
                </div>

                <div class="mt-4 lg:flex lg:justify-between">

                    <div class="lg:w-full lg:mr-3" v-if="quote.booking_type_id === 2">
                        <label class="text-sm font-bold">Number Of People</label>
                        <input v-model.number="quote.no_of_people" type="number"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                    </div>

                    <div class="lg:w-full lg:mr-3" v-if="quote.booking_type_id === 2">
                        <label class="text-sm font-bold" >Number Of Children</label>
                        <!-- <p><span class="text-danger">*</span>Note: Any age below 18 are considered has children</p> -->
                        <input v-model.number="quote.no_of_children" type="text"
                            class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            required>
                            <span v-if="quote.booking_type_id === 2" class="block py-1.5 text-red-500 text-sm">* Any applicant with an age below 18 are considered has children</span>

                    </div>



                </div>

                <br />
                <hr />


                <!-- <div class="mt-4 flex items-center gap-2">
                    <input type="checkbox" v-model="error.terms" :value="1">
                    <p class="text-sm">I accept <button type="button" @click="showTermsModal = true"
                            class="text-blue-500">terms and conditions</button></p>
                </div>
                <p class="text-red-500 text-xs mt-2" v-if="error.terms">Please accept terms</p> -->

                <div class="flex flex-col gap-6 lg:flex-row lg:flex-row-reverse lg:justify-between mt-6 pb-10">
                    <button
                        class="bg-green-500 px-6 text-white py-2 rounded outline-none focus:outline-none block submit">Get
                        Quote</button>
                    <router-link to="/app/dashboard/buytravel/choose"
                        class="bg-gray-500 py-2 rounded text-white block px-6 text-center">
                        Back
                    </router-link>
                </div>

            </form>
        </div>
        <SingleAllianzForm v-if="quote.booking_type_id === 1 && this.steps === 2" :next="this.next" :steps="this.steps" :back="this.back" :quote="quote" :details="this.quotedetails" />
        <div v-else v-for="index in totalNumber" :key="index">
            <AllianzCompleteForm v-if="steps === index + 1" :next="next" :steps="steps" :back="back" :details="quotedetails" :quote="quote" :index="index"
                :familydata="familydata" :totalNumber="totalNumber" />
        </div>
        <transition name="scale">
            <PreviewQuote v-if="this.showQuote" :close="this.close" :next="this.next" :steps="this.steps"
                :details="this.quotedetails" />
        </transition>

    </div>
</template>
  
<script>
import PreviewQuote from "@/components/Travel/PreviewQuote"
import { mapState } from 'vuex'
import AllianzCompleteForm from '@/components/Travel/AllianzCompleteForm';
import axios from 'axios'
import baseURL from "@/main"
import SingleAllianzForm from "@/components/Travel/SingleAllianzForm.vue";
export default {
    components: {
      SingleAllianzForm,
        AllianzCompleteForm,
        PreviewQuote,
    },
    data() {
        return {
            showQuote: false,
            countries: [],
            bookingType: [],
            steps: 1,
            error: {
                terms: false,
                phone: ''
            },
            today: new Date(),
            quote: {
                "underwriter_id": 0,
                "user_id": 0,
                "dob": "",
                "email": "",
                "telephone": "",
                "cover_begins": "",
                "cover_ends": "",
                "country_id": "",
                "purpose_of_travel": "",
                "booking_type_id": 0,
                "is_round_trip": false,
                "no_of_people": 0,
                "no_of_children": 0,
            },
            quotedetails: {},
            familydata: [],
            totalNumber: 0
        }
    },
    computed: {
        ...mapState({
            user: state => state.user,
            underwriter_id: state => state.underwriter_id
        }),
    },
    methods: {
      close() {
        this.showQuote = false
      },
      next(props) {
        this.steps = props + 1
      },
      back(props) {
        this.steps = props - 1
      },
      // getNumberofuser() {
      //     for (var i = 0; i < this.quote.no_of_people; i++) {
      //         let container = <AllianzCompleteForm v-if="this.steps === 2" :next="this.next" :steps="this.steps" :back="this.back" :details="this.quotedetails" />
      //     }
      // },
      formttedDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
        const day = String(today.getDate()).padStart(2, '0');
        console.log(`${year}-${month}-${day}`);
        this.today = `${year}-${month}-${day}`
        return `${year}-${month}-${day}`;
      },
      validatePhoneNumber(phoneNumber) {
        // Remove non-digit characters
        this.quote.telephone = phoneNumber
        const digitsOnly = phoneNumber.replace(/\D/g, '');

        const expectedLength = 11; // Adjust this based on the country or format
        // console.log(digitsOnly.length)
        if (digitsOnly.length === expectedLength){
          this.quote.telephone = phoneNumber
          this.error.phone = ""
        }else {
          // this.quote.telephone = ''
          this.error.phone = "Invalid Phone Number"
        }
        // Check if the length is valid
        return digitsOnly.length === expectedLength;
      },
        validate() {
        this.totalNumber = this.quote.no_of_people + this.quote.no_of_children + 1
            let data = {
                "underwriter_id": this.underwriter_id,
                "user_id": this.user.user_id,
                "dob": this.quote.dob,
                "email": this.user.email,
                "telephone": this.user.phone,
                "cover_begins": this.quote.cover_begins,
                "cover_ends": this.quote.cover_ends,
                "country_id": JSON.stringify(this.quote.country_id),
                "purpose_of_travel": this.quote.purpose_of_travel,
                "booking_type_id": this.quote.booking_type_id,
                "is_round_trip": this.quote.is_round_trip === "true" ? true : false,
                "no_of_people": this.quote.booking_type_id !== 1 ? this.quote.no_of_people : 1,
                "no_of_children": this.quote.no_of_children
            }
            this.$store.commit('startLoading')
            axios({ url: `${baseURL}/allianz/travel/quote`, data, method: 'POST' })
                .then((res) => {
                    console.log(res.data.data)
                    this.quotedetails = res.data.data
                    this.showQuote = true
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })

        },
        getCountries() {
            axios({ url: `${baseURL}/country`, method: 'GET' })
                .then(res => {
                    this.countries = res.data.data
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.commit('endLoading')
                    this.$store.dispatch('handleError', err)
                })
        },
        getBookingType() {
            axios({ url: `${baseURL}/travel-category`, method: 'GET' })
                .then(res => {


                    this.bookingType = res.data.data
                    this.$store.commit('endLoading')
                    // this.$store.commit('setSuccess', {status: true, msg: res.data.message})

                })
                .catch(err => {
                    this.$store.commit('endLoading')
                    this.$store.dispatch('handleError', err)
                })
        },
        closePayment() {
            this.$store.commit('endLoading')
            this.$store.commit('setError', { status: true, msg: "Payment cancelled" })
        },

    },
    mounted() {
        this.getBookingType();
        this.getCountries()
        this.formttedDate()
    }
}
</script>
  
<style scoped>
input,
select,
.input {
    background-color: #e2f5ec;
    border-radius: 0.25rem;
}

.fileinput {
    background-color: #fff;
}

.filelabel {
    cursor: pointer;
    display: block;
    padding: 10px 10px;
    position: relative;
    background: #131b47;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.radiobtn {
    cursor: pointer;
    padding: 8px 15px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.filelabel input,
.radiobtn input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

@media only screen and (min-width: 768px) {
    .submit {
        max-width: 200px
    }
}</style>