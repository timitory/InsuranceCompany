<template>
   <div class="l-modal">
      <div class="loading-modal w-full px-4 md:px-0">
        <u-animate-container>
          <u-animate
            name="slideInDown"
            delay="0s"
            duration="0.6s"
            :iteration="1"
            animateClass="animated"
            :begin="true"
            class="loader bg-white md:w-4/5 mx-auto rounded px-4 lg:px-8 lg:pb-6"
            v-on-clickaway="close"
          >
            <div class="pt-6">
              <div class="flex justify-between">
                <div>
                  <img src="@/assets/images/menu/Image 10.png" alt="" class="img">  
                  <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                    About Home Content Insurance
                  </p>
                </div>
                <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl" @click="$emit('close')" />
              </div>
              <p class="mt-4">Home Insurance protects you financially in the event that your home and property are damaged as a result of a burglary or fire outbreak. It is designed essentially for those living in rented apartments to cover their contents only against loss as a result of burglary, fire & special peril.Home Insurance protects you financially in the event that your home and property are damaged as a result of a burglary or fire outbreak. It is designed essentially for those living in rented apartments to cover their contents only against loss as a result of burglary, fire & special peril.</p>
            </div>
          </u-animate>
        </u-animate-container>
      </div>
    </div>
</template>

<script>
import "animate.css"
import { directive as onClickaway } from 'vue-clickaway';
export default {
  data(){
    return {
      existing: ''
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  },
  directives: {
    onClickaway: onClickaway,
  }
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 5px;
  padding-bottom: 20px;
  min-height: 80vh;
  overflow-y: auto;
}
.img{
  width: 120px
}
p{
  text-align: justify;
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 600px
  }
}
</style>