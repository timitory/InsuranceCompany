<template>
  <div>
        <NavBar />
        <Impact />
        <Stats />
        <TagLine />
        <LightGreenSection />
        <Certification />
        <Footer />
  </div>
</template>

<script>
import TagLine from "@/components/AboutPage/TagLine"
import Impact from "@/components/Main/Impact/Impact"
import Stats from "@/components/Main/Impact/ImpactStats"
import LightGreenSection from "@/components/Main/LightGreenSection"
import Certification from "@/components/Main/Certification"
import NavBar from "@/components/Nav/HomeNavBar"
import Footer from "@/components/Footer"
export default {
components: {NavBar, Footer, LightGreenSection, Certification, Impact, TagLine, Stats}
}
</script>

<style scoped>
@media only screen and (min-width: 1024px){
  .bigbox{
    max-width: 1024px;
  }
}
</style>