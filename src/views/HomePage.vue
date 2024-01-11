<template>
  <div class="body">
    <section id="wrapper" class="">
      <NavBar class="" />
      <Hero />
      <Stats />
      <Products />
      <section class="bigbox lg:mx-auto">
        <TagLine />
        <Partners />
        <VideoSection />
        <GreenPhone />
      </section>
      <LightGreenSection />
      <Certification />
      <Footer class="footer" />
    </section>
  </div>
</template>
<script>
import Hero from "@/components/Main/Hero/Hero"
import Stats from "@/components/Main/Stats/Stats"
import Products from "@/components/Main/ExploreProducts"
import TagLine from "@/components/Main/TagLine"
import Partners from "@/components/Main/Partners/Partners"
import VideoSection from "@/components/Main/VideoSection"
import GreenPhone from "@/components/Main/GreenPhone"
import LightGreenSection from "@/components/Main/LightGreenSection"
import Certification from "@/components/Main/Certification"
import NavBar from "@/components/Nav/HomeNavBar"
import Footer from "@/components/Footer"
export default {
  components: {Hero, Stats, NavBar, Products, TagLine, Partners, VideoSection, GreenPhone, Certification, Footer, LightGreenSection},
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
  background-color: #FAFAFA;
}
@media only screen and (min-width: 1024px){
  .bigbox{
    max-width: 1024px;
  }
}
@media screen and (min-width: 1280px){
  
}
</style>