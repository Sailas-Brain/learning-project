<template>
  <div class="item-banner__slide">
    <img class="item-banner__img" :src="src">
    <div class="item-banner__wrap">
      <div class="item-banner__discription">
        <div class="item-banner__text">
          <p class="item-banner__relation"> {{ relation }} </p>
          <p class="item-banner__game">  {{ game }} </p>
        </div>
        <div class="item-banner__link">
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
  .item-banner {
    width: 100%;
    height: auto;
    margin: 0 auto;

    &__img {
      margin: 0px 8px;
      width: 100%;
      height: 100%;

      @media (max-width: 768px) {
        object-fit: none;
        min-height: 300px;
      }
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

      @media (max-width: 768px) {
        font-size: 26px;
        line-height: 30px;
      }
    }

    &__slide {
      padding-right: 5px;

      @media (max-width: 1300px) {
        padding-right: 15px;
      }
      @media (max-width: 768px) {
        min-height: 300px;
      }
    
    }
  }

</style>
