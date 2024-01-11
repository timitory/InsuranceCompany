<template>
  <div>
    <div class="mt-8 px-6 pt-6 pb-20 relative shadow-lg lg:px-12 bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard/managevehicle" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex items-center">
        <img src="@/assets/images/menu/Group 65.png" alt="" class="" style="height: 140px; width: 170px">
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <p class="text-lg font-bold lg:w-1/5">Vehicle Insurance</p>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 border-2 bg-green-500">
          </div>
        </div>
      </div>
      <p class="mt-6 text-lg lg:px-12 font-bold" v-if="enrollee.underwriter.id == 2">Required Information: AIICO Insurance </p>
      <p class="mt-6 text-lg lg:px-12 font-bold" v-else-if="enrollee.underwriter.id == 1">Required Information: Consollidated Hallmark Insurance </p>
      <AiicoClaim v-if="enrollee.underwriter.id == 2" :enrollee="enrollee" />
      <ChiClaim v-else-if="enrollee.underwriter.id == 1" />
    </div>
    <p class="mt-8 text-sm text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChiClaim from "@/components/Vehicle/Claims/Chi/ChiClaim"
import AiicoClaim from "@/components/Vehicle/Claims/Aiico/AiicoClaim"
export default {
  components:{
    ChiClaim, AiicoClaim
  },
  data(){
    return {
      underwriter_id: 1
    }
  },
  computed:{
    ...mapState({
      enrollee: state => state.enrollee,
    })
  },
}
</script>

<style scoped>
.filelabel{
  cursor: pointer;
  display: block;
  padding: 10px 10px;
  position: relative;
  background: #131b47;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filelabel input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}


</style>