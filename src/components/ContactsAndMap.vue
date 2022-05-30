<template>
  <div class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <div class="contacts__info-wrap">
        <div class="contacts__information">
          <div class="contacts__information-inner">
            <div class="contacts__details">
              <img class="contacts__icon" src="@/assets/pictures/contacts__phone.svg">
              <p class="contacts__text">Телефон:</p>
              <a class="contacts__link" href="#">+7 (495) 911-10-11</a>
            </div>
            <div class="contacts__details">
              <img class="contacts__icon" src="@/assets/pictures/contacts__email-icon.svg">
              <p class="contacts__text">E-mail:</p>
              <a class="contacts__link" href="#">msk@magicgoldfish.ru</a>
            </div>

            <div class="contacts__details">
              <img class="contacts__icon contacts__icon--marker" src="../assets/pictures/contacts__address-icon.svg">
              <p class="contacts__text">Адрес:<span class="contacts__address-text">г. Москва ст.м. Таганская (кольцевая) Малый Дровяной переулок 6</span></p>
              
            </div>
            <div class="contacts__details">
              <img class="contacts__icon" src="../assets/pictures/contacts__working-time-icon.svg">
              <p class="contacts__text">Режим работы клуба:</p>
              <span class="contacts__address-text">11:00-23:00 (ежедневно)</span>
            </div>
          </div>
          <call-order-form />
        </div>

        <div class="contacts__map-wrap">
          <div class="contacts__map" style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;outline:none;">Москва</a><a href="https://yandex.ru/maps/213/moscow/house/maly_drovyanoy_pereulok_6/Z04YcAJoSUAHQFtvfXt1d39kYQ==/?from=tabbar&ll=37.658051%2C55.746375&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=17.13" style="color:#eee;font-size:12px;position:absolute;top:14px;">Малый Дровяной переулок, 6 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUJYVAkPC" width="100%" height="629" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
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

    &__container {
      max-width: 1110px;
      margin: 0 auto;
    }

    &__title {
      @include title-h2 ();

      margin-bottom: 11px;
    }

    &__info-wrap {
      display: flex;
      justify-content: space-between;
    }

    &__information {
      width: 41%;
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


      &--marker {
        width: 38px;
        margin-right: 15px;
        margin-left: -5px;
      } 
    }

    &__text {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 19px;
      line-height: 22px;

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
        color: $--color-activ;
      }
    }

    &__map-wrap {
      width: 49%;
      min-height: 629px;;
    }


  }

</style>
