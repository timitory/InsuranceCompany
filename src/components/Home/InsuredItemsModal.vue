<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white mx-auto py-6 pb-8 px-10 relative">
            <font-awesome-icon icon="times-circle" class="absolute  cursor-pointer text-red-500 text-xl right-2 top-2" @click="$emit('close')"/>
            <h1 class="font-bold text-2xl">Home Insured Items</h1>
            <ul class="grid lg:grid-cols-2 gap-4 mt-4" >
                <li v-for="(item, i) in items" :key="i">
                    <p class="font-bold">{{item.name}}</p>
                    <p class="mt-2">{{item.amount}}</p>
                </li>
            </ul>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['items'],
    data(){
        return {
            message: ''
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 100px;
  width: 80%;
  border-radius: 16px;
}
.times{
  top: -50px
}
textarea{
    height: 150px
}
@media only screen and (min-width: 1024px){
  .loader{
    width: 60%;
    max-width: 400px;
  }
}
</style>