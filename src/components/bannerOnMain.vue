<template>
  <div class="banner">
    <splide :options="options">
    <splide-slide>
      <img class="banner-img" src="@/assets/images/Rectangle 13.jpg">
      <div class="banner-wrap">
        <div class="banner-discription">
          <div class="banner-text">
            <p class="banner-relation">Самая популярная карточная игра</p>
            <p class="banner-game">Magic: the Gathering</p>
          </div>
          <div class="banner-link">
            <link-button class="banner-more" href="#">Подробнее</link-button>
          </div>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <img class="banner-img" src="@/assets/images/Rectangle 13.jpg">
      <div class="banner-wrap">
        <div class="banner-discription">
          <div class="banner-text">
            <p class="banner-relation">Самая популярная карточная игра</p>
            <p class="banner-game">Magic: the Gathering</p>
          </div>
          <div class="banner-link">
            <link-button class="banner-more" href="#">Подробнее</link-button>
          </div>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <img class="banner-img" src="@/assets/images/Rectangle 13.jpg">
      <div class="banner-wrap">
        <div class="banner-discription">
          <div class="banner-text">
            <p class="banner-relation">Самая популярная карточная игра</p>
            <p class="banner-game">Magic: the Gathering</p>
          </div>
          <div class="banner-link">
            <link-button class="banner-more" href="#">Подробнее</link-button>
          </div>
        </div>
      </div>
    </splide-slide>
  </splide>
  </div>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import LinkButton from './ui/LinkButton.vue';

export default {
  components: {
    Splide,
    SplideSlide,
    LinkButton
  },
  data() {
      return {
        options: {
          rewind : true,
          width  : 1600,
          gap    : '1rem',
          type   : 'loop',
          padding: '20%',
          pagination: false
        },
      };
    },
}

</script>

<style lang="scss" >
  .banner {
    max-width: 1600px;
  }

  .splide__arrow {
    top: 160px;
  }

  .banner-img {
    margin: 0px 8px;
  }

  .banner-wrap {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .banner-discription {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    align-items: center;
  }

  .banner-relation {
    margin: 0;
    font-family: "trebuchetms";
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
  }

  .banner-game {
    margin-top: 0;
    font-family: "trebuchetms";
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #FFFFFF;
  }

  .btn {
    width: 136.24px;
    height: 31.79px;
  }



</style>