<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex items-center">
        <img src="@/assets/images/menu/Image 11.png" alt="" class="" style="height: 140px; width: 170px">
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <p class="text-lg font-bold lg:w-1/5">Gadget Cover</p>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="dependants.length > 0" class="w-full mt-8">
          <tr>
            <td class="font-bold">Surname</td>
            <td class="font-bold">Name</td>
            <td class="font-bold">Plan</td>
            <td class="font-bold">Amount</td>
            <td class="font-bold">Status</td>
            <td class="font-bold">Start Date</td>
            <td class="font-bold">Expiry Date</td>
            <td class="font-bold">Action</td>
            <td class="font-bold"></td>
          </tr>
          <tbody>
            <tr v-for="dependant in dependants" :key="dependant.id" class="border border-solid border-gray-300">
              <td class="p-3">{{dependant.firstname}}</td>
              <td>{{dependant.lastname}}</td>
              <td>{{dependant.plan}}</td>
              <td>{{dependant.amount}}</td>
              <td>{{dependant.status}}</td>
              <td>{{dependant.start}}</td>
              <td>{{dependant.end}}</td>
              <td>
                <select v-model="action" class="focus:outline-none" @change="makeAction(dependant.id)">
                  <option value="" selected disabled>Select</option>
                  <option value="renew">Renew</option>
                  <option value="stop">Stop</option>
                  <option value="claim">Make Claim</option>
                </select>
              </td>
              <td>
                <a href="#" class="text-green-500">View certificate</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="w-full text-center py-4">
          <img class="block  mx-auto" src="@/assets/images/menu/Page-1.svg" alt="">
          <p class="mt-4 text-center font-bold text-green-500 font-lg">No records</p>
        </div>
      </div>
      <div class="mt-24 flex justify-between">
        <router-link class="text-green-500 block" to="/app/dashboard">Back</router-link>
        <!-- <button style="background: #00A859" class="text-white px-12 py-2 rounded float-right">Request claim</button> -->
      </div>
    </div>
    <p class="mt-8 text-sm text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dependants: [
        {id: 1, firstname: 'Obiwan', lastname: 'Pelosi', plan: 'Basic', status: 'active', amount: '50000', start: '05-06-2021', end: '05-07-2021'},
        {id: 2, firstname: 'Obiwan', lastname: 'Pelosi', plan: 'Premium', status: 'active', amount: '150000', start: '05-06-2021', end: '05-07-2021'},
      ],
      action: ''
    }
  },
  methods:{
    makeAction(id){
      if(this.action == 'claim'){
        this.$router.push(`/app/dashboard/deviceclaim/${id}`)
      }
    }
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