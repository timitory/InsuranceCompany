<template>
  <div class="mt-8 lg:w-3/4 lg:mx-auto">
    <div >
      <form @submit.prevent="validate">
        <div class="mt-4 lg:flex lg:justify-between">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Date of Birth</label>
            <input v-model="dob" type="date" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>
          <div class="lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Select LGA</label>
            <select v-model="lga_id" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select LGA</option>
              <option v-for="lga in data.lgas" :key="lga.id" :value="lga.id">{{lga.name}}</option>
            </select>
          </div>
        </div>
        
        <div class="mt-4 lg:flex lg:justify-between">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Utility Bill type</label>
            <select v-model="billname" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select Bill type</option>
              <option  value="electric">Electric Bill</option>
              <option  value="waste">Waste Bill</option>
              <option  value="water">Water Bill</option>
            </select>
            <!-- <input v-model="billname" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required> -->
          </div>
          <div class="mt-4 lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Upload an image of utility bill<span class="text-red-500">*</span></label>
            <div class="">
              <div class="lg:w-full mt-2">
                <label for="billImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline ml-3">{{billImageName}}</p>
                <input id="billImage" type="file" ref="billImage" v-on:change="billUpload" class="hidden fileinput">
              </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.billImage">Please upload a valid image file</p>
            </div>
          </div>
        </div>
        <div class="mt-4 lg:flex lg:justify-between">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Means of ID</label>
            <select v-model="idtype" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              <option value="" selected disable>Select a means of ID</option>
              <option v-for="means in data.idmeans" :key="means.id" :value="means.name">{{means.name}}</option>
            </select>
          </div>
          <div class="mt-4 lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Upload an image of your preferred means of ID<span class="text-red-500">*</span></label>
            <div class="">
              <div class="lg:w-full mt-2">
                <label for="idImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline ml-3">{{idImageName}}</p>
                <input id="idImage" type="file" ref="idImage" v-on:change="idUpload" class="fileinput hidden">
              </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.idImage">Please upload a valid image file</p>
            </div>
          </div>
        </div>
        <p class="mt-8 font-bold">Home contents to be insured</p>
        <hr>
        <div  v-for="(item, index) in houseItems" :key="index" class="relative">
          <svg class="cursor-pointer absolute right-0" v-if="index > 0" @click="removeHouseItem(index)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#FF0000"></path>
          </svg>
          <div class="md:flex md:justify-between mt-3">
            <div class="mt-4 md:mr-2 w-full lg:mr-3">
              <label for="" class="block text-sm">Home Item</label>
              <div>
                <input type="text" v-model="item.item_name" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              </div>
            </div>
            <div class="mt-4 md:ml-2 w-full lg:ml-3">
              <label for="" class="block text-sm">Monetary Value (in Naira)</label> 
              <div>
                <money v-model="item.cost" v-bind="money" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required></money>
              </div>
              <p v-if="item.error" class="text-red-500">Please enter a valid amount in naira</p>
            </div>
          </div>
          <hr class="my-3">
        </div>
        <button type="button" class="flex gap-2 mt-4 cursor-pointer items-center" @click="addHouseItem" style="width: 100px">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM13 17H11V13H7V11H11V7H13V11H17V13H13V17Z" fill="#131b47"></path>
          </svg>
          <p class="text-sm">Add Item</p>
        </button>
        <p class="text-sm mt-4">Total sum of home items to be insured can not exceed ₦2,000,000</p>
        <div>
          <div class="mt-4 flex items-center gap-2">
            <input type="checkbox" v-model="check" :value="1">
            <p class="text-sm">I accept <button type="button" @click="showTermsModal = true" class="text-blue-500">terms and conditions</button></p>
          </div>
          <p class="text-red-500 text-xs mt-2" v-if="error.terms">Please accept terms</p>
        </div>
        <div class="flex flex-col gap-6 lg:flex-row lg:flex-row-reverse lg:justify-between mt-6 pb-10">
          <button class="bg-green-500 px-6 text-white py-2 rounded outline-none focus:outline-none block submit">Proceed</button>
          <router-link to="/app/dashboard/buyhome/3" class="bg-gray-500 py-2 rounded text-white block px-6 text-center">
            Back
          </router-link>
        </div>
        
      </form>
    </div>
    <transition name="scale">
      <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false"/>
    </transition>
    <transition name="scale">
      <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard"/>
    </transition>
    <transition name="scale">
        <ReviewModal v-if="showReviewModal" v-on:useCard="payWithCard" tett="managehome" />
      </transition>
    <div v-show="showPaystack">
      <Paystack
        ref="paystackbutton"
        class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
        :amount="paystackData.amount"
        :email="paystackData.email"
        :paystackkey="paystackData.public_key"
        :reference="paystackData.reference"
        :callback="verifyPayment"
        :close="closePayment"
        :channels="payStackChannels"
      >
      </Paystack>
    </div>
  </div>
</template>

<script>
import TermsModal from "@/components/TermsModal"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"
import { mapState } from 'vuex'
import Paystack from "vue-paystack";
import {Money} from 'v-money'
import axios from 'axios'
import baseURL from "@/main"
import ReviewModal from "@/components/Vehicle/ReviewModal"
export default {
  components:{
    Paystack, 
    Money,
    TermsModal,
    PaymentMethod,
    ReviewModal
  },
  data(){
    return {
      check: [],
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      lga_id: '',
      dob: "",
      billname: "",
      idtype: "",
      billImage: '',
      billImageName: '',
      idImageName: '',
      idImage: '',
      houseItems: [
        {item_name: "", cost: "" , error: false}
      ],
      payStackChannels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      error: {
        billImage: false,
        idImage: false,
        terms: false
      },
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: ''
      },
      showPaystack: false,
      showTermsModal: false,
      showMethodModal: false,
      showReviewModal: false,
      managehome: 'managehome'
    }
  },
  computed:{
    ...mapState({
      home_plan_id: state => state.home_plan_id,
      beneficiary: state => state.beneficiary,
      data: state => state.home.resources,
      user_home_id: state => state.home.user_home_id,
      user: state => state.user
    })
  },
  methods: {
    idUpload(){
      this.idImageName = this.$refs.idImage.files[0].name 
      this.error.idImage = false
      let fileToLoad = this.$refs.idImage.files[0];
      let fileReader = new FileReader();
      let vm = this
      fileReader.onload = function(fileLoadedEvent) {
        vm.idImage = fileLoadedEvent.target.result; // <--- data: base64
      }
      fileReader.readAsDataURL(fileToLoad);
    },
    billUpload(){
      this.billImageName = this.$refs.billImage.files[0].name 
      this.error.billImage = false
      let fileToLoad = this.$refs.billImage.files[0];
      let fileReader = new FileReader();
      let vm = this
      fileReader.onload = function(fileLoadedEvent) {
        vm.billImage = fileLoadedEvent.target.result; // <--- data: base64
      }
      fileReader.readAsDataURL(fileToLoad);
    },
    addHouseItem(){
      this.houseItems.push({
        item_name: "",
        cost: "",
      })
    },
    removeHouseItem(index){
      this.houseItems.splice(index, 1)
    },
    validate(){
      // check if terms checkbox has been ticked
      if(!this.check.length > 0){
        this.error.terms = true
        return   
      }
      this.error.terms = false
      //Check if total amount of house items exceeds 2,000,000 and confirm that item cost is > 0
      let totalAmount = 0
      this.houseItems.map(item=>{
        totalAmount = parseInt(item.cost) + totalAmount
        if(item.cost == 0){
          item.error = true
          return
        }else{
          item.error = false
        }
      })
      if(totalAmount > 2000000){
        this.$store.commit('setError', {status: true, msg:"Sum of insured items cannot exceed ₦2,000,000"})
        return
      }

      //check if any item contains true error
      let newArr = []
      this.houseItems.map((item) =>{
        Object.values(item).map((data)=>{
          newArr.push(data)
        })
      })
      if(newArr.includes(true)){
        return 
      }

      // No errors, call the register method
      this.register()
    },
    register(){
      if(this.billImageName == ''){
        this.error.billImage  = true
        this.$store.commit('setError', {status: true, msg: 'Please upload a valid bill image'})
        return
      }else if(this.idImageName == ''){
        this.error.idImage  = true
        this.$store.commit('setError', {status: true, msg: 'Please upload a valid id image'})
        return
      }else if(Object.values(this.error).includes(true)){
        return
      }else{
        this.getData()
      }
    },
    getData(){
      let items = []
      //copy house items into a new array
      this.houseItems.forEach((obj)=>{
        let val = Object.assign({}, obj);
        items.push(val)
      })

      //multiply the cost by 100 and remove error property
      items.forEach((item)=>{
       item.cost = parseInt(item.cost) * 100
       delete item.error
      }) 
      this.updateProfile(items)
    },
    updateProfile(items){
      this.$store.commit('startLoading')
      let form = {
        'dob': this.dob,
        'lga_id': this.lga_id,
        'user_home_id': this.user_home_id,
        'identification_name': this.idtype,
        'utilitybill_name': this.billname,
        'utilitybill_file': this.billImage,
        'identification_file': this.idImage,
        'home_items': items
      }
      axios({url:`${baseURL}/homecontent/profile/update`, data: form, method: 'PATCH'})
      .then(()=>{
        this.$store.commit('endLoading')
        if(!this.user.has_card) return this.initPayment()
        this.showMethodModal = true
      })
      .catch(err => {
        this.$store.dispatch('handleError', err)
      })
    },
    initPayment(){
      let data = {
        user_home_id : this.user_home_id,
        card_id : 0
      }
      axios({url: `${baseURL}/homecontent/payment/init`, data: data, method: 'POST'})
      .then(res=>{
        this.showPaystack = true
        this.paystackData = res.data.data
        this.paystackData.channels = this.paystackChannels
        this.$refs.paystackbutton.payWithPaystack(this.paystackData)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    },
    verifyPayment(){
      axios({url: `${baseURL}/homecontent/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST'})
        .then(res=>{
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.showReviewModal = true
          // this.$router.push('/app/dashboard/managehome')
        })
        .catch(err=>{
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
        })
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    },
    payWithCard(str){
      this.showMethodModal = false
      if(str === 'old'){
        this.$router.push('/app/dashboard/buyhome/5')
      }else if(str === 'new'){
        this.initPayment()
      }
      return
    },
  },
  mounted(){
    this.$store.commit('endLoading')
  }
}
</script>

<style scoped>
input, select, .input{
  background-color: #e2f5ec;
  border-radius: 0.25rem;
}
.fileinput{
  background-color: #fff;
}

.filelabel{
  cursor: pointer;
  display: block;
  padding: 10px 10px;
  position: relative;
  background: #131b47;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.radiobtn{
  cursor: pointer;
  padding: 8px 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.filelabel input, .radiobtn input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
@media only screen and (min-width: 768px){
  .submit{
    max-width: 200px
  }
}
</style>