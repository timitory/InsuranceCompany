<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <!-- <div class="flex justify-between">
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
      </div> -->
      <div class="flex mt-4 items-center">
        <p class="text-lg lg:w-1/4 font-bold">Claim History</p>
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <div class=" lg:w-full">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="claims.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">S/N</th>
              <th class="font-bold">Name</th>
              <th class="font-bold">Policy Type</th>
              <th class="font-bold">Policy Number</th>
              <th class="font-bold">Claim Date</th>
              <th class="font-bold">Underwriter</th>
              
              <th class="font-bold">Status</th>
              <th class="font-bold">View</th>
              <td class="font-bold">Action</td>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(claim, index) in claims" :key="index" class="border border-solid border-gray-300">
              <td>{{index + 1}}</td>
              <td class="p-3" v-if="claim.user.firstname + ' ' + claim.user.lastname === fullname" >Myself</td>
              <td>{{claim.policy_type}}</td>
              <td>{{claim.metadata.policy_number}}</td>
              <td>{{claim.timestamp}}</td>
              <td class="font-semibold">{{claim.underwriter.name}}</td>
              
              <p v-if="claim.status =='Settled'"  class="text-sm text-green-500  p-1 rounded">Settled</p>
               <p v-else-if="claim.underwriter_status =='Accept'"  class="text-sm text-green-500  p-1 rounded">Approved</p>
               <p v-else-if="claim.underwriter_status =='Decline'"  class="text-sm text-red-500  p-1 rounded">Declined</p>
                <p v-else-if="claim.status =='Accept'"  class="text-sm text-green-500  p-1 rounded">Accepted</p>
                <p v-else-if="claim.status == 'Pending'"  class="text-sm text-yellow-500  p-1 rounded">{{claim.status}}</p>
                <p v-else  class="text-sm text-red-500  p-1 rounded">{{claim.status}}</p>

              
               <td>  <button @click="viewUser(claim)" class="text-green-500 underline text-sm outline-none focus:outline-none">View</button></td>
               
               <td>
                <!-- <select class="focus:outline-none border border-solid border-gray-300 rounded" v-model="action" @change="uploadInvoice(claim.id)">
                  <option value="" selected disabled>Select action</option>
                  <option value="view" @click="viewUploadClaim(claim)" class="">Upload Invoice</option>
                  
                </select> -->
                <button @click="viewUploadClaim(claim)" class="text-green-500 underline text-sm outline-none focus:outline-none">Upload Invoice</button>
              </td>
              </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <nav  class="mt-8" v-if="claims.length > 0" aria-label="Page navigation example">
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
    <User v-if="showUser" :policy="policy" @close="showUser = false" />
    <UploadInvoice v-if="showUploadInvoice" :policy="policy" @close="showUploadInvoice = false" />
    
  </div>
</template>

<script>
// import {mapState} from "vuex"
import User from "@/components/Vehicle/Claims/User"
import UploadInvoice from "@/components/Vehicle/Claims/UploadInvoice"
import axios from "axios"
import baseURL from "@/main"


export default {
  components:{
    User,UploadInvoice
  },
  data(){
    return {
      claims :[
      ],
      fullname: '',
      val: '',
      showFilter: false,
      page: 1,
			perPage: 10,
			pages: [],
      policy: {},
      showUser : false,
      showUploadInvoice: false,
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    },
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
    viewUser(obj){
      
      this.policy = obj
      this.showUser = true
    },
    viewUploadClaim(obj){
      
      this.policy = obj
      this.showUploadInvoice = true
    },
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
    this.fullname = `${this.user.firstname} ${this.user.lastname}`
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/claims`)
    .then(res=>{
      this.claims = res.data.data

     
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
    table-layout: fixed;
  }
  /* th, td{
    min-width: unset
  } */
  thead th:nth-child(1){
    width: 5%;
  }
  thead th:nth-child(2){
    width: 10%;
    
  }
  thead th:nth-child(3){
    width: 10%;
    
  }
  thead th:nth-child(4){
    width: 17%;
    
  }
  thead th:nth-child(5){
    width: 15%;
    
  }
  thead th:nth-child(6){
    width: 12%;
    
  }
  thead th:nth-child(7){
    width: 9%; 
  }
  thead th:nth-child(8){
    width: 7%; 
  }
  thead th:nth-child(9){
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