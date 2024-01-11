<template>
  <div class="body">
    <NavBar />
    <div class="lg:mt-10 px-3 lg:px-20 mt-6">
      <div class="lg:flex flex-row-reverse gap-4 justify-between items-center displaybox">
          <div>
              <img src="@/assets/images/productspage/Humaaans - 3 Characters.png" class=" lg:hidden" alt="">
              <img src="@/assets/images/productspage/Humaaans - 3 Characters@2x.png" class="hidden lg:inline-block" id="img" alt="">
          </div>
          <div class="mt-6 lg:mt-0">
              <p style="color: #00A859;" class="text-sm font-bold">The magic behind the scenes</p>
              <h1 class="font-bold mt-2 text-2xl lg:text-3xl">We are Team Players</h1>
              <p class="mt-6 text-lg" style="max-width: 1200px">Our entire crew working to give the best of a stress free life against unforeseen circumstances and we decided to provide a service that makes life worth living by offering a very affordable insurance policy which caters for every individual at the comfort of your pocket.</p>
          </div>
      </div>
      <Team />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Nav/HomeNavBar"
import Footer from "@/components/Footer"
import Team from '@/components/Team.vue'
export default {
  components: {NavBar, Footer, Team},
  created(){
    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  }
}
</script>

<style scoped>
.body{
  overflow-x: hidden;
}
@media only screen and (min-width: 1024px){
    .displaybox{
        max-width: 90%;
        /* border: 1px solid red */
    }
    .plans{
        flex: 0 0 45%;
        margin-bottom: 20px;
    }
    
    #img{
        animation-name: move;
        animation-duration: 3s;
        animation-delay: 0s;
        animation-fill-mode: forwards;
    }
    @keyframes move {
        from{
            transform: translateY(400px)
        }
        to{
            transform: translateY(0);
        }
    }
}
</style>