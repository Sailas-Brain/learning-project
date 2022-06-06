<template>
  <div class="slider-card">
    <splide :options="options">
      <slot></slot>
    </splide>
  </div>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';


export default {

  props: {
    options: {
      tyre: Object,
      default: {}
    },
  },

  components: {
    Splide,
    SplideSlide,
    
  }
}

</script>

<style lang="scss" scoped>

  .slider-card {
    max-width: 1110px;
    margin: 0 auto;
  } 

</style>