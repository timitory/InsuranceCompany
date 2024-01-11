<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex items-center">
        <img src="@/assets/images/menu/Image 9.png" alt="" class="" style="height: 140px; width: 170px">
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <p class="text-lg font-bold lg:w-1/5">Health Insurance</p>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="!$store.state.loading && paginatedEnrollees.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <td class="font-bold">Name</td>
              <td class="font-bold">Plan</td>
              <td class="font-bold">Amount</td>
              <td class="font-bold">Status</td>
              <!-- <td class="font-bold">Start Date</td> -->
              <td class="font-bold">Due Date</td>
              <td class="font-bold">Action</td>
            </tr>
          </thead>
          <tbody >
            <tr v-for="enrollee in paginatedEnrollees" :key="enrollee.id" class="border border-solid border-gray-300">
              <td class="p-3" v-if="enrollee.policy.enrollee === fullname" >Myself</td>
              <td class="p-3" v-else>{{enrollee.policy.enrollee}}</td>
              <td>{{enrollee.policy.plan}}</td>
              <td>{{enrollee.policy.amount}}</td>
              <td v-if="enrollee.policy.status == 'Success'" class="text-green-500">{{enrollee.policy.status}}</td>
              <td v-else-if="enrollee.policy.status == 'Pending'" class="text-yellow-500">{{enrollee.policy.status}}</td>
              <td v-else-if="enrollee.policy.status == 'Completed'" class="text-green-500">{{enrollee.policy.status}}</td>
              <td v-else class="text-red-500">{{enrollee.policy.status}}</td>
              <td>{{enrollee.policy.due_date}}</td>
              <td v-if="enrollee.policy.status == 'Success'">
                <select class="focus:outline-none py-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="stop">Cancel</option>
                  <!-- <option value="upgrade">Change Plan</option> -->
                  <option value="view" class="text-blue-500">View repayment schedule</option>
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Pending' || enrollee.policy.status== 'Failed'">
                <button class="text-white text-sm rounded bg-green-500 p-2 focus:outline-none" @click="contactAdmin(enrollee)">
                  Contact Admin
                </button>
              </td>
              <td v-else-if="enrollee.policy.status == '' || enrollee.policy.user_health_id != 0">
                <button @click="updateEnrollee(enrollee)" class="border border-solid rounded px-3 py-2 text-white text-center text-sm" style="background-color:#A8004F">Update</button>
              </td>
              <td v-else-if="enrollee.policy.status == 'Completed'">
                <button disabled @click="updateEnrollee(enrollee)" class="border border-solid rounded px-3 py-2 text-white text-center text-sm" style="background-color:#A8004F">Update</button>
              </td>
              <td v-else class="text-red-500">
                {{enrollee.policy.status}}
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
    <UpdateEnrolleeModal :enrollee="selectedEnrollee" @close="closeUpdateModal" v-if="showUpdateModal" @refresh="refreshList" />
    <Upgrade :plans="plans" v-if="showUpgrade" v-on:close="closeModal"/>
    <Contact :enrollee="enrollee" v-if="showContact" v-on:close="closeModal" />
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import Upgrade from "@/components/Health/UpgradeModal"
import UpdateEnrolleeModal from "./MultiplePurchase/UpdateEnrolleeModal.vue"
import Contact from "@/components/Health/ContactAdminModal"
import {mapState} from 'vuex'
export default {
  components: {
    Upgrade, Contact, UpdateEnrolleeModal
  },
  data(){
    return {
      enrollees: [],
      enrollee: {},
      action: '',
      dependant: {},
      selectedEnrollee: {},
      showUpdateModal: false,
      plans: [],
      showUpgrade: false,
      showContact: false,
      fullname: "",
      page: 1,
			perPage: 10,
			pages: [],
    }
  },
  watch:{
    enrollees(){
      this.setPages()
    }  
  },
  computed:{
    ...mapState({
      user : state => state.user
    }),
    paginatedEnrollees(){
      return this.paginate(this.enrollees)
    }
  },
  methods: {
    updateEnrollee(obj){
      this.selectedEnrollee = obj
      this.showUpdateModal = true
    },
    closeUpdateModal(){
      this.showUpdateModal = false
      this.selectedEnrollee = {} 
    },
    selectEnrollee(obj){
      // this.enrollee = obj;
      if(this.action == 'view'){
        this.$store.commit('setEnrollee', obj)
        this.$router.push('/app/dashboard/health/viewrepayment')
      }else if(this.action == 'stop'){
        this.cancelPolicy(obj.policy.user_health_id)
        this.action = ''
      }else if(this.action == 'upgrade'){
        this.$store.commit('setEnrollee', obj)
        this.showUpgrade = true
        this.$store.commit('setActiveModal', 1)
      }
    },
    contactAdmin(enrollee){
      // console.log(enrollee)
      this.$store.commit('setActiveModal', 1)
      this.showContact = true
      this.enrollee = enrollee
    },
    cancelPolicy(id){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/health/policy/cancel`, data: {user_health_id : id}, method: 'POST'})
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
      }).catch(err => {
        this.$store.commit('endLoading')
        this.$store.dispatch('handleError', err)
      })
    },
    closeModal(){
      this.showUpgrade = false;
      this.showContact = false
      this.action = ''
      this.$store.commit('setActiveModal', 0)
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
		}
  },
  mounted(){
    this.fullname = `${this.user.firstname} ${this.user.lastname}`
    this.$store.commit('setActiveModal', 0)
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/health/policy`)
    .then( res => {
      this.enrollees = res.data.data
      this.$store.commit('endLoading')
    })
    .catch(err => {
      this.$store.commit('endLoading')
      this.$store.dispatch('handleError', err)
    })
  },
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
  min-width: 80px
  }
  div.tablecont{
    max-width: 100%;
  }
  div.tablecont table{
    width: 100%
  }
 
}
</style>