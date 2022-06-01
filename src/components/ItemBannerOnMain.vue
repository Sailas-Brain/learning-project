<template>
  <div class="banner__slide">
    <img class="banner__img" :src="src">
    <div class="banner__wrap">
      <div class="banner__discription">
        <div class="banner__text">
          <p class="banner__relation"> {{ relation }} </p>
          <p class="banner__game">  {{ game }} </p>
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
  </div>
</template>

<script>

export default {
  props: {
    index: {
      type: Number,
      default: 1
    },
    src: {
      type: String,
      default: ''
    },
    relation: {
      type: String,
      default: ''
    },
    game: {
      type: String,
      default: ''
    },
  }
}

</script>

<style lang="scss" scoped>
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
