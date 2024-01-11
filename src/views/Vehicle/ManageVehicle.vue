<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex items-center">
        <img src="@/assets/images/menu/Group 65.png" alt="" style="height: 140px; width: 170px">
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <p class="text-lg font-bold lg:w-1/5">Vehicle Insurance</p>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-auto tablecont">
        <table v-if="!$store.state.loading && paginatedEnrollees.length > 0" class="w-full mt-8">
          <tr>
            <td class="font-bold">S/N</td>
            <td class="font-bold">Name</td>
            <td class="font-bold">Plan</td>
            <td class="font-bold">Amount</td>
            <td class="font-bold">Policy Number</td>
            <td class="font-bold">Underwriter</td>
            <td class="font-bold">Status</td>
            <td class="font-bold">Start Date</td>
            <td class="font-bold">Due Date</td>
            <td class="font-bold">Action</td>
            <td class="font-bold"></td>
          </tr>
          <tbody>
            <tr v-for="(enrollee, index) in paginatedEnrollees" :key="index" class="border border-solid border-gray-300">
              <td>{{index+1}}</td>
              <td class="p-3" v-if="enrollee.policy.enrollee.firstname + ' ' + enrollee.policy.enrollee.lastname === fullname" >Myself</td>
              <td class="p-3" v-else>{{enrollee.policy.enrollee.firstname}} {{enrollee.policy.enrollee.lastname}}</td>
              <td>{{enrollee.policy.vehicle_category}}</td>
              <td>{{enrollee.policy.amount}}</td>
              <td v-if="enrollee.policy.policy_number">{{enrollee.policy.policy_number}}</td>
              <td v-else>Nil</td>
              <td>{{enrollee.underwriter.name.toUpperCase()}}</td>
              <td v-if="enrollee.policy.status == 'Active' || enrollee.policy.status == 'Success'" class="text-green-500">{{enrollee.policy.status}}</td>
              <td v-else-if="enrollee.policy.status == 'Pending' || enrollee.policy.status == 'Incomplete'" class="text-yellow-500">{{enrollee.policy.status}}</td>
              <td v-else class="text-red-500">{{enrollee.policy.status}}</td>
              <td>{{enrollee.policy.start}}</td>
              <td>{{enrollee.policy.end}}</td>
              <td v-if="(enrollee.policy.status == 'Active' || enrollee.policy.status == 'Success') && enrollee.claim == false">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="view" class="">View repayment schedule</option>
                  <option value="claim">Make Claim</option>
                  <option value="cert" class="">View  certificate</option>
                  <option value="viewvehicle">Vehicle Details</option>
                  <option value="stop">Cancel Policy</option>
                  <option value="renew">Annual Renewal</option>
                  <option value="contact">Contact Admin</option>
                  
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Success' && enrollee.claim == true">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="view" class="">View repayment schedule</option>
                  <option value="claim">Make Claim</option>
                  <option value="cert" class="">View  certificate</option>
                  <option value="viewvehicle">Vehicle Details</option>
                  <option value="stop">Cancel Policy</option>
                  <option value="renew">Annual Renewal</option>
                  <option value="contact">Contact Admin</option>
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Active' && enrollee.claim == true">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="view" class="">View repayment schedule</option>
                  <option value="claim">Make Claim</option>
                  <option value="cert" class="">View  certificate</option>
                  <option value="viewvehicle">Vehicle Details</option>
                  <option value="renew">Annual Renewal</option>
                  <option value="contact">Contact Admin</option>
                  
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Incomplete'">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="complete">Complete Payment</option>
                  <option value="contact">Contact Admin</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Pending'">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select</option>
                  <option value="contact">Contact Admin</option>
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Declined' || enrollee.policy.status == 'Cancelled'">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="contact">Contact Admin</option>
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Cancel Initiated' || enrollee.policy.status == 'Cancelled'">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="contact">Contact Admin</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else-if="!$store.state.loading && paginatedEnrollees.length < 1" class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <nav  class="mt-8" v-if="paginatedEnrollees.length > 0" aria-label="Page navigation example">
          <ul class="w-1/2 mx-auto  flex justify-between" style="max-width: 250px">
            <li class="page-item">
              <button type="button" class="inline text-green-500" v-if="page != 1" @click="page--"> Previous </button>
              <button v-else class="inline text-green-500 opacity-20">Previous</button>
            </li>
            <!-- <li class="page-item">
              <button type="button" class="inline" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber.id" @click="page = pageNumber"> {{pageNumber}} </button>
            </li> -->
            <li class="page-item">
              <button type="button" @click="page++" v-if="page < pages.length" class="inline text-green-500"> Next </button>
              <button v-else class="inline text-green-500 opacity-20">Next</button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="mt-24 flex justify-between">
        <router-link class="text-green-500 block" to="/app/dashboard">Back</router-link>
      </div>
    </div>
    <p class="mt-8 text-sm text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
    <Contact :enrollee="enrollee" v-if="showContact" v-on:close="closeModal" />
    <Cancel :enrollee="enrollee" v-if="showCancel" v-on:close="closeCancel" />
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import Contact from "@/components/Vehicle/ContactAdminModal"
import Cancel from "@/components/Vehicle/CancelInfoModal"
export default {
  components:{Contact, Cancel},
  data(){
    return {
      enrollees: [],
      enrollee: {},
      action: '',
      showContact: false,
      showCancel: false,
      dependant: {},
      fullname: '',
      page: 1,
			perPage: 10,
			pages: [],
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    },
    paginatedEnrollees(){
      return this.paginate(this.enrollees)
    }
  },
  watch:{
    enrollees(){
      this.setPages();
    }
  },
  methods: {
    selectEnrollee(obj){
      // this.enrollee = obj;
      if(this.action == 'view'){
        this.$store.commit('setEnrollee', obj)
        this.$router.push('/app/dashboard/vehicle/viewrepayment')
      }else if(this.action == 'claim'){
        this.$store.commit('setEnrollee', obj)
        this.$router.push('/app/dashboard/claim/vehicle')
      }else if(this.action == 'stop'){
        this.cancelPolicy(obj)
        //.policy.user_vehicle_id
      }else if(this.action == 'renew'){
        this.renewPolicy(obj.policy.user_vehicle_id)
      }else if(this.action == 'cert'){
        window.open(obj.policy.certificate, "_blank")
      }else if(this.action == 'contact'){
        this.contactAdmin(obj)
      }else if(this.action == 'delete'){
        this.deletePolicy(obj.policy.user_vehicle_id)
      }else if(this.action == 'complete'){
        this.$store.commit('saveQuote', obj)
        this.$router.push(`/app/dashboard/buyvehicle/complete/${obj.policy.user_vehicle_id}`)
      }else if(this.action == 'viewvehicle'){
        this.$store.commit('setVehiclePolicy', obj)
        this.$router.push(`/app/dashboard/vehicle/viewpolicy`)
      }
      this.action = ''
    },
    renewPolicy(id){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/policy/renew`, data: {user_vehicle_id : id}, method: 'POST'})
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      }).catch(err => {
        this.$store.commit('endLoading')
        this.$store.dispatch('handleError', err)
      })
    },
    contactAdmin(enrollee){
      this.$store.commit('setActiveModal', 1)
      this.showContact = true
      this.enrollee = enrollee
    },
    closeModal(){
      this.showContact = false
      this.action = ''
      this.$store.commit('setActiveModal', 0)
    },
    closeCancel(){
      this.showCancel = false
      this.action = ''
      this.$store.commit('setActiveModal', 0)
    },
     cancelPolicy(enrollee){
      this.$store.commit('setActiveModal', 1)
      this.showCancel = true
      this.enrollee = enrollee
      // this.$store.commit('startLoading')
      // axios({url: `${baseURL}/vehicle/policy/cancel`, data: {user_vehicle_id : id}, method: 'POST'})
      // .then(res=>{
      //   this.$store.commit('endLoading')
      //   this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      // }).catch(err => {
      //   this.$store.commit('endLoading')
      //   this.$store.dispatch('handleError', err)
      // })
    },
    deletePolicy(id){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/policy/delete`, data: {user_vehicle_id : id}, method: 'PATCH'})
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.getPolicy()
      }).catch(err => {
        this.$store.commit('endLoading')
        this.$store.dispatch('handleError', err)
      })
    },
    setPages () {
			let numberOfPages = Math.ceil(this.enrollees.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (enrollees) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  enrollees.slice(from, to);
		},
    getPolicy(){
    
    this.fullname = `${this.user.firstname} ${this.user.lastname}`
    this.$store.commit('setActiveModal', 0)
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/vehicle/policy`)
    .then( res => {

      this.enrollees = res.data.data
      this.$store.commit('endLoading')
    })
    .catch(err => {
      this.$store.commit('endLoading')
      this.$store.dispatch('handleError', err)
    })
  }
  },
  
  mounted(){
   
    this.fullname = `${this.user.firstname} ${this.user.lastname}`
    this.$store.commit('setActiveModal', 0)
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/vehicle/policy`)
    .then( res => {
      this.enrollees = res.data.data
      this.$store.commit('endLoading')
    })
    .catch(err => {
      this.$store.commit('endLoading')
      this.$store.dispatch('handleError', err)
    })
    
  }
}
</script>

<style scoped>
th, td {
  text-align: left;
  padding: 8px;
  min-width: 120px
}
.tablecont::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar
{
  margin-top: 20px;
  height: 2px;
  background-color: #F5F5F5;
}

.tablecont::-webkit-scrollbar-thumb
{
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:#14801B;
}
select{
  max-width: 115px
}
@media only screen and (min-width: 1024px) {
  th, td {
  min-width: 120px
  }
  div.tablecont{
    max-width: 100%;
  }
  div.tablecont table{
    width: 100%
  }
  
}
@media only screen and (min-width: 1280px) {
  th, td{
    min-width: unset
  }
  thead th:nth-child(1){
    width: 5%;
  }
  thead th:nth-child(2){
    width: 15%;
  }
  thead th:nth-child(3){
    width: 10%;
  }
  thead th:nth-child(4){
    width: 10%;
  }
  thead th:nth-child(5){
    width: 10%;
  }
  thead th:nth-child(6){
    width: 5%;
  }
  thead th:nth-child(7){
    width: 10%;
  }
  thead th:nth-child(8){
    width: 10%;
  }
  thead th:nth-child(9){
    width: 10%;
  }
}
</style>
