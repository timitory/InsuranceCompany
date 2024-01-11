<template>
  <div>
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white whitebox" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard/managevehicle" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
        <div class="flex mt-4 items-center">
            <p class="text-lg lg:w-1/4 font-bold">Policy Details</p>
            <div class="ml-3 w-full lg:flex justify-between items-center">
            <div class=" lg:w-full">
                <hr class="mt-2">
                <hr class="mt-2">
                <hr class="mt-2 border-green-500 bg-green-500 border-2">
            </div>
            </div>
        </div>
        <div class="mt-12">
            <p class="font-bold">Policy Number</p>
            <p class="mt-2 lg:mt-4 text-green-500 font-bold">{{policy.policy.policy_number}}</p>
        </div>
        <ul class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <li>
                <p>Enrollee</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.enrollee.firstname}} {{policy.policy.enrollee.lastname}}</p>
            </li>
            <li>
                <p>Vehicle make</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.vehicle_make}}</p>
            </li>
            <li>
                <p>Vehicle model</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.vehicle_model}}</p>
            </li>
            <li>
                <p>Vehicle value</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.vehicle_value}}</p>
            </li>
            <li>
                <p>Plate Number</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.plate_number}}</p>
            </li>
            <li>
                <p>Engine Number</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.engine_no}}</p>
            </li>
            <li>
                <p>Chasis No</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.chasis_no}}</p>
            </li>
            <li>
                <p>Vehicle Class</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.vehicle_class}}</p>
            </li>
            <li>
                <p>Vehicle Usage</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.vehicle_usage}}</p>
            </li>
            <li>
                <p>Vehicle Color</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.vehicle_color}}</p>
            </li>
            <li>
                <p>Year of Make</p>
                <p class="mt-2 lg:mt-4 font-bold mb-6">{{policy.policy.year_of_make}}</p>
            </li>
        </ul>
        <div class="mt-4">
            <p class="font-bold">Premium: <span class="text-green-500 text-lg">{{policy.policy.amount}}</span></p>
        </div>
        <div class="mt-24 ">
            <router-link class="text-green-500 block" to="/app/dashboard/managevehicle">Back</router-link>
        </div>
    </div>
    <p class="mt-8 text-sm text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
  </div>
</template>

<script>
import {mapState} from "vuex"
// import axios from "axios"
// import baseURL from "@/main"
export default {
  data(){
    return {
      dependant: {}
    }
  },
  computed:{
    ...mapState({
      policy: state => state.vehicle.policy
    })
  },
  methods: {

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