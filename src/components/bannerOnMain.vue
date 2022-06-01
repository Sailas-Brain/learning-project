<template>
  <div class="banner">
    <splide :options="options">
    <splide-slide class="banner__slide">
      <img class="banner__img" src="@/assets/images/magic-cathering_banner.jpg">
      <div class="banner__wrap">
        <div class="banner__discription">
          <div class="banner__text">
            <p class="banner__relation">Самая популярная карточная игра</p>
            <p class="banner__game">Magic: the Gathering</p>
          </div>
          <div class="banner__link">
            <link-button
              :addClass="true"
              :link="true"
            >
            Подробнее
          </link-button>
          </div>
        </div>
      </div>
    </splide-slide>

    <splide-slide class="banner__slide">
      <img class="banner__img" src="@/assets/images/magic-cathering_banner.jpg">
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

    <splide-slide class="banner__slide">
      <img class="banner__img" src="@/assets/images/magic-cathering_banner.jpg">
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
        // gap    : '1rem',
        type   : 'loop',
        padding: '20%',
        pagination: false,
        breakpoints: {
          1300: {
            padding: 0,
            perPage: 1,
          },
          768: {
            arrows: false,
            pagination: true,
          }
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
      margin-bottom: 30px;
      align-items: center;

      @media (max-width: 768px) {
        display: block;
      }
    }

    &__relation {
      margin: 0;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: $--color-white;
    }

    &__game {
      margin-top: 0;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 28px;
      line-height: 33px;
      color: $--color-white;
    }

    &__slide {
      padding-right: 5px;

      @media (max-width: 1300px) {
        padding-right: 15px;
      }
    
    }

    .splide__pagination__page {
      width: 23px;
      height: 3px;
      border-radius: 9px;
      margin: 0 9px;
    }

  }





</style>