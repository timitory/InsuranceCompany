<template>
  <div id="dashboard" class="home" :class="[$store.state.collapse == true || $store.state.activeModal > 0 ? 'overflow-y-hidden overflow-x-hidden': '']">
    <div class="wrapper w-full relative">
      <MobileNav class="block lg:hidden"/>
      <div class="hidden lg:block w-full border-solid bgrd">
        <TheSidebar />
      </div>
      <div class="w-full page relative overflow-x-hidden 2xl:mx-auto" :class="[$store.state.collapse == true ? 'ml-16' : 'ml-0']">
        <img src="@/assets/images/menu/Background Top.svg" class="absolute hidden lg:inline-block  topwave">
        <div class="p-3 pb-32">
          <main class="rounded-md bg-white">
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition> 
          </main>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/AppFooter.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import MobileNav from '@/components/Nav/MobileNav.vue'

export default {
  name: 'Home',
  components:{
    TheSidebar,
    MobileNav,
    Footer
  },
  data(){
    return {
      showMobile: false
    }
  },
  methods: {
    openMobile(){
      this.showMobile = true
    },
    closeMobile(){
      this.showMobile = false
    },
  },
  // created(){
  //   window.Tawk_API.onLoad = function () { window.Tawk_API.hideWidget(); };
  //   window.Tawk_API.hideWidget()
  // },
  // destroyed(){
  //   window.Tawk_API.showWidget()
  // }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap');
#dashboard {
  font-family: 'Nunito', sans-serif;
}
</style>
<style scoped>


.home{
  height: 100%
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.l-modal{
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0, 0.3);
}
.loading-modal{
  min-height: 350px; 
}

@media only screen and (min-width: 1024px){
  .topwave{
    top: -18%;
    right: -10%;
    overflow-x: hidden;
  }
  div.bgrd{
    background-color: #00A859;
    z-index: 1000;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: sticky;
    top: 0;
    height: 100vh;
    box-sizing: border-box;
    
  }
  .wrapper{
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: auto;
    min-height: 100vh;
    width: 100%;
  }
  div.page{
    transition: margin 0.5s;
  }
  @media only screen and (min-width: 1280px){
    .topwave{
      top: -25%
    }
  }
  @media only screen and (min-width: 1536px){
    .page{
      max-width: 1500px;
    }
  }
}
</style>