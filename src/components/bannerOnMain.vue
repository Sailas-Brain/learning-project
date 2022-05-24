<template>
  <div class="banner">
    <splide :options="options">
    <splide-slide>
      <img class="banner__img" src="@/assets/images/Rectangle 13.jpg">
      <div class="banner__wrap">
        <div class="banner__discription">
          <div class="banner__text">
            <p class="banner__relation">Самая популярная карточная игра</p>
            <p class="banner__game">Magic: the Gathering</p>
          </div>
          <div class="banner__link">
            <link-button class="banner__more" href="#">Подробнее</link-button>
          </div>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <img class="banner__img" src="@/assets/images/Rectangle 13.jpg">
      <div class="banner__wrap">
        <div class="banner__discription">
          <div class="banner__text">
            <p class="banner__relation">Самая популярная карточная игра</p>
            <p class="banner__game">Magic: the Gathering</p>
          </div>
          <div class="banner__link">
            <link-button class="banner__more" href="#">Подробнее</link-button>
          </div>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <img class="banner__img" src="@/assets/images/Rectangle 13.jpg">
      <div class="banner__wrap">
        <div class="banner__discription">
          <div class="banner__text">
            <p class="banner__relation">Самая популярная карточная игра</p>
            <p class="banner__game">Magic: the Gathering</p>
          </div>
          <div class="banner__link">
            <link-button class="banner__more" href="#">Подробнее</link-button>
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
        width  : '100%',
        gap    : '1rem',
        type   : 'loop',
        padding: '20%',
        pagination: false,
        breakpoints: {
          1300: {
            padding: 0,
            perPage: 1,
          },
        },
      }
    }
  }
}

</script>

<style lang="scss" >


  .splide__arrow {
    top: 160px;
  }

  .banner {
    width: 100%;
    margin: 0 auto;

    &__img {
      margin: 0px 8px;
      width: 100%;
    }

    &__wrap {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    &__discription {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 90%;
      margin: auto;
      align-items: center;
    }

    &__relation {
      margin: 0;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
    }

    &__game {
      margin-top: 0;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 28px;
      line-height: 33px;
      color: #FFFFFF;
    }



  }





</style>