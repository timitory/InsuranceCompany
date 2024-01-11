<template>
  <div class="mt-8 lg:w-3/4 lg:mx-auto">
    <p class="mt-4">Required Information</p>
    <p class="mt-2 font-light text-sm">Basic/Standard/Premium Plan</p>
    <hr class="mt-2">
    <div class="mt-6">
      <p class="mt-4 text-green-500 font-semibold">Personal Biodata</p>
      <form @submit.prevent="validateForm" class="mt-4">
        <div class="mt-8 lg:flex justify-between">
          <div class="mr-3">
            <div class="lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm">First Name</label>
                <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
              <div class="lg:w-full lg:ml-3">
                <label class="text-sm">Last Name</label>
                <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm">Email address</label>
              <input type="email" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4">
              <label class="text-sm">Phone number</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4">
              <label class="text-sm">Date of Birth</label>
              <input type="date" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4 lg:flex lg:justify-between">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm">Means of ID</label>
                <select class="block mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="" class="bg-white">International Passport</option>
                  <option value="" class="bg-white">Driver's Licenese</option>
                  <option value="" class="bg-white">National ID</option>
                </select>
              </div>
              <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                <label class="text-sm">ID Number</label>
                <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm">Upload Profile Photo<span class="text-red-500">*</span></label>
              <div class="lg:flex">
                <div class="bg-blue-100 py-3 px-3 lg:w-full lg:mr-2">
                  <font-awesome-icon icon="arrow-right"/>
                </div>
                <div class="lg:w-full lg:ml-2 mt-4 lg:mt-0">
                  <p>Upload any clear picture in the following format, <span class="font-bold">PNG*</span> or <span class="font-bold">JPEG*</span></p>
                  <label class="filelabel text-white text-center rounded">Upload
                    <input type="file">
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:ml-3 mt-6 lg:mt-0">
            <div class="">
              <label class="text-sm">List of devices</label>
              <textarea cols="30" rows="5" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
            </div>
            <div class="mt-4">
              <label class="text-sm">Total Device cost</label>
              <input type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            <div class="mt-4">
              <label class="text-sm">Upload pictures of devices<span class="text-red-500">*</span></label>
              <div class="lg:flex">
                <div class="bg-blue-100 py-3 px-3 lg:w-full lg:mr-2">
                  <font-awesome-icon icon="arrow-right"/>
                </div>
                <div class="lg:w-full lg:ml-2 mt-4 lg:mt-0">
                  <p>Upload any clear picture in the following format, <span class="font-bold">PNG*</span> or <span class="font-bold">JPEG*</span></p>
                  <label class="filelabel text-white text-center rounded">Upload
                    <input type="file">
                  </label>
                </div>
              </div>
            </div>
            <button style="background: #00A859" class="block w-full focus:outline-none lg:w-auto lg:inline mt-16 text-white px-12 py-2 rounded lg:float-right">Proceed</button>
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
      // existing: ''
    }
  },
  methods: {
    validateForm(){
      this.$router.push('/app/dashboard/buydevice/4')
    }
  }
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
.filelabel input, .radiobtn input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>