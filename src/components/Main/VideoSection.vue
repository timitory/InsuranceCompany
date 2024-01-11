<template>
  <section class="mt-10 px-4 ">
      <div class="rounded-2xl w-full videocont relative">
          <iframe 
            class="w-full h-full absolute top-0 left-0 rounded-2xl"
            src="https://www.youtube.com/embed/gaceUrt7xO0"
            frameborder="0"
            title="PaddyCover Intro"
        >
          </iframe>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.videocont{
    padding-top: 120%
}
@media only screen and (min-width: 768px){
    .videocont{
        padding-top: 56.25%
    }
}
</style>