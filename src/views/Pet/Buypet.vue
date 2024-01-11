<template>
  <div>
    <div class="mt-8" v-if='petform === 1'>
      <div class="lg:w-3/4 lg:mx-auto">
        <p class="font-semibold">Who's this policy for?</p>
        <form @submit.prevent="validate">
          <div class="mt-4 lg:flex lg:justify-between ">
            <div class="lg:w-full lg:mr-4">
              <label class="container-h border border-solid"
                v-bind:class="[user.includes(self) ? 'border-green-500' : 'border-gray-300']">Myself ({{ self.firstname }}
                {{ self.lastname }})
                <input type="checkbox" v-model="user" :value="self">
                <span class="checkmark-h"></span>
              </label>
              <p class="mt-6 text-sm hidden lg:block" v-if="$store.state.dependants.length < 1">Once a user has been
                selected, you can continue by clicking the <span class="text-green-500">“Proceed for a plan”</span> button
              </p>
              <p class="mt-6 text-sm hidden lg:block" v-else>You currently have more than one dependent, you can select
                one of them, then proceed to buy policies for them by clicking the <span class="text-green-500">“Proceed
                  for a plan”</span> button</p>
            </div>
            <div class="lg:w-full lg:ml-4 mt-6 lg:mt-0">
              <div class="border border-solid px-2 relative"
                :class="[others.hasOwnProperty('firstname') ? 'border-green-500' : 'border-gray-300']"
                style="padding: 10px">
                <select class="outline-none w-full cursor-pointer" v-model="others">
                  <option selected disabled :value="{}">Others (Choose dependant)</option>
                  <option v-for="dependant in dependants" :key="dependant.id" :value="dependant">{{ dependant.firstname }}
                    {{ dependant.lastname }}</option>
                </select>
              </div>
              <p class="mt-6 text-sm lg:hidden" v-if="$store.state.dependants.length < 1">Once a user has been added, you
                can continue by clicking the <span class="text-green-500">“Proceed for a plan”</span> button</p>
              <p class="mt-6 text-sm lg:hidden" v-else>You currently have more than one dependent, you can select one of
                them, then proceed to buy policies for them by clicking the <span class="text-green-500">“Proceed for a
                  plan”</span> button</p>
              <div class="mt-4 flex justify-between items-center">
                <!-- <button type="button" class="block text-sm cursor-pointer" @click="buyMultiple">
                    <font-awesome-icon icon="user-plus" class="text-green-500" />
                    Buy for Many(corporate)
                  </button> -->
                <button type="button" class="block text-sm cursor-pointer" @click="showAddDependant">
                  <font-awesome-icon icon="user-plus" class="text-green-500" />
                  Add user
                </button>
              </div>
            </div>
          </div>
          <div class="hidden lg:block mt-10">
            <button class="block w-full text-green-500 text-right focus:outline-none" v-if="beneficiaryAdded"
              @click="petform = 3">
              Proceed for a plans
              <font-awesome-icon icon="arrow-right" class="text-green-500" />
            </button>
            <p class="text-green-500 text-right opacity-20" v-else>Proceed for a plan <font-awesome-icon
                icon="arrow-right" class="ml-2 text-green-500" /></p>
          </div>
          <div class="block lg:hidden mt-10">
            <button class=" block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden focus:outline-none"
              v-if="beneficiaryAdded" @click="petform = 3">
              Proceed for a plan
              <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <p class="bg-green-500 text-white py-3 text-center rounded opacity-20" v-else>Proceed for a plan
              <font-awesome-icon icon="arrow-right" class="ml-2" />
            </p>
          </div>
        </form>
        <AddDependent v-if="addDependent" v-on:close="closeModal" />
      </div>
    </div>
    <!-- <CoverProvider v-else-if="petform === 2" :petform="next" :page="petform" /> -->
    <div class="mt-8" v-if='petform === 3'>
      <div class="lg:w-3/4 lg:mx-auto">
        <!-- <p class="font-semibold">Who's this policy for?</p> -->
        <form @submit.prevent="validate">
          <div class="mt-4 lg:flex lg:justify-between ">
            <div class="lg:w-full lg:ml-4 mt-6 lg:mt-0">
              <label class="">Policy Type</label>
              <div class="border border-solid px-2 relative mt-3" style="padding: 10px">
                <select class="outline-none w-full cursor-pointer" :value="this.petdata.pet_category_id" type="text"
                  @input="(event) => (this.petdata.pet_category_id = JSON.parse(event.target.value), this.coporatedata.pet_category_id = JSON.parse(event.target.value), this.pet_category_id = JSON.parse(event.target.value))"
                  def>
                  <option value="" selected disabled>Choose Policy Type</option>
                  <option :value="data.id" v-for="data in petCategories" :key="data.id">{{ data.name }}</option>
                  <!-- <option value="coporate">Coporate</option> -->
                </select>
              </div>
            </div>
            <div class="lg:w-full lg:ml-4 mt-6 lg:mt-0">
              <label class="">Pet Type</label>
              <div class="border border-solid px-2 relative mt-3" style="padding: 10px">
                <select class="outline-none w-full cursor-pointer" :value="this.petdata.pet_type_id" type="text"
                  @input="(event) => (this.petdata.pet_type_id = JSON.parse(event.target.value), this.coporatedata.pet_type_id = JSON.parse(event.target.value), this.pet_type_id = JSON.parse(event.target.value))">
                  <option value="" selected disabled>Choose Pet Type</option>
                  <option :value="data.id" v-for="data in petTypes" :key="data.id" :class="data.name === 'Dog' ? data.name : 'hidden' ">{{ data.name === 'Dog' ? data.name : null }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="pt-6">
            <hr>
            <div class="mt-6">
              <div class="mt-4">
              </div>
            </div>
            <div class="lg:ml-3">
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold">Select number of Policy(select muliple for more than 1 )</label>
              <label class="container mt-4">Single
                <input type="radio" v-model="policy" :value="0">
                <span class="checkmark"></span>
              </label>
              <label class="container">Multiple
                <input type="radio" v-model="policy" :value="1">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="hidden lg:block mt-10">
            <button class="block w-full text-green-500 text-right focus:outline-none"
              v-if="petdata.pet_category_id !== '' & petdata.pet_type_id !== '' " @click="next(petform)">
              Next
              <font-awesome-icon icon="arrow-right" class="text-green-500" />
            </button>
            <p class="text-green-500 text-right opacity-20" v-else>Next<font-awesome-icon icon="arrow-right"
                class="ml-2 text-green-500" /></p>
          </div>
          <div class="block lg:hidden mt-10">
            <button class=" block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden focus:outline-none"
              v-if="petdata.pet_category_id !== '' & petdata.pet_type_id !== '' " @click="next(petform)">
              Next
              <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <p class="bg-green-500 text-white py-3 text-center rounded opacity-20" v-else>Proceed for a plan
              <font-awesome-icon icon="arrow-right" class="ml-2" />
            </p>
          </div>
        </form>
      </div>
    </div>
    <CoverForm v-else-if="coverform" :petform="next" :page="petform" :back="back" :policy="policy"
      :policytype="petdata.pet_category_id" :petdata="petdata" :coporatedata="coporatedata" :callnext="callnext" :callback="callback" :paymentmode="paymentmode" />
    <!-- <SingleDogForm v-else-if="petform === 5" :petform="proceed4" /> -->

  </div>
</template>
    
<script>
import AddDependent from '@/components/AddDependant/AddDependentModal'
// import CoverProvider from '@/components/Pet/PetProvider.vue'
import CoverForm from '@/components/Pet/Petform.vue'
// import SingleDogForm from '@/components/Pet/SingleDogForm.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import baseURL from "@/main"

export default {
  components: {
    AddDependent,
    // CoverProvider,
    CoverForm,
    // SingleDogForm
  },
  data() {
    return {
      user: [],
      others: {},
      beneficiaryAdded: false,
      addDependent: false,
      form: 1,
      petform: 1,
      pet_category_id: '',
      pet_type_id: '',
      coverform: false,
      petTypes: [],
      petCategories: [],
      policy: 0,
      paymentmode: [],
      petdata: {
        "underwriter_id": 5,
        "enrollee_id": "",
        "pet_type_id": "",
        "pet_category_id": "",
        "customer_name": "",
        "dob": "",
        "nationality": "",
        "address": "",
        "email": "",
        "occupation": "",
        "employer": "nill",
        "customer_id_type": "",
        "customer_id_issue_date": "",

        "dog_id_number": "",
        "breed_type": "",
        "breed_age": "",
        "acquisition_amount": "",
        "maintenance_cost": "",
        "medication_received": "",
        "health_status": "",
        "id_expiry_date": "",
        "customer_id_number": "",
        "phone": "",
        "employer_address": "nill"
      },
      coporatedata: {
        "underwriter_id": 5,
        "enrollee_id": "",
        "pet_type_id": "",
        "pet_category_id": "",
        "company_name": "",
        "incorporation_number": "",
        "incorporation_date": "",
        "incorporation_state": "",
        "email": "",
        "phone": "",
        "tax_id": "",
        "business_type": "",
        "website": "",
        "office_address": "",

        "director_name": "",
        "director_position": "",
        "director_phone": "",
        "director_idtype": "",
        "director_idnumber": "",
        "director_idissuedate": "",
        "director_idexpirydate": "",
        "director_occupation": "",
        "director_dob": "",
        "director_nationality": "",
        "director_email": "",
        "director_title": "",
        "director_gender": "",
        "director_address": "",
        "dog_id_number": "",
        "breed_type": "",
        "breed_age": "",
        "acquisition_amount": "",
        "maintenance_cost": "",
        "medication_received": "",
        "health_status": ""
      }
    }
  },
  watch: {
    user() {
      if (this.user.length > 0) {
        this.beneficiaryAdded = true
        this.others = {}
      } else if (this.user.length < 1 && !this.others.firstname) {
        this.beneficiaryAdded = false
      }
    },
    others() {
      if (this.others.firstname) {
        this.user = []
        this.beneficiaryAdded = true
      } else if (this.user.length < 1 && !this.others.firstname) {
        this.beneficiaryAdded = false
      }
    },

  },
  computed: {
    ...mapState({
      dependants: state => state.dependants,
      self: state => state.user,
      coverforms: state => state.coverforms,
      // underwriterId: state => state.underwriter_id,

    }),
    // petCategory: {
    //         get() {
    //             return this.petdata.acquisition_amount.toString()
    //         },
    //         set(val) {
    //             this.petdata.acquisition_amount = Number(val).toString()
    //         }
    //     },
  },
  methods: {
    callnext(props) {
      this.petform = props + 1
    },

    callback() {
      this.petform = 3
    },
    back(props) {

      if (this.petform === 6) {
        this.petform = 4
      } else if (this.petform === 7) {
        this.petform === 3
      } else {
        this.petform = props - 1
        if (props <= 3) {
          this.coverform = false
        }
      }
    },
    next(props) {
      if (this.pet_type_id === 2) {
        // this.coverform = true
        this.petform = 8
        if (props >= 3) {
            this.coverform = true

          }
      } else {
        if (this.policy === 1 && this.petform >= 4) {
          this.petform = 6
          // console.log(this.policy === 1 && this.petform >= 3);
        } else {
          this.petform = props + 1
          if (props >= 3) {
            this.coverform = true

          }
        }
      }
    },
    validate() {
      if (this.user.length > 0) {
        this.$store.commit('setBeneficiary', this.user[0])
        this.$store.commit('setBeneficiaryType', 'single')
        // this.$store.commit('setCoverForm', 2)
        // this.$router.push('/app/dashboard/buyhealth/choose')
        // this.form = 2
      } else {
        this.$store.commit('setBeneficiary', this.others)
        this.$store.commit('setBeneficiaryType', 'single')
        this.$router.push('/app/dashboard/buyhealth/choose')
      }
    },
    // buyMultiple() {
    //   this.$store.commit('setBeneficiaryType', 'multiple')
    //   this.$router.push('/app/dashboard/buyhealth/choose')
    // },
    showAddDependant() {
      this.addDependent = true;
      this.$store.commit('setActiveModal', 1)
    },
    // closeModal() {
    //   this.addDependent = false;
    //   this.$store.commit('setActiveModal', 0)
    // },
    petType() {
      axios.get(`${baseURL}/pet/types`)
        .then(res => {
          // console.log(res);
          this.petTypes = res.data.data
          // this.petdata.underwriter_id = this.underwriterId
          this.petdata.enrollee_id = this.self.user_id
          // this.coporatedata.underwriter_id = this.underwriterId
          this.coporatedata.enrollee_id = this.self.user_id
        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
    },
    petCategory() {
      axios.get(`${baseURL}/pet/categories`)
        .then(res => {
          console.log(res);
          this.paymentmode = res.data.data.payment_frequency
          this.petCategories = res.data.data.pet_category
        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
    }
  },
  mounted() {
    this.$store.commit('setActiveModal', 0)

  },
  created() {
    this.petType();
    this.petCategory();
  }
}
</script>
    
<style>
/* The container */
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

/* habeeb */

.container-h {
  display: block;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-h input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark-h {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  opacity: 0.2;
  background-color: #00A859;
}


/* When the checkbox is checked, add a blue background */
.container-h input:checked~.checkmark-h {
  background-color: #00A859;
  opacity: 1
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark-h:after {
  content: "";
  position: absolute;
}

/* Show the checkmark when checked */
.container-h input:checked~.checkmark-h:after {
  display: block;
}

/* Show the checkmark even when not checked */
.container-h input~.checkmark-h:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-h .checkmark-h:after {
  left: 9px;
  top: 5px;
  width: 7px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>