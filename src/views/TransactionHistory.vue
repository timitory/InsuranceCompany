<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex justify-between">
        <div></div>
        <div class="text-sm relative border border-solid">
          <button @click="showFilter = !showFilter" class="py-2 px-2">Filter by
            <font-awesome-icon icon="angle-down" class="ml-2"/>
          </button>
          <div v-if="showFilter" class="filter absolute left-0 bg-white">
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Health Policy')">Health</p>
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Vehicle Policy')">Vehicle</p>
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Home Content Policy')">Home-content</p>
            <p class="mb-2 cursor-pointer text-sm" @click="filter('Gadget Policy')">Gadget</p>
          </div>
        </div>
      </div>
      <div class="flex mt-4 items-center">
        <p class="text-lg lg:w-1/4 font-bold">Transaction History</p>
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <div class=" lg:w-full">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="filteredPayments.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Policy</th>
              <th class="font-bold">Date</th>
              <th class="font-bold">Amount</th>
              <th class="font-bold">Enrollee</th>
              <th class="font-bold">Description</th>
              <th class="font-bold">Reference</th>
              <th class="font-bold">Status</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in filteredPayments" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td>{{payment.policy}}</td>
              <td>{{payment.date_time}}</td>
              <td class="font-semibold">{{payment.amount}}</td>
              <td>{{payment.enrollee.firstname}} {{payment.enrollee.lastname}}</td>
              <td v-if="payment.policy == 'Home Content Policy' && payment.description == ''">Payment for Home Content Policy</td>
              <td v-else>{{payment.description}}</td>
              <td>{{payment.reference}}</td>
              <td v-if="payment.status == 'Success'" class="text-green-500">{{payment.status}}</td>
              <td v-else-if="payment.status == 'Failed'" class="text-red-500">{{payment.status}}</td>
              <td v-else class="text-blue-500">{{payment.status}}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <nav  class="mt-8" v-if="filteredPayments.length > 0" aria-label="Page navigation example">
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
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex"
import axios from "axios"
import baseURL from "@/main"
export default {
  data(){
    return {
      payments :[
      ],
      val: '',
      showFilter: false,
      page: 1,
			perPage: 10,
			pages: [],
    }
  },
  computed:{
    filteredPayments(){
      return this.paginate( 
        this.payments.filter((obj)=>{
          return obj.policy.includes(this.val)
        })
      )
    }
  },
  watch: {
		payments() {
			this.setPages();
		},
	},
  methods: {
    filter(val){
      this.val = val
      this.page = 1
      // console.log(this.val)
      this.showFilter = false
    },
    setPages () {
			let numberOfPages = Math.ceil(this.payments.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (payments) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  payments.slice(from, to);
		}
  },
  mounted(){
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/transaction/history`)
    .then(res=>{
      this.payments = res.data.data.transactions
      this.$store.commit('endLoading')
    })
    .catch(err=>{
      this.$store.commit('endLoading')
      this.$store.dispatch('handleError', err)
    })
  }
}
</script>

<style scoped>
table{
  
}

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
.filter{
  bottom: -180px
}
.filter p:hover{
  background-color: blue;
  color: white
}
.filter p{
  padding: 5px 10px;
}
@media only screen and (min-width: 1024px) {
  table{
    /* table-layout: fixed; */
  }
  th, td{
    min-width: unset
  }
  thead th:nth-child(1){
    width: 1%;
  }
  thead th:nth-child(2){
    width: 10%;
    
  }
  thead th:nth-child(3){
    width: 20%;
    
  }
  thead th:nth-child(4){
    width: 10%;
    
  }
  thead th:nth-child(5){
    width: 14%;
    
  }
  thead th:nth-child(6){
    width: 20%; 
  }
  thead th:nth-child(7){
    width: 20%; 
  }
  thead th:nth-child(8){
    width: 5%; 
  }
  div.tablecont{
    max-width: 100%;
  }
  div.tablecont table{
    width: 100%
  }
}
</style>