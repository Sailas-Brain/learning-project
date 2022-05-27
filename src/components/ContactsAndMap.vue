<template>
  <div class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Контакты</h2>
      <div class="contacts__info-wrap">
        <div class="contacts__information">
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

          <form class="contacts__form">
            <p class="contacts__form-title">Остались вопросы?</p>
            <label class="contacts__name-input" for="name">Ваше имя</label>
            <input class="contacts__input-field" id="name" type="text" placeholder="Имя">

            <label class="contacts__name-input" for="phone">Ваш телефон</label>
            <input class="contacts__input-field" id="phone" type="text" placeholder="+7 ___ _______">

            <label class="contacts__name-input" for="comments">Ваш комментарий</label>
            <textarea class="contacts__input-field contacts__input-field--comments" id="comments" type="text" placeholder="Комментарий"></textarea>

            <button class="contacts__form-button" type="submit">Заказать звонок</button>
            <p class="contacts__form-text">Нажимая на кнопку "Заказать звонок", я даю <a class="contacts__form-link" href="#">согласие на обработку персональных данных.</a></p>
          </form>

        </div>

        <div class="contacts__map-wrap">
          <div class="contacts__map" style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;outline:none;">Москва</a><a href="https://yandex.ru/maps/213/moscow/house/maly_drovyanoy_pereulok_6/Z04YcAJoSUAHQFtvfXt1d39kYQ==/?from=tabbar&ll=37.658051%2C55.746375&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=17.13" style="color:#eee;font-size:12px;position:absolute;top:14px;">Малый Дровяной переулок, 6 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUJYVAkPC" width="100%" height="629" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
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

    &__info-wrap {
      display: flex;
      justify-content: space-between;
    }

    &__information {
      width: 41%;
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
      color: #2A2A2A;

      &:hover,
      &:focus {
        color: #F9A43F;
      }
    }

    &__form {
      margin-top: 35px;
    }

    &__form-title {
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;

      color: #2A2A2A;
      margin-bottom: 21px;
    }

    &__address-text {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;

      margin-left: 8px;
    }

    &__name-input {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #2A2A2A;
      margin-bottom: 7px;
    }

    &__input-field {
      width: 100%;
      height: 44px;
      opacity: 0.33;
      border: 1px solid #2A2A2A;
      border-radius: 9px;
      box-sizing: border-box;

      padding-left: 19px;
      margin-top: 7px;
      margin-bottom: 14px;

      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #2A2A2A;

      opacity: 0.33;

      &--comments {
        min-height: 88px;
        padding-top: 14px;
      }
    }

    &__form-button {
      width: 100%;
      height: 46px;

      // background: linear-gradient(184.53deg, #F9A43F 5.27%, #FB791B 91.78%);
      border-top: 1px solid silver;
      // background-color: #555;
      color: #ccc;
      background: linear-gradient(0.53deg, #FF6C00, #F9A43F, #FB791B);
      background-size: 100% 140%;
      background-position:0 100%;
      transition: background 1s ease;
      border-radius: 9px;
      border: 0;
      outline: 0;

      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 19px;
      line-height: 22px;

      color: #FFFFFF;
      cursor: pointer;

      &:hover,
      &:focus {
         background-position:0 0;
        // background: linear-gradient(184.53deg, #fffffF 5.27%, #000000 91.78%);
        // transition: ba;
      }
    }

    &__form-text {
      margin-top: 15px;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 15px;
      line-height: 91.1%;
      color: #000000;

      opacity: 0.68;
    }

    &__form-link {
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 15px;
      line-height: 122.1%;
      color: #000000;

      opacity: 0.68;

      &:hover,
      &:focus {
        color: #EC690A;
      }

    }


    &__map-wrap {
      width: 49%;
      min-height: 629px;;
    }


  }

</style>
