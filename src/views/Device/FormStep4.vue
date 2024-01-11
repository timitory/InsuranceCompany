<template>
  <div class="mt-4">
    <div class="lg:w-3/4 lg:mx-auto">
      <p>Select a preferred debit card or add a new card to complete your payment</p>
      <div v-for="card in cards" :key="card.id" class="flex justify-between p-4 border border-solid border-gray-200 mt-4">
        <div class="flex md:w-full">
          <img v-if="card.type == 'visa' " src="@/assets/images/payment/visalogo.png" alt="" style="width: 50px">
          <img v-if="card.type == 'mastercard' " src="@/assets/images/payment/mclogo.png" alt="" style="width: 50px">
          <p class="font-bold ml-4"><span class="text-2xl">....</span> {{card.number | hide }}</p>
        </div>
        <label class="containerr md:w-full col1" v-bind:class="[selected == card.number ? 'text-green-500' : 'text-gray-300']">
          <input type="radio" v-model="selected" :value="card.number" >
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cards: [
        {number: '123456789098', type: 'mastercard'},
        {number: '123456789099', type: 'visa'}
      ],
      selected: '',
      showLink: false
    }
  },
  filters:{
    hide(val){
      return val.slice(8, 12)
    }
  },
  watch:{
    selected(){
      if(this.selected == ''){
        this.showLink = false
      }else{
        this.showLink = true
        this.$router.push('/app/dashboard')
      }
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
/* The container */
.containerr {
  display: block;
  padding: 10px;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.containerr input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  opacity: 0.5
}
.col1 .checkmark{
  background-color: #00A859;
}
.col1 input:checked ~ .checkmark {
  background-color:#00A859;
  opacity: 1;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.containerr input:checked ~ .checkmark:after {
  display: block;
}

/* Show the checkmark even when not checked */
.containerr input ~ .checkmark:after{
  display: block;
}
/* Style the checkmark/indicator */
.containerr .checkmark:after {
  left: 9px;
  top: 5px;
  width: 7px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


</style>