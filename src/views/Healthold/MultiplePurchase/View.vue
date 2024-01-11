<template>
  <div class="mt-8">
    <div class="">
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="!$store.state.loading && paginatedEnrollees.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <td class="font-bold">First name</td>
              <td class="font-bold">Last name</td>
              <td class="font-bold">Email</td>
              <td class="font-bold">Preferred Hospital</td>
              <td class="font-bold">Passport</td>
              <td class="font-bold">Action</td>
            </tr>
          </thead>
          <tbody >
            <tr v-for="enrollee in paginatedEnrollees" :key="enrollee.id" class="border border-solid border-gray-300">
              <td >{{enrollee.firstname}}</td>
              <td>{{enrollee.surname}}</td>
              <td>{{enrollee.email}}</td>
              <td v-if="enrollee.status == 'Completed'" class="text-green-500">{{enrollee.status}}</td>
              <td v-else class="text-red-500">{{enrollee.status}}</td>
              <td v-if="enrollee.status == 'Completed'" class="text-green-500">Added</td>
              <td v-else class="text-red-500">{{enrollee.status}}</td>
              <td>
                <button @click="updateEnrollee(enrollee)" class="border border-solid rounded px-3 py-2 text-white text-center text-sm" style="background-color:#A8004F">Update</button>
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
      <button @click="initiatePayment" class="mt-10 bg-green-500 text-white block lg:inline focus:outline-none px-4 py-2 lg:px-10 rounded float-right" :class="[ !formValid ? 'opacity-30' : '']" :disabled="!formValid">Proceed to payment</button> 
    </div>
    <UpdateEnrolleeModal :enrollee="selectedEnrollee" @close="closeUpdateModal" v-if="showUpdateModal" @refresh="refreshList" />
    <div v-show="showPaystack">
      <Paystack
        ref="paystackbutton"
        class="hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
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
import UpdateEnrolleeModal from "./UpdateEnrolleeModal.vue"
import Paystack from "vue-paystack";
import PaymentMethod from "@/components/Health/PaymentMethod"
import {mapState} from 'vuex'
export default {
  components: {Paystack, PaymentMethod, UpdateEnrolleeModal},
  props: {
    reference : {
      required: true
    }
  },
  data(){
    return {
      enrollees: [],
      page: 1,
			perPage: 10,
			pages: [],
      selectedEnrollee: {},
      showUpdateModal: false,
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      payStackChannels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      showPaystack: false,
      showMethodModal: false,
      formValid: false
    }
  },
  computed: {
    paginatedEnrollees(){
      return this.paginate(this.enrollees)
    },
    ...mapState({
      user : state => state.user
    })
  },
   watch:{
    enrollees(){
      this.setPages()
    }  
  },
  methods: {
    getUploadedBeneficiaries(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/health/bulkpolicy/${this.reference}`)
      .then((res)=> {
        this.$store.commit('endLoading')
        this.enrollees = res.data.data
        console.log(this.enrollees)
        this.checkStatus()
      })
      .catch((err)=> {
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
    updateEnrollee(obj){
      this.selectedEnrollee = obj
      this.showUpdateModal = true
    },
    closeUpdateModal(){
      this.showUpdateModal = false
      this.selectedEnrollee = {} 
    },
    refreshList(){
      this.getUploadedBeneficiaries()
    },
    checkStatus(){
      if (this.enrollees.every((e)=> {
        return e.status == 'Completed'
        })
      ){
        this.formValid = true
      }
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    },
    verifyPayment(){
      axios({url: `${baseURL}/health/payment/bulk/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
      .then(res=>{
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          this.$router.push('/app/dashboard/managehealth')
      })
      .catch(err=>{
          this.$store.commit('endLoading')
          this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
    },
    initiatePayment(){
      if(!this.user.has_card) return this.payNow()
      this.showMethodModal = true
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        reference : this.reference,
        card_id : 0
      }
      axios({url: `${baseURL}/health/payment/bulk/init`, data: data, method: 'POST'})
      .then(res=>{
        this.showPaystack = true
        this.paystackData = res.data.data
        this.paystackData.channels = this.payStackChannels
        this.$refs.paystackbutton.payWithPaystack(this.paystackData)
      })
      .catch(err=>{
          this.$store.dispatch('handleError', err)
      })
    },
    payWithCard(str){
      this.showMethodModal = false
      if(str === 'old'){
        this.$router.push({
          name: 'SelectHealthCard',
          query: {
            reference : this.reference
          }
        })
      }else if(str === 'new'){
          this.payNow()
      }
      return
    },
  },
  mounted(){
    this.getUploadedBeneficiaries()
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