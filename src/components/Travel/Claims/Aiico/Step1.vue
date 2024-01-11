<template>
  <form @submit.prevent="save">
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Travel Departure Date</label>
                <input
                    v-model="departure"
                    type="date"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Travel Details Of Incident</label>
                <textarea rows="5" v-model="travel_incident" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
            </div>
            
        </div>
        
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Travel Date of Occurence</label>
                <input
                    v-model="travel_occurence"
                    type="date"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
           </div>
           <div class="mt-4 md:w-full">
            <!-- <div class="md:w-full mt-4"> -->
                <label class="text-sm font-bold">Travel Source</label>
            <textarea rows="5" v-model="travel_source" required class="input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
                
            <!-- </div> -->
                
             </div>
           
        </div>
        <div class="md:flex md:gap-24">
            <div class="mt-4 md:w-full">
                <label class="text-sm font-bold">Travel Location of Occurence</label>
                <input
                    v-model="travel_location"
                    type="text"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
            <div class="mt-4 md:w-full">
            <label class="text-sm font-bold">Travel Return Date</label>
                <input
                    v-model="travel_return"
                    type="date"
                    required
                    class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
            </div>
           
        </div>
        
        <div class="mt-12 lg:flex lg:justify-between">
            <button class="block w-full lg:w-auto bg-green-500 text-white px-12 py-2 rounded focus:outline-none">Make Claim</button>
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
            purpose: '',
            carriage: '',
            departure: '',
            travel_return: '',
            travel_occurence: '',
            travel_location: '',
            travel_incident: '',
            travel_source: '',

        }
    },
    computed:{
        ...mapState({
            enrollee : state => state.enrollee,
            claimData: state => state.chiclaim.claimData,
        })
    },
    methods:{
        save(){
            let data = {
                user_travel_id: this.enrollee.user_vehicle_id,
                departure_date: this.departure,
                return_date: this.travel_return,
                date_of_occurence: this.travel_occurence,
                location_of_occurence: this.travel_location,
                details_of_incident: this.travel_incident,
                source: this.travel_source,
            }
            
    axios({url: `${baseURL}/claim/travel/aiico`, data:data, method: 'POST'})
      .then(res=>{
        this.$store.commit('endLoading')
        this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        this.$router.push('/app/dashboard/managetravel')
      })
      .catch(err=>{
        // console.log(err)
        this.$store.commit('endLoading')
        this.$store.commit('setError', {status: true, msg: err.response.data.message})
      })
            
        }
    },
    mounted(){
        
        
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