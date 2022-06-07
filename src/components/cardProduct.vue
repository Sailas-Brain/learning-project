<template>
  <div class="card">
    <div class="card__wrapp">
      <img class="card__img" :src="src">
      <div class="card__sale">-15%</div>
      <div class="card__params">
        <div class="card__audience">
          <img src="@/assets/images/audience_1.svg" alt="">
          <p>{{ comunity }}</p>
        </div>
        <div class="card__time">
          <img src="@/assets/images/ic_sharp-timer.svg" alt="">
          <p>{{ time }}</p>
        </div>
        <p>{{ age }}+</p>
      </div>
      <h4 class="card__name">{{ name }}</h4>
      <div class="card__price-wrap">
        <del class="card__discount">4350 ₽</del>
        <p class="card__price">{{ price }} ₽</p>
      </div>  
      <button class="card__basket">В корзину <img src="@/assets/images/shopping-cart.svg" alt=""></button>
      <a class="card__buy-now" href="">Купить в 1 клик</a>
    </div>
  </div>
</template>

<script>

  export default {
    
    props: {
 
    src: {
      type: String,
      default: ''
    },
    comunity: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
  }
  }

</script>

<style lang="scss" scoped>

  .card {
    margin: 50px auto;
    width: 255px;
    min-height: 409px;
    background: #FFFFFF;
    box-shadow: 5px 6px 16px rgba(42, 42, 42, 0.16);
    border-radius: 9px;
    box-sizing: border-box;

    &__wrapp {
      position: relative;
      margin: 15px auto;
      box-sizing: border-box;
      width: 80%;
      padding-top: 10px;
    }

    &__img {
      display: block;
      margin: 11px auto;

      
      height: 150px;
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
        width: 18px;
        height: 18px;
      }
    }

    &__sale {
      position: absolute;

      width: 60px;
      height: 29px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: 'trebuchetms';
      font-size: 16px;
      line-height: 22px;

      background: #F9A43F;
      border-radius: 14px;
      color: #FFFFFF;

      top: 20px;
      right: -20px;
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
      color: $--color-main;
      margin: 11px auto;
    }

    &__price,
    &__discount {
      width: 69px;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: $--color-main;
      margin: 8px 10px;
    }

    &__price-wrap {
      display: flex;
      justify-content: space-between;
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