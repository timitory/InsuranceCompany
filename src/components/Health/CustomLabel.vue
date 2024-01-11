<template>
  <div class="">
    <multiselect
      v-model="value"
      :options="newoptions"
      label="label"
      track-by="user_id"
      :custom-label="labelNames"
      :multiple="true"
      :clear-on-select="false"
      :close-on-select="false"
      :show-no-results="true"
      :hide-selected="false"
      placeholder="Select Dependant"
      class="rounded"
      style="border: 1px solid rgba(209, 213, 219,1)"
      :style="[value.length > 0 ? border : bord]"
      @select="handleSelect"
      @input="handleRemove"
    >
      <!-- affichage du multiselect plié -->
      <template slot="singleLabel" slot-scope="{ option }">
        <strong>{{ option.firstname }}</strong>
        <span style="color: red">&nbsp;{{ option.lastname }}</span>
      </template>
      <!-- affichage des options(multiselect déplié) -->
      <template slot="option" slot-scope="{ option }">
        <div class="option__desc">
          <span class="option__title">
            <strong style="font-weight: normal">{{ option.firstname}} {{ option.lastname }}&nbsp;</strong>
          </span>
        </div>
      </template>
    </multiselect>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
    props:['options'],
  data() {
    return {
      value: [],
      newoptions: [],
      border : {
          borderColor : "rgba(16, 185, 129, 1)"
      },
      bord: {
          borderColor : "rgba(209, 213, 219,1)"
      }
    };
  },
  // computed:{
  //   newoptions(){
  //     return this.options
  //   }
  // },
  methods: {
    haveSameData(obj1, obj2){
        const obj1Length = Object.keys(obj1).length;
        const obj2Length = Object.keys(obj2).length;
        if (obj1Length === obj2Length) {
          return true
        }
        return false;
    },
    //l'affichage des options lorsqu'il n'y a pas de template avec slot=singleLabel ou slot=option
    labelNames({ firstname, lastname }) {
      return `${firstname} ${lastname}`;
    },
    handleSelect(event){
      if (event.firstname === "Select all" && this.value.length == 0) {
        // select all
        for (let item of this.options) {
          if (item.firstname !== "Select all") {
            this.value.push(item);
            //  this.$emit('handle-select', item.value);
          }
        }                
      }
    },
    handleRemove(){
      for(let item of this.value){
        if(item.firstname == "Select all"){
          const index = this.value.indexOf(item)
          this.value.splice(index, 1)
        }
      }
    }
  },
  watch:{
      value(){
        this.$emit('sendValue', this.value)  
      }
  },
  mounted () {
    if(!this.haveSameData(this.newoptions, this.options) || this.newoptions[0].firstname !== 'Select all'){
      this.newoptions = [{firstname: 'Select all', lastname: ''}, ...this.options]
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
