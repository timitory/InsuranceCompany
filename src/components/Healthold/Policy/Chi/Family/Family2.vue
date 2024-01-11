<template>
  <form @submit.prevent="validate" class="mt-6">
        <!-- <h1 class="font-bold mb-6">Family Info</h1> -->
        <div class="grid gap-4 md:grid-cols-2 md:gap-6">
            <div class="">
                <label class="text-sm font-bold">Spouse Surname</label>
                <input v-model="spouse_surname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Spouse Firstname</label>
                <input v-model="spouse_firstname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
            <div class="">
                <label class="text-sm font-bold">Spouse Other name</label>
                <input v-model="spouse_othername" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
             <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Spouse Gender</label>
                <div class="relative">
                    <select v-model="spouse_gender_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <option v-for="(gender, index) in resources.genders" :key="index" :value="gender.id">{{gender.name}}</option>
                    </select>
                </div>
            </div>
            <div class="">
                <label class="text-sm font-bold">Spouse Date of Birth</label>
                <input v-model="spouse_date_of_birth" type="date" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            </div>
        </div> 
        <hr class="mt-4">
        <div v-if="childAdded" >
            <div v-for="(child, index) in children" :key="index" class="grid relative gap-4 md:grid-cols-2 md:gap-6 mt-6 py-4 border-b">
                <svg class="cursor-pointer absolute right-0" @click="removeChild(index)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#FF0000"></path>
                </svg>
                <div class="">
                    <label class="text-sm font-bold">Child Surname</label>
                    <input v-model="child.surname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                </div>
                <div class="">
                    <label class="text-sm font-bold">Child Firstname</label>
                    <input v-model="child.firstname" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                </div>
                <div class="">
                    <label class="text-sm font-bold">Child Other name</label>
                    <input v-model="child.othername" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                </div>
                <div class="lg:w-full lg:mr-3">
                    <label class="text-sm font-bold">Child Gender</label>
                    <div class="relative">
                        <select v-model="child.gender_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                        <option v-for="(gender, index) in resources.genders" :key="index" :value="gender.id">{{gender.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="">
                    <label class="text-sm font-bold">Child Date of Birth</label>
                    <input v-model="child.date_of_birth" type="date" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
                </div>
            </div>
        </div> 
        <button type="button" class="flex gap-2 mt-4 cursor-pointer items-center" @click="addChild" style="width: 100px">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM13 17H11V13H7V11H11V7H13V11H17V13H13V17Z" fill="#131b47"></path>
          </svg>
          <p class="text-sm">Add Child</p>
        </button>
        <button class="block w-full mx-auto bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" style="max-width: 300px">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
export default {
    data(){
        return {
            spouse_surname: '',
            spouse_firstname: '',
            spouse_othername: '',
            spouse_date_of_birth: '',
            spouse_gender_id: '',
            spouse_health_plan_id: '',
            childAdded: false,
            children: [
            ],
        }
    },
    computed: {
        ...mapState({
            resources : state => state.health.chiHealthResources,
            plan : state => state.health.plan,
        })
    },
    watch: {
        children(){
            if(this.children.length > 0){
                this.childAdded = true
            }
        }
    },
    methods: {
        getChiHealthResources(){
            axios.get(`${baseURL}/health/resources/1`)
            .then(res=> {
                this.$store.commit('setChiHealthResources', res.data.data)
            })
            .catch(err=>{
                this.$store.dispatch('handleError', err)
            })
        },
        addChild(){
            if(this.children.length === 4) return this.$store.commit('setError', {status: true, msg: "Can't add more than 4 children"})
            this.children.push({
                surname: '', firstname: '', othername: '', date_of_birth: '', gender_id: ''
            })
        },
        removeChild(index){
            this.children.splice(index, 1)
        },
        validate(){
            let data = {
                spouse_surname : this.spouse_surname,
                spouse_firstname: this.spouse_firstname,
                spouse_othername : this.spouse_othername,
                spouse_date_of_birth : this.spouse_date_of_birth,
                spouse_gender_id : this.spouse_gender_id,
                spouse_health_plan_id : this.spouse_health_plan_id,
                children : this.children
            }
            this.$emit('submitForm2', data)
        }
    },
    mounted(){
        if(Object.values(this.resources).length === 0){
            this.getChiHealthResources()
        }
        this.spouse_health_plan_id = this.plan.id
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