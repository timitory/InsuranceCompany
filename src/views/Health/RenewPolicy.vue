
<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-1/2 mx-auto rounded px-4 lg:px-8 py-6">
        <div class="flex justify-end">
<!--          <h1>Renew Policy</h1>-->
          <div @click="close"  class="top-2">
            <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </div>
        </div>
        <div class="flex justify-between p-2.5">
          <h1 class="font-bold">Renew Policy</h1>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
        <form @submit.prevent="renewPolicy" class="pt-6 relative metaData_container">
          <div class="flex justify-between">
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Choose Plan</label>
              <div class="relative">
                <select v-model="planID" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                  <option value="" disabled>Select Plan</option>
                  <option v-for="(plan, index) in renewalInfo.renewalPlans" :key="index" :value="plan.PlanId">{{`${plan.Name}(${plan.MonthlyCost}/ ${plan.AnnualCost})`}}</option>
                </select>
              </div>
            </div>
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">State of Residence</label>
              <div class="relative">
                <select v-model="stateID" @change="onLgaChange" :disabled="planID == ''" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                  <option value="" disabled>Select State</option>
                  <option v-for="(state, index) in renewalInfo.states" :key="index" :value="state.StateID">{{state.Name}}</option>
                </select>
              </div>
            </div>
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">LGA of Residence</label>
              <div class="relative">
                <select placeholder="Select Lga" v-model="lgaID"  class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                  <option value="" disabled>Select Lga</option>
                  <option v-for="(lga, index) in lga" :key="index" :value="lga.LgaID">{{lga.Name}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex justify-between pt-2.5">
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Choose hospital</label>
              <div class="relative">
                <select v-model="hospital_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                  <option value="" disabled>Select Preferred Hospital</option>
                  <option v-for="(hospital, index) in renewalInfo.hospitals" :key="index" :value="hospital.ID">{{hospital.HospitalName}}</option>
                </select>
              </div>
              <p class="text-sm text-red-600 italic">{{err.hospital}}</p>
            </div>
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Payment Frequency</label>
              <div class="relative">
                <select v-model.number="payment_frequency" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                  <!-- <option v-for="(option, index) in payment_frequency" :key="index" :value="option.id">{{option.name}}</option>
                   -->
                  <option value="" disabled>Select Payment Frequency</option>
                  <option value="1">1 Month</option>
                  <option value="2">2 Months</option>
                  <option value="3">3 Months</option>
                  <option value="4">4 Months</option>
                  <option value="5">5 Months</option>
                  <option value="6">6 Months</option>
                  <option value="7">7 Months</option>
                  <option value="8">8 Months</option>
                  <option value="9">9 Months</option>
                  <option value="10">10 Months</option>
                  <option value="11">11 Months</option>
                  <option value="12">12 Months</option>
                </select>
              </div>
            </div>
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold pt-2.5"></label>
              <div class="relative">
                <input hidden />
              </div>
            </div>
          </div>

          <button class="block w-full mx-auto bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" style="max-width: 300px">Submit</button>

          <section class="w-10/12">

          </section>
        </form>
      </div>
    </div>
  </div>
</template>
<script >
import axios from "axios";
import baseURL from "@/main";

export default {
  data() {
    return {
      planID: '',
      stateID: '',
      lgaID: '',
      payment_frequency: '',
      hospital_id: '',
      lga: [],
      err: {
        hospital: ''
      }
    }
  },
  props: {
    renewalInfo: {
      type: Object,
      default: null,
    },
    enrollee: {
      type: Object,
      default: null,
    }
  },

  methods: {
    getHospital(data){

      axios({url:`${baseURL}/hmo/hospitals`, data , method: 'POST'})
          .then((res)=> {
            console.log(res.data.data)
            console.log(res.data.data.hospitals)
            this.renewalInfo.hospitals = res.data.data.hospitals
            this.err.hospital = ''
          })
          .catch((err)=> {
            console.log(err.response.data.message)
            this.err.hospital = err.response.data.message
            this.$store.dispatch('handleError', err)
          })
    },
    getLga(stateID){
      // this.$emit('getLga', stateID)
      console.log(this.renewalInfo.lgas)
      axios({url:`${baseURL}/hmo/lga`,data: {
          state_id: stateID
        } , method: 'POST'})
          .then((res)=> {
            console.log(res)
            this.lga = res.data.data;
            console.log(this.lga)

          })
          .catch((err)=> {
            console.log(err)
            this.$store.dispatch('handleError', err)
          })
    },
    async onLgaChange(event) {
      const selectedValue = event.target.value;
      await this.getLga(selectedValue);
    },
    renewPolicy() {
      let data = {
        "user_id": this.enrollee.user.id,
        "plan_id": this.planID.toString(),
        "payment_frequency": this.payment_frequency,
        "state_of_residence": this.stateID,
        "lga_of_residence": this.lgaID,
        "hospital_id": this.hospital_id.toString(),
        "user_hmo_id": this.enrollee.user_hmo_id
      }
      console.log(data)
      this.$emit('submit', data)
      // this.$store.commit('startLoading')
      // axios.post(`${baseURL}/hmo/policy/renew`, data)
      //     .then( res => {
      //       console.log(res.data.data)
      //       this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      //       this.$store.commit('endLoading')
      //       this.close()
      //     })
      //     .catch(err => {
      //       this.$store.commit('endLoading')
      //       this.$store.commit('setError', {status: true, msg: err.response.data.message})
      //       this.$store.dispatch('handleError', err)
      //     })
    },
    close() {
      this.$emit('close')
    }
  },
  watch: {

    lgaID() {
      if (this.lgaID) {
        let data = {
          PlanID: this.planID.toString(),
          StateId: this.stateID.toString(),
          LgaId: this.lgaID.toString(),
        }
        console.log(data)
        this.getHospital(data)

      }
    }
  },
  created() {
    console.log(this.renewalInfo.renewalPlans)
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
</style>