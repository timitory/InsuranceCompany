<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex items-center">
        <img src="@/assets/images/menu/travel.svg" alt="" style="height: 140px; width: 170px">
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <p class="text-lg font-bold lg:w-1/5">Travel Insurance</p>
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
            <td class="font-bold">Premium Amount</td>
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
              
              <td>{{enrollee.policy.premium}}</td>
              <td>{{enrollee.policy.policy_number}}</td>
              <td>{{enrollee.underwriter.name.toUpperCase()}}</td>
              <td v-if="enrollee.policy.status == 'Active' || enrollee.policy.status == 'Paid'" class="text-green-500">{{enrollee.policy.status}}</td>
              <td v-else-if="enrollee.policy.status == 'Pending' || enrollee.policy.status == 'Incomplete'" class="text-yellow-500">{{enrollee.policy.status}}</td>
              <td v-else class="text-red-500">{{enrollee.policy.status}}</td>
              <td>{{enrollee.policy.start}}</td>
              <td>{{enrollee.policy.end}}</td>
               <td v-if="enrollee.policy.status == 'Paid'">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="claim">Make Claim</option>
                  <option value="contact">Contact Admin</option>
                  
                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Active'">
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select action</option>
                  <option value="view_details">View Details</option>
                  <option value="contact">Contact Admin</option>

                </select>
              </td>
              <td v-else-if="enrollee.policy.status == 'Incomplete'">
              <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                <option value="" selected disabled>Select action</option>
                <option value="view_details">View Details</option>
                <option value="complete_payment">Complete Payment</option>
                <option value="contact">Contact Admin</option>

              </select>
              </td>
              <td v-else>
                <select class="focus:outline-none p-2 border border-solid border-gray-300 rounded" v-model="action" @change="selectEnrollee(enrollee)">
                  <option value="" selected disabled>Select</option>
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
    <MetadataModal :enrollee="selectedEnrollee" v-if="showMeta" :close="closeModal" />
    <div v-show="showPaystack">
      <Paystack
          ref="paystackbutton"
          class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
          :amount="paystackData.amount"
          :email="paystackData.email"
          :paystackkey="paystackData.public_key"
          :reference="paystackData.reference"
          :callback="verifyPayment"
          :close="closePayment"
          :channels="payStackChannels"
      >
      </Paystack>
    </div>
    <transition name="scale">
      <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import Contact from "@/components/Vehicle/ContactAdminModal"
import PaymentMethod from "@/components/Travel/PaymentMethod.vue";
import Paystack from "vue-paystack";
import MetadataModal from "@/components/Travel/metadataModal.vue";

export default {
  components:{MetadataModal, PaymentMethod, Contact, Paystack},
  data(){
    return {
      enrollees: [],
      enrollee: {},
      action: '',
      showContact: false,
      showMeta: false,
      dependant: {},
      fullname: '',
      page: 1,
			perPage: 10,
			pages: [],
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      showPaystack: false,
      payStackChannels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      showMethodModal: false,
      travelId: '',
      selectedEnrollee: {},

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
       if(this.action == 'claim'){
        this.$store.commit('setEnrollee', obj)
        this.$router.push('/app/dashboard/claim/travel')
     
      }
       else if(this.action == 'complete_payment'){
         this.travelId = obj.user_travel_id
         this.showMethodModal = true
       }
       else if(this.action == 'view_details'){
         this.selectedEnrollee = obj
         this.showMeta = true
       }
       else if(this.action == 'contact'){
        this.contactAdmin(obj)
      }
      this.action = ''
    },
   
    contactAdmin(enrollee){
      this.$store.commit('setActiveModal', 1)
      this.showContact = true
      this.enrollee = enrollee
    },
    closeModal(){
      this.showContact = false
      this.action = ''
      this.showMeta = false
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
		},
    getPolicy(){
    console.log("here")
    this.fullname = `${this.user.firstname} ${this.user.lastname}`
    this.$store.commit('setActiveModal', 0)
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/travel/policy`)
    .then( res => {

      this.enrollees = res.data.data
      this.$store.commit('endLoading')
    })
    .catch(err => {
      this.$store.commit('endLoading')
      this.$store.dispatch('handleError', err)
    })
  },

    payWithCard(str){
      this.showMethodModal = false

      if(str === 'old'){
        //var travel_id = this.saveTravelData(this.details)
        this.$router.push('/app/dashboard/buytravel/4')
      }else if(str === 'new'){

        this.payNow()
      }
      return
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        user_travel_id : this.travelId,
        card_id : 0
      }
      console.log(data)
      axios({url: `${baseURL}/travel/payment/init`, data: data, method: 'POST'})
          .then(res=>{
            this.showPaystack = true
            this.paystackData = res.data.data
            this.paystackData.channels = this.paystackChannels
            this.$refs.paystackbutton.payWithPaystack(this.paystackData)
            this.$store.commit('endLoading')

          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    verifyPayment(){
      axios({url: `${baseURL}/travel/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
          .then(res=>{
            this.$store.commit('endLoading')
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            this.showReviewModal = true
            // this.$router.push('/app/dashboard/managetravel')
          })
          .catch(err=>{
            // console.log(err)
            this.$store.commit('endLoading')
            this.$store.commit('setError', {status: true, msg: err.response.data.message})
          })
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    }

  },
  
  mounted(){
   
    this.fullname = `${this.user.firstname} ${this.user.lastname}`
    this.$store.commit('setActiveModal', 0)
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/travel/policy`)
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
