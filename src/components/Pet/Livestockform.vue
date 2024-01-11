<template>
    <div class="mt-6">
        <div class="lg:w-full lg:mx-auto">
            <Step1 v-if="this.steps === 1" :next="next" :back="back" :steps="this.steps" :updatedata="this.updatedata" />
<!--            <Step2 v-if="this.steps === 2" :next="next" :back="back" :steps="this.steps" :updatedata="this.updatedata" />-->
            <Step3 v-if="this.steps === 2" :next="next" :back="back" :steps="this.steps" :updatedata="this.updatedata" v-on:BuyPolicy="UpdateDogPolicy" />
            <Step4 v-if="this.steps === 3" :next="next" :back="back" :steps="this.steps" :updatedata="this.updatedata" />
        </div>
    </div>
</template>
    
<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import Step1 from './Livestock/Step1';
// import Step2 from './Livestock/Step2.vue';
import Step3 from './Livestock/Step3.vue';
import Step4 from './Livestock/Step3-bulk.vue';


export default {
    components: {
        Step1,
        // Step2,
        Step3,
        Step4
    },
    data() {
        return {
            steps: 1,
            updatedata: {
                "user_pet_id": "",
                "village": "",
                "state": "",
                "district": "",
                "total_farm_area": "",
                "lga": "",
                "livestock_type": "",
                "total_animal": "",
                "stocking_date": "",
                "animal_breed": "",
                "animal_age": "",
                "animal_source": "",
                "animal_purpose": "",
                "feed_source": "",
                "water_source": "",
                "is_doctor_qualfied": "",
                "doctor_name": "",
                "doctor_qualification": "",
                "doctor_grad_year": "",
                "doctor_vcn_no": "",
                "dotor_service": "",
                "doctor_vaccination_details": "",
                "purchase_cost": "",
                "feed": "",
                "vaccination": "",
                "medication": "",
                "utilities": "",
                "interest": "",
                "others": "",
                "loss_year": "",
                "loss_class": "",
                "loss_number": "",
                "loss_cause": "",
                "loss_effort": "",
                "loss_value": "",
                "loss_threat": "",
                "total_pens": "",
                "total_animal_insurance": "",
            }
        }
    },
    // props: [
    //     "page",
    // ],
    methods: {
        next(number) {
            this.steps = number + 1
        },

        back(number) {
            this.steps = number - 1
        },
        
        UpdateDogPolicy(data) {
            this.$store.commit('startLoading')
            axios({ url: `${baseURL}/pet/policy/update`, data: data, method: 'POST' })
                .then(res => {
                console.log(res)
                // this.user_pet_id = res.data.data
                this.$router.push(`/pet/managepet`)
                this.$store.commit('endLoading')

                })
                .catch(err => {
                this.$store.dispatch('handleError', err)
                })
    },
    },

    computed: {
        ...mapState({
            self: state => state.user,
            beneficiary: state => state.beneficiary,
            underwriterId: state => state.underwriter_id
        }),
    },
    mounted() {
        console.log( this.updatedata);
    }
}
</script>
    
<style scoped></style>