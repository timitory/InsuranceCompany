<template>
  <div class="">
    <div class="mt-4 pb-8">
      <p class="font-semibold text-lg">About Health Policy</p>
      <div class="scrollbox mt-4">
        <p class="mt-4"></p>
      </div>
      <router-link to="/app/dashboard/buyhealth/1" class="mt-8 text-green-500 block text-right">
        Proceed
        <font-awesome-icon icon="arrow-right" class="text-green-500 ml-3" />
      </router-link>
      <!-- <router-link to="/app/dashboard/buyhealth/1" class="text-center block bg-green-500 rounded py-3 w-full mt-8 text-white lg:hidden">
        Proceed
        <font-awesome-icon icon="arrow-right" class="ml-3" />
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.scrollbox{
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}
.scrollbox::-webkit-scrollbar-track{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.scrollbox::-webkit-scrollbar
{
	width: 2px;
	background-color: #F5F5F5;
}

.scrollbox::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #14801B;
}
@media only screen and (min-width: 1024px){
  .scrollbox{
    max-height: 150px
  }
}
</style>