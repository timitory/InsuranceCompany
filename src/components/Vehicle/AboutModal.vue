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
                  <img src="@/assets/images/menu/Group 65.png" alt="" class="img">  
                  <p class="text-sm mt-4 cursor-pointer font-bold text-lg">
                    About Vehicle Insurance
                  </p>
                </div>
                <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl" @click="$emit('close')" />
              </div>
              <p class="mt-4">Auto(Vehicle) insurance policy covers damage to your car plus damage you cause to someone else’s car or property. We provide various categories of Auto Insurance on Paddycover;</p>
              <ul class="mt-2">
                <li class="mb-2"><span class="font-bold">(a)</span> Comprehensive Auto insurance policy is designed to protect the insured for loss of or damage to his/her vehicle, damage to third party property including bodily injury, and death to the third party caused by an accident whilst using their vehicle.</li>
                <li class="mt-2"><span class="font-bold">(b)</span>Third-party insurance policy covers any accidental damage by your vehicle to someone’s vehicle or property. This is the minimum coverage you should have by law.</li>
                <li class="mt-2"><span class="font-bold">(c)</span> Third-party prime insurance policy covers third party liabilities and also provides some benefits to the policy holder which must be as a result of an accident involving third party</li>
              </ul>
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
p, ul li{
  text-align: justify;
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 600px
  }
}
</style>