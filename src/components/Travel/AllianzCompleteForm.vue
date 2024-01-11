<template>
  <form class="mt-6" @submit.prevent="validate">
    <p class="text-green-500">COMPLETE FORM  {{ this.index }}</p>
    <hr />
    <div class="mt-4 lg:flex lg:justify-between">
      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Title</label>
        <select id="title_id" v-model.number="allianzdata.title_id"
                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
          <option disabled selected value="">Select Title</option>
          <option v-for="title in title" :key="title.id" :value="title.id">{{ title.name }}</option>
        </select>
      </div>
      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Surname</label>
        <input id="" type="text" v-model="allianzdata.lastname"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
      </div>
      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Firstname</label>
        <input id="Telephone" type="text" v-model="allianzdata.firstname"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
      </div>
    </div>

    <div class="mt-4 lg:flex lg:justify-between">

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Middle Name</label>
        <input type="text" v-model="allianzdata.middlename"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Email</label>
        <input type="text" v-model="allianzdata.email"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required >
      </div>

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Phone No</label>
        <input type="tel" :value="allianzdata.phone" @input="(e) => validatePhoneNumber(e.target.value)"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
        <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>

      </div>

    </div>

    <div class="mt-4 lg:flex lg:justify-between">
      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Gender</label>
        <select v-model.number="allianzdata.gender_id"
                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
          <option disabled selected value="">Select Gender</option>
          <option v-for="gender in genders" :key="gender.id" :value="gender.id">{{ gender.name }}</option>
        </select>
      </div>
      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Date Of Birth </label>
        <input type="date" v-model="allianzdata.dob"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>
      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Nationality </label>
        <input type="text" v-model="allianzdata.nationality"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>
    </div>

    <div class="mt-4 lg:flex lg:justify-between">

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">State Of Residence</label>
        <select v-model.number="allianzdata.state_id"
                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
          <option disabled selected value="">Select State Of Residence</option>
          <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
        </select>
      </div>

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Address</label>
        <input type="text" v-model="allianzdata.address"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
      </div>

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">ZipCode </label>
        <input v-model="allianzdata.zip_code" type="text"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>

    </div>

    <div class="mt-4 lg:flex lg:justify-between">

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Marital Status</label>
        <select v-model.number="allianzdata.marital_status_id"
                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
          <option disabled selected value="">Marital Status</option>
          <option v-for="status in maritalstatus" :key="status.id" :value="status.id">{{ status.name }}</option>
        </select>
      </div>

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Ocupation</label>
        <input v-model="allianzdata.occupation" type="text"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Passport No</label>
        <input v-model="allianzdata.passport_no" type="text"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>

    </div>

    <div class="mt-4 lg:flex lg:justify-between">

      <div class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Pre Existing Medical Condition</label>
        <select v-model="allianzdata.pre_exisiting_medical_condition"
                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
          <option disabled selected value="">Pre Existing Medical Condition</option>
          <option :value=true>Yes</option>
          <option :value=false>No</option>
        </select>
      </div>

      <div v-if="allianzdata.pre_exisiting_medical_condition" class="lg:w-full lg:mr-3">
        <label class="text-sm font-bold">Medical Condition </label>
        <input v-model="allianzdata.medical_condition" type="text"
               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
               required>
      </div>

    </div>
    <div class="pt-6">
      <hr />
      <p class="text-green-500 pt-3">Next Of Kin</p>
      <div class="mt-4 lg:flex">
        <div class="lg:w-full lg:mr-3">
          <div class="lg:flex"></div>
          <div class="mt-4 lg:flex lg:justify-between">

            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">FullName</label>
              <input v-model="allianzdata.next_of_kin_name" type="text"
                     class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                     required>
            </div>

            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Relationship</label>
              <input v-model="allianzdata.next_of_kin_relationship" type="text"
                     class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                     required>
            </div>

            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Telephone </label>
              <input v-model="allianzdata.next_of_kin_phone" type="text"
                     class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                     required>
            </div>

          </div>
          <div class="mt-4 lg:flex lg:justify-between">

            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Address</label>
              <input v-model="allianzdata.next_of_kin_address" type="text"
                     class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                     required>
            </div>

            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Address</label>
                <input type="text" v-model="allianzdata.address"
                    class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
            </div>

            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">ZipCode </label>
                <input v-model="allianzdata.zip_code" type="text"
                    class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required>
            </div>

        </div>

        <div class="mt-4 lg:flex lg:justify-between">

            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Marital Status</label>
                <select v-model.number="allianzdata.marital_status_id"
                    class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required>
                    <option disabled selected value="">Marital Status</option>
                    <option v-for="status in maritalstatus" :key="status.id" :value="status.id">{{ status.name }}</option>
                </select>
            </div>

            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Ocupation</label>
                <input v-model="allianzdata.occupation" type="text"
                    class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required>
            </div>

          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Passport No</label>
            <input :value="allianzdata.passport_no" @input="(e) => validatePassportNo(e.target.value)"  type="text"
                   class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                   required>
            <span class="block py-1.5 text-red-500 text-sm">{{error.passportNo}}</span>

          </div>

        </div>

        <div class="mt-4 lg:flex lg:justify-between">

            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Pre Existing Medical Condition</label>
                <select v-model="allianzdata.pre_exisiting_medical_condition"
                    class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required>
                    <option disabled selected value="">Pre Existing Medical Condition</option>
                    <option :value=true>Yes</option>
                    <option :value=false>No</option>
                </select>
            </div>

            <div v-if="allianzdata.pre_exisiting_medical_condition" class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Medical Condition </label>
                <input v-model="allianzdata.medical_condition" type="text"
                    class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required>
            </div>
</div>
        </div>
        </div>
        </div>

        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">Next Of Kin</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex lg:justify-between">

                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">FullName</label>
                            <input v-model="allianzdata.next_of_kin_name" type="text"
                                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                required>
                        </div>

                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Relationship</label>
                            <input v-model="allianzdata.next_of_kin_relationship" type="text"
                                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                required>
                        </div>

                      <div class="lg:w-full lg:mr-3">
                        <label class="text-sm font-bold">Telephone </label>
                        <input :value="allianzdata.next_of_kin_phone" @input="(e) => validatePhoneNumber(e.target.value)" type="text"
                               class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                               required>
                        <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>

                      </div>

                    </div>
                    <div class="mt-4 lg:flex lg:justify-between">

                        <div class="lg:w-full lg:mr-3">
                            <label class="text-sm font-bold">Address</label>
                            <input v-model="allianzdata.next_of_kin_address" type="text"
                                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                required>
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
                <a @click="previous" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </a>
            </button>
        </div>
        <transition name="scale">
            <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard" />
        </transition>
        <transition name="scale">
            <ReviewModal v-if="showReviewModal" tett="managetravel" />
        </transition>
        <div v-show="showPaystack">
            <Paystack ref="paystackbutton"
                class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
                :amount="paystackData.amount" :email="paystackData.email" :paystackkey="paystackData.public_key"
                :reference="paystackData.reference" :callback="verifyPayment" :close="closePayment"
                :channels="paystackData.channels">
      </Paystack>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import Paystack from "vue-paystack";
import axios from 'axios';
import baseURL from "@/main";
import PaymentMethod from "@/components/Travel/PaymentMethod"
import ReviewModal from "@/components/Vehicle/ReviewModal"
export default {
    components: {
        Paystack, PaymentMethod, ReviewModal
    },
    data() {
        return {
            paystackData: {
                public_key: '',
                email: '',
                amount: 0,
                reference: ''
            },
          error: {
            terms: false,
            phone: ''
          },
            showMethodModal: false,
            travelId: 0,
            showReviewModal: false,
            qualified_vet: 0,
            medicalcondition: false,
            title: [],
            states: [],
            countries: [],
            showPaystack: false,
            genders: [],
            maritalstatus: [],
            allianzdata: {
                "firstname": "",
                "lastname": "",
                "middlename": "",
                "email": "",
                "phone": "",
                "quote_id": 0,
                "gender_id": 0,
                "title_id": 0,
                "dob": "",
                "state_id": 0,
                "address": "",
                "zip_code": "",
                "nationality": "",
                "passport_no": "",
                "occupation": "",
                "marital_status_id": 0,
                "pre_exisiting_medical_condition": false,
                "medical_condition": "",
                "next_of_kin_name": "",
                "next_of_kin_address": "",
                "next_of_kin_relationship": "",
                "next_of_kin_phone": ""
            }
        };
    },
    props: ["next", "steps", "back", "details", "familydata", "index", "totalNumber", "quote"],
    methods: {
        callnext() {
            this.next(this.steps);
        },
        previous() {
            this.back(this.steps)
        },
        getTitle() {
            axios({ url: `${baseURL}/titles`, method: 'GET' })
                .then(res => {
                  console.log(this.user)
                    this.title = res.data.data
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.commit('endLoading')
                    this.$store.dispatch('handleError', err)
                })
        },
        getStates() {
            axios({ url: `${baseURL}/states`, method: 'GET' })
                .then(res => {
                    this.states = res.data.data.states
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.commit('endLoading')
                    this.$store.dispatch('handleError', err)
                })
        },
        getGender() {
            axios({ url: `${baseURL}/gender`, method: 'GET' })
                .then(res => {
                    console.log(res);
                    this.genders = res.data.data
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.commit('endLoading')
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
        getMaritalStatus() {
            axios({ url: `${baseURL}/marital-status`, method: 'GET' })
                .then(res => {
                    this.maritalstatus = res.data.data
                    console.log(res);
                    this.$store.commit('endLoading')
                })
                .catch(err => {
                    this.$store.commit('endLoading')
                    this.$store.dispatch('handleError', err)
                })
        },
        validate() {
            console.log(this.totalNumber,this.steps);
            // let no = JSON.parse(this.details.no_people)
            let data = {
                    "firstname": this.user.firstname,
                    "lastname": this.user.lastname,
                    "middlename": this.allianzdata.middlename,
                    "email": this.allianzdata.email,
                    "phone": this.allianzdata.phone,
                    "quote_id": this.details.travel_quote_id,
                    "gender_id": this.allianzdata.gender_id,
                    "title_id": this.allianzdata.title_id,
                    "dob": this.allianzdata.dob,
                    "state_id": this.allianzdata.state_id,
                    "address": this.allianzdata.address,
                    "zip_code": this.allianzdata.zip_code,
                    "nationality": this.allianzdata.nationality,
                    "passport_no": this.allianzdata.passport_no,
                    "occupation": this.allianzdata.occupation,
                    "marital_status_id": this.allianzdata.marital_status_id,
                    "pre_exisiting_medical_condition": this.allianzdata.pre_exisiting_medical_condition,
                    "medical_condition": this.allianzdata.medical_condition,
                    "next_of_kin_name": this.allianzdata.next_of_kin_name,
                    "next_of_kin_address": this.allianzdata.next_of_kin_address,
                    "next_of_kin_relationship": this.allianzdata.next_of_kin_relationship,
                    "next_of_kin_phone": this.allianzdata.next_of_kin_phone
                }
          if (this.quote.booking_type_id === 1) {
            this.$store.commit('startLoading')
            axios({ url: `${baseURL}/allianz/travel/policy`, data, method: 'POST' })
                .then((res) => {
                  console.log(res.data.data)
                  // this.quotedetails = res.data.data
                  // this.showQuote = true
                  this.travelId = res.data.data.user_travel_id
                  this.$store.commit('saveTravelId', res.data.data)
                  this.initiatePayment()
                  this.$store.commit('endLoading')
                })
                .catch(err => {
                  this.$store.dispatch('handleError', err)
                })
          } else {
            if (this.steps < this.totalNumber ) {
              this.next(this.steps);
              this.familydata.push(data)
            } else {
              this.familydata.push(data)
              this.$store.commit('startLoading')
              axios({ url: `${baseURL}/allianz/travel/family/policy`, data: this.familydata, method: 'POST' })
                  .then((res) => {
                    console.log(res.data.data)
                    // this.quotedetails = res.data.data
                    // this.showQuote = true
                    this.travelId = res.data.data.user_travel_id
                    this.$store.commit('saveTravelId', res.data.data)
                    this.initiatePayment()
                    this.$store.commit('endLoading')
                  })
                  .catch(err => {
                    this.$store.dispatch('handleError', err)
                  })


            }
          }




        },
        initiatePayment() {
            if (!this.user.has_card) return this.payNow()
            this.showMethodModal = true
        },
        payWithCard(str) {
            this.showMethodModal = false

            if (str === 'old') {
                //var travel_id = this.saveTravelData(this.details)
                this.$router.push('/app/dashboard/buytravel/4')
            } else if (str === 'new') {
                this.showMethodModal = false 
                this.payNow()
            }
            return
        },
        payNow() {
            this.$store.commit('startLoading')
            let data = {
                user_travel_id: this.travelId,
                card_id: 0
            }
            console.log(data)
            axios({ url: `${baseURL}/travel/payment/init`, data: data, method: 'POST' })
                .then(res => {
                    this.showPaystack = true
                    this.paystackData = res.data.data
                    this.paystackData.channels = this.paystackChannels
                    this.$refs.paystackbutton.payWithPaystack(this.paystackData)
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
        verifyPayment() {
            axios({ url: `${baseURL}/travel/payment/verify`, data: { 'reference': this.paystackData.reference }, method: 'POST' })
                .then(res => {
                    this.$store.commit('endLoading')
                    this.$store.commit('setSuccess', { status: true, msg: res.data.message })
                    this.showReviewModal = true
                    // this.$router.push('/app/dashboard/managetravel')
                })
                .catch(err => {
                    // console.log(err)
                    this.$store.commit('endLoading')
                    this.$store.commit('setError', { status: true, msg: err.response.data.message })
                })
        },
        closePayment() {
            this.$store.commit('endLoading')
            this.$store.commit('setError', { status: true, msg: "Payment cancelled" })
        },
      validatePhoneNumber(phoneNumber) {
        // Remove non-digit characters
        this.allianzdata.phone = phoneNumber
        const digitsOnly = phoneNumber.replace(/\D/g, '');

        const expectedLength = 11; // Adjust this based on the country or format
        if (digitsOnly.length === expectedLength){
          this.allianzdata.phone = phoneNumber
          this.error.phone = ""
        }else {
          this.error.phone = "Invalid Phone Number"
        }
        // Check if the length is valid
        return digitsOnly.length === expectedLength;
      },
     
  },
  watch: {
  },
  computed: {
    ...mapState({
      beneficiary: (state) => state.beneficiary,
      underwriterId: (state) => state.underwriter_id,
      user: (state) => state.user,

    }),
  },
  created() {
    // Log computed properties in the created hook
    console.log('User:', this.user)
  },

  mounted() {
    this.getGender();
    this.getStates();
    this.getTitle();
    this.getMaritalStatus();
    this.getCountries();

  },
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
