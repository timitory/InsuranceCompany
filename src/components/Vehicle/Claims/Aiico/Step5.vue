<template>
  <form @submit.prevent="save">
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Name</label>
                <input
                    v-model="third_party_name"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Address</label>
                <input
                    v-model="third_party_address"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
             </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Type of third-party damage(property/injury) ?</label>
                <div class="relative">
                    <select v-model="damage" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="property">Property</option>
                        <option  value="injury">Injury</option>
                    </select>
                    <p v-if="damage == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
           </div>
           <div class="md:w-full"></div>
        </div>
        <div v-if="damage == 'injury'" class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Type of injury</label>
                <input
                    v-model="third_party_injury"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="md:w-full"></div>
        </div>
        <div v-if="damage == 'property'" class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Type of damaged property</label>
                <input
                    v-model="third_party_property"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="md:w-full mt-4">
                <label class="text-sm font-bold">If vehicle, make and reg no*</label>
                <div class="mt-4 md:flex md:gap-16">            
                    <div class="mt-4 md:w-full md:mt-0"> 
                        <input
                            v-model="third_party_make"
                            type="text"
                            placeholder="Make"
                            class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        />
                    </div>
                    <div class="mt-4 md:w-full md:mt-0"> 
                        <input
                            v-model="third_party_reg_no"
                            type="text"
                            placeholder="Reg No"
                            class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Address where vehicle can be inspected*</label>
                <input
                    v-model="third_party_inspection_address"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Has the accident been reported to the police ?</label>
                <div class="relative">
                    <select v-model="police_report" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                    <p v-if="police_report == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
           </div>
        </div>
        <div v-if="police_report == 'yes'" class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">If yes, which station</label>
                <input
                    v-model="police_report_station"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="md:w-full mt-4">
                <label class="text-sm font-bold">Officer’s name and number</label>
                <div class="mt-4 md:flex md:gap-16">            
                    <div class="mt-4 md:w-full md:mt-0"> 
                        <input
                            v-model="police_report_officer_name"
                            type="text"
                            placeholder="Name"
                            class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        />
                    </div>
                    <div class="mt-4 md:w-full md:mt-0"> 
                        <input
                            v-model="police_report_officer_number"
                            type="text"
                            placeholder="Phone No"
                            class="input rounded block bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">what action are/has the Police taking in respect of the accident?</label>
                <input
                    v-model="police_action"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Any notice of any claim been given to you?</label>
                <div class="relative">
                    <select v-model="claim_notice" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                    <p v-if="claim_notice == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
                </div>
           </div>
        </div>
        <div class="mt-4 md:flex md:gap-24">
            <div class="md:w-full">
                <label class="text-sm font-bold">if anybody received treatment at scene of accident, or was taken to hospital, provide name of victim and name of hospital</label>
                <div class="md:flex md:gap-16">
                    <div class="mt-4 md:w-full md:mt-0">
                        <input
                            v-model="victim_name"
                            type="text"
                            placeholder="Victim Name"
                            class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        />
                    </div>
                    <div class="mt-4 md:w-full md:mt-0">
                        <input
                            v-model="victim_hospital"
                            type="text"
                            placeholder="Hospital"
                            class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        />
                    </div>
                </div>
            </div>
            <div class="md:w-full"></div>
        </div>
        <div class="mt-12 lg:flex lg:justify-between">
            <button type="button" @click="back" class="block w-full lg:w-auto  border-2 mb-4 lg:mb-0 bg-white text-green-500 px-12 py-2 rounded focus:outline-none">Back</button>
            <button class="block w-full lg:w-auto bg-green-500 text-white px-12 py-2 rounded focus:outline-none">Next</button>
        </div>
  </form>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
export default {
    data(){
        return {
            third_party_name: '',
            third_party_address: '',
            damage:'',
            third_party_property: '',
            third_party_injury: '',
            third_party_make: '',
            third_party_reg_no: '',
            third_party_inspection_address: '',
            police_report: '',
            police_report_station: '',
            police_report_officer_name: '',
            police_report_officer_number: '',
            police_action: '',
            claim_notice: '',
            victim_name: '',
            victim_hospital: ''
        }
    },
    computed:{
        ...mapState({
         claimData : state => state.chiclaim.claimData,
         enrollee: state => state.enrollee
        })
    },
    methods: {
        back(){
            this.$store.commit('decreaseChiClaimStep')
        },
        save(){
            let data = {
                third_party_name: this.third_party_name,
                third_party_address: this.third_party_address,
                third_party_property : this.third_party_property,
                third_party_injury : this.third_party_injury,
                third_party_make : this.third_party_make,
                third_party_reg_no : this.third_party_reg_no,
                third_party_inspection_address : this.third_party_inspection_address,
                police_report: this.police_report,
                police_report_station : this.police_report_station,
                police_report_officer_name : this.police_report_officer_name,
                police_report_officer_number: this.police_report_officer_number,
                police_action: this.police_action,
                claim_notice: this.claim_notice,
                victim_name: this.victim_name,
                victim_hospital: this.victim_hospital,
                user_vehicle_id : this.enrollee.user_vehicle_id
            }
            this.$store.commit('setChiClaimData', data)
            this.submit()
        },
        submit(){
            this.$store.commit('startLoading')
            axios({url: `${baseURL}/claim/vehicle`, data : this.claimData, method: 'POST'})
            .then((res)=>{
                this.$store.commit('endLoading')
                console.log(res.data.message)
                this.$store.commit('setSuccess', {status: true, msg: "Success, an email has been sent to you!"})
                this.$router.push('/app/dashboard')
            })
            .catch((err)=>{
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        if(this.claimData.third_party_name){
            this.third_party_name = this.claimData.third_party_name
            this.third_party_address = this.claimData.third_party_address
            // this.third_party_property = this.claimData.third_party_property
            // this.third_party_injury = this.claimData.third_party_injury
            // this.third_party_make = this.claimData.third_party_make
            // this.third_party_reg_no = this.claimData.third_party_reg_no
            this.third_party_inspection_address = this.claimData.third_party_inspection_address
            this.police_report = this.claimData.police_report
            this.police_report_station = this.claimData.police_report_station
            this.police_report_officer_name  = this.claimData.police_report_officer_name
            this.police_report_officer_number = this.claimData.police_report_officer_number
            this.police_action = this.claimData.police_action
            this.claim_notice = this.claimData.claim_notice
            this.victim_name = this.claimData.victim_name
            this.victim_hospital = this.claimData.victim_hospital
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