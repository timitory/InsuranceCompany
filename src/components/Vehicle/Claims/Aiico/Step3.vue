<template>
  <form @submit.prevent="save">
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Date of accident</label>
                <input
                v-model="accident_date"
                type="date"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Time of accident</label>
                <input
                v-model="accident_time"
                type="time"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Weather condtion</label>
                <input
                v-model="accident_weather_condition"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Place of accident</label>
                <input
                v-model="accident_place"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">If dark, were your headlamps on ?</label>
               <div class="relative">
                    <select v-model="headlamps" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                    <p v-if="headlamps == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Width of the road</label>
                <input
                    v-model="road_width"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
        </div>
        <div class="md:flex md:gap-24">   
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Speed of the vehicle?</label>
                <input
                    v-model="vehicle_speed"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="md:w-full"></div>
        </div> 
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full" >
                <label class="text-sm font-bold">What warning did your driver give ?</label>
                <textarea rows="8" v-model="driver_warning" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">What warning did the other driver give ?</label>
                <textarea rows="8" v-model="other_driver_warning" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
            </div>
        </div>
        <div class="mt-4">
            <label class="text-sm font-bold">Full description of accident and events leading up to it</label>
            <textarea rows="8" v-model="accident_description" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
        </div>
        <div>
            <label class="text-sm font-bold">Witnesses or occupants of your vehicle name and address</label>
            <div class="md:flex md:gap-16">
                <div class="mt-4">
                    
                    <input
                    v-model="witness_name"
                    type="text"
                    placeholder="Name"
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    />
                </div>
                <div class="mt-4">
                    <input
                    v-model="witness_address"
                    type="text"
                    placeholder="Address"
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    />
                </div>
            </div>
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
import {mapState} from 'vuex'
export default {
    data(){
        return {
            accident_date: '',
            accident_time: '',        
            accident_weather_condition: '',
            accident_place: '',
            headlamps: '',
            road_width: '',
            vehicle_speed: '',
            driver_warning: '',
            other_driver_warning: '',
            accident_description: '',
            witness_name: '',
            witness_address: ''
        }
    },
    computed:{
        ...mapState({
            claimData : state => state.chiclaim.claimData
        })
    },
    methods: {
        back(){
            this.$store.commit('decreaseChiClaimStep')
        },
        save(){
            let data = {
                accident_date : this.accident_date,
                accident_time : this.accident_time,
                accident_weather_condition : this.accident_weather_condition,
                accident_place : this.accident_place,
                headlamps : this.headlamps,
                road_width : this.road_width,
                incident_details: this.accident_description,
                vehicle_speed : this.vehicle_speed,
                driver_warning : this.driver_warning,
                other_driver_warning : this.other_driver_warning,
                accident_description : this.accident_description,
                witness_name : this.witness_name,
                witness_address : this.witness_address
            }
            this.$store.commit('setChiClaimData', data)
            this.$store.commit('increaseChiClaimStep')
        }
    },
    mounted(){
        if(this.claimData.accident_date){
            this.accident_date = this.claimData.accident_date 
            this.accident_time = this.claimData.accident_time 
            this.accident_weather_condition = this.claimData.accident_weather_condition 
            this.accident_place = this.claimData.accident_place
            this.headlamps = this.claimData.headlamps 
            this.road_width = this.claimData.road_width 
            this.vehicle_speed = this.claimData.vehicle_speed 
            this.driver_warning = this.claimData.driver_warning 
            this.other_driver_warning = this.claimData.other_driver_warning 
            this.accident_description = this.claimData.accident_description 
            this.witness_name = this.claimData.witness_name 
            this.witness_address = this.claimData.witness_address 

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