<template>
  <div>
        <form @submit.prevent="">
            <div class="mt-8 lg:mt-18">
                <p class="font-bold text-lg lg:text-xl">Card Management</p>
                <p class="mt-2">We would not debit your account until a policy has been issued. Your active card is where your repayments will be debitted from</p>
                <div class="lg:w-3/4">
                    <div class="lg:w-1/2">
                        <div v-for="(card, index) in cards" :key="index" @click="showOptions(card)" class="relative cursor-pointer flex justify-between p-4 border-solid  mt-4" :class="[card.status == 'Active' ? 'border-green-500 border-2 active' : 'border border-gray-200']">
                            <div class="flex w-full">
                                <img v-if="card.card_type == 'visa '"  src="@/assets/images/payment/visalogo.png" alt="" style="width: 50px">
                                <img v-else-if="card.card_type == 'mastercard' " src="@/assets/images/payment/mclogo.png" alt="" style="width: 50px">
                                <img v-else-if="card.card_type == 'verve' " src="@/assets/images/payment/vlogo.png" alt="" style="width: 50px">
                                <p class="font-bold ml-4"><span class="text-2xl">....</span> {{card.last_four }}</p>
                            </div>
                            <button type="button" @click.stop="removeCard(card)" class="circle bg-gray-200 cursor-pointer">
                                <font-awesome-icon icon="trash" class="text-red-500" />
                            </button>
                            <p class="tooltip hidden absolute rounded shadow p-2">This is your active card</p>
                        </div>
                    </div>
                    <button type="button" @click="addCard" class="addbtn mt-6 cursor-pointer px-12 py-2 rounded flex items-center gap-2">Add new card</button>
                    <!-- <div class="bg-gray-200 rounded py-20 lg:py-0 lg:ml-3 mt-4 lg:mt-4 lg:w-full text-center flex items-center justify-center addbox">
                        <div>
                            <button type="button" @click="addCard" class="mt-2 cursor-pointer border p-2 rounded flex items-center gap-2 border-black"><span class="text-2xl">+</span>Add new card</button>
                        </div>
                    </div> -->
                </div>
            </div>
        </form>
        <Modal v-if="showModal" :card="selectedCard" v-on:close="closeModal" v-on:activated="newActiveCard" />
        <div v-show="showPaystack">
            <Paystack
            ref="paystackbutton"
            class="hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
            :amount="paystackData.amount"
            :email="paystackData.email"
            :paystackkey="paystackData.public_key"
            :reference="paystackData.reference"
            :callback="verifyCard"
            :close="cancelPayment"
            >
            </Paystack>
        </div>
  </div>
</template>

<script>
import Paystack from "vue-paystack";
import axios from 'axios'
import baseURL from "@/main"
import Modal from "@/components/Settings/CardModal"
export default {
    components: {Paystack, Modal},
    data(){
        return {
           cards: [],
           showModal : false,
           selectedCard : {},
            paystackData: {
                public_key: '',
                email: '',
                amount: 0,
                reference: ''
            },
            showPaystack: false
        }
    },
    filters:{
        hide(val){
            return val.slice(8, 12)
        }
    },
    methods:{
        addCard(){
            axios({url: `${baseURL}/card`, method: 'POST'})
            .then(res=>{
                this.showPaystack = true
                this.paystackData = res.data.data
                // console.log(this.paystackData)
                this.$refs.paystackbutton.payWithPaystack(this.paystackData)
            })
            .catch(err=>{
                // console.log(err)
                this.$store.dispatch('handleError', err)
            })
        },
        newActiveCard(){
            this.closeModal()
            this.$store.commit('setSuccess', {status: true, msg: 'New Card Activated!'})
            this.getCards()
        },
        removeCard(card){
            this.$store.commit('startLoading')
            axios({url:`${baseURL}/card`, data: {card_id: card.id}, method:'DELETE'})
            .then((res)=>{
                this.$store.commit('setSuccess', {status: true, msg: res.data.message})
                this.$store.commit('endLoading')
                this.getCards()
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        },
        showOptions(card){
            if(card.status == 'Active') return
            this.selectedCard = card
            this.showModal = true
        },
        closeModal(){
            this.showModal = false
            this.selectedCard = {}
        },
        cancelPayment(){
            this.$store.commit('endLoading')
            this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
        },
        verifyCard(){
            axios({url: `${baseURL}/card/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
            .then(()=>{
                this.$store.commit('setSuccess', {status: true, msg: "New card added and set to be active"})
                this.getCards()
            })
            .catch(err=>{
                this.$store.commit('endLoading')
                this.$store.commit('setError', {status: true, msg: err.response.data.message})
            })
        },
        getCards(){
            axios.get(`${baseURL}/cards`)
            .then((res)=>{
                this.$store.commit('endLoading')
                this.cards = res.data.data
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        this.getCards()
        this.$store.commit('endLoading')
    }
}
</script>

<style scoped>
.circle{
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
  justify-items: center;
}
.addbtn{
    background-color: #131b47;
    color: #fff;
}
@media only screen and (min-width: 1024px){
    .addbox{
        height: 230px
    }
    div.active:hover p.tooltip{
        display: block;
        top: 35px;
        right: 0;
        background: #fff
    }
}
</style>