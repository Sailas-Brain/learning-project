<template>
  <div class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <div class="contacts__info-wrap">
        <div class="contacts__information">
          <div class="contacts__information-inner">
            <div class="contacts__details">
              <img class="contacts__icon" src="@/assets/pictures/contacts__phone.svg">
              <div class="contacts__wrap-text">
                <p class="contacts__text">Телефон:</p>
                <a class="contacts__link" href="#">+7 (495) 911-10-11</a>
              </div>
            </div>
            <div class="contacts__details">
              <img class="contacts__icon" src="@/assets/pictures/contacts__email-icon.svg">
              <div class="contacts__wrap-text">
                <p class="contacts__text">E-mail:</p>
                <a class="contacts__link" href="#">msk@magicgoldfish.ru</a>
              </div>
            </div>

            <div class="contacts__details">
              <img class="contacts__icon contacts__icon--marker" src="../assets/pictures/contacts__address-icon.svg">
              <div class="contacts__wrap-text">
                <p class="contacts__text">Адрес:</p>
                <span class="contacts__address-text">г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6</span>
              </div>
            </div>
            <div class="contacts__details">
              <img class="contacts__icon" src="../assets/pictures/contacts__working-time-icon.svg">
              <div class="contacts__wrap-text">
                <p class="contacts__text">Режим работы клуба:</p>
                <span class="contacts__address-text">11:00-23:00 (ежедневно)</span>
              </div>  
            </div>
          </div>
          <call-order-form :addStyleButton="true" :addStyleText="true" />
        </div>

        <div class="contacts__map-wrap">
          <div class="contacts__map" style="position:relative;overflow:hidden;"><iframe class="contacts__iframe" src="https://yandex.ru/map-widget/v1/-/CCUJYVAkPC" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CallOrderForm from './ui/CallOrderForm.vue'

  export default {
  components: { CallOrderForm },
    name: "contacts-and-map"
  }

</script>

<style lang="scss" scoped>

  .contacts {
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;

    &__container {
      max-width: 1110px;
      margin: 0 auto;
    }

    &__title {
      @include title-h2 ();

      margin-bottom: 11px;

      @media (max-width: 500px) {
        font-size: 21px;
        line-height: 24px;
        margin-bottom: 20px;
      }
    }

    &__info-wrap {
      display: flex;
      justify-content: space-between;

      @media (max-width: 880px) {
        display: block;
      }
    }

    &__information {
      width: 45%;
      @media (max-width: 880px) {
        width: 100%;
        margin-bottom: 30px;
      }
    }

    &__information-inner {
      margin-bottom: 30px;
    }

    &__details {
      display: flex;
      align-items: center;
      min-height: 40px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    &__icon {
      margin-right: 20px;
      width: 30px;

      @media (max-width: 500px) {
        width: 23px;
      }
      
      &--marker {
        width: 38px;
        margin-right: 15px;
        margin-left: -5px;

        @media (max-width: 500px) {
          width: 33px;
        }
      } 
    }

    &__text {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 19px;
      line-height: 22px;

      @media (max-width: 500px) {
        font-size: 16px;
        line-height: 19px;
      }
    }

    &__link {
      text-decoration: none;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;

      margin-left: 8px;
      color: $--color-main;

      &:hover,
      &:focus {
        color: $--color-active;
      }

      @media (max-width: 500px) {
        margin-left: 0;
        font-size: 16px;
      }
    }

    &__address-text {
      font-family: 'trebuchetms';
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      margin-left: 7px;

      @media (max-width: 500px) {
        margin-left: 0;
        font-size: 16px;
        line-height: 19px;
      }

    }

    &__wrap-text {
      display: flex;
      align-items: center;

      @media (max-width: 500px) {
        display: block;
      }
    }

    &__map-wrap {
      width: 49%;
      height: 629px;;

      @media (max-width: 880px) {
        width: 100%;
        height: auto;
      }
    }

    &__map {
      border: none;
      outline: none;
      height: 100%;

      @media (max-width: 880px) {
        height: 300px;
      }
    }

    &__iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

</style>
