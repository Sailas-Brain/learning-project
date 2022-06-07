<template>
  <div class="info">
    <h2>О центре</h2>
    <div class="info__mission">
      <div class="info__text">
        <h3>Наша миссия</h3>
        <p>Разнообразный и богатый опыт укрепление и развитие структуры в значительной степени обуславливает создание модели развития.
           Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров,
            соответствует насущным потребностям. Повседневная практика показывает, 
            что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. 
            Повседневная практика показывает, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание новых предложений.
        </p>
      </div>

      <div class="info__photo">
        <div class="info__wrapp-img"><img src="@/assets/images/info-shop_img1.jpg" alt=""></div>
        <div class="info__wrapp-img"><img src="@/assets/images/info-shop_img2.jpg" alt=""></div>
      </div>

    </div>

    <div class="info__events">
      <div class="info__text info__text--last">
        <h3>Наши мероприятия</h3>
        <p>Не следует, однако забывать, что укрепление и развитие структуры представляет собой интересный эксперимент проверки модели развития.
           С другой стороны реализация намеченных плановых заданий в значительной степени обуславливает создание систем массового участия.</p>
      </div>

      <div class="info__photo">
        <div class="info__wrapp-img"><img src="@/assets/images/info-shop_img3.jpg" alt=""></div>
        <div class="info__wrapp-img"><img src="@/assets/images/info-shop_img4.jpg" alt=""></div>
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .info {
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 20px;

    h2 {
      @include title-h2 ();
      margin-top: 10px;
    }

    &__mission {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      margin: 20px auto 80px;
      
      @media (max-width: 900px) {
        display: block;
        margin: 20px auto;
      }
    }

    &__text {
      max-width: 47%;
      font-family: "trebuchetms";
      box-sizing: border-box;
      margin-right: 15px;

      &--last {
        margin-right: 0;
        margin-left: 15px;
      }



      h3 {
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 20px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }

      @media (max-width: 900px) {
        max-width: 100%;
        margin: 0 auto;
      }
    }
    &__photo {
      display: flex;
      justify-content: space-between;
      width: 50%;

      img {
        display: block;
        max-width: 255px;
        width: 100%;
        height: auto;
        border-radius: 9px;

        @media (max-width: 900px) {
          max-width: 100%;
          margin: 30px auto;
        }
        
      }

      @media (max-width: 900px) {
        width: 100%;
        margin: 0 auto;
      }
    }
    &__wrapp-img {
      width: 48%;
    }



    &__events {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      img {
        margin-left: 0;
        margin-right: 10px;
      }

      @media (max-width: 900px) {
        display: block;
      }
    }

    
  }
</style>