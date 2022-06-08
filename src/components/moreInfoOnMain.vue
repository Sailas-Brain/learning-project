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

  .information {
    max-width: 1110px;
    margin: 0 auto;
    margin-top: 85px;
    padding: 0 20px;

    @media (max-width: 768px) {
      margin-top: 50px;
    }

    @media (max-width: 500px) {
      margin-top: 35px;
    }

    &__title {
      @include title-h2 ();

      margin-bottom: 21px;
    }

    &__article {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-flow: nowrap;
        overflow: auto;

        ::-webkit-scrollbar {
          width: 10px;
        }

        margin-bottom: 40px;
        scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
        scrollbar-width: auto;
      }

      a:nth-child(2) {
        margin-left: 20px;
        margin-right: 20px;

        @media (max-width: 1130px) {
          margin-right: 0;
        }

        @media (max-width: 768px) {
          margin-left: 0;
        }
      }

      @media (max-width: 500px) {
        margin-bottom: 30px;
      }

    }

    &__item {
      display: block;
      cursor: pointer;
      position: relative;
      width: 350px;
      height: 412px;
      margin-bottom: 30px;
      filter: drop-shadow(5px 6px 16px rgba(42, 42, 42, 0.16));

      h4:hover {
        color: $--color-active;
      }

      @media (max-width: 1130px) {
        width: 48%;
        height: auto;
      }

      @media (max-width: 768px) {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;

        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 15px;

        filter: none;

        width: 100%;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      border-radius: 9px;
    }

    &__discription {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 112px;
      background: $--color-main;
      opacity: 0.79;
      border-radius: 0px 0px 9px 9px;
      color: $--color-white;
      font-family: "trebuchetms";

      h4 {
        width: 290px;
        font-weight: 700;
        font-size: 19px;
        line-height: 22px;
        margin: 21px 0 8px 16px;

        @media (max-width: 500px) {
          font-size: 16px;

          margin: 15px 0 13px 16px;
        }
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
      margin: 8px auto;
      width: 311px;
      height: 71px;
      border: 3px solid $--color-active;
      border-radius: 9px;
      
      text-decoration: none;
      text-align: center;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 23px;
      line-height: 68px;
      color: $--color-active;

      transition: color .3s 
      ease-in-out, background-color .3s 
      ease-in-out, border-color .3s 
      ease-in-out, box-shadow .3s 
      ease-in-out;

      &:hover,
      &:focus {
        border: 3px solid #FB791B;
        color: $--color-white;
        background-color: #ffc107;
        background: linear-gradient(0.53deg, #FF6C00, #F9A43F, #FB791B);
      }

      @media (max-width: 500px) {
        width: 170px;
        height: 37px;

        font-size: 16px;
        line-height: 35px;
      }
    }
  }
</style>