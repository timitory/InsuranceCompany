<template>
  <form @submit.prevent="save">
    <div class="md:flex md:gap-24">
        <div class="mt-4 md:w-full">
            <label class="text-sm font-bold">Purpose of use at time of accident</label>
            <div class="relative">
            <select v-model="purpose" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <option  value="commercial">Commercial</option>
                <option  value="private">Private</option>
            </select>
            <p v-if="purpose == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
            </div>
        </div>
        <div class="mt-4 md:w-full" v-if="purpose == 'commercial'">
            <label class="text-sm font-bold">If Business/Commercial, what kind of carriage*</label>
            <div class="relative">
            <select v-model="carriage" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                <option  value="commercial">Goods</option>
                <option  value="private">Persons</option>
            </select>
            <p v-if="carriage == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Choose an option</p>
            </div>
        </div>
        <div v-else class="md:w-full"></div>
    </div>
    <button class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">Next</button>
   
  </form>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            purpose: '',
            carriage: ''
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
                purpose_of_use_at_accident: this.purpose,
                purpose_of_use_at_accident_extra: this.carriage
            }
            this.$store.commit('setChiClaimData', data)
            this.$store.commit('increaseChiClaimStep')
        }
    },
    mounted(){
        if(this.claimData.purpose_of_use_at_accident){
            this.purpose = this.claimData.purpose_of_use_at_accident
            this.carriage = this.claimData.purpose_of_use_at_accident_extra
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