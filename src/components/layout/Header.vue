<template>
  <header class="header">
    <div class="header__top-wrap">
      <div class="header__top">
        <a class="header__logo" href="#">
          <img src="@/assets/pictures/Logo.svg">
        </a>

        <div class="header__search">
          <input class="header__field" type="text" name="search" placeholder="Найти игру">
          <button class="header__button" type="submit">
            <img class="header__search-icon" src="@/assets/pictures/icons_search.svg">
          </button>
        </div>

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
          <button class="header__burger">
            <span class="header__icon-burger">
              <img src="@/assets/pictures/burger.svg">
            </span> Каталог</button>

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

          <div class="header__social">
            <a class="header__social-icon" href="#">
              <img class="header__instagram-icon" src="@/assets/pictures/instagram-icon.svg">
            </a>
            <a class="header__social-icon header__social-icon--position" href="#">
              <img class="header__vk-icon" src="../../assets/pictures/vk-icon.svg">
              <img class="header__vk" src="../../assets/pictures/vk.svg">
            </a>
            <a class="header__social-icon" href="#">
              <img class="header__facebook-icon" src="@/assets/pictures/facebook-icon.svg">
            </a>
          </div>

          <div class="header__container-menu">
            <div class="header__menu">
              <div class="header__category">                
                <button class="header__button-close">Закрыть</button>
                <ul class="header__list-category">
                  <li class="header__item">
                    <a class="header__catalog-link">Все категории</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Настольные игры</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Warhammer 40000</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Magic: the Gathering</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Аксессуары для игр</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Краски</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Товары для детей</a>
                  </li>
                  <li class="header__item">
                    <a class="header__catalog-link">Аксессуары для моделизма</a>
                  </li>
                </ul>
              </div>

              <div class="header__catalog-product">
                <p class="header__catalog-title">Warhammer 40000</p>

                <div class="header__list-wrapper">

                  <ul class="header__list-product">
                    <li class="header__product-item">
                      <a class="header__link-product">Альтернативные миниатюры (69)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Warhammer 40k (400)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Age of Sigmar (263)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Warcry (49)</a>
                    </li>
                  </ul>

                  <ul class="header__list-product">
                    <li class="header__product-item">
                      <a class="header__link-product">Nercomunda (21)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Lord of the Rings(16)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Blood Bowl (28)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Titanicus (4)</a>
                    </li>
                  </ul>

                  <ul class="header__list-product">
                    <li class="header__product-item">
                      <a class="header__link-product">Warcry (49)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Warhammer: Underworlds (22)</a>
                    </li>
                    <li class="header__product-item">
                      <a class="header__link-product">Killtem (4)</a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>

        </nav>

      </div>

    </div>
    
  </header>
</template>


<script>
export default {


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
      box-sizing: border-box
    }

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1110px;
      height: 100%;
    }

    &__logo {
      display: block;
      height: 37px;
      width: 157px;
    }

    &__search {
      position: relative;
      width: 475px;  
    }

    &__field {
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
    }

    &__text {
      margin: 0;
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80px;
      height: 35px;
    }

    &__link-registration {
      width: 31px;
      height: 31px;
      background-color: $--color-main;
      border: none;
      outline: none;
      cursor: pointer;
    }

    &__profile-icon {
      width: 30px;
      height: 30px;
    }

    &__link-cart {
      width: 30px;
      height: 27px;
    }

    &__group-icon {
      width: 28px;
      height: 31px;
    }

    &__bottom-wrap {
      width: 100%;
      height: 52px;
      background: #F2F2F2;
      padding: 0 25px;
      box-sizing: border-box;
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

    }

    &__burger {
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

      &:hover,
      &:focus {
        color: $--color-activ;
        transition: color 0.2s ease;
      }
    }

    &__icon-burger {
      display: block;
      margin-right: 15px;
      height: 20px;
      width: 20px;
      padding-top: 4px;
    }



    &__list {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
      margin: auto;
      align-items: center;
      padding: 0;
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
        color: $--color-activ;
        transition: color 0.2s ease;
      }
    }

    &__social {
      display: flex;
      align-items: center;
      width: 100px;
      height: 100%;
    }

    &__social-icon {
      display: flex;
      align-items: center;
      text-align: center;
      width: 30x;
      height: 30px;

      &--position {
        position: relative;
      }
    }

    &__vk-icon {
      text-align: center;
      margin: 0 6px;
    }

    &__vk {
      position: absolute;
      top:11px;
      left: 11px;
    }



    &__container-menu {
      display: none;
      position: absolute;
      top: 0;
      left: 0px;
      width: 100%;
      height: 1800px;
      background: rgba(00, 00, 00, 0.65);
      z-index: 1;
    }

    &__menu {
      display: flex;
      margin: 0 auto;
      max-width: 1110px;
      min-height: 435px;
      background: #FFFBF8;
      margin-top: 82px;
      
      /* тень активная */
      box-shadow: 5px 6px 15px rgba(251, 121, 27, 0.63);
    }

    &__category {
      width: 255px;
      border-right: 2px solid rgba(42, 42, 42, 0.26);
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

    }

    &__catalog-link {
      position: relative;
      display: flex;
      align-items: center;

      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;

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
        background: $--color-activ;
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
      padding-right: 50px;
    }

    &__catalog-title {
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 20px;
    }

    &__list-wrapper {
      display: flex;
      margin-top: 25px;
      width: 100%;
      box-sizing: border-box;
    }

    &__product-item {
      list-style: none;
      display: inline;
    }

    &__link-product {
      display: inline-block;
      box-sizing: border-box;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      width: 100%;
      height: 40px;
      line-height: 249.6%;
      white-space: nowrap;
      cursor: pointer;

      &:hover,
      &:focus {
        color: $--color-activ;
        transition: color 0.2s ease;
      }
    }

  }

</style>