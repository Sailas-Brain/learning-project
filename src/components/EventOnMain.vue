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
    </div>
</template>

<script>
  export default {
      name: 'event-on-main'
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .events {
    width: 100%;

    &__title {
      @include title-h2 ();

      margin-bottom: 20px;
    }

    &__container {
      max-width: 1110px;
      margin: 0 auto;
    }

    &__wrap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-height: 394px;

    }

    &__article {
      position: relative;
      width: 48.5%;
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
      bottom: 0;
      left: 0;
      max-height: 119px;
      background: #2A2A2A;
      opacity: 0.79;
      border-radius: 0px 0px 9px 9px;
      color: #fff;
      
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
    }

    &__text {
      margin-bottom: 22px;
    }










  }



</style>