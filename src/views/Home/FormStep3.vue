<template>
  <div class="mt-8 lg:w-3/4 lg:mx-auto">
    <p class="mt-4">Required Information</p>
    <p class="mt-2 font-light text-sm">Basic/Standard/Premium Plan</p>
    <hr class="mt-2">
    <!-- =====FIRST FORM==== -->
    <div class="mt-6">
      <p class="mt-4 text-green-500 font-semibold">Personal Biodata</p>
      <form @submit.prevent="submitForm1" class="mt-4 lg:pb-28">
        <div class="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="">
            <label class="text-sm font-bold">First Name</label>
            <div class="input block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              {{beneficiary.firstname}}
            </div>
          </div>
          <div class="">
            <label class="text-sm font-bold">Last Name</label>
            <div class="input block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              {{beneficiary.lastname}}
            </div>
          </div>
          <div class="">
            <label class="text-sm font-bold">Email address</label>
            <div class="input block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              {{beneficiary.email}}
            </div>
          </div>
          <div class="">
            <label class="text-sm font-bold">Phone number</label>
            <div class="input block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              {{beneficiary.phone}}
            </div>
          </div>
          <div class="">
            <label class="text-sm font-bold">Gender<span class="text-red-500">*</span></label>
            <select v-model="gender_id" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select Gender</option>
              <option v-for="gender in data.gender" :key="gender.id" :value="gender.id">{{gender.name}}</option>
            </select>
          </div>
          <div class="mt-4 lg:mt-0">
            <label class="text-sm font-bold">Select payment frequency<span class="text-red-500">*</span></label>
            <select v-model="payment_frequency_id" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select frequency</option>
              <option v-for="frequency in data.frequency" :key="frequency.id" :value="frequency.id">{{frequency.name}}</option>
            </select>
          </div>
        </div>
        <button style="background: #00A859" class="block w-full lg:w-auto mt-16 text-white px-12 py-2 rounded lg:float-right focus:outline-none">Proceed</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
export default {
 
  data(){
    return {
      gender_id: '',
      payment_frequency_id: '',
    }
  },
  methods: {
    submitForm1(){
      this.$store.commit('startLoading')
      let data = {
        firstname: this.beneficiary.firstname,
        lastname: this.beneficiary.lastname,
        email: this.beneficiary.email,
        phone: this.beneficiary.phone,
        plan_id: this.home_plan_id,
        gender_id : this.gender_id,
        payment_frequency_id : this.payment_frequency_id,
      }
      axios({url: `${baseURL}/homecontent/register`, data : data, method: 'POST'})
      .then(res => {
        this.$store.commit('setUserHomeId', res.data.data.user_home_id)
        this.$store.commit('endLoading')
        this.$router.push('/app/dashboard/buyhome/4')
      })
      .catch(err =>{
        this.$store.dispatch('handleError', err)
      })
    }, 
    
  },
  computed:{
    ...mapState({
       home_plan_id: state => state.home_plan_id,
       beneficiary: state => state.beneficiary,
       data: state => state.home.resources
    }),
  },
  mounted(){
    this.$store.commit('endLoading')
  },
}
</script>

<style scoped>
input, select, .input{
  background-color: #e2f5ec;
  border-radius: 0.25rem;
}
.fileinput{
  background-color: #fff;
}

.filelabel{
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
.radiobtn{
  cursor: pointer;
  padding: 8px 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filelabel input, .radiobtn input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>