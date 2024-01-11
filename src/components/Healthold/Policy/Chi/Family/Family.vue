<template>
  <div>
      <transition name="slide">
        <Form1 v-if="step == 1" v-on:submitForm1="saveForm1"></Form1>
      </transition>
      <transition name="slide">
        <Form2 v-if="step == 2" v-on:submitForm2="saveForm2"></Form2>
      </transition>
  </div>
</template>

<script>
import Form1 from "./Family1.vue"
import Form2 from "./Family2.vue"
export default {
    components: {Form1, Form2},
    data(){
        return {
            step: 1,
            data : {}
        }
    },
    methods: {
        saveForm1(data){
            this.data = data
            window.scrollTo(0, 10);
            this.step = 2
        },
        saveForm2(data){
            this.data = {...this.data, ...data}
            this.$emit('buyPolicy', this.data)
        }
    }
}
</script>

<style scoped>
.slide-enter-active{
  animation-name: slide-in;
  animation-duration: .5s;
}
.slide-leave-active{
  /* animation: slide-in .5s reverse; */
  transition: opacity .1s ease-out;
}
.slide-leave-to{
  opacity: 0
}
@keyframes slide-in {
  0%{
    transform: translateX(400px);
  }
  100%{
    transform: translateX(0);
  }
}
</style>