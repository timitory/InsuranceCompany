<template>
  <div id="sidebar" class="border-r-2 shadow ">
    <div class="nav px-3">
      <div class="imgbox flex items-center justify-center bg-gray-300">
        <p class="text-white font-bold">{{initals}}</p>
      </div>
      <div class="sidebar-list sidebar-show" id="sidenav">
        <ul class="mt-28 gap-12 sidebar-nav flex flex-col items-center" @click="toggleCollapse">
          <li class="nav-item py-3 cursor-pointer">
            <img v-if="$store.state.view == 'dashboard'" src="../assets/images/sidenav/Icon material-dashboard copy.svg" alt="Dashboardicon" class="mb-2 inline" style="width:20px">
            <img v-else src="../assets/images/sidenav/Icon material-dashboard.svg" alt="Dashboardicon" class="mb-2 inline" style="width:20px">
          </li>
          <li class="nav-item py-3 cursor-pointer">
            <img v-if="$store.state.view == 'settings'" src="../assets/images/sidenav/Icon material-settings copy.svg" alt="settings" class="mb-1 inline" style="width: 20px">
            <img v-else src="../assets/images/sidenav/Icon material-settings.svg" alt="settings" class="mb-1 inline" style="width: 20px">
          </li>
          <li class="nav-item py-3 cursor-pointer">
            <img src="../assets/images/sidenav/Icon metro-switch.svg" alt="" class="mb-1 inline" style="height: 24px">
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade" >
      <div class="navlist px-3 flex flex-col gap-12 mt-12" v-show="$store.state.collapse">
        <p class="text-white text-sm" style="margin-top: 20px">{{name}}</p>
        <router-link to="/app/dashboard/menu" class="block py-4 text-sm mt-16" :class="[$store.state.view == 'dashboard' ? 'text-blue-900': 'text-white']">Dashboard</router-link>
        <router-link to="/app/dashboard/settings" class="block py-4 text-sm" :class="[$store.state.view == 'settings' ? 'text-blue-900': 'text-white']">Account & Settings</router-link>
        <p @click="logout" class="cursor-pointer block py-4 text-sm text-white">Logout</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {

  data(){
    return {
      // collapse: false
    }
  },
  computed:{
    name(){
      return this.$store.state.user.firstname + " " + this.$store.state.user.lastname
    },
    initals(){
      return this.$store.state.user.firstname.slice(0, 1) + " " + this.$store.state.user.lastname.slice(0, 1)
    }
  },
  methods: {
    toggleCollapse(){
      this.$store.commit('toggleCollapse');
    },
    logout(){
      this.$store.commit('startLoading')
      this.$store.dispatch('logoutUser')
      .then(()=>{
        this.$router.push('/login')
        this.$store.commit('endLoading')
      })
    }
  },
  
}
</script>

<style scoped>
#sidebar{
  height: 100%;
  display: flex;
  background-color: #00A859;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-color: #00A859;
  /* border: 1px solid red; */
  position: fixed;
  top: 0
}
.sidebar-list{
  max-height: calc(100% - 50px);
  overflow-y: auto;
}
.sidebar-nav{
  padding: 0; 
}
.navlist{
  height: 100%;
  background-color: #00A859;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  left: 0px;
  /* width: 0px; */
  opacity: 1;
  transition: all 0.3s ease
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav{
  height: 100%;
  background-color: #1CB16B;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1000
}
.imgbox{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-top: 50px;
}

.collapse-box-enter-active, .collapse-box-leave-active{
  transition: opacity .5s
}
.collapse-box-enter, .collapse-box-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>