<template>
  <div class="p-3 rounded-b-xl" style="background: linear-gradient(98.06deg, #14801B 1.36%, #00A859 92.41%)">
    <div class="flex justify-between">
      <div class="rounded ml-3 mt-2 lg:invisible border flex items-center px-2" 
        style="height:35px; cursor:pointer"
        @click="$emit('openMobile')">
        <font-awesome-icon icon="align-left" class="text-white"/>
        <span class="mb-0 ml-2 text-white">Menu</span>
      </div>
      <div class="flex items-center lg:float-right">
        <div class="">
          <img
            :src="placeholder"
            style="height: 24px; width: 24px; border-radius: 50%"
          />
        </div>
        <p class="mb-0 ml-2 text-white">Hello John</p>
      </div>
    </div>
  </div>
</template>

<script>
import placeholder from '@/assets/images/placeholder-img.png'
export default {
  data(){
    return {
      placeholder: placeholder
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>