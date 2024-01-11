<script setup>

</script>

<template>
  <div class="l-modal">
    <div class="loading-modal w-full">
      <div class="loader bg-white w-2/4 mx-auto rounded px-4 lg:px-8 pb-6 " >
        <div>
          <div @click="this.$emit('close')" class="absolute left-4 top-2">
            <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </div>
        </div>
        <p>Click Here to navigate to the Manage policy and complete the form for each pet on the excel</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}
</style>