<template>
  <div class="mt-8 lg:w-3/4 lg:mx-auto">
    <div >
      <form @submit.prevent="validate">
        <div class="mt-4 lg:flex lg:justify-between">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Title</label>
            <select v-model="title_id" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select Title</option>
              <option v-for="title in titles" :key="title.id" :value="title.id">{{title.name}}</option>
            </select>
          </div>
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Surname</label>
            <input v-model="surname" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Firstname</label>
            <input v-model="firstname" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>
        </div>
        <div class="mt-4 lg:flex lg:justify-between">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Middle Name</label>
            <input v-model="middlename" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Date of Birth</label>
            <input v-model="dob" type="date" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>
          
          <div class="lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Destination</label>
            <select v-model="destination_id" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select Destination</option>
              <option v-for="country in countries" :key="country.id" :value="country.id">{{country.name}}</option>
            </select>
          </div>
        </div>
        
        <div class="mt-4 lg:flex lg:justify-between">

          

          
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Phone Number</label>
            <input v-model="sms" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>

          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Next of Kin Name</label>
            <input v-model="next_of_kin" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>
          
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Next of Kin Address</label>
            <input v-model="next_of_kin_address" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>

        </div>

        <div class="mt-4 lg:flex lg:justify-between">
          
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Next of Kin Relationship</label>
            <input v-model="next_of_kin_relationship" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>

          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Passport Number</label>
            <input v-model="passport_number" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>

          <div class="lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Any medical condition?</label>
            <select v-model="medical_condition" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
              <option disabled selected value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <!-- <div class="mt-4 lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Upload an image of utility bill<span class="text-red-500">*</span></label>
            <div class="">
              <div class="lg:w-full mt-2">
                <label for="billImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline ml-3">{{billImageName}}</p>
                <input id="billImage" type="file" ref="billImage" v-on:change="billUpload" class="hidden fileinput">
              </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.billImage">Please upload a valid image file</p>
            </div>
          </div> -->
          
          <!-- <div class="mt-4 lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Upload an image of your preferred means of ID<span class="text-red-500">*</span></label>
            <div class="">
              <div class="lg:w-full mt-2">
                <label for="idImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline ml-3">{{idImageName}}</p>
                <input id="idImage" type="file" ref="idImage" v-on:change="idUpload" class="fileinput hidden">
              </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.idImage">Please upload a valid image file</p>
            </div>
          </div> -->
        </div>

        <div class="mt-4 lg:flex lg:justify-between">
          
          <!-- <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Number of Travellers</label>
            <input v-model="travellers" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div> -->

          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Proposed date of departure</label>
            <input v-model="dapature_date" type="date" @change="checkDate()" id="depature" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>

          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Proposed date of return</label>
            <input v-model="return_date" type="date" id="return" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
          </div>

          <div class="mt-4 lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Upload your Passport Image<span class="text-red-500">*</span></label>
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

        <div class="mt-4 lg:flex ">
          
          <br>
          <div v-if="medical_condition == 'true'">
            <label class="text-sm font-bold">Full details of Medical Condition</label>
            <textarea rows="5" v-model="damaged_parts" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
        </div>
          <!-- <div class="mt-4 lg:w-full lg:ml-3">
            <label class="text-sm font-bold">Upload a Utility Bill Image<span class="text-red-500">*</span></label>
            <div class="">
              <div class="lg:w-full mt-2">
                <label for="idImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline ml-3">{{idImageName}}</p>
                <input id="idImage" type="file" ref="idImage" v-on:change="idUpload" class="fileinput hidden">
              </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.idImage">Please upload a valid image file</p>
            </div>
          </div> -->
        </div>

        <br />
        <hr/>
        
        
          <div class="mt-4 flex items-center gap-2">
            <input type="checkbox" v-model="check" :value="1">
            <p class="text-sm">I accept <button type="button" @click="showTermsModal = true" class="text-blue-500">terms and conditions</button></p>
          </div>
          <p class="text-red-500 text-xs mt-2" v-if="error.terms">Please accept terms</p>
        
        <div class="flex flex-col gap-6 lg:flex-row lg:flex-row-reverse lg:justify-between mt-6 pb-10">
          <button class="bg-green-500 px-6 text-white py-2 rounded outline-none focus:outline-none block submit">Proceed</button>
          <router-link to="/app/dashboard/buytravel/choose" class="bg-gray-500 py-2 rounded text-white block px-6 text-center">
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

import axios from 'axios'
import baseURL from "@/main"
export default {
  components:{
    Paystack, 
    
    TermsModal,
    PaymentMethod
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
      countries: [],
      country: {},
      title_id: '',
      titles : [],
      title: {},
      sms: "",
      idImageName: "",
      dob: "",
      surname: "",
      firstname: "",
      middlename: '',
      destination_id: '',
      next_of_kin: '',
      next_of_kin_address: '',
      next_of_kin_relationship: '',
      passport_number: '',
      medical_condition: '',
      travellers: '',
      dapature_date: '',
      return_date: '',
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
      showMethodModal: false
    }
  },
  computed:{
    ...mapState({
      user: state => state.user,
      underwriter_id: state => state.underwriter_id
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
    
    checkDate(){
      var todays = this.dapature_date
    
      var datefields = document.getElementById("return");  

      datefields.setAttribute("min", todays);

    },
    
   
    validate(){
      // check if terms checkbox has been ticked
      if(!this.check.length > 0){
        this.error.terms = true
        return   
      }
      this.error.terms = false

      
      var premiumData = {
        underwriter_id: this.underwriter_id,
        enrollee_id: this.user.user_id,
        destination_country_id: this.destination_id,
        start_date: this.dapature_date,
        end_date: this.return_date,
        dob: this.dob,
      }

      var travelDetails = {
        underwriter_id: this.underwriter_id,
        enrollee_id: this.user.user_id,
        dob: this.dob,
        destination_country_id: this.destination_id,
        start_date: this.dapature_date,
        end_date: this.return_date,
        next_of_kin: this.next_of_kin,
        next_of_kin_address: this.next_of_kin_address,
        next_of_kin_relationship: this.next_of_kin_relationship,
        title_id: this.title_id,
        passport_number: this.passport_number,
        sms: this.sms,
        preMedical: true,//this.medical_condition == "yes" ? true : false,
        medical: this.medical_condition,
        passportUrl: this.idImage
       
      }
      
     
      axios({url:`${baseURL}/travel/premium`, data: premiumData, method: 'POST'})
      .then((res)=>{
        console.log(res.data.data)
        this.$store.commit('saveTravelPremium', res.data.data)
        this.$store.commit('saveTravelDetails', travelDetails)
        this.$router.push('/app/dashboard/buytravel/3')
        this.$store.commit('endLoading')
       
      })
      .catch(err => {
        this.$store.dispatch('handleError', err)
      })

      // No errors, call the register method
      //this.register()
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
    getCountries(){
      axios({url: `${baseURL}/travel/countries`, data:{}, method: 'GET'})
        .then(res=>{

          
          this.countries = res.data.data
          this.$store.commit('endLoading')
          // this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          
        })
        .catch(err=>{
          this.$store.commit('endLoading')
          this.$store.dispatch('handleError', err)
        })
    },
    getTitle(){
      axios({url: `${baseURL}/travel/titles`, data:{}, method: 'GET'})
        .then(res=>{

          
          this.titles = res.data.data
          this.$store.commit('endLoading')
          // this.$store.commit('setSuccess', {status: true, msg: res.data.message})
          
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
   
  },
  mounted(){
    
    var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
      dd = '0' + dd;
      }

      if (mm < 10) {
      mm = '0' + mm;
      } 
          
      today = yyyy + '-' + mm + '-' + dd;
      
      
      var datefield = document.getElementById("depature");
      

      datefield.setAttribute("min", today);
      
    this.getCountries()
    this.getTitle()
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