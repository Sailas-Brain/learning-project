<template>
  <div class="card">
    <div class="card__wrapp">
      <img class="card__img" src="@/assets/images/image 12.jpg" width="193px" height="168px" alt="">
      <div class="card__params">
        <div class="card__audience">
          <img src="@/assets/images/audience 1.svg" width="18px" height="18px" alt="">
          <p>2-4</p>
        </div>
        <div class="card__time">
          <img src="@/assets/images/ic_sharp-timer.svg" alt="">
          <p>30-60</p>
        </div>
        <p>18+</p>
      </div>
      <h4 class="card__name">Warhammer 40,000: Chaos Space Marines</h4>
      <p class="card__price">3657 ₽</p>
      <button class="card__basket">В корзину <img src="@/assets/images/clarity_shopping-cart-line.svg" alt=""></button>
      <a class="card__buy-now" href="">Купить в 1 клик</a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'card-product'
  }

</script>

<style lang="scss" scoped>

* {
  padding: 0;
  margin: 0;
}
  .card {
    margin: 50px auto;
    width: 255px;
    min-height: 409px;
    background: #FFFFFF;
    box-shadow: 5px 6px 16px rgba(42, 42, 42, 0.16);
    border-radius: 9px;
    box-sizing: border-box;

    &__wrapp {
      margin: 15px auto;
      box-sizing: border-box;
      width: 80%;
      padding-top: 10px;
    }

    &__img {
      display: block;
      margin: auto;
      margin-bottom: 5px;
    }

    &__params {
      display: flex;
      justify-content: space-between;
      width: 70%;
      margin: auto;

      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;

      p {
        display: flex;
        align-items: center;
      }
    }

    &__audience {
      display: flex;
      align-items: center;

      img {
        margin-right: 5px;
      }
    }

    &__time {
      display: flex;
      align-items: center;

      img {
        margin-right: 5px;
      }
    }
    &__name {
      width: 155px;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      line-height: 128.68%;
      text-align: center;
      color: #2A2A2A;
      margin: 11px auto;
    }

    &__price {
      width: 69px;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #2A2A2A;
      margin: 11px auto;
    }

    &__basket {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 163px;
      height: 34px;
      background: linear-gradient(184.53deg, #F9A43F 5.27%, #FB791B 91.78%);
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
      border-radius: 9px;
      cursor: pointer;
      margin: 10px auto;
      border: none;

      img {
        margin-left: 7px;
      }
    }

    &__buy-now {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: auto;
      width: 163px;
      height: 34px;
      text-decoration: none;
      border: 2px solid #F9A43F;
      border-radius: 9px;
      color: #F9A43F;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
  }
</style>