<template>
  <div>
    <div class="mt-8" v-if='coverform === 1'>
      <div class="lg:w-3/4 lg:mx-auto">
        <p class="font-semibold">Who's this policy for?</p>
        <form @submit.prevent="validate">
          <div class="mt-4 lg:flex lg:justify-between ">
            <div class="lg:w-full lg:mr-4">
              <label class="container border border-solid"
                v-bind:class="[user.includes(self) ? 'border-green-500' : 'border-gray-300']">Myself ({{ self.firstname }}
                {{ self.lastname }})
                <input type="checkbox" v-model="user" :value="self">
                <span class="checkmark"></span>
              </label>
              <p class="mt-6 text-sm hidden lg:block" v-if="$store.state.dependants.length < 1">Once a user has been
                selected, you can continue by clicking the <span class="text-green-500">“Proceed for a plan”</span> button
              </p>
              <p class="mt-6 text-sm hidden lg:block" v-else>You currently have more than one dependent, you can select
                one of them, then proceed to buy policies for them by clicking the <span class="text-green-500">“Proceed
                  for a plan”</span> button</p>
            </div>
            <div class="lg:w-full lg:ml-4 mt-6 lg:mt-0">
              <div class="border border-solid px-2 relative"
                :class="[others.hasOwnProperty('firstname') ? 'border-green-500' : 'border-gray-300']"
                style="padding: 10px">
                <select class="outline-none w-full cursor-pointer" v-model="others">
                  <option selected disabled :value="{}">Others (Choose dependant)</option>
                  <option v-for="dependant in dependants" :key="dependant.id" :value="dependant">{{ dependant.firstname }}
                    {{ dependant.lastname }}</option>
                </select>
              </div>
              <p class="mt-6 text-sm lg:hidden" v-if="$store.state.dependants.length < 1">Once a user has been added, you
                can continue by clicking the <span class="text-green-500">“Proceed for a plan”</span> button</p>
              <p class="mt-6 text-sm lg:hidden" v-else>You currently have more than one dependent, you can select one of
                them, then proceed to buy policies for them by clicking the <span class="text-green-500">“Proceed for a
                  plan”</span> button</p>
              <div class="mt-4 flex justify-between items-center">
                <!-- <button type="button" class="block text-sm cursor-pointer" @click="buyMultiple">
                  <font-awesome-icon icon="user-plus" class="text-green-500" />
                  Buy for Many(corporate)
                </button> -->
                <button type="button" class="block text-sm cursor-pointer" @click="showAddDependant">
                  <font-awesome-icon icon="user-plus" class="text-green-500" />
                  Add user
                </button>
              </div>
            </div>
          </div>
          <div class="hidden lg:block mt-10">
            <button class="block w-full text-green-500 text-right focus:outline-none" v-if="beneficiaryAdded">
              Proceed for a plan
              <font-awesome-icon icon="arrow-right" class="text-green-500" />
            </button>
            <p class="text-green-500 text-right opacity-20" v-else>Proceed for a plan <font-awesome-icon
                icon="arrow-right" class="ml-2 text-green-500" /></p>
          </div>
          <div class="block lg:hidden mt-10">
            <button class=" block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden focus:outline-none"
              v-if="beneficiaryAdded">
              Proceed for a plan
              <font-awesome-icon icon="arrow-right" class="ml-3" />
            </button>
            <p class="bg-green-500 text-white py-3 text-center rounded opacity-20" v-else>Proceed for a plan
              <font-awesome-icon icon="arrow-right" class="ml-2" /></p>
          </div>
        </form>
        <AddDependent v-if="addDependent" v-on:close="closeModal" />
      </div>
    </div>
    <CoverProvider v-else-if="coverform === 2" />
    <CoverForm v-else-if="coverform === 3" />
  </div>
</template>
  
<script>
import AddDependent from '@/components/AddDependant/AddDependentModal'
import CoverProvider from '@/components/Cover/CoverProvider.vue'
import CoverForm from '@/components/Cover/CoverForm.vue'
import { mapState } from 'vuex'
// import axios from 'axios'
// import baseURL from "@/main"

export default {
  components: {
    AddDependent,
    CoverProvider,
    CoverForm
  },
  data() {
    return {
      user: [],
      others: {},
      beneficiaryAdded: false,
      addDependent: false,
      form: 1
    }
  },
  watch: {
    user() {
      if (this.user.length > 0) {
        this.beneficiaryAdded = true
        this.others = {}
      } else if (this.user.length < 1 && !this.others.firstname) {
        this.beneficiaryAdded = false
      }
    },
    others() {
      if (this.others.firstname) {
        this.user = []
        this.beneficiaryAdded = true
      } else if (this.user.length < 1 && !this.others.firstname) {
        this.beneficiaryAdded = false
      }
    },

  },
  computed: {
    ...mapState({
      dependants: state => state.dependants,
      self: state => state.user,
      coverform: state => state.coverform
    })
  },
  methods: {
    validate() {
      if (this.user.length > 0) {
        this.$store.commit('setBeneficiary', this.user[0])
        this.$store.commit('setBeneficiaryType', 'single')
        this.$store.commit('setCoverForm', 2)
        // this.$router.push('/app/dashboard/buyhealth/choose')
        // this.form = 2
      } else {
        this.$store.commit('setBeneficiary', this.others)
        this.$store.commit('setBeneficiaryType', 'single')
        this.$router.push('/app/dashboard/buyhealth/choose')
      }
    },
    buyMultiple() {
      this.$store.commit('setBeneficiaryType', 'multiple')
      this.$router.push('/app/dashboard/buyhealth/choose')
    },
    showAddDependant() {
      this.addDependent = true;
      this.$store.commit('setActiveModal', 1)
    },
    closeModal() {
      this.addDependent = false;
      this.$store.commit('setActiveModal', 0)
    },
  },
  mounted() {
    this.$store.commit('setActiveModal', 0)
  }
}
</script>
  
<style>
/* The container */
.container {
  display: block;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  opacity: 0.2;
  background-color: #00A859;
}


/* When the checkbox is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: #00A859;
  opacity: 1
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
}

/* Show the checkmark when checked */
.container input:checked~.checkmark:after {
  display: block;
}

/* Show the checkmark even when not checked */
.container input~.checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 7px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}</style>