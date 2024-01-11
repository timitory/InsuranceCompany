<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white whitebox" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard/managehealth" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex mt-4 items-center">
        <p class="text-lg lg:w-1/4 font-bold">Repayment Shedule</p>
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <div class=" lg:w-full">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto lg:overflow-x-hidden tablecont">
        <table class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-semibold">Payment period</th>
              <th class="font-semibold">Policy Title</th>
              <th class="font-semibold">Amount</th>
              <th class="font-semibold">Status</th>
              <th class="font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repayment in enrollee.repayment" :key="repayment.id" class="border border-solid border-gray-300">
              <td class="p-3 text-green-600 font-bold">{{repayment.end}}</td>
              <td v-if="enrollee.policy.plan">{{enrollee.policy.plan}}</td>
              <td v-else>{{enrollee.policy.vehicle_category}}</td>
              <td>{{repayment.amount}}</td>
              <td :class="[repayment.status == 'Paid' ? 'text-green-500' : 'text-red-500']">{{repayment.status}}</td>
              <td v-if="repayment.status == 'Paid'">
                <button style="min-width: 100px" class="text-sm opacity-50 rounded bg-gray-400 px-2 py-2 text-white" disabled>Paid</button>
              </td>
              <td v-else>
                <button style="min-width: 100px" class="text-sm bg-green-500 rounded px-2 py-2 text-white" @click="payRepayment(repayment.repayment_id)">Pay Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-24 ">
        <router-link class="text-green-500 block" to="/app/dashboard/managehealth">Back</router-link>
      </div>
    </div>
    <p class="mt-8 text-sm text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
  </div>
</template>

<script>
import {mapState} from "vuex"
import axios from "axios"
import baseURL from "@/main"
export default {
  data(){
    return {
      action: '',
      prevRoute: null,
      dependant: {}
    }
  },
  computed:{
    ...mapState({
      enrollee: state => state.enrollee,
      policy: state => state.repaymentPolicy
    })
  },
  methods: {
    payRepayment(id){
      this.$store.commit('startLoading')
        axios({url: `${baseURL}/health/pay`, data:{repayment_id : id}, method: 'POST'})
        .then(res=>{
          // console.log(res.data.data)
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', {status: true, msg: res.data.data.status}) 
          this.$router.push('/app/dashboard/managehealth')
        })
        .catch(err=>{
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
        })     
    }
    
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
.whitebox{
  min-height: 100vh
}
@media only screen and (min-width: 1024px) {
  table{
    table-layout: fixed;
  }
  thead th{
    width: 20%
  }
  
  th, td {
  /* min-width: 80px */
  }
  div.tablecont{
    max-width: 100%;
  }
  div.tablecont table{
    width: 100%
  }
  .whitebox{
    min-height: 120vh
  }
}
</style>