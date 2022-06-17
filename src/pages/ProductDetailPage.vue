<template>
  <Header />
  <!-- <slider-main :options="options">
    <template 
        v-for="slide in slides" 
        :key="slide.id"
      >
        <splide-slide >
          <img 
            :index="slide.id"
            :src="slide.src">
        </splide-slide>
      </template>
  </slider-main>
  <slider-main :options="options">
    <template 
        v-for="slide in slides" 
        :key="slide.id"
      >
        <splide-slide >
           <img 
            :index="slide.id"
            :src="slide.src">
        </splide-slide>
      </template>
  </slider-main> -->
  <main>
    <tabs 
      :tabs="tabs"
      @handlerClick="changeContent"
      :componentsList="comp"
    >
      <div class="tabs__item active" ref="item-0">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum sit quia libero et dolore.</p>
      </div>

      <div class="tabs__item" ref="item-1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fuga eos. Sint veritatis itaque omnis unde cumque animi, laborum sed.</p>
      </div>

      <div class="tabs__item" ref="item-2">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint aspernatur nemo magnam deleniti a omnis, maxime at consectetur necessitatibus corporis minus vero nesciunt fugit dolorum eaque modi excepturi. Aperiam, cupiditate.</p>
      </div>

      <div class="tabs__item" ref="item-3">
        <discription-product />
      </div>
    </tabs>

    <div class="info-card">
      
      <div class="info-card__wrapp">
        <p class="info-card__number">Код товара:842672</p>

        <div class="info-card__params">
          <div class="info-card__audience">
            <img src="@/assets/images/audience_1.svg" alt="">
            <p>2-6</p>
          </div>
          <div class="info-card__time">
            <img src="@/assets/images/ic_sharp-timer.svg" alt="">
            <p>30-60</p>
          </div>
          <p class="info-card__age">6+</p>
        </div>

        <div class="info-card__price-wrap">
          <p class="info-card__price">2390 ₽ </p>
          <p class="info-card__discount">1790 ₽</p>
        </div>

        <button class="info-card__basket">В корзину <img src="@/assets/images/shopping-cart.svg" alt=""></button>
        <a class="info-card__buy-now" href="#">Купить в 1 клик</a>
      </div>
      <hr>
      <div class="info-card__accordion">
        <vue-collapsible-panel-group>

          <div class="accordion__item">
            <vue-collapsible-panel >
              <template #title>
                <h4>Доставка</h4>
              </template>
              <template #content>
                <p class="accordion-text">Самовывоз из магазина: сегодня
                  Самовывоз из 761 пункта: 1-3 дня
                  Курьерская доставка: 1-3 дня
                  Доставка почтой: от 3 дней
                </p>
              </template>
            </vue-collapsible-panel>
          </div>

          <div class="accordion__item">
            <vue-collapsible-panel :expanded="false">
              <template #title>
                <h4>Оплата</h4>
              </template>
              <template #content>
                <p class="accordion-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, perspiciatis.</p>
              </template>
            </vue-collapsible-panel> 
          </div>
        </vue-collapsible-panel-group>

        <button class="info-card__question">Задать вопрос</button>

      </div>
    </div>

  </main>

  <Footer />
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import DiscriptionProduct from '@/components/DiscriptionProduct.vue'
  
export default {
  
  components: {
    Header,
    Footer,
    DiscriptionProduct
  },
  
  data() {
    return {
      options: {
        rewind : true,
        width  : '100%',
        type   : 'loop',
        padding: '20%',
        pagination: false,
        breakpoints: {

        },
      },
      slides: [
        {
          id: 1,
          src: '/src/assets/images/jenga-pdp-img1.jpg',
        },
        {
          id: 2,
          src: '/src/assets/images/jenga-pdp-img1.jpg',
        },
        {
          id: 3,
          src: '/src/assets/images/jenga-pdp-img1.jpg',
        },
      ],
      tabs: ['Описание', 'Характеристики', 'Правила', ' Вопрос-ответ',],
    }
  },

  methods: {
    changeContent(index) {
      const allItems = document.querySelectorAll('.tabs__item');
      allItems.forEach(elem => elem.classList.remove('active'));

      this.$refs['item-' + index].classList.add("active");
    }
  }
}

</script>

<style lang="scss" scoped>

main {
  max-width: 1110px;
  margin: 0 auto;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
}

.info-card {
  background: $--color-white;
  font-family: "trebuchetms";
  max-width: 349px;
  margin-left: 34px;
  box-shadow: 5px 6px 16px rgba(42, 42, 42, 0.16);
  border-radius: 9px;
  padding: 1px 0;

  &__wrapp {
    margin: 20px;
  }

  &__number {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: $--color-main;
    opacity: 0.74;
    text-align: end;
  }

  &__params {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: 15px auto;
      font-family: "trebuchetms";
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

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
        width: 40px;
        height: 40px;
      }
    }

    &__time {
      display: flex;
      align-items: center;

      img {
        margin-right: 5px;
        width: 32px;
        height: 32px;
      }
    }

    &__age {
      font-size: 24px;
      line-height: 28px;
    }


    &__price-wrap {
      text-align: center;
    }

    &__price {
      font-weight: 400;
      font-size: 25px;
      line-height: 29px;
      color: $--color-main;
      text-decoration: line-through;
    }

    &__discount {
      font-weight: 700;
      font-size: 45px;
      line-height: 52px;
      color: $--color-main;
      margin-bottom: 35px;
    }

    &__basket {
      @include basic-button-link ();
      width: 100%;
      max-width: 281px;
      height: 49px;
      font-size: 16px;
      line-height: 19px;
      margin: 20px auto;


      &:hover,
      &:focus {
        font-size: 18px;
        transition: all .3s ease;
      }

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
      width: 100%;
      max-width: 281px;
      height: 49px;
      text-decoration: none;
      border: 2px solid #F9A43F;
      border-radius: 9px;
      color: #F9A43F;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 40px;

      &:hover,
      &:focus {
        border: 3px solid #fd9126;
        font-size: 18px;
        color:#fd9126;
        transition: all .3s ease;
      }
    }

    &__accordion {
      margin:0 30px 20px;
    }

    .accordion__item {
      border: none;

      h4 {
        font-weight: 700;
      }
    }
    .accordion-text {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      padding-right: 20px;
      opacity: 0.7;
    }

    hr {
      height: 2px;
      background: rgba(42, 42, 42, 0.12);
      border: none;
    }

    &__question {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: auto;
      width: 100%;
      max-width: 281px;
      height: 49px;
      text-decoration: none;
      border: 1px solid rgba(42, 42, 42, 0.19);
      border-radius: 9px;
      color: $--color-main;
      opacity: 0.74;
      font-family: "trebuchetms";
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      background: $--color-white;
      cursor: pointer;
      margin-bottom: 29px;

      &:hover,
      &:focus {
        border: 2px solid rgba(42, 42, 42, 0.5);
        font-size: 18px;
        transition: all .3s ease;
      }
    }

}
</style>