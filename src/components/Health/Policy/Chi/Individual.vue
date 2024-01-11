<template>
    <form @submit.prevent="validate" class="mt-6">
        <div class="grid gap-4 md:grid-cols-3 md:gap-6">
            <div class="">
                <label class="text-sm font-bold">Title</label>
                <select v-model="title" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Miss</option>
                    <option value="Mrs">Mrs</option>
                   
                </select>
                <!-- <input v-model="surname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required> -->
            </div>
            <div class="">
                <label class="text-sm font-bold">Surname</label>
                <input v-model="surname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Firstname</label>
                <input v-model="firstname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Email</label>
                <input v-model="email" type="email" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Phone</label>
                <input v-model="telephone_1" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                <p v-if="error.phone1" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
            </div>
            <div class="">
                <label class="text-sm font-bold">Country</label>
                <input v-model="country" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
                
            </div>
            <!-- <div class="">
                <label class="text-sm font-bold">State</label>
                
                <select v-model="state" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(state, index) in states" :key="index" :value="state.StateID">{{state.Name}}</option>
                    </select>
            </div> -->
            <div class="">
                <label class="text-sm font-bold">Address</label>
                <input v-model="address" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
               
            </div>
            <div class="">
                <label class="text-sm font-bold">Nationality</label>
                <input v-model="nationality" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
               
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Select Gender</label>
                <div class="relative">
                    <select v-model="gender_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
            </div>
            <div class="">
                <label class="text-sm font-bold">Occupation</label>
                <input v-model="occupation" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
               
            </div>
            <div class="">
                <label class="text-sm font-bold">Religion</label>
                <input v-model="religion" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
               
            </div>
            <div class="">
                <label class="text-sm font-bold">Blood Group</label>
                <select v-model="blood_group" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                </select>
                <!-- <input v-model="blood_group" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder=""> -->
               
            </div>
            <div class="">
                <label class="text-sm font-bold">Genotype</label>
                <select v-model="genotype" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option value="AA">AA</option>
                    <option value="AC">AC</option>
                    <option value="AS">AS</option>
                    <option value="CC">CC</option>
                    <option value="SC">SC</option>
                    <option value="SS">SS</option>
                </select>
                <!-- <input v-model="genotype" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder=""> -->
               
            </div>
            <div class="">
                <label class="text-sm font-bold">Marital Status</label>
                <select v-model="marital_status" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                </select>
                <!-- <input v-model="surname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required> -->
            </div>
            <div class="">
                <label class="text-sm font-bold">Date of Birth</label>
                <input v-model="date_of_birth" type="date" id="dob" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">State of Origin</label>
                <div class="relative">
                    <select v-model="state_of_origin_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(state, index) in states" :key="index" :value="state.StateID">{{state.Name}}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <label class="text-sm font-bold">LGA of Origin</label>
                <select v-model="lga_origin_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option v-for="(lga, index) in lgaOrigin" :key="index" :value="lga.LgaID">{{lga.Name}}</option>
                    </select>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">State of Residence</label>
                <div class="relative">
                    <select v-model="state_of_residence_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(state, index) in states" :key="index" :value="state.StateID">{{state.Name}}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <label class="text-sm font-bold">LGA of Residence</label>
                <div class="relative">
                    <select v-model="lga_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option v-for="(lga, index) in lgas" :key="index" :value="lga.LgaID">{{lga.Name}}</option>
                    </select>
                </div>
                <!-- <input v-model="lga_of_residence" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required> -->
            </div>
            <!-- <div class="">
                <label class="text-sm font-bold">Residencial Address</label>
                <input v-model="residential_address" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div> -->
            <div class="">
                <label class="text-sm font-bold">Company Name</label>
                <input v-model="company_name" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Choose preferred hospital</label>
                <div class="relative">
                    <select v-model="hospital_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option v-for="(hospital, index) in hospitals" :key="index" :value="hospital.ID">{{hospital.HospitalName}}</option>
                    </select>
                </div>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Pre-Exisiting Medical History</label>
                <div class="relative">
                    <textarea v-model="preexistingmedicalhistory" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="">
                        </textarea>

                </div>
            </div>
            <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Payment Frequency</label>
                <div class="relative">
                    <select v-model="payment_frequency" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <!-- <option v-for="(option, index) in payment_frequency" :key="index" :value="option.id">{{option.name}}</option>
                         -->
                            <option value="1">1 Month</option>
                            <option value="2">2 Months</option>
                            <option value="3">3 Months</option>
                            <option value="4">4 Months</option>
                            <option value="5">5 Months</option>
                            <option value="6">6 Months</option>
                            <option value="7">7 Months</option>
                            <option value="8">8 Months</option>
                            <option value="9">9 Months</option>
                            <option value="10">10 Months</option>
                            <option value="11">11 Months</option>
                            <option value="12">12 Months</option>
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
            <div v-if="payment_frequency == '1'" class="lg:w-full lg:mr-3">
              <p class="text-sm font-bold pb-3 ">
                Auto Renewal
              </p>
              <label class="toggle-container">
                <input type="checkbox" v-model="auto_renewal" class="toggle-input">
                <span class="toggle-slider"></span>
              </label>
            </div>
        </div>
        <button class="block w-full mx-auto bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" style="max-width: 300px">Submit</button>
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
            gender_id: '',
            date_of_birth: '',
            state_of_origin_id: '',
            state_of_residence_id: '',
            residential_address: '',
            marital_status: '',
            lga_of_origin: '',
            lga_of_residence: '',
            lgas: [],
            lgaOrigin: [],
            lga_id: '',
            lga_origin_id: '',
            nationality: '',
            address: '',
            state: '',
            title: '',
            country: '',
            company_name: '',
            genotype: '',
            blood_group: '',
            hospitals: [],
            hospital_id: '',
            payment_frequency_id: '',
            payment_frequency: '',
            occupation: '',
            religion: '',
            health_plan_id: '',
            health_plan: '',
            enrollee_id: '',
            photoFile: '',
            auto_renewal: false,
            preexistingmedicalhistory: '',
            idImage: '',
            error : {
                idImage : false,
                phone1: false,
                phone2: false
            },
            states: []

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
            let parts = this.date_of_birth.split('-');
            let formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

            
            if(this.idImage == '') return this.error.idImage  = true
            if(Object.values(this.error).includes(true)) return
            
            let data = {
                title: this.title,
                enrollee_id: this.beneficiary.user_id,
                user_id: this.beneficiary.user_id,
                underwriter_id: this.underwriter,
                passport: this.idImage,
                country: this.country,
                plan_id: this.health_plan_id.toString(),
                email: this.email,
                phone: this.telephone_1,
                dob: formattedDate,
                gender : parseInt(this.gender_id),
                marital_status: this.marital_status,
                occupation: this.occupation,
                religion: this.religion,
                blood_group: this.blood_group,
                genotype: this.genotype,
                company : this.company_name,
                nationality: this.nationality,
                state_of_origin: this.state_of_origin_id,
                lga_of_origin: this.lga_origin_id,
                payment_frequency: parseInt(this.payment_frequency),
                state_of_residence: this.state_of_residence_id,
                lga_of_residence: this.lga_id,
                address: this.address,
                medical_history: this.preexistingmedicalhistory,
                hospital_id: this.hospital_id.toString(),
            }
            
            this.$emit('buyPolicy', data)

        },
        getExternalRef(length){
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        },
      
        getChiHMOStates(){
            axios.get(`${baseURL}/hmo/states`)
            .then(res=> {
               this.states = res.data.data
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
            

        },
     
        getHospital(planID, stateID, lgaID){
           console.log(this.date_of_birth)
            axios({url:`${baseURL}/hmo/hospitals`,data: {
                PlanID: planID,
                StateId: stateID,
                LgaId: lgaID,
            } , method: 'POST'})
            .then((res)=> {
                console.log(res.data.data)
                console.log(res.data.data.hospitals)
                this.hospitals = res.data.data.hospitals
                this.payment_frequency = res.data.data.payment_frequency
            })
            .catch((err)=> {
                console.log(err)
                this.$store.dispatch('handleError', err)
            })
        },
        getLga(stateID){
          
            console.log(stateID)
            axios({url:`${baseURL}/hmo/lga`,data: {
                state_id: stateID
            } , method: 'POST'})
            .then((res)=> {
                
                this.lgas = res.data.data
                
            })
            .catch((err)=> {
                console.log(err)
                this.$store.dispatch('handleError', err)
            })
        },
        getLgaOrigin(stateID){
          
          console.log(stateID)
          axios({url:`${baseURL}/hmo/lga`,data: {
              state_id: stateID
          } , method: 'POST'})
          .then((res)=> {
              
              this.lgaOrigin = res.data.data
              
          })
          .catch((err)=> {
              console.log(err)
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
                //this.getHospital(this.health_plan.toString(), this.state_of_residence_id.toString())
                this.getLga(this.state_of_residence_id.toString())
            }
        },
        state_of_origin_id(){
            if(this.state_of_origin_id){
                //this.getHospital(this.health_plan.toString(), this.state_of_residence_id.toString())
                this.getLgaOrigin(this.state_of_origin_id.toString())
            }
        },

        lga_id(){
            if(this.lga_id){
                this.getHospital(this.health_plan.toString(), this.state_of_residence_id.toString(), this.lga_id.toString(),)
                
            }
        }
    },
    mounted(){
   
    
        if(Object.values(this.resources).length === 0){
            this.getChiHealthResources()
        }
        this.getChiHMOStates()
        this.email = this.beneficiary.email
        this.firstname = this.beneficiary.firstname
        this.surname = this.beneficiary.lastname
        this.telephone_1 = this.beneficiary.phone
        this.address = this.beneficiary.address
        this.health_plan_id = this.plan.ID
        this.health_plan = this.plan.PlanId
        this.underwriter_id = this.underwriter
        this.enrollee_id = this.beneficiary.user_id

       
            
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

            
        var datefield = document.getElementById("dob");


        datefield.setAttribute("max", today);

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

.toggle-container {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 25px;
}

.toggle-input {
  display: none;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.4s;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

.toggle-input:checked + .toggle-slider {
  background-color: #22C55E; /* green background when checked */
}

.toggle-input:checked + .toggle-slider:before {
  transform: translateX(24px);
}
</style>