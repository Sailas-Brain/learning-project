<template>
    <div class="events">
      <div class="events__container">
        <h2 class="events__title">Ближайшие мероприятия</h2>

        <div class="events__wrap">
          <a class="events__article" href="#">
            <img class="events__halloween" src="@/assets/pictures/Events__halloween.jpg">
            <div class="events__description">
              <div class="events__wrap-info">
                <div class="events__date-wrap">
                  <p class="events__title-description">Halloween c GoldFish</p> 
                  <p class="events__date">31 октября 2021 г. 19:00</p>
                </div>
                <p class="events__text">Мы соберемся,чтобы узнать,кто же все-таки был Мафией и что будет с тем,кого убили..</p>
              </div>
            </div>
          </a>

          <a class="events__article" href="#">
            <img class="events__tournament-warhammer" src="@/assets/pictures/Events__tournament-warhammer.jpg" alt="">
            <div class="events__description">
              <div class="events__wrap-info">
                <div class="events__date-wrap">
                  <p class="events__title-description">Турнир Warhammer</p> 
                  <p class="events__date">9 ноября 2021 г. 18:30</p>
                </div>
                <p class="events__text">Готов сразиться в ожесточенной битве Warhammer? Нет? Мы тебя обязтально научим!</p>
              </div>
            </div>
          </a>

        </div>
      </div>  
      <link-button class="events__button" href="#">Показать еще</link-button>  
    </div>
</template>

<script>
  export default {
    name: 'event-on-main'
  }
</script>

<style lang="scss" scoped>

  .events {
    width: 100%;
    margin-top: 85px;
    box-sizing: border-box;

    @media (max-width: 1180px) {
      padding: 0 20px;
    }

    &__title {
      @include title-h2 ();

      margin-bottom: 20px;

      @media (max-width: 500px) {
        font-size: 27px;
      }

      @media (max-width: 400px) {
        font-size: 21px;
      }
    }

    &__container {
      max-width: 1110px;
      margin: 0 auto;
    }

    &__wrap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 30px;

      @media (max-width: 960px) {
        display: block;
      }

      @media (max-width: 768px) {
        display: flex;
        flex-flow: nowrap;
        overflow: auto;

        ::-webkit-scrollbar {
          width: 10px;
        }


        margin-bottom: 40px;

        scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);

        scrollbar-width: auto;
      }

      @media (max-width: 500px) {
        margin-bottom: 30px;
      }
    }

    &__article {
      position: relative;
      display: block;
      width: 48.5%;
      
      /* тень карточки */
      filter: drop-shadow(5px 6px 16px rgba(42, 42, 42, 0.16));

      @media (max-width: 960px) {
        width: 100%;

        margin-bottom: 20px;
      }

      @media (max-width: 768px) {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;

        margin: 0 10px 15px;

        filter: none;
      }
    }

    &__halloween {
      width: 100%;
      height: auto;
      border-radius: 9px;
    }

    &__tournament-warhammer {
      width: 100%;
      height: auto;
      border-radius: 9px;
    }

    &__description {
      position: absolute;
      bottom: 4px;
      left: 0;
      max-height: 119px;
      width: 100%;
      background: $--color-main;
      opacity: 0.79;
      border-radius: 0px 0px 9px 9px;
      color: $--color-white;

      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      @media (max-width: 500px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    &__wrap-info {
      margin: 0 auto;
      width: 90%;
    }


    &__date-wrap {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 22px;
      margin-bottom: 11px;
      width: 100%;

      @media (max-width: 500px) {
        display: block;

        margin-top: 15px;
        margin-bottom: 5px;
      }
    }

    &__title-description {
      font-weight: 700;
      font-size: 19px;

      color: $--color-active;

      @media (max-width: 500px) {
        font-size: 16px;
      }
    }

    &__text {
      margin-bottom: 22px;

      @media (max-width: 500px) {
        margin-bottom: 10px;
      }
    }


    &__button {

      @include basic-button-link ();

      width: 311px;
      height: 71px;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 23px;
      line-height: 27px;

      margin: 0 auto;

      @media (max-width:500px) {
        width: 170px;
        height: 37px;

        font-size: 16px;
      }
    }
  }

</style>