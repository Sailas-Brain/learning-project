<template>
  <div class="catalog">
    <h2 class="catalog__title">Каталог</h2>
    <div class="catalog__wrapper">
      <div class="catalog__inner catalog__inner--one">
        <img src="@/assets/images/tabel-games_catalog.jpg" alt="">
        <div class="catalog__category">
          <p>Настольные игры</p>
        </div>
      </div>
      <div class="catalog__inner catalog__inner--two">
        <img src="@/assets/images/wargames_catalog.jpg" alt="">
        <div class="catalog__category">
          <p>Варгеймы</p>
        </div>
      </div>
      <div class="catalog__inner catalog__inner--three">
        <img src="@/assets/images/paints_catalog.jpg" alt="">
        <div class="catalog__category">
          <p>Краски</p>
        </div>
      </div>
      <div class="catalog__inner catalog__inner--four">
        <img src="@/assets/images/magic-cathering_catalog.jpg" alt="">
        <div class="catalog__category">
          <p>Magic:the Cathering</p>
        </div>
      </div>
      <div class="catalog__inner catalog__inner--five">
        <img src="@/assets/images/all-catalog_catalog.jpg" alt="">
        <div class="catalog__category">
          <p>Весь каталог</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'catalog-on-main'
  }
  
</script>

<style lang="scss" scoped>

  .catalog {
    max-width: 1110px;
    margin: 0 auto;
    margin-top: 45px;
    box-sizing: border-box;

    &__title {
      @include title-h2 ();
      margin-bottom: 22px;
      margin-top: 0;

      @media (max-width: 1160px) {
        margin: 0 20px;
        margin-bottom: 22px;
      }
    }

    &__wrapper {
      box-sizing: border-box;
      display: grid;
      grid-auto-flow: column;
      grid-template-areas: "a a b c" "a a d e";
      grid-gap: 20px;
      grid-row-gap: 1em;
      margin: 0 20px;

      @media (max-width: 900px) {
        grid-template-areas: "a a" "b c" "d e";
        margin: 0 20px;
      }
      @media (max-width: 600px) {
        display: block;
      }
    }

    &__inner {
      position: relative;
      height: auto;
      filter: drop-shadow(5px 6px 16px rgba(42, 42, 42, 0.16));

      @media (max-width: 600px) {
        margin: 20px 0;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 9px;
      }

      &--one {
        grid-area: a;
      }

      &--two {
        grid-area: b;
      }

      &--three {
        grid-area: c;
      }

      &--four {
        grid-area: d;
      }

      &--five {
        grid-area: e;
      }

      &:first-child {
        max-width: 520px;
        height: 380px;

        @media (max-width: 1100px) {
          max-width: 100%;
          height: auto;
        }
      }
    }

    &__category {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 50px;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: $--color-white;
      background: linear-gradient(180deg, #2A2A2A 0%, #2A2A2A 100%);
      border-radius: 0px 0px 9px 9px;

      p {
        margin: 0;
        margin-left: 20px;

        &:hover,
        &:focus {
          color: $--color-active;
          transition: color 0.2s ease;
        }
      }
    }
  }

</style>