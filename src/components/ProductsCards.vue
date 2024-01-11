<template>
  <div class="mt-12">
   <div class="relative">
    <ul class="horizontalmenu flex justify-between gap-8 lg:gap-5" ref="horizontalmenu">
      <button @click="scrollLeft" class="rightbutt  md:flex lg:flex absolute shadow-lg bg-green-200 opacity-300 hover:opacity-100 rounded-full items-center justify-center" style="width: 70px; height: 70px">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.996 12.5534 27.6251 9.24912 25.188 6.81201C22.7509 4.3749 19.4466 3.00398 16 3ZM18.669 19.7568C18.7666 19.8447 18.846 19.9509 18.9026 20.0694C18.9592 20.1879 18.9919 20.3164 18.9989 20.4476C19.0058 20.5788 18.9868 20.71 18.943 20.8338C18.8992 20.9577 18.8314 21.0716 18.7435 21.1693C18.6557 21.2669 18.5494 21.3463 18.4309 21.4028C18.3123 21.4594 18.1838 21.492 18.0526 21.4989C17.9214 21.5057 17.7902 21.4867 17.6664 21.4428C17.5426 21.3989 17.4286 21.3311 17.3311 21.2432L12.3311 16.7432C12.2269 16.6494 12.1435 16.5348 12.0865 16.4068C12.0295 16.2788 12 16.1402 12 16C12 15.8598 12.0295 15.7212 12.0865 15.5932C12.1435 15.4652 12.2269 15.3506 12.3311 15.2568L17.3311 10.7568C17.4286 10.6689 17.5426 10.6011 17.6664 10.5572C17.7902 10.5133 17.9214 10.4943 18.0526 10.5011C18.1838 10.508 18.3123 10.5406 18.4309 10.5972C18.5494 10.6537 18.6557 10.7331 18.7435 10.8307C18.8314 10.9284 18.8992 11.0423 18.943 11.1662C18.9868 11.29 19.0058 11.4212 18.9989 11.5524C18.9919 11.6836 18.9592 11.8121 18.9026 11.9306C18.846 12.0491 18.7666 12.1553 18.669 12.2432L14.4951 16L18.669 19.7568Z" fill="#219653"/>
                    </svg>
        
      </button>
      <li class="rounded tile">
        <div class="bg-white px-6 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Health Insurance</p>
          <img src="../assets/images/menu/healthcard.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-6 mt-4">{{healthtext | slicer}} <span class="block text-blue-500 underline cursor-pointer" @click="showModal(1)">read more</span></p>
          <router-link to="/app/dashboard/managehealth" class=" block mt-10 text-green-500 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</router-link>
          <router-link to="/app/dashboard/buyhealth/1" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link>
        </div>
      </li>
      <li class="rounded tile">
        <div class="bg-white px-6 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Vehicle Insurance</p>
          <img src="../assets/images/menu/vehiclecard.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-6 mt-4">{{vehicletext | slicer}} <span class="block text-blue-500 underline cursor-pointer" @click="showModal(2)">read more</span></p>
          <div v-if="!$store.state.user.has_address" class="relative" @mouseover="showInfo = true" @mouseleave="showInfo = false" @click="showInfo = !showInfo">
            <p class=" block mt-10 text-green-500 opacity-30 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</p>
            <p class="block mt-4 bg-green-500 opacity-30 font-bold text-white rounded px-4 py-2 ">Buy </p>
            <div v-if="showInfo" class="bg-white text-sm rounded absolute py-4 px-4 left-0 top-6 showInfo shadow-md" style="width: 200px">
              <p>Add your home address to buy vehicle insurance</p>
              <p class="text-blue-500 cursor-pointer" @click="addAddress">Add now</p>
            </div>
          </div>
          <div v-else>
            <router-link to="/app/dashboard/managevehicle" class="block mt-10 text-green-500 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</router-link>
            <router-link to="/app/dashboard/buyvehicle/1" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link>
          </div>
        </div>
      </li>
      <li class="rounded tile">
        <div class="bg-white px-6 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Home content</p>
          <img src="../assets/images/menu/homcontentcard.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-6 mt-4">{{hometext | slicer}} <span class="block text-blue-500 underline cursor-pointer" @click="showModal(3)">read more</span></p>
          <router-link to="/app/dashboard/managehome" class=" block mt-10 text-green-500 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</router-link>
          <router-link to="/app/dashboard/buyhome/1" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link>
        </div>
      </li>
      <li class="rounded tile">
        <div class="bg-white px-6 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Gadget Cover</p>
          <img src="../assets/images/menu/gadgetcard.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-6 mt-4">{{gadgettext | slicer}} <span class="block text-blue-500 underline cursor-pointer" @click="showModal(4)">read more</span></p>
          <div class="relative" >
            <router-link to="/gadget/managegadget" class="block mt-10 text-green-500 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</router-link>
          <router-link to="/gadget/buygadget" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link>
            <!-- <p class=" block mt-10 text-green-500 opacity-30 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</p>
            <p class="block mt-4 bg-green-500 opacity-30 font-bold text-white rounded px-4 py-2 ">Coming Soon</p> -->
          </div>
      </div>
      </li>
      <li class="rounded tile">
        <div class="bg-white px-9 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Travel Cover</p>
          <img src="../assets/images/menu/travel.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-9 mt-4">{{traveltext | slicer}} <span class="block text-blue-500 underline cursor-pointer">read more</span></p>
          <div class="relative" >
            
            <router-link to="/app/dashboard/managetravel" class=" block mt-10 text-green-500 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</router-link>
            <router-link to="/app/dashboard/buytravel/1" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link>
          <!-- <p class=" block mt-10 text-green-500 opacity-30 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</p>
            <p class="block mt-4 bg-green-500 opacity-30 font-bold text-white rounded px-4 py-2 ">Coming Soon</p> -->
          </div> 
        </div>
      </li>

      <li class="rounded tile">
        <div class="bg-white px-9 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Pet Cover</p>
          <img src="../assets/images/menu/pet.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-9 mt-4">{{pettext | slicer}} <span class="block text-blue-500 underline cursor-pointer">read more</span></p>
          <div class="relative" >
            <!-- <br/>
            <br/> -->
          
          <!-- <p class=" block mt-10 text-green-500 opacity-30 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</p>
          <p class="block mt-4 bg-green-500 opacity-30 font-bold text-white rounded px-4 py-2 ">Coming Soon</p> -->
          <router-link to="/pet/managepet" class="block mt-10 text-green-500 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</router-link>
          <router-link to="/pet/buypet" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link>
          </div>
        </div>
      </li>

      <li class="rounded tile">
        <div class="bg-white px-9 py-3 lg:py-6 lg:px-8 text-center rounded">
          <p class="font-bold text-lg">Welfare Cover</p>
          <img src="../assets/images/menu/customercover.svg" alt="" class="mt-4 mx-auto w-3/5 lg:w-full img" >
          <p class="mb-9 mt-4">{{welfaretext | slicer}} <span class="block text-blue-500 underline cursor-pointer">read more</span></p>
          <div class="relative" >
            <!-- <br/>
            <br/> -->
            <!-- <router-link to="/app/dashboard/managetravel" class=" block mt-13 mb-3 text-green-500 font-bold   px-4 py-2"></router-link> -->
          <!-- <router-link to="/app/dashboard/buytravel/1" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link> -->
          <p class=" block mt-10 text-green-500 opacity-30 font-bold border border-solid border-gray-200 rounded px-4 py-2">Manage Policy</p>
          <p class="block mt-4 bg-green-500 opacity-30 font-bold text-white rounded px-4 py-2 ">Coming Soon</p>
          <!-- <router-link to="/customercover/buycover" class="block mt-4 bg-green-500 font-bold text-white rounded px-4 py-2 ">Buy</router-link> -->
          </div>
        </div>
      </li>
        
    </ul>
    <button @click="scrollRight" class="leftbutt md:flex lg:flex absolute shadow-lg bg-green-300 opacity-300 hover:opacity-100 bg-transparent rounded-full items-center justify-center" style="width: 70px; height: 70px">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.996 12.5534 27.6251 9.24912 25.188 6.81201C22.7509 4.3749 19.4466 3.00398 16 3ZM20.169 16.7432L15.169 21.2432C15.0714 21.3311 14.9574 21.3989 14.8336 21.4428C14.7098 21.4867 14.5786 21.5057 14.4474 21.4989C14.3162 21.492 14.1877 21.4594 14.0692 21.4028C13.9506 21.3463 13.8444 21.2669 13.7565 21.1693C13.6686 21.0716 13.6008 20.9577 13.557 20.8338C13.5132 20.71 13.4942 20.5788 13.5011 20.4476C13.5081 20.3164 13.5408 20.1879 13.5974 20.0694C13.654 19.9509 13.7334 19.8447 13.8311 19.7568L18.0049 16L13.8311 12.2432C13.6341 12.0657 13.5157 11.8173 13.5018 11.5526C13.488 11.2878 13.5798 11.0284 13.7572 10.8314C13.9346 10.6343 14.1829 10.5158 14.4476 10.5018C14.7124 10.4879 14.9718 10.5796 15.169 10.7568L20.169 15.2568C20.2731 15.3506 20.3565 15.4652 20.4135 15.5932C20.4705 15.7212 20.5 15.8598 20.5 16C20.5 16.1402 20.4705 16.2788 20.4135 16.4068C20.3565 16.5348 20.2731 16.6494 20.169 16.7432Z" fill="#219653"/>
                    </svg>
        </button>
  </div>
 
    <p class="mt-6 lg:mt-8 text-sm lg:text-center">It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies</p>
    <AboutHealth v-if="activeModal == 1" v-on:close="closeActiveModal"/>
    <AboutVehicle v-if="activeModal == 2" v-on:close="closeActiveModal"/>
    <AboutHome v-if="activeModal == 3" v-on:close="closeActiveModal"/>
    <AboutGadget v-if="activeModal == 4" v-on:close="closeActiveModal"/>
  
  </div>
</template>

<script>
import AboutHealth from "@/components/Health/AboutModal"
import AboutHome from "@/components/Home/AboutModal"
import AboutVehicle from "@/components/Vehicle/AboutModal"
import AboutGadget from "@/components/Gadget/AboutModal"
import {mapState} from "vuex"
export default {
  components:{
    AboutHealth, AboutHome, AboutGadget, AboutVehicle
  },
  data(){
    return {
      showInfo: false,
      showList1: false,
      activeModal: 0,
      vehicletext: "For insurance on vehicles ranging from full repairs, third-party repair, outright replacement",
      healthtext: "For insurance on healthcare ranging from Surgeries, Therapy, Dentals amongst others",
      gadgettext: "For insurance on gadgets ranging from Repairs, Refurbishing,  amongst others",
      traveltext: "For insurance on your travel ranging from Repairs, Refurbishing,  amongst others",
      pettext: "For insurance on pets ranging from Health, Life,  amongst others",
      welfaretext: "For insurance on customer welfare ranging from Repairs, Refurbishing,  amongst others",
      hometext: "Home Insurance protects you financially in the event that your home and property are damaged as a result of a burglary or fire outbreak. It is designed essentially for those living in rented apartments to cover their contents only against loss as a result of burglary, fire & special peril.Home Insurance protects you financially in the event that your home and property are damaged as a result of a burglary or fire outbreak. It is designed essentially for those living in rented apartments to cover their contents only against loss as a result of burglary, fire & special peril.",
    }
  },
  computed:{
    ...mapState({
      user : state => state.user
    })
  },
  methods:{
    scrollRight(){
            this.$refs.horizontalmenu.scrollLeft += 250
        },
        scrollLeft(){
            this.$refs.horizontalmenu.scrollLeft -= 250
        },
    showModal(num){
      this.activeModal = num;
      this.$store.commit('setActiveModal', num)
    },
    closeActiveModal(){
      this.activeModal = 0;
      this.$store.commit('setActiveModal', 0)
    },
    // to keep track of where the user is coming from in orderto redirect them back
    addAddress(){
      this.$store.commit('addAddress', true)
      this.$router.push("/app/dashboard/settings")
    }
  },
  filters:{
    slicer(val){
      return val.slice(0, 40) + '...'
    }
  },
  
}
</script>


<style scoped>
.leftbutt, .rightbutt {
  animation: bounce 0.5s infinite alternate;
  /* Other styles for your button go here */
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.horizontalmenu::-webkit-scrollbar{
    height: 0
}
.horizontalmenu{
    scroll-behavior: smooth;
}
.showInfo{
    z-index: 100000
  }
ul{
  flex-wrap: nowrap;
  overflow-x: auto;
}

.tile{
  flex: 0 0 auto;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 250px;
  box-shadow: 0 20px 33px #00000029;
  /* z-index: 100 */
}
  ul li{
    margin-bottom: 20px
  }
ul::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

ul::-webkit-scrollbar
{
  margin-top: 20px;
  height: 2px;
  background-color: #F5F5F5;
}

ul::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #14801B;
}
.tile img{
  height: 100px;
}
@media only screen and (min-width: 1280px){
  .tile img{
    width: 120px;
    height: 100px
  }
  ul{
    display: flex;
    overflow-x: hidden;
    justify-content: space-between;
    box-shadow: 0 20px 33px #00000029;
  }
  .tile{
    flex: 0 0 25%;
    margin-left: 0;
    margin-right: 0;
    display: inline-block;
    /* width: 20%; */
    /* margin: 3% */
    
  }
  .tile img{
    width: 100px;
    height: 100px
    /* height: 162px */
  }
 
}

@media only screen and (min-width: 1024px){
  .leftbutt{
        top: 50%;
        transform: translateY(-50%);
        right: -40px
    }

    .rightbutt{
        top: 50%;
        transform: translateY(-50%);
        left: -40px
    }
}

@media only screen and (min-width: 350px){
  .leftbutt{
        top: 50%;
        transform: translateY(-50%);
        right: -40px
    }

    .rightbutt{
        top: 50%;
        transform: translateY(-50%);
        left: -40px
    }
}

@media only screen and (min-width: 480px){
  .leftbutt{
        top: 50%;
        transform: translateY(-50%);
        right: -40px
    }

    .rightbutt{
        top: 50%;
        transform: translateY(-50%);
        left: -40px
    }
}

@media only screen and (min-width: 768px){
  .leftbutt{
        top: 50%;
        transform: translateY(-50%);
        right: -40px
    }

    .rightbutt{
        top: 50%;
        transform: translateY(-50%);
        left: -40px
    }
}
</style>