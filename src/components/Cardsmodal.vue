<template>
    <div class="l-modal">
        <div class="loading-modal w-full">
            <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
                <div class="pt-6 relative">
                    <span class="text-lg font-bold absolute top-2 right-0 text-red-500 cursor-pointer" @click="this.close"
                        style="right: -10px">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                                fill="#FF0000"></path>
                        </svg>
                    </span>
                    <div class="lg:w-3/4 lg:mx-auto">
                        <p>Select a preferred debit card or add a new card to complete your payment</p>
                        <div class="mt-8 box">
                            <template v-for="(card, index) in cards" >
                                <label class="container border text-lg border-solid" :key="index"
                                    v-if="card.status === 'Active'"
                                    :class="[card.id == card_id ? 'border-green-500' : 'border-gray-300']">
                                    <div class="flex w-full" :class="[card.status === 'Active' ? '' : 'hidden']">
                                        <img v-if="card.card_type == 'visa '" src="@/assets/images/payment/visalogo.png"
                                            alt="" style="width: 50px">
                                        <img v-else-if="card.card_type == 'mastercard'"
                                            src="@/assets/images/payment/mclogo.png" alt="" style="width: 50px">
                                        <img v-else-if="card.card_type == 'verve'" src="@/assets/images/payment/vlogo.png"
                                            alt="" style="width: 50px">
                                        <p class="font-bold ml-4"><span class="text-2xl">....</span> {{ card.status ===
                                            "Active"
                                            ? card.last_four : nill }}</p>
                                    </div>
                                    <input type="radio" v-model="card_id" :value="card.id">
                                    <span class="checkmark"></span>
                                </label>
                            </template>
                        </div>
                        <button @click="this.payNow" class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import "animate.css"
import axios from 'axios'
import baseURL from "@/main"
import { directive as onClickaway } from 'vue-clickaway';
export default {
    data() {
        return {
            existing: '',
            cards: [],
            card_id: 0
        }
    },
    props: [
        'user_id',
        'close',
        'user-key',
        'product'
    ],
    methods: {
        getCards() {
            this.$store.commit('startLoading')
            axios.get(`${baseURL}/cards`)
                .then((res) => {
                    this.cards = res.data.data
                    this.$store.commit('endLoading')
                })
                .catch((err) => {
                    this.$store.dispatch('handleError', err)
                })
        },
        payNow() {
            this.$store.commit('startLoading')
            let data = {
                ["user-key"] : this.user_pet_id,
                card_id: this.card_id
            }
            axios({ url: `${baseURL}/${this.product}/payment/init`, data: data, method: 'POST' })
                .then(res => {
                    this.$store.commit('setSuccess', { status: true, msg: res.data.data.status })
                    // this.$router.push('/app/dashboard/managevehicle')
                })
                .catch(err => {
                    this.$store.dispatch('handleError', err)
                })
        },
    },
    mounted() {
        this.getCards()
        this.$store.commit('endLoading')
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>
 
<style scoped>
.loader {
    position: relative;
    top: 5px;
    padding-bottom: 20px;
    min-height: 80vh;
    overflow-y: auto;
}

.img {
    width: 120px
}

p {
    text-align: justify;
}

@media only screen and (min-width: 1024px) {
    .loader {
        width: 600px
    }
}</style>