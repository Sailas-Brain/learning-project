<template>
  <div class="banner">
    <splide :options="options">
      <slot></slot>
    </splide>
  </div>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import LinkButton from './LinkButton.vue';

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
    LinkButton,
  }
}

</script>

<style lang="scss" >

  .splide__arrow {
    top: 160px;
  }

</style>