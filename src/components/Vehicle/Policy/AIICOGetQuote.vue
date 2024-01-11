<template>
  <form class="mt-6" @submit.prevent="validateForm">
    <p class="text-green-500">Vehicle Cover</p>
    <div class="mt-4 lg:flex">
      <div class="lg:w-3/4 lg:mr-3">
        <div class="lg:flex">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Vehicle Make</label>
            <div class="relative">
              <select v-model="vehicle"
                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
                <option v-for="make in data.vehicle_make" :key="make.id" :value="make">{{ make.name }}</option>
              </select>
              <p v-if="Object.keys(vehicle).length === 0" class="absolute text-gray-500" style="top: 8px; left: 8px">E.g
                Toyota</p>
            </div>

            <div class="mt-4">
              <label class="text-sm font-bold">Payment Frequency<span class="text-red-500">*</span></label>
              <div class="relative">
                <span v-if="vehicle_category_id !== 1">
                  <select v-model="payment_frequency_id"
                    class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required>
                    <!-- <option disabled selected value="">Select Gender</option> -->
                    <option v-for="payment in data.payment_frequency" :key="payment.id" :value="payment.id">
                      {{ payment.name }}</option>
                  </select>
                  <p v-if="payment_frequency_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select
                    Frequency</p>
                </span>
                <span v-else>
                  <select v-model="payment_frequency_id"
                    class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    required>
                    <!-- <option disabled selected value="">Select Gender</option> -->
                    <option :value="data.payment_frequency[2].id">{{ data.payment_frequency[2].name }}</option>
                  </select>
                  <p v-if="payment_frequency_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select
                    Frequency</p>
                </span>
              </div>
            </div>
          </div>


          <div class="lg:w-full lg:mr-3 lg:ml-3 mt-4 lg:mt-0">
            <label class="text-sm font-bold">Vehicle Model</label>
            <div class="relative">
              <select v-model="vehicle_model_id"
                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
                <!-- <option disabled selected value="" class="text-opacity-10">Select Model</option> -->
                <option v-for="model in models" :key="model.id" :value="model.id">{{ model.name }}</option>
              </select>
              <p v-if="vehicle_model_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select Model</p>
            </div>

            
            <div class="mt-4" v-if="vehicle_category_id === 2">
              <label class="text-sm font-bold">Car Value (in Naira)</label>
              <money v-model="vehicle_value" v-bind="money"
                class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required></money>
              <!-- <input ref="inputRef" v-model="vehicle_value"  type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="e.g #2,500,000" required> -->
              <p class="text-red-500 text-sm" v-if="error.value">Please enter a valid amount</p>
            </div>
          </div>
          <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
            <label class="text-sm font-bold">Vehicle Type</label>
            <div class="relative">
              <select v-model="vehicle_class_id"
                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required>
                <option v-for="type in data.vehicle_class" :key="type.id" :value="type.id">{{ type.name }}</option>
              </select>
              <p v-if="vehicle_class_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p>
            </div>
          </div>


        </div>
        <div class="mt-4 lg:flex">



        </div>


      </div>
      <div class="lg:w-1/4 lg:ml-3 mt-4 lg:mt-0">
        <div>
          <label class="text-sm font-bold">Vehicle Usage</label>
          <div class="relative">
            <select v-model="vehicle_usage_id"
              class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required>
              <option v-for="type in data.vehicle_usage" :key="type.id" :value="type.id">{{ type.name }}</option>
            </select>
            <p v-if="vehicle_usage_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p>
          </div>
        </div>

      </div>
    </div>
    <div class="pt-6">
      <hr>
      <div class="mt-6">
        <div class="mt-8 lg:flex justify-between">
          <div class="mr-3">



            <div class="mt-4">


            </div>
            <div class="lg:ml-3">





              <div class="mt-4" v-if="vehicle_category_id !== 1">
                <label class="text-sm font-bold">Do you want flood cover?(extra charges apply)</label>
                <label class="container mt-4">Yes
                  <input type="radio" v-model="flood_cover" :value="1">
                  <span class="checkmark"></span>
                </label>
                <label class="container">No
                  <input type="radio" v-model="flood_cover" :value="0">
                  <span class="checkmark"></span>
                </label>
              </div>
              <!-- <button class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">Get Quote</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex justify-between mt-10">

      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
        <router-link to="/app/dashboard/buyvehicle/2"
          class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
          <font-awesome-icon icon="arrow-left" class="mr-8" />
          Back
        </router-link>
      </button>
      <button
        class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
        Get Quote
        <font-awesome-icon icon="arrow-right" class="ml-3" />
      </button>
    </div>
    <div class="block lg:hidden mt-10">
      <button
        class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
        Get Quote
        <font-awesome-icon icon="arrow-right" class="ml-3" />
      </button>
      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
        <router-link to="/app/dashboard/buyvehicle/2"
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
import axios from 'axios'
import baseURL from "@/main"
export default {
  components: {
    Money
  },
  data() {
    return {
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      vehicle: {},
      vehicle_make_id: '',
      vehicle_model_id: '',
      vehicle_class_id: '',
      vehicle_usage_id: '',

      payment_frequency_id: '',

      vehicle_value: 0,

      models: [],

      flood_cover: 0,

      error: {

        value: false,

      },
    }
  },
  methods: {
    idUpload() {
      this.idImageName = this.$refs.idImage.files[0].name
      this.error.idImage = false
      let fileToLoad = this.$refs.idImage.files[0];
      let fileReader = new FileReader();
      let vm = this
      fileReader.onload = function (fileLoadedEvent) {
        vm.idImage = fileLoadedEvent.target.result; // <--- data: base64
      }
      fileReader.readAsDataURL(fileToLoad);
    },
    regUpload() {
      this.regImageName = this.$refs.regImage.files[0].name
      this.error.regImage = false
      let fileToLoad = this.$refs.regImage.files[0];
      let fileReader = new FileReader();
      let vm = this
      fileReader.onload = function (fileLoadedEvent) {
        vm.regImage = fileLoadedEvent.target.result; // <--- data: base64
      }
      fileReader.readAsDataURL(fileToLoad);
    },
    validateForm() {
      if (Object.values(this.error).includes(true)) {
        return
      } else {
        // this.$store.commit('startLoading')
        this.$store.commit('setPaymentFrequencyId', this.payment_frequency_id)
        const data = {
          underwriter_id: this.underwriterId,
          enrollee_id: this.beneficiary.user_id,
          address: this.beneficiary.address,
          vehicle_make_id: this.vehicle_make_id,
          vehicle_model_id: this.vehicle_model_id,
          vehicle_class_id: this.vehicle_class_id,
          vehicle_usage_id: this.vehicle_usage_id,


          vehicle_value: 0 * 100,

          flood_cover: parseInt(this.flood_cover),
          excess_buyback: 1,

          payment_frequency_id: this.payment_frequency_id
        }
        // console.log(data)

        if (this.vehicle_category_id == 1) {
          // console.log('calling thirdparty')
          this.$store.commit('saveVehicleQuote', data)
          this.$emit('submitThirdPartyQuote', data)
        } else {
          // console.log('calling comprehensive')
          this.$store.commit('saveVehicleQuote', data)
          this.$emit('submitComprehensiveQuote', data)
        }
      }
    },
    getResources() {
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/vehicle/resources/aiico`)
        .then(res => {
          this.$store.commit('setAiccoVehicleResources', res.data.data)
          this.$store.commit('endLoading')
        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
    }
  },
  watch: {
    vehicle() {
      if (this.vehicle.id) {
        this.vehicle_make_id = this.vehicle.id
        this.models = this.vehicle.models
      }
    },
    vehicle_make_id() {
      this.vehicle_model_id = ''
    },

    vehicle_value() {
      if (/^\d*$/.test(this.vehicle_value)) {
        this.error.value = false
      } else {
        this.error.value = true
      }
    },
    bvn() {
      if (/^\d{11}$/.test(this.bvn)) {
        this.error.bvn = false
      } else {
        this.error.bvn = true
      }
    },
  },
  computed: {
    ...mapState({
      vehicle_category_id: state => state.vehicle_category_id,
      beneficiary: state => state.beneficiary,
      underwriterId: state => state.underwriter_id,
      data: state => state.vehicle.aiicoResources
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
  top: 6px;
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

select:focus+p {
  display: none;
}

@media only screen and (min-width: 1024px) {
  .platebox {
    width: 193px
  }
}</style>