<template>
  <div class="text-darker font-medium text-2xl">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
    name: 'demo',
    components: {
      ICountUp
    },
    data() {
      return {
        delay: 1000,
        endVal: 98.32,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '%'
        }
      };
    },
    methods: {
      onReady: function(instance) {
        const that = this;
        instance.update(that.endVal + 0.5);
      }
    }
  };
</script>

<style scoped>
  
</style>