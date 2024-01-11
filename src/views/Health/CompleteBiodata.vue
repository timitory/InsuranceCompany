<template>
  <div class="rounded mt-6 w-3/4 mx-auto p-4" style="box-shadow: 0px 20px 33px #00000029;">
    <div class="">
      <p class="font-bold text-center mt-4 text-lg">Health Cover Biodata</p>
      <p class="text-center mt-4">Please fill in the bio data to complete your health care policy</p>
      <form class="mt-6">
        <div class="lg:flex lg:justify-between">
          <div class="lg:mr-3 lg:w-full">
            <div class="">
              <label class="text-sm">First Name</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <div class="mt-4">
              <label class="text-sm">Email Address</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <div class="mt-4">
              <label class="text-sm">Phone Number</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <div class="mt-4">
              <label class="text-sm">Gender<span class="text-red-500">*</span></label>
              <div class="flex mt-4">
                <label class="radiobtn rounded mr-3 text-center border-solid border-green-500 border"
                :class="existing == 'male' ? 'text-white bg-green-500' : 'text-green-500 bg-white'">Male
                  <input type="radio" class="" value="male" v-model="existing">
                </label>
                <label class="radiobtn rounded ml-3 text-center border-solid border-green-500 border"
                :class="existing == 'female' ? 'text-white bg-green-500' : 'text-green-500 bg-white'" >Female
                  <input type="radio" class="" value="female" v-model="existing">
                </label>
              </div>
            </div>
          </div>
          <div class="lg:ml-3 lg:w-full">
            <div class="">
              <label class="text-sm">Last Name</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <div class="mt-4">
              <label class="text-sm">Date of Birth</label>
              <input type="date" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <div class="mt-4">
              <label class="text-sm">Home Address</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <div class="mt-4">
              <label class="text-sm">Preferred Hospital Name</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none">
            </div>
            <router-link to="/app/dashboard" class="block text-right mt-10 text-green-500">Submit <font-awesome-icon icon="arrow-right" class="ml-3"/></router-link>
          </div>
        </div>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      existing: ''
    }
  }

}
</script>

<style scoped>
.radiobtn{
  cursor: pointer;
  /* display: block; */
  padding: 8px 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.radiobtn input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>