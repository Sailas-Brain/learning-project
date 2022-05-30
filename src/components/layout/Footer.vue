<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <a href="#"><img src="@/assets/pictures/Logo.svg" alt=""></a>
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
  color: #FFFFFF;
  text-decoration: none
}
  .footer {
    width: 100%;
    background: #2A2A2A;
    color: #FFFFFF;
    margin-top: 85px;
    

    &__top {
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      padding-top: 30px;
    }


    &__wrapper {
      max-width: 1110px;
      margin: 30px auto;
      display: flex;
      justify-content: space-between;

      &--align {
        align-items: center;
      }
    }

    &__logo {
      max-width: 214px;

      p {
        font-family: "trebuchetms";
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
    }

    &__catalog {
      max-width: 152px;
    }

    &__catalog-link {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      &:hover,
      &:focus {
        color: #F9A43F;
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
          color: #F9A43F;
          transition: all 0.3s ease;
        }
      }

    }

    &__catalog-list {
      list-style: none;
    }

    &__rules {
      max-width: 137px;
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
        color: #F9A43F;
        transition: all 0.3s ease;
      }
    }

    &__delivery {
      max-width: 179px;

      a {
        display: block;
        font-family: "trebuchetms";
        font-weight: 700;
        font-size: 19px;
        line-height: 30px;

        &:hover,
        &:focus {
          color: #F9A43F;
          transition: all 0.3s ease;
        }
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
      }

    
    }


    &__button {
      width: 225px;
      height: 51px;
      border: 1px solid #F9A43F;
      border-radius: 9px;
      color: #F9A43F;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 19px;
      line-height: 22px;
      background: rgba(255, 255, 255, 0);
      margin-bottom: 26px; 
      cursor: pointer;

      &:hover,
      &:focus {
        color: #2A2A2A;
        background-color: #F9A43F ;
        transition: all 0.3s ease;
      }
    }

    &__request {
      a {
        &:hover,
        &:focus {
          color: #F9A43F;
          transition: all 0.3s ease;
      }
      }

    }

    &__social {
      display: flex;
      align-items: flex-end;
      line-height: 19px;

      a {
        &:hover,
        &:focus {
          color: #2A2A2A;
          background-color: #F9A43F ;
          transition: all 0.3s ease;
        }

      }
    }


    &__bottom {
        padding: 20px 0;
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
          color: #F9A43F;
          transition: all 0.3s ease;
        }

      }

    }

    &__payment {
      width: 155px;
      height: 17px;
      display: flex;
      justify-content: space-between;
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
          color: #F9A43F;
          transition: all 0.3s ease;
        }
      }
    }



  }

</style>