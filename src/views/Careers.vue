<template>
  <div>
    <NavBar />
    <Hero />
    <Openings />
    <TagLine />
    <LightGreenSection />
    <Certification />
    <Footer  />
  </div>
</template>

<script>
import Hero from "@/components/Careers/Hero"
import Openings from "@/components/Careers/Openings"
import NavBar from "@/components/Nav/HomeNavBar"
import TagLine from "@/components/AboutPage/TagLine"
import LightGreenSection from "@/components/Main/LightGreenSection"
import Certification from "@/components/Main/Certification"
import Footer from "@/components/Footer"
export default {
    components: {NavBar, Hero, TagLine, Openings, LightGreenSection, Certification, Footer}
}
</script>

<style>

</style>