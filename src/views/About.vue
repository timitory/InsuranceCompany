<template>
  <div class="body">
    <NavBar />
    <Hero />
    <StandFor />
    <Values />
    <Team />
    <TagLine />
    <LightGreenSection />
    <Certification />
    <Footer  />
  </div>
</template>
<script>
import NavBar from "@/components/Nav/HomeNavBar"
import Hero from "@/components/AboutPage/Hero"
import StandFor from "@/components/AboutPage/StandFor"
import Values from "@/components/AboutPage/Values"
import Team from "@/components/AboutPage/Team"
import TagLine from "@/components/AboutPage/TagLine"
import LightGreenSection from "@/components/Main/LightGreenSection"
import Certification from "@/components/Main/Certification"
import Footer from "@/components/Footer"
export default {
  components: {NavBar, Hero, StandFor, Values, Team, TagLine, LightGreenSection, Certification, Footer}
}
</script>
<style scoped>
.body{
  background-color: #FAFAFA;
}
</style>