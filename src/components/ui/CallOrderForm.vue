<template>
  <form class="form">
    <p class="form__title">Остались вопросы?</p>
    <label class="form__name-input" for="name">Ваше имя</label>
    <input class="form__input-field" id="name" type="text" placeholder="Имя">

    <label class="form__name-input" for="phone">Ваш телефон</label>
    <input class="form__input-field" id="phone" type="text" placeholder="+7 ___ _______">

    <label class="form__name-input" for="comments">Ваш комментарий</label>
    <textarea class="form__input-field form__input-field--comments" id="comments" type="text" placeholder="Комментарий"></textarea>

    <button :class="{'form__button': true, 'contacts__form-button': addStyleButton}" type="submit">Заказать звонок</button>
    <p :class="{'form__text': true, 'contacts__form-text': addStyleText,}">Нажимая на кнопку "Заказать звонок", я даю <a class="form__link" href="#">согласие на обработку персональных данных.</a></p>
  </form>
</template>


<script>
export default {
  name: 'call-order-form',
  props: {
    addStyleText: {
      type: Boolean,
      default: false
    },
    addStyleButton: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {

    &__title {
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;

      color: $--color-main;
      margin-bottom: 21px;
    }

    &__text {
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

      color: $--color-main;
      margin-bottom: 7px;
    }

    &__input-field {
      width: 100%;
      height: 44px;
      opacity: 0.33;
      border: 1px solid $--color-main;
      border-radius: 9px;
      box-sizing: border-box;

      padding-left: 19px;
      margin-top: 7px;
      margin-bottom: 14px;

      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: $--color-main;

      opacity: 0.33;

      &--comments {
        min-height: 88px;
        padding-top: 14px;
      }
    }

    &__button {
      @include basic-button-link ();
      width: 100%;
      height: 46px;

      font-size: 19px;
      line-height: 22px;
    }

    &__text {
      margin-top: 15px;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 15px;
      line-height: 91.1%;
      color: $--color-black;

      opacity: 0.68;
    }

    &__link {
      text-decoration: underline;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 15px;
      line-height: 122.1%;
      color: $--color-black;

      opacity: 0.68;

      &:hover,
      &:focus {
        color: #EC690A;
      }

    }


    @media (max-width: 500px) {
      .contacts__form-button {
        width: 170px;
        margin: 0 auto;

        font-size: 16px;
        line-height: 19px;
      }
    }

    @media (max-width: 500px) {
      .contacts__form-text {
        font-size: 14px;
        line-height: 117.1%;
      }
    }



  }

</style>