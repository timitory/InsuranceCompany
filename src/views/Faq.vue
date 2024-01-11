<template>
  <div class="body">
    <NavBar />
      <FAQ />
      <LightGreenSection />
      <Certification />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Nav/HomeNavBar"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import LightGreenSection from "@/components/Main/LightGreenSection"
import Certification from "@/components/Main/Certification"
export default {
  components: {NavBar, Certification, Footer, LightGreenSection, FAQ},
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
  font-family: 'Montserrat';
}

</style>