<template>
  <div class="information">
    <h2 class="information__title">Больше интересной информации</h2>

    <div class="information__article">
      <a class="information__item" href="#">
        <img class="information__img" src="@/assets/images/aironavtic-info.jpg" alt="">
        <div class="information__discription">
          <h4>Аэронавтика Империалис: введение в игру</h4>
          <p>Детально ознакомимся с правилами игры </p>
        </div>
      </a>

      <a class="information__item" href="#">
        <img class="information__img" src="@/assets/images/game_in_steam-info.jpg" alt="">
        <div class="information__discription">
          <h4>Лучшие настолки в Steam для игры с друзьми на карантине</h4>
          <p>По рейтингу 2021</p>
        </div>
      </a>
      
      <a class="information__item" href="#">
        <img class="information__img" src="@/assets/images/desired_release-info.jpg" alt="">
        <div class="information__discription">
          <h4>Желанные, но маловероятные релизы </h4>
          <p>Небольшой список «а вот бы...»</p>
        </div>
      </a>
    </div>

    <a class="information__link" href="">Узнать больше</a>

  </div>
</template>

<script>


  export default {
    name: 'more-info-on-main'

  }

</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .information {
    width: 1110px;
    margin: 85px auto;

    &__title {
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      color: #363636;
      margin-bottom: 21px;
    }

    &__article{
      display: flex;
      justify-content: space-between;
    }

    &__item {
      display: block;
      cursor: pointer;
      position: relative;
      width: 350px;
      height: 413px;
      filter: drop-shadow(5px 6px 16px rgba(42, 42, 42, 0.16));

      h4:hover {
        color: #F9A43F;
      }
    }

    &__img {
      
      width: 350px;
      height: 413px;
      border-radius: 9px;
    }

    &__discription {
      position: absolute;
      bottom: 0;
      width: 350px;
      height: 112px;
      background: #2A2A2A;
      opacity: 0.79;
      border-radius: 0px 0px 9px 9px;
      color: #FFFFFF;
      font-family: "trebuchetms";

      h4 {
        width: 290px;
        font-weight: 700;
        font-size: 19px;
        line-height: 22px;
        margin: 21px 0 8px 16px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-left: 16px;
      }
    }

    &__link {
      display: block;
      margin: 38px auto;
      width: 311px;
      height: 71px;
      border: 3px solid #F9A43F;
      border-radius: 9px;
      
      text-decoration: none;
      text-align: center;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 23px;
      line-height: 68px;
      color: #F9A43F;
      transition: background-color .2s linear;

      &:hover,
      &:focus {
        color: #FFFFFF;
        background-color: #F9A43F ;
      }
    }
  }
</style>