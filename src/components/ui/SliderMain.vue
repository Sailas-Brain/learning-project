<template>
  <div class="banner" :class="newClass">
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
    newClass: {
      type: String,
      default: ''
    }
  },

  components: {
    Splide,
    SplideSlide,
    LinkButton,
  },

  mounted() {

    console.log("options", this.options);

  }
}

</script>

<style lang="scss">

  .splide__arrow {
    top: 160px;
  }

  .item-banner {
     
    .splide__pagination__page {
      width: 23px;
      height: 3px;
      border-radius: 9px;
      margin: 0 9px;
    }
  }

  .card {
    max-width: 1100px;
    margin: 0 auto !important;
    padding-bottom: 20px !important;

    .splide__pagination__page {
      background: #fff;
      width: 23px;
      height: 3px;
      border-radius: 9px;
      margin: 0 9px;
      &.is-active {
        background:  $--color-active;
      }
    }

    .splide__arrow--prev {
      left: -3em;
      background: none;
    }

    .splide__arrow--next {
      right: -3em;
      background: none;
    }

    .splide__pagination {
      bottom: -25px;
    }

  }

</style>