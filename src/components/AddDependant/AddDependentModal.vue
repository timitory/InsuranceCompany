<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
            <div class="pt-6">
              <hr>
              <div class="mt-6">
                <div  class="relative">
                  <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl absolute right-2 top-0" @click="$emit('close')" />
                  <div class="flex justify-between pt-8">
                    <p class="text-sm mt-4 py-2 w-full border-solid border-r cursor-pointer" :class="[show == 'single' ? 'text-green-500 font-bold' : '']" @click="show= 'single'">
                      <font-awesome-icon icon="user-plus" class="text-green-500" />
                      Single User
                    </p>
                    <div class="flex gap-2 py-2 w-full justify-end items-end cursor-pointer" @click="show = 'upload'">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4ZM13 17H11V14H8V12H11V9H13V12H16V14H13V17Z" fill="#10B981"></path>
                      </svg>
                      <p class="text-sm" :class="[show == 'upload' ? 'text-green-500 font-bold' : '']">Batch Upload</p>  
                    </div>
                  </div>
                  <SingleUser v-if="show == 'single'" v-on:close="close" />
                  <BatchUpload v-else v-on:close="close" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import SingleUser from "./SingleUser"
import BatchUpload from "./BatchUpload"
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins: [ clickaway ],
  components:{
    SingleUser, BatchUpload
  },
  data(){
    return {
      show: 'single',
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  }
  
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 5px;
  max-width: 500px;
  min-height: 629px;
}
input{
  background-color: #e2f5ec;
}
</style>