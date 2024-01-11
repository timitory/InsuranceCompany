<template>
    <form class="mt-6" @submit.prevent="callnext">
        <p class="text-green-500">SECTION 5: ESTIMATED PRODUCTION COST</p>
        <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
                <div class="lg:flex"></div>
                <div class="mt-4 lg:flex">
                    <div class="lg:w-full lg:mr-3">
                            <label for="signature">
                                <img src="../../../assets/images/uploadicon.svg" alt=""
                                    class="mt-4 mx-auto max-w-max lg:w-full img">
                            </label>
                            <input id="signature" type="file" ref="signature" v-on:change="idUpload"
                                class="fileinput hidden">
                            <p class="text-center">Upload file <label for="signature"
                                    class="cursor-pointer text-blue-600">Here</label></p>
                            <p class="text-center ml-3">{{ idImageName }}</p>
                            <a href="/bronchure/example.xlsx" download class="block text-center dowloadtag text-md"><span class="text-red-600 text-md">Note*:</span> All signature should be on a plain white paper</a>
                        </div>
                </div>
            </div>
        </div>
        <div class="pt-6">
            <hr />
            <p class="text-green-500 pt-3">SECTION 6: PREVIOUS LOSS HISTORY</p>
            <div class="mt-4 lg:flex">
                <div class="lg:w-full lg:mr-3">
                    <div class="lg:flex"></div>
                    <div class="mt-4 lg:flex">
                        <div class="lg:w-full lg:mr-3">
                            <label for="signature">
                                <img src="../../../assets/images/uploadicon.svg" alt=""
                                    class="mt-4 mx-auto max-w-max lg:w-full img">
                            </label>
                            <input id="signature" type="file" ref="signature" v-on:change="idUpload"
                                class="fileinput hidden">
                            <p class="text-center">Upload file <label for="signature"
                                    class="cursor-pointer text-blue-600">Here</label></p>
                            <p class="text-center ml-3">{{ idImageName }}</p>
                            <a href="/bronchure/example.xlsx" download class="block text-center dowloadtag text-md"><span class="text-red-600 text-md">Note*:</span> All signature should be on a plain white paper</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:flex justify-between mt-10">
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <a class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </a>
            </button>
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Pay
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
        </div>
        <div class="block lg:hidden mt-10">
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
                Pay
                <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <router-link to="/app/dashboard/buyvehicle/4"
                    class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </router-link>
            </button>
        </div>
    </form>
</template>

<script>
//import {Money} from 'v-money'
import { mapState } from "vuex";
// import axios from 'axios'
// import baseURL from "@/main"
export default {
    components: {
        //Money
    },
    data() {
        return {
            idImageName: '',
            signature: '',
        };
    },
    props: ["next", "steps", "back"],
    methods: {
        previous() {
            this.back(this.steps)
        },
        idUpload() {
            this.idImageName = this.$refs.signature.files[0].name
            // this.error.signature = false
            let fileToLoad = this.$refs.signature.files[0];
            let fileReader = new FileReader();
            let vm = this.petdata
            fileReader.onload = function (fileLoadedEvent) {
                // console.log(fileLoadedEvent.target.result);
                vm.signature = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
    },
    watch: {},
    computed: {
        ...mapState({
            beneficiary: (state) => state.beneficiary,
            underwriterId: (state) => state.underwriter_id,
        }),
    },
    mounted() { },
};
</script>

<style scoped>
input,
select,
.input {
    background-color: #e2f5ec;
}

.fileinput {
    background-color: #fff;
}

.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 10px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ccc;
    border-radius: 50%;
}

/* When the radio button is checked, add a blue background */
.container input:checked~.checkmark {
    background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked~.checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}

@media only screen and (min-width: 1024px) {
    .platebox {
        width: 193px;
    }
}</style>
