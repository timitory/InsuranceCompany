<template>
  <form @submit.prevent="save">
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Name</label>
                <input
                v-model="driver_name"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Age</label>
                <input
                v-model="driver_age"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
                <p v-if="error.age && driver_age.length > 0" class="text-sm text-red-500 mt-1">Please enter a valid age</p>
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Years of experience</label>
                <input
                v-model="driver_years_experience"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
                <p v-if="error.years && driver_years_experience.length > 0" class="text-sm text-red-500 mt-1">Please enter a valid number</p>
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Address</label>
                <input
                v-model="driver_address"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Driver's License number</label>
                <input
                v-model="driver_license_number"
                type="text"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Date of expiry</label>
                <input
                v-model="driver_date_of_expiry"
                type="date"
                required
                class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Has the driver been involved in a previous accident? </label>
                <div class="relative">
                    <select v-model="driver_previous_accident" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                    <p v-if="driver_previous_accident == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
            </div>
            <div class="mt-4 md:w-full" v-if="driver_previous_accident == 'yes'">
                <label class="text-sm font-bold">If so give detail of accident</label>
                <textarea rows="8" v-model="driver_previous_accident_details" class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required></textarea>
            </div>
            <div class="md:w-full" v-else></div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Has driver been prosecuted for any motoring offense?</label>
                <div class="relative">
                    <select v-model="driver_prosecuted" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                    <p v-if="driver_prosecuted == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
            </div>
            <div class="mt-4 md:w-full" v-if="driver_prosecuted == 'yes'">
                <label class="text-sm font-bold">If so give details</label>
                <textarea rows="8" v-model="driver_prosecuted_details" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
            </div>
            <div class="md:w-full" v-else></div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Is the driver in your employment ?</label>
                <div class="relative">
                    <select v-model="driver_employment" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                    <p v-if="driver_employment == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
            </div>
            <div class="mt-4 md:w-full md:flex gap-10" v-if="driver_employment == 'yes'">
                <div class="md:w-full">
                    <label class="text-sm font-bold">If so in what capacity?</label>
                    <input
                        v-model="driver_employment_capacity"
                        type="text"
                        required
                        class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    />
                </div>
                <div class="mt-4 md:mt-0 md:w-full">
                    <label class="text-sm font-bold">For how long?</label>
                    <input
                        v-model="driver_employment_length"
                        type="text"
                        required
                        class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                    />
                </div>
            </div>
            <div class="md:w-full" v-else></div>
        </div>
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
            driver_name: '',
            driver_age: '',
            driver_years_experience: '',
            driver_address: '',
            driver_license_number: '',
            driver_date_of_expiry: '',
            driver_previous_accident: '',
            driver_previous_accident_details: '',
            driver_prosecuted: '',
            driver_prosecuted_details: '',
            driver_employment: '',
            driver_employment_capacity: '',
            driver_employment_length: '',
            error: {
                age : false,
                years: false
            }

        }
    },
    computed:{
        ...mapState({
            claimData: state => state.chiclaim.claimData,
        })
    },
    watch:{
        driver_age(){
            if(/^\d*$/.test(this.driver_age)){
                this.error.age = false
                return
            }  
            this.error.age = true
        },
        driver_year_of_experience(){
            if(/^\d*$/.test(this.driver_year_of_experience)){
                this.error.years = false
                return
            }  
            this.error.years = true
        }
    },
    methods: {
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
            let data = {
                driver_name: this.driver_name,
                driver_age: parseInt(this.driver_age),
                driver_years_experience : parseInt(this.driver_years_experience),
                driver_address : this.driver_address,
                driver_license_number: this.driver_license_number,
                driver_date_of_expiry: this.driver_date_of_expiry,
                driver_previous_accident: this.driver_previous_accident,
                driver_previous_accident_details: this.driver_previous_accident_details,
                driver_prosecuted: this.driver_prosecuted,
                driver_prosecuted_details: this.driver_prosecuted_details,
                driver_employment: this.driver_employment,
                driver_employment_capacity: this.driver_employment_capacity,
                driver_employment_length: this.driver_employment_length
            }
            this.$store.commit('setChiClaimData', data)
            this.$store.commit('increaseChiClaimStep')
        }
    },
    mounted(){
        if(this.claimData.driver_name){
            this.driver_name = this.claimData.driver_name 
            this.driver_age = this.claimData.driver_age 
            this.driver_years_experience = this.claimData.driver_years_experience 
            this.driver_address = this.claimData.driver_address 
            this.driver_license_number = this.claimData.driver_license_number 
            this.driver_date_of_expiry = this.claimData.driver_date_of_expiry 
            this.driver_previous_accident = this.claimData.driver_previous_accident 
            this.driver_previous_accident_details = this.claimData.driver_previous_accident_details 
            this.driver_prosecuted = this.claimData.driver_prosecuted
            this.driver_prosecuted_details = this.claimData.driver_previous_accident_details 
            this.driver_employment = this.claimData.driver_employment 
            this.driver_employment_capacity = this.claimData.driver_employment_capacity 
            this.driver_employment_length = this.claimData.driver_employment_length 
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