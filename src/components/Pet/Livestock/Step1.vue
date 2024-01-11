<template>
  <form class="mt-6" @submit.prevent="callnext">
    <p class="text-green-500">SECTION 1: PERSONAL DETAILS OF PROPOSER</p>
    <div class="mt-4 lg:flex">
      <div class="lg:w-full lg:mr-3">
        <div class="lg:flex"></div>
        <div class="mt-4 lg:flex">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">NAME (FIRST, SURNAME) </label>
            <input
                :value="this.userdata.user?.name"
                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" readonly/>
          </div>
          <div class="lg:w-full lg:ml-3 lg:mr-3">
            <label class="text-sm font-bold">E-MAIL ADDRESS:</label>
            <input
                :value="this.userdata.user?.email"
                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" readonly/>
          </div>
          <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
            <label class="text-sm font-bold">TEL</label>
            <input :value="this.userdata.user?.telephone" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                   readonly
                   required/>
          </div>
        </div>
        <div class="mt-4 lg:flex">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">ADDRESS</label>
            <input :value="this.userdata.user?.address" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                   placeholder=""
                   readonly required/>
          </div>
          <div class="lg:w-full lg:ml-3 lg:mr-3">
            <label class="text-sm font-bold">MEANS OF IDENTIFICATION</label>
            <input :value="this.userdata.user?.idtype" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                   placeholder=""
                   readonly required/>
          </div>
          <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
            <label class="text-sm font-bold">IDENTITY NUMBER</label>
            <input :value="this.userdata.user?.idnumber" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                   readonly
                   required/>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-6">
      <hr/>
      <p class="text-green-500 pt-3">SECTION 2: INFORMATION ON ANIMALS</p>
      <div class="mt-4 lg:flex">
        <div class="lg:w-full lg:mr-3">
          <div class="lg:flex"></div>
          <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Total Number of Pet</label>
              <input v-model="updatedata.total_animal"
                     class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                     placeholder="" required/>
            </div>
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold"> Total Number of Pens</label>
              <input v-model="updatedata.total_pens"
                     class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                     placeholder="" required/>
            </div>
            <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
              <label class="text-sm font-bold">Date of Stocking</label>
              <input v-model="updatedata.stocking_date" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                     required
                     type="date"/>
            </div>
          </div>
          <div class="mt-4 lg:flex">
          </div>
          <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Age of Pet</label>
              <input v-model="updatedata.animal_age"
                     class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                     placeholder="" required/>
            </div>
            <div class="lg:w-full lg:ml-3 lg:mr-3">
              <label class="text-sm font-bold">Source of Pet</label>
              <select v-model="updatedata.animal_source" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      required>
                <option>Breeding</option>
                <option>Purchase</option>
                <option>Birth</option>
              </select>
            </div>
            <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
              <label class="text-sm font-bold">Purpose of Pet</label>
              <select v-model="updatedata.animal_purpose"
                      class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                <option>Breeding</option>
                <option>Security</option>
                <option>Meat Production</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">Pet Location</label>
              <input v-model="updatedata.location_of_pet"
                     class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                     placeholder="" required/>
            </div>
            <div v-if="updatedata.animal_purpose === 'Others'" class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold">If Others Specify</label>
              <input v-model="updatedata.animal_purpose"
                     class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                     placeholder="" required/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-6">
      <hr/>
      <p class="text-green-500 pt-3">SECTION 3: VETERINARY PERSONNEL & MEDICATION</p>
      <div class="mt-4 lg:flex">
        <div class="lg:w-full lg:mr-3">
          <div class="lg:flex"></div>
          <div class="mt-4 lg:flex">
            <div class="lg:w-full lg:mr-3">
              <label class="text-sm font-bold"> Is there a qualified Vet Doctor that look after the
                animals?</label>
              <select v-model="updatedata.is_doctor_qualfied"
                      class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                <option :value=true>Yes</option>
                <option :value=false>No</option>
              </select>
            </div>
          </div>
          <div v-if="updatedata.is_doctor_qualfied === true">
            <p class="mt-4">
              If Yes
            </p>
            <div class="mt-4 lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Name</label>
                <input v-model="updatedata.doctor_name"
                       class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                       placeholder=""/>
              </div>
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Qualification</label>
                <input v-model="updatedata.doctor_qualification"
                       class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                       placeholder=""/>
              </div>
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">VCN No</label>
                <input v-model="updatedata.doctor_vcn_no"
                       class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                       placeholder=""/>
              </div>
              <!--                            <div class="lg:w-full lg:ml-3 lg:mr-3">-->
              <!--                                <label class="text-sm font-bold">Year of Graduation</label>-->
              <!--                                <input v-model="updatedata.doctor_grad_year"-->
              <!--                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
              <!--                                    placeholder=""  />-->
              <!--                            </div>-->
            </div>
            <div class="mt-4 lg:flex">

              <!--                            <div class="lg:w-full lg:mr-3">-->
              <!--                                <label class="text-sm font-bold">If Qualified Veterinary Doctor is not employed, then on-->
              <!--                                    whose service do you depend on?</label>-->
              <!--                                <input v-model="updatedata.dotor_service"-->
              <!--                                    class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
              <!--                                    placeholder=""  />-->
              <!--                            </div>-->
              <div class="lg:w-full  lg:mr-3">
                <label class="text-sm font-bold">Give details of vaccinations and or medication administered
                  in the last six months</label>
                <input v-model="updatedata.doctor_vaccination_details"
                       class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                       placeholder=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--        <div class="pt-6">-->
    <!--            <hr />-->
    <!--            <p class="text-green-500 pt-3">SECTION 2: LOCATION OF ANIMAL</p>-->
    <!--            <div class="mt-4 lg:flex">-->
    <!--                <div class="lg:w-full lg:mr-3">-->
    <!--                    <div class="lg:flex"></div>-->
    <!--                    <div class="mt-4 lg:flex">-->
    <!--                        <div class="lg:w-full lg:mr-3">-->
    <!--                            <label class="text-sm font-bold">Village/Town</label>-->
    <!--                            <input v-model="updatedata.village"-->
    <!--                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
    <!--                                placeholder="" required />-->
    <!--                        </div>-->
    <!--                        <div class="lg:w-full lg:ml-3 lg:mr-3">-->
    <!--                            <label class="text-sm font-bold">District/Community</label>-->
    <!--                            <input  v-model="updatedata.district"-->
    <!--                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
    <!--                                placeholder="" required />-->
    <!--                        </div>-->
    <!--                        <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">-->
    <!--                            <label class="text-sm font-bold">LGA</label>-->
    <!--                            <input  v-model="updatedata.lga"-->
    <!--                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
    <!--                                required />-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                    <div class="mt-4 lg:flex">-->
    <!--                        <div class="lg:w-full lg:mr-3">-->
    <!--                            <label class="text-sm font-bold">State</label>-->
    <!--                            <input  v-model="updatedata.state"-->
    <!--                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
    <!--                                placeholder="" required />-->
    <!--                        </div>-->
    <!--                        <div class="lg:w-full lg:ml-3 lg:mr-3">-->
    <!--                            <label class="text-sm font-bold">Total Land Area of Farm</label>-->
    <!--                            <input  v-model="updatedata.total_farm_area"-->
    <!--                                class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"-->
    <!--                                placeholder="" required />-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <div class="hidden lg:flex justify-between mt-10">
<!--      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">-->
<!--        <a class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center" @click="previous">-->
<!--          <font-awesome-icon class="mr-8" icon="arrow-left"/>-->
<!--          Back-->
<!--        </a>-->
<!--      </button>-->
      <button class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none"
              @click="callnext">
        Next
        <font-awesome-icon class="ml-3" icon="arrow-right"/>
      </button>
    </div>
    <div class="block lg:hidden mt-10">
      <button class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none"
              @click="callnext">
        Next
        <font-awesome-icon class="ml-3" icon="arrow-right"/>
      </button>
<!--      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">-->
<!--        <router-link class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center"-->
<!--                     @click="previous">-->
<!--          <font-awesome-icon class="mr-8" icon="arrow-left"/>-->
<!--          Back-->
<!--        </router-link>-->
<!--      </button>-->
    </div>
  </form>
</template>

<script>
//import {Money} from 'v-money'
import {mapState} from "vuex";
// import axios from 'axios'
// import baseURL from "@/main"
export default {
  components: {
    //Money
  },
  data() {
    return {};
  },
  props: ["page", "next", "steps", "back", "updatedata"],
  methods: {
    callnext() {
      this.next(this.steps);
    },
    previous() {
      this.back(this.steps)
    }
  },
  watch: {},
  computed: {
    ...mapState({
      beneficiary: (state) => state.beneficiary,
      underwriterId: (state) => state.underwriter_id,
      userdata: (state) => state.userdata
    }),
  },
  mounted() {
    console.log(this.userdata);

  },
};
</script>

<style scoped>
input,
select,
.input {
  background-color: #e2f5ec;
}

.fileinput {
  background-color: #fff;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 10px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ccc;
  border-radius: 50%;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

@media only screen and (min-width: 1024px) {
  .platebox {
    width: 193px;
  }
}
</style>
