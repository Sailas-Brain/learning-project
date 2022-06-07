<template>
  <div class="shop">
    <h2 class="shop__title">Об игровом центре <span>«GoldFish»</span></h2>
    <div class="shop__wrapp">
      <div class="shop__info">
        <p class="shop__text">«GoldFish»- магазин, в котором Вы можете купить отличный подарок как для себя, так и для своих близких.</p>
        <p class="shop__text"> В ассортименте нашего магазина представлены тысячи настольных игр на любой вкус: простые и посложнее, семейные и только для взрослых, для двоих и для больших компаний, детективные и логические, ролевые и стратегические настолки. «GoldFish» также  регулярно проводит собственные игротеки:турниры по Magic: the Gathering (от компании Wizards of the coast) и Warhammer (от Games Workshop).</p>
        <p class="shop__text">В нашем магазине можно найти нужные аксессуары для любимых игр (протекторы для карт и коллекций), инструменты для самостоятельного оформления и покраски фигурок (кейсы, подставки, краски Vallejo и др.) и многое другое.</p>
        <p class="shop__text">«GoldFish» - это не только магазин настольных игр, но и полноценный хобби-центр. Здесь можно арендовать столы для игр с друзьями, проходить обучение и мастер-классы по интересующим тебя играм, заводить новые знакомства и приобщаться к игровому комьюнити!</p>
      </div>

      <div class="shop__photo">
        <img class="shop__img" src="@/assets/images/store-on-main.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'info_shop-on-main'
  }

</script>

<style lang="scss" scoped>

    .shop {
      max-width: 1110px;
      margin: 80px auto;

      @media (max-width: 1110px) {
          margin: 30px auto;
        }

      &__wrapp {
        display: flex;
        justify-content: space-between;
        
        max-width: 1110px;
        margin: 0px auto;

        @media (max-width: 1180px) {
          margin: 0px 20px;
          align-items: center;
        }

        @media (max-width: 900px) {
          flex-direction: column-reverse;
        }
      }

      &__info {
        max-width: 45%;

        @media (max-width: 900px) {
          max-width: 93%;
          margin-top: 20px;
        }
      }

      &__title {
        @include title-h2 ();
        
        margin-bottom: 21px;

        @media (max-width: 1180px) {
          margin: 0px 20px 21px;
        }
        @media (max-width: 900px) {
          margin: 0px 40px ;
          font-size: 21px;
          line-height: 24px;
        }

        span {
          @media (max-width: 500px) {
            display: none;
          }
        }

      }

      &__text {
        font-family: "trebuchetms";
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        text-align: justify;
        margin-bottom: 17px;
      }

      &__photo {
        max-width: 49%;

        @media (max-width: 900px) {
          max-width: 93%;
          margin-top: 20px;
        }

      }

      &__img {
        width: 100%;
        height: auto;
        border-radius: 9px;
        filter: drop-shadow(5px 6px 16px rgba(42, 42, 42, 0.16));
      }
      
    }
</style>