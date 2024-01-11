<template>
  <form @submit.prevent="save">
    <div class="md:flex md:gap-24">
      <div class="mt-4 md:w-full">
        <label class="text-sm font-bold">Full details of damaged parts*</label>
        <textarea rows="5" v-model="damaged_parts" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
      <!-- </div>
      <div class="mt-4 md:w-full"> -->
        <div class="mt-4">
          <label class="text-sm font-bold">Front Image of damaged car with plate number*</label>
            <div class="mt-4 md:w-full">
              <label for="frontImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{frontImageName}}</p>
                <input id="frontImage" type="file" ref="frontImage" v-on:change="frontImageUpload()" class="hidden fileinput">
            </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.frontImage">Please upload a valid image file</p>
        </div>

        <!-- <div class="mt-4">
          <label class="text-sm font-bold">Rear Image of damaged car with plate number*</label>
            <div class="mt-4 md:w-full">
              <label for="rearImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{rearImageName}}</p>
                <input id="rearImage" type="file" ref="rearImage" v-on:change="rearImageUpload()" class="hidden fileinput">
            </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.rearImage">Please upload a valid image file</p>
        </div> -->

      </div>
      <div class="md:w-full">
        <div class="mt-4 ">
          <label class="text-sm font-bold">Present Location of vehicle*</label>
          <input
            v-model="vehicle_location"
            type="text"
            required
            class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-bold">Probable cost of repairs*</label>
          <money 
            v-model="cost_of_repairs" 
            v-bind="money" 
            class="block mt-4 input px-4 py-2 w-full rounded outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required
          >
          </money>
        </div>
        <!-- <div class="mt-4">
          <label class="text-sm font-bold">Front Image of damaged car with plate number*</label>
            <div class="mt-4 md:w-full">
              <label for="frontImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{frontImageName}}</p>
                <input id="frontImage" type="file" ref="frontImage" v-on:change="frontImageUpload()" class="hidden fileinput">
            </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.frontImage">Please upload a valid image file</p>
        </div>-->

        <div class="mt-4">
          <label class="text-sm font-bold">Rear Image of damaged car with plate number*</label>
            <div class="mt-4 md:w-full">
              <label for="rearImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{rearImageName}}</p>
                <input id="rearImage" type="file" ref="rearImage" v-on:change="rearImageUpload()" class="hidden fileinput">
            </div>
              <p class="text-red-500 text-sm mt-2" v-if="error.rearImage">Please upload a valid image file</p>
        </div> 
      </div>
    </div>
    <div class="md:flex md:gap-24">
      <div class="mt-4 md:w-full">
        <label class="text-sm font-bold">Repairer’s name, address, phone *</label>
        <div class="md:flex gap-16">
          <div class="mt-4 md:w-full">
            <input
            v-model="repairer_name"
            type="text"
            required
            placeholder="Name"
            class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
            />
          </div>
          <div class="mt-4 md:w-full">
            <input
            v-model="repairer_phone"
            type="text"
            required
            placeholder="Phone"
            class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
            />
            <p v-if="error.phone && repairer_phone.length > 0" class="text-sm text-red-500 mt-1">Please enter a valid phone number</p>
          </div>
        </div>
        <div class="mt-4">
          <input
          v-model="repairer_address"
          type="text"
          required
          placeholder="Address"
          class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
          />
        </div>
      </div>
      <div class="md:w-full">
        <div class="mt-4 md:w-full">
        <label class="text-sm font-bold">Is the vehicle insured somewhere else?</label>
           <div class="relative">
            <select v-model="other_vehicle_insurance" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <option  value="yes">Yes</option>
                <option  value="no">No</option>
            </select>
            <p v-if="other_vehicle_insurance == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
          </div>
      </div>
      </div>
    </div>
    <div class="md:flex md:gap-24">
      <!-- <div class="mt-4 md:w-full">
        <label class="text-sm font-bold">Is the vehicle insured somewhere else?</label>
           <div class="relative">
            <select v-model="other_vehicle_insurance" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <option  value="yes">Yes</option>
                <option  value="no">No</option>
            </select>
            <p v-if="other_vehicle_insurance == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
          </div>
      </div> -->
      <div class="md:w-full"></div>
    </div>

    <!-- <div class="md:gap-24 pt-4">
                <p class="text-sm font-bold">Damaged Car Images</p>
                <div class="lg:flex justify-start">
                    <div class="mt-4 pr-4 item">
                        <label class="text-sm font-bold">Driver side image <span class="text-red-500">*</span></label>
                            <div class="lg:w-full mt-2">
                                <label for="driverImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{driverImageName}}</p>
                                <input id="driverImage" type="file" ref="driverImage" v-on:change="driverUpload()" class="hidden fileinput">
                            </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.driverImage">Please upload a valid image file</p>
                    </div>
                    <div class="mt-4 item">
                        <label class="text-sm font-bold">Passenger side image <span class="text-red-500">*</span></label>
                            <div class="lg:w-full mt-2">
                                <label for="passengerImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{passengerImageName}}</p>
                                <input id="passengerImage" type="file" ref="passengerImage" v-on:change="passengerUpload()" class="hidden fileinput">
                            </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.passengerImage">Please upload a valid image file</p>
                    </div>
                    <div class="mt-4 pr-2 item">
                        <label class="text-sm font-bold">Car center image <span class="text-red-500">*</span></label>
                            <div class="lg:w-full mt-2">
                                <label for="centerImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{centerImageName}}</p>
                                <input id="centerImage" type="file" ref="centerImage" v-on:change="centerUpload()" class="hidden fileinput">
                            </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.centerImage">Please upload a valid image file</p>
                    </div>
                </div>
            </div>
     -->
    <div class="mt-12 lg:flex lg:justify-between">
      <button type="button" @click="back" class="block w-full lg:w-auto  border-2 mb-4 lg:mb-0 bg-white text-green-500 px-12 py-2 rounded focus:outline-none">Back</button>
      <button class="block w-full lg:w-auto bg-green-500 text-white px-12 py-2 rounded focus:outline-none">Next</button>
    </div>
  </form>
</template>

<script>
import {Money} from 'v-money'
import {mapState} from 'vuex'
export default {
  components:{
    Money
  },
  data(){
    return {
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      damaged_parts: '',
      vehicle_location: '',
      cost_of_repairs: '',
      repairer_name: '',
      repairer_phone: '',
      repairer_address: '',
      other_vehicle_insurance: '',
      frontImage: '',
      frontImageName: '',
      rearImage: '',
      rearImageName: '',
      // driverImage: '',
      // passengerImage: '',
      // centerImage: '',
      // centerImageName: '',
      // driverImageName: '',
      // passengerImageName: '',
           
      error: {
        phone: false,
        frontImage: false,
        rearImage: false,
        // driverImage: false,
        // passengerImage: false,
        // centerImage: false,
      }
    }
  },
  computed:{
    ...mapState({
      claimData : state => state.chiclaim.claimData
    })
  },
  watch :{
    repairer_phone(){
      if(/^\d{11}$/.test(this.repairer_phone)){
          this.error.phone = false
          return
      }  
      this.error.phone = true
    }
  },
  methods: {
    //  driverUpload(){
    //         this.driverImageName = this.$refs.driverImage.files[0].name 
    //         this.error.driverImage = false
    //         let fileToLoad = this.$refs.driverImage.files[0];
    //         let fileReader = new FileReader();
    //         let vm = this
    //         fileReader.onload = function(fileLoadedEvent) {
    //             vm.driverImage = fileLoadedEvent.target.result; // <--- data: base64
    //         }
    //         fileReader.readAsDataURL(fileToLoad);
    //     },
    //     passengerUpload(){
    //         this.passengerImageName = this.$refs.passengerImage.files[0].name 
    //         this.error.passengerImage = false
    //         let fileToLoad = this.$refs.passengerImage.files[0];
    //         let fileReader = new FileReader();
    //         let vm = this
    //         fileReader.onload = function(fileLoadedEvent) {
    //             vm.passengerImage = fileLoadedEvent.target.result; // <--- data: base64
    //         }
    //         fileReader.readAsDataURL(fileToLoad);
    //     },
    //     centerUpload(){
    //         this.centerImageName = this.$refs.centerImage.files[0].name 
    //         this.error.centerImage = false
    //         let fileToLoad = this.$refs.centerImage.files[0];
    //         let fileReader = new FileReader();
    //         let vm = this
    //         fileReader.onload = function(fileLoadedEvent) {
    //             vm.centerImage = fileLoadedEvent.target.result; // <--- data: base64
    //         }
    //         fileReader.readAsDataURL(fileToLoad);
    //     },
    back(){
      this.$store.commit('decreaseChiClaimStep')
    },
    save(){
      
      if(!Object.values(this.error).includes(true)){
        this.submit()
        return
      }
      return
    },
    submit(){
      
      // if(!this.driverImageName || !this.passengerImageName || !this.centerImageName) return
      
      if(this.rearImageName == ''){
            this.error.rearImage  = true
            return
      }else if (this.frontImageName == ''){
        this.error.frontImage  = true
            return
      }
      else if (this.frontImageName.includes(".png") || this.frontImageName.includes(".jpg") || this.frontImageName.includes(".jpeg")){
          if  (this.rearImageName.includes(".png") || this.rearImageName.includes(".jpg") || this.rearImageName.includes(".jpeg"))
          {
            var costofrrepairin_kobo = parseInt(this.cost_of_repairs) * 100

            let data = {
              damaged_parts : this.damaged_parts,
              vehicle_location : this.vehicle_location,
              cost_of_repairs : costofrrepairin_kobo,//this.cost_of_repairs,
              repairer_name : this.repairer_name,
              repairer_phone : this.repairer_phone,
              repairer_address : this.repairer_address,
              other_vehicle_insurance : this.other_vehicle_insurance,
              vehicle_image_with_plate_number: this.frontImage,
              vehicle_image_with_plate_number2: this.rearImage,
              // driver_side_image : this.driverImage,
              // passenger_side_image: this.passengerImage,
              // affected_car_center_image: this.centerImage
            }
            
            this.$store.commit('setChiClaimData', data)
            this.$store.commit('increaseChiClaimStep')
            
          }else{
                this.error.rearImage  = true
                return
          }
      }else{
                this.error.frontImage  = true
                return
      }
    },
    frontImageUpload(){
            this.frontImageName = this.$refs.frontImage.files[0].name 
            
            this.error.frontImage = false
            let fileToLoad = this.$refs.frontImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.frontImage = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
            
        
  },
   rearImageUpload(){
   
            this.rearImageName = this.$refs.rearImage.files[0].name 
            
            this.error.rearImage = false
            let fileToLoad = this.$refs.rearImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.rearImage = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
            
        
  },
},
  mounted(){
    if(this.claimData.damaged_parts){
      this.damaged_parts = this.claimData.damaged_parts
      this.vehicle_location = this.claimData.vehicle_location
      this.cost_of_repairs = this.claimData.cost_of_repairs
      this.repairer_name = this.claimData.repairer_name
      this.repairer_address = this.claimData.repairer_address
      this.repairer_phone = this.claimData.repairer_phone
      this.other_vehicle_insurance = this.claimData.other_vehicle_insurance
    }
  }
}

</script>

<style scoped>
select, .input{
  background-color: #e2f5ec;
}
select:focus + p{
    display: none;
}
textarea{
  padding: 10px
}
</style>