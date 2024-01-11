<template>
  <div class="star-rating">
    <label class="star-rating__star" v-for="rating in ratings" v-bind:key="rating.index"
      :class="{ 'is-selected': ((temp_value >= rating) && temp_value != null), 'is-disabled': disabled }" v-on:click="set(rating)"
      v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
      <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" v-model="temp_value"
        :disabled="disabled">★</label>
  </div>
</template>
  
<script>
export default {
  props: {
    'name': String,
    'value': null,
    'id': String,
    'disabled': Boolean,
    'required': Boolean
  },

  data: function () {
    return {
      temp_value: null,
      temp_value2: null,
      
      ratings: [1, 2, 3, 4, 5]
    };
  },
  mounted() {
    this.temp_value = this.value
  },
  computed: {
    // ...mapState({
    //   rating: state => state.vehicleQuote,
    // })
  },
    methods: {
      star_over: function(index) {

      if (!this.disabled) {
         this.temp_value = index;
      }

    },

    star_out: function() {
      // var self = this;
      // console.log("Moved out");
      if (!this.disabled) {
        this.temp_value = this.temp_value2;
      }
    },

    set: function(rating) {
      if (!this.disabled) {
        this.temp_value = rating;
        this.temp_value2 = rating;
        console.log(this.temp_value);
        this.$store.commit('setRating', this.temp_value)

      }
    }
  }
}
</script>
  
  
<style scoped>
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.5em;
  color: white;
  transition: color 0.2s ease-out;
  -webkit-text-stroke: 0.5px #BEBEBE;
  /* text-stroke: 0.5px #BEBEBE; */
}

.star-rating__star:hover {
  cursor: pointer;
}

.star-rating__star.is-selected {
  color: rgba(34, 197, 94, 1);
}

.star-rating__star.is-disabled:hover {
  cursor: default;
}</style>