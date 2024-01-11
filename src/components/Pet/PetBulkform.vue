<template>
    <form class="mt-6" @submit.prevent="validateForm" >
        <!-- <p class="text-green-500 ">Dog Details</p> -->
        <div class="mt-4 lg:flex">
            <div class="lg:w-3/4 m-auto">
                <div class="lg:flex">
                </div>
                <div class="mt-4 ">
                    <label for="idImage">
                        <img src="../../assets/images/uploadicon.svg" alt="" class="mt-4 mx-auto max-w-max lg:w-full img" >
                    </label>
                    <input id="idImage" type="file" ref="idImage" @change="previewFiles" class="fileinput hidden">
                    <p class="text-center">Upload file <label for="idImage" class="cursor-pointer text-blue-600">Here</label></p>
                    <p class="text-center ml-3">{{idImageName}}</p>
                    <a  @click="excelFormat" download="excel" class="block text-center dowloadtag cursor-pointer" >Download sample of excel file</a>
                </div>
            </div>
            
        </div>
        
        <div class="hidden lg:flex justify-between mt-10">
            <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
                <div @click="previous"
                    class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
                    <font-awesome-icon icon="arrow-left" class="mr-8" />
                    Back
                </div>
            </button>
            <button
                class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" >
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
import { mapState } from 'vuex'
// import axios from "axios";
import baseURL from "@/main";
export default {
    components: {
        //Money
    },
    data() {
        return {
            idImage: null,
            idImageName: '',
        }
    },
    props: [
      'petform',
      'back',
      'page',
      'petdata'
    ],
    methods: {
        previous() {
            this.back(this.page)
        },
        next() {
            this.petform()
        },
        excel() {
            this.$ref.click()
        },
        async excelFormat(){
          // this.$store.commit('startLoading')
          // axios({ url: `${baseURL}/pet/policy/template/batch`, method: 'GET' })
          //     .then(res => {
          //       console.log(res)
          //       this.$store.commit('endLoading')
          //
          //     })
          //     .catch(err => {
          //       this.$store.dispatch('handleError', err)
          //     }

          const response = await fetch(`${baseURL}/pet/policy/template/batch`);
          const blob = await response.blob();

          // Create a Blob URL and open it in a new tab/window
          const url = window.URL.createObjectURL(blob);
          window.open(url, '_blank');

        },

      previewFiles(e) {
      console.log(e.target.files[0]);
      this.idImage = e.target.files[0]
      this.idImageName = e.target.files[0].name
   },
        idUpload(){
        this.idImageName = this.$refs.idImage.files[0].name 
        // this.error.idImage = false
        let fileToLoad = this.$refs.idImage.files[0];
        let fileReader = new FileReader();
        this.idImage = this.$refs.idImage.files
        // let vm = this
        // fileReader.onload = function(fileLoadedEvent) {
        //     vm.idImage = this.$refs.idImage.files[0]; // <--- data: base64
        // }
        fileReader.readAsDataURL(fileToLoad);
      },
        
        validateForm() {
            if (this.petdata.pet_category_id === 1) {
    //           
                this.$emit('submitBulk', this.idImage)
            } else {
                this.$emit('submitSingle', this.coporatedata)
            }
            // this.$emit('submitBulk', this.idImage)
        },
    },
    watch: {
     
    },
    computed: {
        ...mapState({
            beneficiary: state => state.beneficiary,
            underwriterId: state => state.underwriter_id,
        }),
    },
    mounted() {
        // console.log(this.idImage);

    },
  created(){
    // this.excelFormat()
  }
}
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
    background-color: #2196F3;
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

.dowloadtag {
    text-decoration: underline;
    color: #2196F3;
    font-style: italic;
    padding-top: 1rem;
}

@media only screen and (min-width: 1024px) {
    .platebox {
        width: 193px
    }
}
</style>