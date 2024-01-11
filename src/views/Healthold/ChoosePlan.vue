<template>
  <div class="mt-8">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-semibold">Choose your preferred Insurance provider?</p>
        <div class="mt-8 box">
          <label v-for="(item, index) in underwriters" :key="index" class="container border border-gray-300 text-lg border-solid" :class="[item.id !== 1 ? 'opacity-50' : '']">
            <p v-if="item.id == 1" class="name">Consolidated Hallmark Insurance</p>
            <p v-else-if="item.id == 2" class="name">AIICO Insurance</p>
            <p v-else-if="item.id == 3" class="name">FBN Insurance</p>
            <input type="radio" v-model="underwriter" :value="item.id" :disabled="item.id !== 1">
            <span class="checkmark"></span>
            <span class="tooltiptext text-sm shadow" v-if="item.id !== 1">{{item.name}} is coming soon</span>
          </label>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
export default {
  components: {
    
  },
  data(){
    return {
      underwriter: '',
    }
  },
  computed:{
    ...mapState({
      underwriters: state => state.underwriters,
    })
  },
  watch:{
    underwriter(){
      if(this.underwriter !== ''){
        this.$store.commit('setUnderwriterId', this.underwriter)
        this.$router.push('/app/dashboard/buyhealth/2')
      }
    }
  },
  methods: {
    getUnderwriters(){
      axios.get(`${baseURL}/underwriter`)
      .then(res=>{
        this.$store.commit('setUnderwriters', res.data.data)
      })
      .catch(err=>{
        this.$store.dispatch('handleError', err)
      })
    }
  },
    mounted(){
        if(this.underwriters.length == 0){
            this.getUnderwriters()
        }
    }
}
</script>

<style scoped>
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
  background-color:#00A859;
  opacity: 0.2
}


/* When the checkbox is checked, add a green background */
.container input:checked ~ .checkmark {
  background-color:#00A859;
  opacity: 1
}

/* Create the checkmark/indicator (faded when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
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
}
.tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  opacity: 1;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.container:hover .tooltiptext {
  visibility: visible;
}
.name{
  font-size: 0.8em;
  max-width: 200px
}
@media only screen and (min-width: 768px){
  .name{
    max-width: none;
  }
}
@media only screen and (min-width: 1024px){
  .box{
    max-width: 600px;
  }
 
}
</style>