<template>
  <header class="header">
    <div class="header__top-wrap">
      <div 
        class="header__top" 
        ref="top"
      >
        <button 
          class="header__mobil-burger" 
          type="button" 
          ref="button"
          @click="handlerClick"
        >
          <span class="header__mobil-icon-burger"></span>
          <span class="header__mobil-icon-burger"></span>
          <span class="header__mobil-icon-burger"></span>
        </button>

        <a 
          class="header__logo" 
          href="#"
        >
          <img class="header__logo-picture" src="@/assets/pictures/Logo.png">
        </a>

        <form class="header__search">
          <div class="header__search-wrap">
            <input 
              class="header__field-search" 
              type="text" name="search" 
              placeholder="Найти игру"
            >
            <button class="header__button" type="submit">
              <img class="header__search-icon" src="@/assets/pictures/icons_search.svg">
            </button>
          </div>
        </form>

        <div class="header__phone">
          <p class="header__text">+7 (495) 911-10-11</p>
        </div>

        <div class="header__icons">
          <button class="header__link-registration">
            <img class="header__profile-icon" src="@/assets/pictures/profile-icon.svg">
          </button>

          <a class="header__link-cart" href="#" >
            <img class="header__group-icon" src="@/assets/pictures/Group-header.svg">
          </a>
        </div>

      </div>
    </div>  

    <div class="header__bottom-wrap">
      <div class="header__bottom">
        <nav class="header__navigation">
          <button class="header__burger" type="button">
            <span class="header__icon-burger"></span> 
            <span class="header__text-burger">Каталог</span>
          </button>

          <ul class="header__list">
            <li class="header__item">
              <a class="header__item-link" href="#">Wharhammer</a>
            </li>
            <li class="header__item">
              <a class="header__item-link" href="#">Magic:the Cathering</a>
            </li>
            <li class="header__item">
              <a class="header__item-link" href="#">Мероприятия</a>
            </li>
            <li class="header__item">
              <a class="header__item-link" href="#">О центре</a>
            </li>
            <li class="header__item">
              <a class="header__item-link" href="#">Контакты</a>
            </li>
          </ul>

          
          <icon-social :socialIconNone="true" />

          <div class="header__container-menu">
            <div class="header__menu">
              <div class="header__category">                
                <button class="header__button-close" type="button">Закрыть</button>
                <ul class="header__list-category">
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Все категории</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Настольные игры</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Warhammer 40000</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Magic: the Gathering</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Аксессуары для игр</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Краски</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Товары для детей</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link" href="#">Аксессуары для моделизма</a>
                  </li>
                </ul>
              </div>

              <div class="header__catalog-product">
                <p class="header__catalog-title">Warhammer 40000</p>
                <ul class="header__list-product">
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Альтернативные миниатюры</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Warhammer 40k</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Warcry</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Warhammer: Underworlds</a>
                    </li>                   
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Warcry</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Lord of the Rings</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Blood Bowl</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Titanicus</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Nercomunda</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Age of Sigmar</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product" href="#">Killtem</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            class="header__container-mobail"
            ref="active"
          >
            <div 
              class="header__wrap-mobail"

            >
              <ul class="header__top-list-mobail">
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Настольные игры</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Warhammer 40000</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Magic:the Gathering</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Аксессуары для игр</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Краски</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Товары для детей</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Аксессуары для моделизма</a>
                </li>
              </ul>

              <ul class="header__bottom-list-mobail">
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Мероприятия</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Блог</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">О центре</a>
                </li>
                <li class="header__item-mobail">
                  <a class="header__link-mobail" href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div class="header__background-mobail"></div>
          </div>

        </nav>

      </div>

    </div>
    
  </header>
</template>


<script>

import IconSocial from '../IconSocial.vue'


export default {
  components: { IconSocial },
  data () {
    return {

    }
  },

  methods: {

    handlerClick() {
      
      if(this.$refs.button.classList.contains("open")) {
        this.$refs.button.classList.remove("open");
        this.$refs.active.classList.remove("active");
      } else {
        this.$refs.button.classList.add("open");
        this.$refs.active.classList.add("active");
      }
    }

  },

}
</script>

<style lang="scss" scoped>

  .header {
    position: relative;
    max-width: 100%;

    &__top-wrap {
      background: $--color-main;
      width: 100%;
      height: 82px;
      padding: 0 25px;
      box-sizing: border-box;

      @media (max-width: 940px) {
        height: 72px;
        padding: 0 20px;
      }

    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1110px;
      height: 100%;
    }

    /*бургер на мобильном */

    &__mobil-burger {
      display: none;
      position: relative;

      background: $--color-main;
      border: none;
      outline: none;

      width: 30px;
      height: 30px;

      cursor: pointer;

      transform: rotate(0deg);
      transition: .5s ease-in-out;

      @media (max-width: 940px) {
        display: block;
      }

      @media (max-width: 768px) {
        width: 25px;
        height: 20px;
      }

    }

    &__mobil-icon-burger {
      position: absolute;
      left: 0;

      width: 100%;
      height: 2.25px;
      background: $--color-white;

      border-radius: 3px;

      transform: rotate(0deg);
      transition: .25s ease-in-out;

      @media (max-width: 940px) {
        &:nth-child(1) {
          top: 4px;
        }

        &:nth-child(2) {
          top: 14px;
        }

        &:nth-child(3) {
          top: 24px;
        }
      }

      @media (max-width: 768px) {
        &:nth-child(1) {
          top: 0px;
        }

        &:nth-child(2) {
          top: 8px;
        }

        &:nth-child(3) {
          top: 16px;
        }
      }
      
    }

    .open {
      & span:nth-child(1) {
        top: 14px;
        height: 3px;
        transform: rotate(135deg);

        @media (max-width: 768px) {
          top: 8px;
          height: 2px;
        }
      }

      & span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }

      & span:nth-child(3) {
        top: 14px;
        height: 3px;
        transform: rotate(-135deg);

        @media (max-width: 768px) {
          top: 8px;
          height: 2px;
        }

      }

    }

    /* desktop*/

    &__logo {
      display: flex;
      align-items: center;
      height: 100%;
      width: 157px;
      box-sizing: border-box;

      @media (max-width: 768px) {
        width: 121px;
      }
    }

    &__logo-picture {
      height: 40px;
      width: 157px;
      padding-top: 3px;

      @media (max-width: 768px) {
        height: 33px;
        width: 121px;
      }
    }

    &__search {
      width: 35%; 
      margin: 0 15px; 
      box-sizing: border-box;

      @media (max-width: 940px) {
        position: absolute;
        top: 79px;
        left: 0;
        width: 100%;
        margin: 0;
        z-index: 1;
        padding: 0px 20px;
      }
    }

    &__search-wrap {
      position: relative;
    }

    &__field-search {
      box-sizing: border-box;
      width: 100%;
      height: 38px;

      padding-right: 40px;
      padding-left: 12px;
      outline: none;
      border: 0;
      border-radius: 10px;
      background: #F2F2F2;

      color: #929292;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }

    &__button {
      position: absolute;
      top: 0;
      right: 0;
      height: 38px;
      width: 38px;
      padding-top: 3px;
      background: #F2F2F2;
      border: 0;
      border-radius: 10px;
      cursor: pointer;
    }

    &__search-icon {
      width: 24px;
      height: 24px;
    }

    &__phone {
      display: flex;
      align-items: center;
      color: $--color-white;
      width: auto;
      height: 27px;

      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 20px;

      box-sizing: border-box;
      padding-left: 35px;

      background-image: url(@/assets/pictures/phone-icon.svg);
      background-repeat: no-repeat;

      @media (max-width: 1100px) {
        font-size: 17px;
      }

      @media (max-width: 940px) {
        display: none;
      }
    }

    &__text {
      margin: 0;
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80px;
      height: 100%;

      @media (max-width: 768px) {
        width: 60px;
      }
    }

    &__link-registration {

      background-color: $--color-main;
      border: none;
      outline: none;
      cursor: pointer;

    }

    &__profile-icon {
      width: 30px;
      height: 30px;

      @media (max-width: 768px) {
        width: 23px;
        height: 23px;
      }

    }

    &__group-icon {
      padding-top: 5px;
      width: 28px;
      height: 28px;

      @media (max-width: 768px) {
        width: 23px;
        height: 25px;
      }

    }

    &__bottom-wrap {
      width: 100%;
      height: 52px;
      background: $--color-background;
      padding: 0 25px;
      box-sizing: border-box;


      @media (max-width: 940px) {
        padding: 0px;
      }
    }

    &__bottom {
      display: flex;
      margin: auto;
      max-width: 1110px;
    }

    &__navigation {
      display: flex;
      align-items: center;
      width: 100%;
      height: 52px;

      @media (max-width: 940px) {
        position: relative;
      }
    }

    &__burger {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0;
      width: 120px;
      height: 100%;

      box-sizing: border-box;
      padding-left: 15px;

      color: $--color-main;
      text-align: end;

      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;

      background: inherit;
      outline: none;
      border: none;
      margin-right: 15px;

      cursor: pointer;

      &:hover {
        color: $--color-active;
        transition: all 0.2s ease;
        .header__icon-burger {
          background: $--color-active;
          transition: all 0.2s ease;
          &::before,
          &::after {
            background: $--color-active;
            transition: all 0.2s ease;
          }
        }
      }

      @media (max-width:940px) {
        display: none;
      }
    }

    &__icon-burger {
      position: absolute;
      top: 25px;
      left: 7px;

      width: 20px;
      height: 2px;
      background: $--color-main;

      
      &::after,
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 20px;
        background: $--color-main;
      }

      &::after {
        top: -6px;
        height: 2px;
      }
      
      &::before {
        top: 6px;
        height: 2px;
      }
    }

    &__text-burger {
      margin-left: auto;
    }

    &__list {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      margin: auto;
      align-items: center;
      padding: 0;

      @media (max-width: 940px) {
        display: none;
      }
    }

    &__item {
      list-style: none;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
    }

    &__item-link {
      display: flex;
      align-items: center;
      margin-right: 15px;
      height: 52px;
      text-decoration: none;
      color: $--color-main;

      &:hover,
      &:focus {
        color: $--color-active;
        transition: color 0.2s ease;
      }
    }

    &__container-menu {
      display: none;
      position: absolute;
      top: 0;
      left: 0px;
      width: 100%;
      height: 1800px;
      background: rgba(00, 00, 00, 0.65);
      z-index: 2;

      @media (max-width: 940px) {
        display: none;
      }
    }

    &__menu {
      display: flex;
      margin: 0 auto;
      max-width: 1110px;
      min-height: 435px;
      background: #FFFBF8;
      margin-top: 82px;

      color: $--color-main;
      
      /* тень активная */
      box-shadow: 5px 6px 15px rgba(251, 121, 27, 0.63);
    }

    &__category {
      width: 245px;
      border-right: 2px solid rgba(42, 42, 42, 0.26);
    }

    &__list-category {
      width: 245px;
    }

    &__button-close {
      position: relative;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      background: #FFFBF8;
      border: 0;
      border-bottom: 2px solid rgba(42, 42, 42, 0.26);
      outline: 0;
      width: 100%;
      height: 46px;
      text-align: center;
      padding-left: 10px;
      cursor: pointer;

      /*крестик для закрытия меню*/ 
      &::before,
      &::after {
        position: absolute;
        content: "";
        top: 22px;
        left: 28px;

        height: 2px;
        width: 17px;
        background: $--color-main;

      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }

      &:hover,
      &:focus {
        color: $--color-active;
        transition: color 0.2s ease;

        &::before,
        &::after {
          background: $--color-active;
          transition: all 0.2s ease;
        }
      }

    }

    &__catalog-link {
      position: relative;
      display: flex;
      align-items: center;

      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      color: inherit;

      background: #FFFBF8;
      border: 0;
      outline: 0;
      height: 46px;
      padding-left: 30px;
      text-align: start;


      &::after {
        content: "";
        position: absolute;
        top: 18px;
        right: 16px;
        height: 8px;
        width: 8px;
        
        border-top: 2px solid #C8C5C3;
        border-right: 2px solid #C8C5C3;

        transform: rotate(45deg);
      }

      &:focus,
      &:hover {
        background: $--color-active;
        transition: background 0.3s ease;

        &::after {
          border-top: 2px solid $--color-main;
          border-right: 2px solid $--color-main;
        }
      }
    }

    &__catalog-product {
      width: 864px;
      padding-left: 30px;
      padding-top: 17px;

      box-sizing: border-box;
    }

    &__catalog-title {
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 20px;
    }


    &__list-product {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-content: flex-start;
      padding-right: 10px;
      margin-top: 20px;
    }

    &__product-item {
      list-style: none;
      display: block;
      min-width: 158px;
      width: 30%;
      padding: 10px 0;
    }

    &__link-product {
      display: inline-block;
      box-sizing: border-box;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      color: inherit;
      cursor: pointer;

      &:hover,
      &:focus {
        color: $--color-active;
        transition: color 0.2s ease;
      }
    }

    /*mobail menu */

    &__container-mobail {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 2;

      @media (max-width: 940px) {
        display: block;
        left: -1000px;
      }
    }

    &__background-mobail {
      width: 100%;
      height: 1000px;
      background: rgba(42, 42, 42, 0.65);
    }

    &__wrap-mobail {
      position: absolute;
      top: 0;
      left: -400px;
      width: 400px;
      background: $--color-white;

      transition: left .5s cubic-bezier(0.68, 0.55, 0.27, 1.55);

      @media (max-width: 450px) {
        width: 85%;
      }
    }


    .active {
      left: 0;

      .header__wrap-mobail {
        left: 0;
      }
    }


    &__top-list-mobail {
      margin-bottom: 15px;
    }

    &__bottom-list-mobail {
      padding-top: 10px;
      border-top: 2px solid #C4C4C4;
      margin-bottom: 26px;

    }

    &__item-mobail {
      list-style: none;
    }

    &__link-mobail {
      position: relative;
      display: block;
      font-family: 'trebuchetms';
      font-weight: 700;
      font-size: 15px;
      line-height: 252.7%;

      padding-right: 30px;
      padding-left: 30px;
      color: $--color-main;

      &:hover,
      &:focus {
        background: $--color-active;
        &::after {
          content: "";
          position: absolute;
          top: 14px;
          right: 16px;
          height: 8px;
          width: 8px;
          border-top: 2px solid $--color-main;
          border-right: 2px solid $--color-main;
          transform: rotate(45deg);
        }

      }

    }





  }

</style>