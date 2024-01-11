<template>
  <div class="lg:px-10">
    <section class="mt-8">
      <div class="flex lg:block justify-between">
        <h1 class="text-2xl  lg:text-2xl text-green-500 font-bold">Dashboard</h1>

      <!-- ===SHOW ON SMALL SCREENS=== -->
        <div class="lg:hidden relative ml-6" @click="showList = !showList">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 30px;">
          <div v-if="showList" v-on-clickaway="close" class="bg-white rounded absolute py-6 px-6 -left-32 top-4 showList shadow-md" style="width: 180px; z-index: 100000">
            <router-link to='/app/dashboard/adduser' class="block text-sm text-blue-500">Add Dependant</router-link>
            <router-link to='/app/dashboard/viewdependants' class="mt-2 block text-sm text-blue-500">View Dependants</router-link>
          </div>
        </div>
        <!-- <router-link to='/app/dashboard/adduser' class="lg:hidden">
          <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 30px">
        </router-link> -->
      </div>
      <router-link to="/app/dashboard/transactionhistory" class="mt-6 block lg:hidden text-green-500 underline font-bold">View Transaction History</router-link>
      <!-- ===SHOW ON SMALL SCREENS=== -->

      <!-- ===SHOW ON LARGE SCREENS=== -->
      <div class="mt-6 flex relative justify-between items-start  lg:pr-20">
        <div class="">
          <p class="font-bold text-lg lg:text-xl">Hello {{name}},</p>
          <p class="mt-2" v-if="!$store.state.user.has_policy">You have no active Insurance policy, below are the policies we offer.</p>
          <p class="mt-2" v-else>You have an active Insurance policy, Manage your policies below.</p>
        </div>
        <div class="absolute flex top-0 right-0 hidden lg:block">
          <!-- <div class="inline relative ml-6" @click="showList2 = !showList2">
            <img src="@/assets/images/menu/History.svg" alt="" style="width: 50px; display: inline">
            <div v-if="showList2" v-on-clickaway="close" class="bg-white rounded absolute py-6 px-6 -left-24 top-4 showList shadow-md" style="width: 180px; z-index: 100000">
              <router-link to='/app/dashboard/claimhistory' class="block text-sm text-blue-500 focus:underline">View Claim History</router-link>
              <hr/>
              <router-link to='/app/dashboard/transactionhistory' class="block text-sm text-blue-500 focus:underline">View Transaction History</router-link>
              
            </div>
          </div>  -->
          <router-link to="/app/dashboard/claimhistory" class="text-green-500 inline underline font-semibold mr-6">View Claims History</router-link>
          <router-link to="/app/dashboard/transactionhistory" class="text-green-500 inline underline font-semibold mr-6">View Transactions History</router-link>
          <div class="inline relative ml-6" @click="showList = !showList">
            <img src="@/assets/images/menu/Group 40.svg" alt="" style="width: 50px; display: inline">
            <div v-if="showList" v-on-clickaway="close" class="bg-white rounded absolute py-6 px-6 -left-24 top-4 showList shadow-md" style="width: 180px; z-index: 100000">
              <router-link to='/app/dashboard/adduser' class="block text-sm text-blue-500 focus:underline">Add Dependant</router-link>
              <router-link to='/app/dashboard/viewdependants' class="mt-2 block text-sm text-blue-500">View Dependants</router-link>
            </div>
          </div>
        </div>
        
      </div>
      <!-- ===SHOW ON LARGE SCREENS=== -->
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins: [ clickaway ],
  data(){
    return {
      showList: false,
      showList2: false
    }
  },
  methods:{
    close(){
      this.showList = false
    }
  },
  mounted(){
    this.$store.commit('changeview', 'dashboard')
  },
  computed:{
    name(){
      return this.$store.state.user.firstname
    }
  }
}
</script>

<style scoped>

</style>