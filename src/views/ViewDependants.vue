<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029; min-height: 500px">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex mt-4 items-center">
        <p class="text-lg lg:w-1/4 font-bold">{{name}}'s dependants</p>
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <div class=" lg:w-full">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="!$store.state.loading && dependants.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold">Firstname</th>
              <th class="font-bold">Lastname</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Phone</th>
              <th class="font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dependant, index) in dependants" :key="index" class="border border-solid border-gray-300">
              <td>{{dependant.firstname}}</td>
              <td>{{dependant.lastname}}</td>
              <td>{{dependant.email}}</td>
              <td>{{dependant.phone}}</td>
              <td>
                  <button @click="removeDependant(dependant)" class="border border-solid rounded px-3 py-2 text-white text-center text-sm" style="background-color:#A8004F">Remove</button>
                </td>
            </tr>
          </tbody>
        </table>
        <div v-else-if="!$store.state.loading && dependants.length < 1" class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
        <nav  class="mt-8" v-if="dependants.length > 0" aria-label="Page navigation example">
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
      dependants :[
      ],
      val: '',
      showFilter: false,
      page: 1,
        perPage: 10,
        pages: [],
    }
  },
  computed:{
    filteredDependants(){
      return this.paginate( 
        this.dependants.filter((obj)=>{
          return obj.policy.includes(this.val)
        })
      )
    },
    name(){
      return this.$store.state.user.firstname
    }
  },
  watch: {
		dependants() {
			this.setPages();
		}
	},
  methods: {
    filter(val){
      this.val = val
      this.page = 1
      // console.log(this.val)
      this.showFilter = false
    },
    setPages () {
			let numberOfPages = Math.ceil(this.dependants.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (dependants) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  dependants.slice(from, to);
		},
    removeDependant(obj){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/dependant`, data: {dependant_id : obj.user_id}, method: 'DELETE'})
      .then(res=> {
        this.$store.commit('endLoading')
        // console.log(res.data.message)
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        // console.log(res)
      })
      .catch(err =>{
        this.$store.dispatch('handleError', err)
      })
    }
  },
  mounted(){
    this.$store.commit('startLoading')
    axios.get(`${baseURL}/dependants`)
    .then(res=>{
      this.dependants = res.data.data
      // console.log(this.dependants)
      this.$store.commit('endLoading')
    })
    .catch(err=>{
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
  thead th:nth-child(1){
    width: 20%;
    
  }
  thead th:nth-child(2){
    width: 20%;
    
  }
  thead th:nth-child(3){
    width: 20%;
    
  }
  thead th:nth-child(4){
    width: 20%;
    
  }
  thead th:nth-child(5){
    width: 20%; 
  }
  /* td{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
  div.tablecont{
    max-width: 100%;
  }
  div.tablecont table{
    width: 100%
  }
}
</style>