<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <a href="#"><img src="@/assets/pictures/Logo.png" alt=""></a>
          <p>г. Москва ст.м. Таганская Малый Дровяной переулок 6</p>
        </div>

        <div class="footer__catalog">
          <a class="footer__catalog-link footer__catalog-link--title " href="#">Каталог</a>
          <ul class="footer__catalog-list">
            <li><a class="footer__catalog-link" href="#">Warhammer 40000</a></li>
            <li><a class="footer__catalog-link" href="#">Настольные игры</a></li>
            <li><a class="footer__catalog-link" href="#">Magic: the Gathering</a></li>
            <li><a class="footer__catalog-link" href="#">Аксессуары для игр</a></li>
            <li><a class="footer__catalog-link" href="#">Краски</a></li>
            <li><a class="footer__catalog-link" href="#">Аксессуары для моделизма</a></li>
          </ul>
        </div>

        <div class="footer__rules">
          <ul class="footer__rules-list">
            <li><a class="footer__rules-link" href="#">Правила клуба</a></li>
            <li><a class="footer__rules-link" href="#">Мероприятия</a></li>
            <li><a class="footer__rules-link" href="#">О нас</a></li>
            <li><a class="footer__rules-link" href="#">Контакты</a></li>
            <li><a class="footer__rules-link" href="#">Блог</a></li>
          </ul>

        </div>
        <div class="footer__delivery">
          <a href="#">Оплата и достака</a>
          <a href="#">Гарантия и возврат</a>
        </div>

        <div class="footer__request">
          <button class="footer__button">Заказать звонок</button>
          <p>+7 (495) 911-10-11</p>
          <a href="#">msk@magicgoldfish.ru</a>
          <div class="footer__icons">
            <icon-social />
          </div>
        </div>
      </div> 
    </div>

    <div class="footer__bottom">
      <div class="footer__wrapper footer__wrapper--align">
        <div class="footer__confidential">
          <p>© 2021 MagicGoldFish.ru</p>
          <a href="#">Политика конфиденциальности</a>
        </div>

        <div class="footer__payment">
          <img src="@/assets/images/mir.svg" alt="">
          <img src="@/assets/images/visa.svg" alt="">
          <img src="@/assets/images/mastercard.svg" alt="">
        </div>

        <div class="footer__offer">
          <p>Содержимое не является публичной офертой</p>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
import IconSocial from '../IconSocial.vue'

export default {
  components: { IconSocial },
}
</script>

<style lang="scss" scoped>

a {
  color: $--color-white;
  text-decoration: none
}
  .footer {
    width: 100%;
    background: $--color-main;
    color: $--color-white;
    margin-top: 85px;

    @media (max-width: 770px) {
      margin-top: 35px;
    }
    
    &__top {
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      padding-top: 30px;

      @media (max-width: 770px) { 
        display: flex;
        margin: 0 auto;
        border: none;
      }
    }

    &__wrapper {
      max-width: 1110px;
      margin: 30px auto;
      display: flex;
      justify-content: space-between;

      &--align {
        display: flex;
        align-items: center;
        margin: 0 auto;

        @media (max-width: 790px) {
          display: block;
          text-align: center;
          margin: 0px auto;
        }
      }

      @media (max-width: 1150px) { 
        padding: 0px 20px;
      }
      @media (max-width: 960px) { 
        flex-wrap: wrap;
        margin: 20px auto;
      }
      @media (max-width: 770px) { 
        display: block;
        text-align: center;
        margin: 0px auto;
      }
    }

    &__logo {
      max-width: 214px;
      margin: 0 8px;

      a {
        display: block;
      }

      p {
        font-family: "trebuchetms";
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-top: 10px;

        @media (max-width: 768px) {
          margin-top: 20px;
        }
      }

      img {
        width: 152px;
        height: 40px;

        @media (max-width: 500px) { 
          width: 121px;
          height: 33px;
        }
      }

      @media (max-width: 770px) { 
        margin-bottom: 13px;
        margin-top: 20px;
      }
    }

    &__catalog {
      max-width: 152px;
      margin: 0 8px;

      @media (max-width: 770px) { 
        max-width: 100%;
      }
    }

    &__catalog-link {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      &:hover,
      &:focus {
        color: $--color-active;
        transition: all 0.3s ease;
      }

      &--title {
        font-weight: 700;
        font-size: 19px;
        line-height: 22px;
        display: block;
        margin-bottom: 9px;

        &:hover,
        &:focus {
          color: $--color-active;
          transition: all 0.3s ease;
        }
      }
    }

    &__catalog-list {
      list-style: none;

      @media (max-width: 770px) { 
        display: none;
      }
    }

    &__rules {
      max-width: 137px;
      margin: 0 8px;

      @media (max-width: 770px) { 
        max-width: 100%;
      }
    }
    
    &__rules-list {
      list-style: none;
    }

    &__rules-link {
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 19px;
      line-height: 30px;

      &:hover,
      &:focus {
        color: $--color-active;
        transition: all 0.3s ease;
      }
    }

    &__delivery {
      max-width: 179px;
      margin: 0 8px;

      a {
        display: block;
        font-family: "trebuchetms";
        font-weight: 700;
        font-size: 19px;
        line-height: 30px;

        &:hover,
        &:focus {
          color: $--color-active;
          transition: all 0.3s ease;
        }
      }

      @media (max-width: 770px) { 
        display: none;
      }
    }

    &__request {
      text-align: end;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      a {
        display: block;
        margin-bottom: 10px;

        &:hover,
        &:focus {
          color: $--color-active;
          transition: all 0.3s ease;
        }
      }

      @media (max-width: 960px) { 
        margin: 15px auto 0px;
        text-align: center;
      }
    }

    &__button {
      width: 225px;
      height: 51px;
      border: 1px solid $--color-active;
      border-radius: 9px;
      color: $--color-active;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 19px;
      line-height: 22px;
      background: rgba(255, 255, 255, 0);
      margin-bottom: 26px; 
      cursor: pointer;

      &:hover,
      &:focus {
        color: $--color-main;
        background-color: $--color-active ;
        transition: all 0.3s ease;
      }

      @media (max-width: 960px) { 
        display: none;
      }
    }

    .social {
      @media (max-width: 960px) { 
        margin: 0 auto;
      }
    }

    &__social {
      display: flex;
      align-items: flex-end;
      line-height: 19px;

      a {
        &:hover,
        &:focus {
          color: $--color-main;
          background-color: $--color-active;
          transition: all 0.3s ease;
        }
      }
    }

    &__bottom {
      padding: 20px 0;

      @media (max-width: 790px) { 
        display: flex;
        margin: 0 auto;
        padding-top: 0px;
      }
    }

    &__confidential {
      p {
        font-family: "trebuchetms";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: rgba(255, 255, 255, 0.44);
      }
      
      a {
        font-family: "trebuchetms";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: rgba(255, 255, 255, 0.44);
        text-decoration: underline;
        
        &:hover {
          color: $--color-active;
          transition: all 0.3s ease;
        }
      }
      @media (max-width: 790px) { 
        margin: 10px auto;
      }

    }

    &__payment {
      width: 155px;
      height: 17px;
      display: flex;
      justify-content: space-between;
      margin: 15px auto;

      @media (max-width: 790px) { 
        display: none;
      }
    }

    &__offer {

      text-align: end;

      p {
        font-family: "trebuchetms";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: rgba(255, 255, 255, 0.44);
      }
      
      a {
        font-family: "trebuchetms";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: rgba(255, 255, 255, 0.44);
        text-decoration: underline;
        
        &:hover {
          color: $--color-active;
          transition: all 0.3s ease;
        }
      }

      @media (max-width: 790px) { 
        text-align: center;
        text-decoration: none;
      }
    }
  }

</style>