<template>
    <div class="l-modal">
        <div class="loading-modal w-full">
            <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
                <div class="pt-6 relative">
                    <span class="text-lg font-bold absolute top-2 right-0 text-red-500 cursor-pointer" @click="close"
                        style="right: -10px">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                                fill="#FF0000"></path>
                        </svg>
                    </span>
                    <h1 class="text-2xl font-bold">Contact Us</h1>
                    <!-- <p class="mt-2">Blah blah blah blah blah blah:</p> -->
                    <div>
                        <form @submit.prevent="Gadgetcontact">
                            <div class="input-group-container">
                                <div class="input-group">
                                    <label>
                                        First Name
                                    </label>
                                    <input type="text" v-model="data.firstname" class="input_style" required/>
                                </div>
                                <div class="input-group">
                                    <label>
                                        Last Name
                                    </label>
                                    <input type="text" v-model="data.surname" class="input_style" required/>
                                </div>
                            </div>
                            <div class="input-group-container">
                                <div class="input-group">
                                    <label>
                                        Email
                                    </label>
                                    <input type="email" v-model="data.email" required />
                                </div>
                                <div class="input-group">
                                    <label>
                                        Phone Number
                                    </label>
                                    <input type="tel" v-model="data.phone" required />
                                </div>
                            </div>
                            <div class="input-group input-group-textarea">
                                <label>
                                    Message
                                </label>
                                <textarea rows={3} v-model="data.request" placeholder="Write your message.." />
                            </div>
                            <div class="gad-but-container">
                                <button class="ged-mod-but">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios'
import baseURL from "@/main"
import { mixin as clickaway } from 'vue-clickaway';
export default {
    mixins: [clickaway],
    data() {
        return {
            data: {
                surname: "",
                firstname: "",
                phone: "",
                email: "",
                request: "",
            }
        }
    },
    props: [
        'close',
        'notification'
    ],
    methods: {
        // close() {
        //     this.$emit('close')
        // },
        
        Gadgetcontact() {
            this.$store.commit('startLoading')
            axios({ url: `${baseURL}/gadget/onboard`, data: this.data, method: 'POST' })
                .then(res => {
                console.log(res)
                this.$store.commit('endLoading')
                this.notification()

                })
                .catch(err => {
                this.$store.dispatch('handleError', err)
                })
            },
    }

}
</script>
 
<style scoped>
.loader {
    position: relative;
    top: 100px;
    max-width: 420px;
    max-height: 80vh;
    overflow-y: auto;
}

input {
    background-color: white;
}

form {
    margin: 1rem 0rem;
}

.input-group {
    display: block;
    margin: 0.5rem 0rem;
    /* gap: 2rem; */
    width: 47%;

}

.gad-but-container {
    margin: 1rem;
    float: right;
}

.input-group-container {
    display: flex;
    gap: 1.5rem;
    width: 100%;
}

.input-group-textarea {
    width: 100%;
}

.input-group>label {
    display: block;
    color: #8D8D8D;
}

.input-group>input,
.input-group>textarea {
    width: -webkit-fill-available;
    height: 35px;
    padding: 5px 10px;
    border-radius: 0px;
    border-bottom: 1px solid #8D8D8D;
}

.input-group>input:focus-visible,
.input-group>textarea:focus-visible {
    outline: none;
    border-bottom: 1px solid #219653;
}

.input-group>textarea {
    background-color: white;
}

.loader::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.loader::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.loader::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
.loader::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.ged-mod-but {
    background-color: #219653;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
}

@media only screen and (min-width: 768px) {
    .loader {
        max-width: 600px;
        top: 50px
    }
}
</style>