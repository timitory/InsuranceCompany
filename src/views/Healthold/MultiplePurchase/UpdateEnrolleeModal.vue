<template>
   <div class="l-modal">
      <div class="loading-modal w-full">
          <div class="loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6" v-on-clickaway="close">
            <div class="pt-6">
              <hr>
              <div class="mt-6">
                <div  class="relative">
                    <font-awesome-icon icon="times-circle" class="cursor-pointer text-red-500 text-base lg:text-xl absolute right-2 top-0" @click="$emit('close')" />
                    <p class="mb-4">Update {{enrollee.surname}} {{enrollee.firstname}}'s data</p>
                    <form @submit.prevent="submit" class="px-4 py-6 mt-6 lg:py-10" style="min-height: 30vh">
                        <div class="lg:w-full mb-6">
                            <label class="text-sm font-bold">Choose preferred hospital</label>
                            <div class="relative">
                                <select v-model="hospital_id" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                                    <option v-for="(hospital, index) in hospitals" :key="index" :value="hospital.id">{{hospital.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-4">
                            <label class="text-sm font-bold">Upload your passport photograph <span class="text-red-500">*</span></label>
                            <div class="">
                                <div class="lg:w-full mt-2 flex gap-2 items-end">
                                    <label for="regImage" class="py-2 px-4 text-white rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                                    <p class="">{{filename}}</p>
                                    <input id="regImage" type="file" ref="imagefile" v-on:change="upload" class="hidden fileinput">
                                </div>
                                <p class="text-red-500 text-sm mt-2" v-if="fileError">Please upload a valid image file</p>
                            </div>
                        </div>
                        <button class="mt-4 bg-green-500 text-white block w-full focus:outline-none px-4 py-2 rounded" :class="[fileError || hospital_id === '' ? 'opacity-30' : '']" :disabled="fileError || hospital_id === ''">Submit</button> 
                    </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import axios from 'axios'
import baseURL from "@/main"
import {mapState} from 'vuex'
export default {
    mixins: [ clickaway ],
    props: {
        enrollee: {
        required: true
        }
    },
    computed: {
        ...mapState({
            underwriterId: state => state.underwriter_id,
        })
    },
    data(){
    return {
        hospital_id: '',
        hospitals: [],
        filename: '',
        imagefile: '',
        fileError: true,
    }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        upload(){
            console.log(this.$refs.imagefile.files[0].type)
            this.filename = this.$refs.imagefile.files[0].name 
            this.imagefile = this.$refs.imagefile.files[0]
            switch(this.$refs.imagefile.files[0].type){
            case "image/jpeg": 
                this.fileError = false
            break;
            case "image/png": 
                this.fileError = false
            break;
            default : 
                this.fileError = true
            }
        },
        getHospitals(){
            axios.get(`${baseURL}/health/hospitals/${this.enrollee.plan.id}?sid=${this.enrollee.state_of_residence_id}`)
            .then((res)=> {
                this.hospitals = res.data.data
            })
            .catch((err)=> {
                this.$store.dispatch('handleError', err)
            })
        },
        submit(){
            this.$store.commit('startLoading')
            let formData = new FormData;
            formData.append('passport', this.imagefile);
            formData.append('underwriter_id', this.underwriterId);
            formData.append('hospital_id', this.hospital_id);
            formData.append('user_health_id', this.enrollee.user_health_id);
            axios.patch(`${baseURL}/health/policy/passport`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then((res)=> {
                console.log(res.data.data)
                this.$store.commit('endLoading')
                this.$emit('refresh')
                this.$emit('close')
            })
            .catch((err)=> {
                this.$store.dispatch('handleError', err)
            })
        }
    },
    mounted(){
        this.getHospitals()
    }
  
}
</script>

<style scoped>
.loader{
  position: relative;
  top: 5px;
  max-width: 500px;
  min-height: 629px;
}
select{
  background-color: #e2f5ec;
}
.filesvg{
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.input{
  /* background-color: #27293d;
  border-color: #2b3553; */
  border-width: 1px;
  width: 100%;
  height: 150px
}
@media only screen and (min-width: 1024px){
    .input{
        height: 200px
    }
}
</style>