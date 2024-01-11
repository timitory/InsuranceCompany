<template>
  <div class="mt-4">
    <div class="lg:w-3/4 lg:mx-auto">
      <p>Select a preferred debit card or add a new card to complete your payment</p>
      <div class="mt-8 box">
        <label v-for="(card, index) in cards" :key="index" class="container border text-lg border-solid" :class="[card.id  == card_id  ? 'border-green-500' : 'border-gray-300']">
          <div class="flex w-full">
            <img v-if="card.card_type == 'visa '" src="@/assets/images/payment/visalogo.png" alt="" style="width: 50px">
            <img v-else-if="card.card_type == 'mastercard' " src="@/assets/images/payment/mclogo.png" alt="" style="width: 50px">
            <img v-else-if="card.card_type == 'verve' " src="@/assets/images/payment/vlogo.png" alt="" style="width: 50px">
            <p class="font-bold ml-4"><span class="text-2xl">....</span> {{card.last_four }}</p>
          </div>
          <input type="radio" v-model="card_id" :value="card.id">
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
export default {
  data(){
    return {
      cards: [
      ],
      card_id: 0,
    }
  },
  computed:{
    ...mapState({
      quote: state => state.vehicleQuote
    })
  },
  watch:{
    card_id(){
      this.payNow()
    }
  },
  methods: {
    getCards(){
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/cards`)
      .then((res)=>{
        this.cards = res.data.data
        this.$store.commit('endLoading')
      })
      .catch((err)=>{
        this.$store.dispatch('handleError', err)
      })
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        user_vehicle_id : this.quote.user_vehicle_id,
        card_id : this.card_id
      }
      axios({url: `${baseURL}/vehicle/payment/init`, data: data, method: 'POST'})
      .then(res=>{
        this.$store.commit('setSuccess', {status: true, msg: res.data.data.status})
        this.$router.push('/app/dashboard/managevehicle')
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
  },
  mounted(){
    this.getCards()
    this.$store.commit('endLoading')
  }
}
</script>

<style scoped>
/* The container */
.container {
  display: block;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 15px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color:#00A859;
  opacity: 0.2
}


/* When the checkbox is checked, add a green background */
.container input:checked ~ .checkmark {
  background-color:#00A859;
  opacity: 1
}

/* Create the checkmark/indicator (faded when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
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

@media only screen and (min-width: 1024px){
  .box{
    max-width: 600px;
  }
 
}


</style>