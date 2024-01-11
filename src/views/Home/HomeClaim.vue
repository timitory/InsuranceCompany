<template>
  <div>
    <div class="mt-8 px-6 pt-6 pb-20 relative shadow-lg bg-white" style="box-shadow: 0px 20px 33px #00000029;">
      <router-link to="/app/dashboard/managehome" class="absolute left-4 top-2">
        <font-awesome-icon icon="times-circle" class="text-green-600 " />
      </router-link>
      <div class="flex items-center">
        <img src="@/assets/images/menu/Image 10.png" alt="" class="" style="height: 140px; width: 170px">
        <div class="ml-3 w-full lg:flex justify-between items-center">
          <p class="text-lg font-bold lg:w-1/5">Home Insurance</p>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 border-2">
          </div>
        </div>
      </div>
      <p class="mt-6 text-green-500 text-2xl lg:px-12 font-bold">Claim for Obiwan Pelosi</p>
      <div class="lg:flex lg:justify-between lg:mt-6 lg:px-12">
        <div class="lg:mr-3 ">
          <div class="mt-4 lg:mt-0">
            <label class="text-sm font-bold">Policy Number</label>
            <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
          </div>
          <div class="mt-4">
            <label class="text-sm font-bold">Date of Accident</label>
            <input type="date" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
          </div>
        </div>
        <div class="lg:ml-3 ">
          <div class="mt-4 lg:mt-0">
            <label class="text-sm font-bold">Details of Accident</label>
            <textarea rows="5" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
          </div>
          <div class="mt-4">
            <label class="text-sm font-bold">Upload pictures of front and back of the vehicle/ device/ home content*<span class="text-red-500">*</span></label>
            <div class="lg:flex lg:mt-4">
              <div class="bg-blue-100 py-3 px-3 lg:w-full lg:mr-2">
                <p>Front</p>
                <div>
                  <font-awesome-icon icon="arrow-right"/>
                </div>
              </div>
              <div class="bg-blue-100 py-3 px-3 lg:w-full lg:mr-2">
                <p>Back</p>
                <div>
                  <font-awesome-icon icon="arrow-right"/>
                </div>
              </div>
              <div class="lg:w-full lg:ml-2">
                <p>Upload any clear picture in the following format, <span class="font-bold">PNG*</span> or <span class="font-bold">JPEG*</span></p>
                <label class="filelabel mt-2 text-white text-center rounded">Upload
                  <input type="file">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24 flex justify-between">
        <router-link class="text-green-500 block" to="/app/dashboard/managehome">Back</router-link>
        <button class="text-white px-12 py-2 rounded bg-green-500 focus:outline-none">Proceed</button>
      </div>
    </div>
    <p class="mt-8 text-sm text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style scoped>
.filelabel{
  cursor: pointer;
  display: block;
  padding: 10px 10px;
  position: relative;
  background: #131b47;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filelabel input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}


</style>