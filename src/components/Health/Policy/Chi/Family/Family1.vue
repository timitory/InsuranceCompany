<template>
    <form @submit.prevent="validate" class="mt-6">
        <div class="grid gap-4 md:grid-cols-2 md:gap-6">
            <div class="">
                <label class="text-sm font-bold">Surname</label>
                <input v-model="surname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Firstname</label>
                <input v-model="firstname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Other name</label>
                <input v-model="othername" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Email</label>
                <input v-model="email" type="email" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Phone 1</label>
                <input v-model="telephone_1" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                <p v-if="error.phone1" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
            </div>
            <div class="">
                <label class="text-sm font-bold">Phone 2</label>
                <input v-model="telephone_2" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
                <p v-if="error.phone2" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Select Gender</label>
                <div class="relative">
                    <select v-model="gender_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(gender, index) in resources.genders" :key="index" :value="gender.id">{{gender.name}}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <label class="text-sm font-bold">Date of Birth</label>
                <input v-model="date_of_birth" type="date" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">State of Origin</label>
                <div class="relative">
                    <select v-model="state_of_origin_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(state, index) in resources.states" :key="index" :value="state.id">{{state.name}}</option>
                    </select>
                </div>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">State of Residence</label>
                <div class="relative">
                    <select v-model="state_of_residence_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(state, index) in resources.states" :key="index" :value="state.id">{{state.name}}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <label class="text-sm font-bold">LGA</label>
                <input v-model="lga" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Company Name</label>
                <input v-model="company_name" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Choose preferred hospital</label>
                <div class="relative">
                    <select v-model="hospital_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option v-for="(hospital, index) in hospitals" :key="index" :value="hospital.id">{{hospital.name}}</option>
                    </select>
                </div>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Payment Frequency</label>
                <div class="relative">
                    <select v-model="payment_frequency_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option v-for="(option, index) in resources.payment_frequency" :key="index" :value="option.id">{{option.name}}</option>
                    </select>
                </div>
            </div>
            <div class="mt-4">
                <label class="text-sm font-bold">Upload Passport <span class="text-red-500">*</span></label>
                <div class="">
                <div class="lg:w-full mt-4">
                    <label for="idImage" class="py-2 px-4 text-white rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                    <p class="inline ml-3" v-if="photoFile">{{photoFile | slicer}}</p>
                    <p class="inline ml-3" v-else>No file chosen</p>
                    <input id="idImage" type="file" ref="idImage" v-on:change="idUpload" class="fileinput hidden">
                </div>
                <p class="text-red-500 text-sm mt-2" v-if="error.idImage">Please upload a valid image file</p>
                </div>
            </div>
        </div>
        <button class="block w-full mx-auto bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" style="max-width: 300px">Proceed</button>
     </form>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
export default {
    data(){
        return {
            surname: '',
            firstname: '',
            othername: '',
            email: '',
            telephone_1: '',
            telephone_2: '',
            gender_id: '',
            date_of_birth: '',
            state_of_origin_id: '',
            state_of_residence_id: '',
            lga: '',
            company_name: '',
            hospitals: [],
            hospital_id: '',
            payment_frequency_id: '',
            health_plan_id: '',
            enrollee_id: '',
            photoFile: '',
            idImage: '',
            error : {
                idImage : false,
                phone1: false,
                phone2: false
            }

        }
    },
    computed: {
        ...mapState({
            resources : state => state.health.chiHealthResources,
            beneficiary: state => state.beneficiary,
            plan : state => state.health.plan,
            underwriter : state => state.underwriter_id
        })
    },
    methods: {
        validate(){
            if(this.idImage == '') return this.error.idImage  = true
            if(Object.values(this.error).includes(true)) return
            let data = {
                underwriter_id: this.underwriter,
                health_plan_id: this.health_plan_id,
                payment_frequency_id: this.payment_frequency_id,
                enrollee_id : this.enrollee_id,
                company_name : this.company_name,
                surname : this.surname,
                firstname: this.firstname,
                othername: this.othername,
                date_of_birth: this.date_of_birth,
                gender_id : this.gender_id,
                state_of_origin_id: this.state_of_origin_id,
                lga: this.lga,
                state_of_residence_id: this.state_of_residence_id,
                telephone_1: this.telephone_1,
                telephone_2 : this.telephone_2,
                email: this.email,
                hospital_id: this.hospital_id,
                passport: this.idImage
            }
            this.$emit('submitForm1', data)

        },
        getChiHealthResources(){
            axios.get(`${baseURL}/health/resources/1`)
            .then(res=> {
                this.$store.commit('setChiHealthResources', res.data.data)
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        },
        getHospitals(){
            axios.get(`${baseURL}/health/hospitals/${this.plan.id}?sid=${this.state_of_residence_id}`)
            .then((res)=> {
                this.hospitals = res.data.data
            })
            .catch((err)=> {
                this.$store.dispatch('handleError', err)
            })
        },
        idUpload(){
            this.photoFile = this.$refs.idImage.files[0].name 
            this.error.idImage = false
            let fileToLoad = this.$refs.idImage.files[0];
            let fileReader = new FileReader();
            let vm = this
            fileReader.onload = function(fileLoadedEvent) {
                vm.idImage = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
    },
    filters: {
        slicer(val){
            return `${val.slice(0, 10)} ..`
        }
    },
    watch: {
        telephone_2(){
            if(/^\d{11}$/.test(this.telephone_2)){
                this.error.phone2 = false;
            }else{
                this.error.phone2 = true;
            }
        },
        telephone_1(){
            if(/^\d{11}$/.test(this.telephone_1)){
                this.error.phone1 = false;
            }else{
                this.error.phone1 = true;
            }
        },
        state_of_residence_id(){
            if(this.state_of_residence_id){
                this.getHospitals()
            }
        }
    },
    mounted(){
        if(Object.values(this.resources).length === 0){
            this.getChiHealthResources()
        }
        this.email = this.beneficiary.email
        this.firstname = this.beneficiary.firstname
        this.surname = this.beneficiary.lastname
        this.telephone_1 = this.beneficiary.phone
        this.health_plan_id = this.plan.id
        this.underwriter_id = this.underwriter
        this.enrollee_id = this.beneficiary.user_id
    }
}
</script>

<style scoped>
input, select, .input{
  background-color: #e2f5ec;
}
.fileinput{
  background-color: #fff;
}
</style>