<template>
    <form @submit.prevent="validate" class="mt-4 lg:mt-6 lg:px-12 md:pb-10">
        <p class="">Details of incident</p>
        <div class="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-16">
            <div class="md:w-full">
                <label class="text-sm font-bold">Date of accident</label>
                <input
                v-model="incident_date"
                type="date"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="">
                <label class="text-sm font-bold">Time of accident</label>
                <input
                v-model="incident_time"
                type="time"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="">
                <label class="text-sm font-bold">Details of accident</label>
                <textarea rows="5" v-model="incident_details" required class="input rounded mt-4 p-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
            </div>
            <div class="">
                <label class="text-sm font-bold">Estimated cost of repairs</label>
                <money 
                    v-model="estimate_of_repairs" 
                    v-bind="money" 
                    class="block mt-4 input px-4 py-2 w-full rounded outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required
                >
                </money>
            </div>
            <div class="">
                <p class="">Damaged Car Images</p>
                <div class="lg:flex justify-between">
                    <div class="mt-4 pr-4 item">
                        <label class="text-sm font-bold">Driver side image <span class="text-red-500">*</span></label>
                            <div class="lg:w-full mt-2">
                                <label for="driverImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{driverImageName}}</p>
                                <input id="driverImage" type="file" ref="driverImage" v-on:change="driverUpload" class="hidden fileinput">
                            </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.driverImage">Please upload a valid image file</p>
                    </div>
                    <div class="mt-4 item">
                        <label class="text-sm font-bold">Passenger side image <span class="text-red-500">*</span></label>
                            <div class="lg:w-full mt-2">
                                <label for="passengerImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{passengerImageName}}</p>
                                <input id="passengerImage" type="file" ref="passengerImage" v-on:change="passengerUpload" class="hidden fileinput">
                            </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.passengerImage">Please upload a valid image file</p>
                    </div>
                    <div class="mt-4 pr-2 item">
                        <label class="text-sm font-bold">Car center image <span class="text-red-500">*</span></label>
                            <div class="lg:w-full mt-2">
                                <label for="centerImage" class="p-2 text-white rounded cursor-pointer" style="background-color: #102A49">Choose File</label>
                                <p class="inline lg:block lg:ml-0 ml-3 lg:mt-1">{{centerImageName}}</p>
                                <input id="centerImage" type="file" ref="centerImage" v-on:change="centerUpload" class="hidden fileinput">
                            </div>
                        <p class="text-red-500 text-sm mt-2" v-if="error.centerImage">Please upload a valid image file</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="block w-full md:w-auto md:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">Submit</button>
    </form>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import {Money} from 'v-money'
export default {
    components:{
        Money
    },
    props: {
        enrollee: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            money: {
                thousands: ',',
                prefix: '₦ ',
                precision: 0,
                masked: false
            },
            incident_date: '',
            incident_time: '',
            incident_details: '',
            estimate_of_repairs: '',
            error: {
                phone: false,
                driverImage: false,
                passengerImage: false,
                centerImage: false,
            },
            driverImage: '',
            passengerImage: '',
            centerImage: '',
            centerImageName: '',
            driverImageName: '',
            passengerImageName: '',
        }
    },
    watch :{
    
    },
    methods:{
        driverUpload(){
            this.driverImageName = this.$refs.driverImage.files[0].name 
            this.error.driverImage = false
            let fileToLoad = this.$refs.driverImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.driverImage = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
        passengerUpload(){
            this.passengerImageName = this.$refs.passengerImage.files[0].name 
            this.error.passengerImage = false
            let fileToLoad = this.$refs.passengerImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.passengerImage = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
        centerUpload(){
            this.centerImageName = this.$refs.centerImage.files[0].name 
            this.error.centerImage = false
            let fileToLoad = this.$refs.centerImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.centerImage = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
        validate(){
            if(!this.driverImageName || !this.passengerImageName || !this.centerImageName) return
           var costofrrepairin_kobo = parseInt(this.estimate_of_repairs) * 100;
           let data = {
                

                user_vehicle_id : this.enrollee.user_vehicle_id,
                incident_date: this.incident_date,
                incident_time: this.incident_time,
                incident_details: this.incident_details,
                estimate_of_repairs: costofrrepairin_kobo,
                driver_side_image : this.driverImage,
                passenger_side_image: this.passengerImage,
                affected_car_center_image: this.centerImage
            }
            this.submit(data)
        },
        submit(obj){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/claim/vehicle/aiico`, data: obj, method: 'POST'})
            .then((res)=> {
                this.$store.commit('endLoading')
                console.log(res.data.message)
                this.$store.commit('setSuccess', {status: true, msg: "Success, an email has been sent to you!"})
                //this.$store.commit('setSuccess', {status: true, msg: res.data.message})
                this.$router.push('/app/dashboard')
            })
            .catch((err)=> {
                this.$store.dispatch('handleError', err)
            })
        }
    },

}
</script>

<style scoped>
input, select, .input, textarea{
  background-color: #e2f5ec;
}
@media only screen and (min-width: 800px) {
    .item{
        flex: 0 0 30%
    }
}
</style>