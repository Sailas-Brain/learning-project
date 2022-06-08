<template>
  <main class="greetings">
    <slider-main 
      :options="options"
      newClass="item-banner"
    >
      <template 
        v-for="slide in slides" 
        :key="slide.id"
      >
        <splide-slide class="banner__slide" >
          <item-banner-on-main
            :index="slide.id"
            :src="slide.src"
            :relation="slide.relation"
            :game="slide.game"
          />
        </splide-slide>
      </template>
    </slider-main>
    <catalog-on-main />
    <div class="title">
      <h2>Успей купить</h2>
    </div>
    <slider-main
      :options="optionsCard"
      newClass="card"
    >
      <template 
        v-for="card in cardsForMobile"
        :key="card.id"
      >
        <splide-slide class="banner__slide" >
          <card-product
            :src="card.src"
            :comunity="card.comunity"
            :time="card.time"
            :age="card.age"
            :name="card.name"
            :price="card.price"
          />
          </splide-slide>
      </template>
    </slider-main>

    <div class="title">
      <h2>Специальные предложения</h2>
    </div>
    <slider-main
      :options="optionsCard"
      newClass="card"
    >
      <template 
        v-for="card in cardsSaleForMobile"
        :key="card.id"
      >
        <splide-slide class="banner__slide" >
          <card-product
            :src="card.src"
            :comunity="card.comunity"
            :time="card.time"
            :age="card.age"
            :name="card.name"
            :price="card.price"
            :sale="card.sale"
            :discount="card.discount"
          />
        </splide-slide>
      </template>
    </slider-main>


    <event-on-main />
    <more-info-on-main />
    <info-shop-on-main />
    <contacts-and-map />
  </main>
</template>

<script>
import SliderMain from '@/components/ui/SliderMain.vue'
import CatalogOnMain from '@/components/CatalogOnMain.vue'
import moreInfoOnMain from '@/components/moreInfoOnMain.vue'
import EventOnMain from '@/components/EventOnMain.vue'
import InfoShopOnMain from '@/components/InfoShopOnMain.vue'
import ContactsAndMap from '@/components/ContactsAndMap.vue'
import ItemBannerOnMain from '@/components/ItemBannerOnMain.vue'
import CardProduct from './cardProduct.vue'
  
export default {
  
  components: {
    SliderMain,
    CatalogOnMain,
    moreInfoOnMain,
    EventOnMain,
    InfoShopOnMain,
    ContactsAndMap,
    ItemBannerOnMain,
    CardProduct
  },

  data() {
    return {
      options: {
        rewind : true,
        width  : '100%',
        autoplay: 5000,
        type   : 'loop',
        padding: '20%',
        pagination: false,
        breakpoints: {
          1300: {
            padding: 0,
            perPage: 1,
          },
          768: {
            arrows: false,
            pagination: true,
          }
        },
      },
      slides: [
        {
          id: 1,
          src: '/src/assets/images/magic-cathering_banner.jpg',
          relation: 'Самая популярная карточная игра',
          game: 'Magic: the Gathering1'
        },
        {
          id: 2,
          src: '/src/assets/images/magic-cathering_banner.jpg',
          relation: 'Самая популярная карточная игра',
          game: 'Magic: the Gathering2'
        },
        {
          id: 3,
          src: '/src/assets/images/magic-cathering_banner.jpg',
          relation: 'Самая популярная карточная игра',
          game: 'Magic: the Gathering3'
        },
      ],
      optionsCard: {
        rewind : true,
        width  : '100%',
        gap    : '1rem',
        perPage: 4,
        type   : 'loop',
        pagination: false,
        breakpoints: {
          1200: {
            pagination: true,
            arrows: false,
          },
          1100: {
            perPage: 3,
          },
          830: {
            perPage: 2,
          },
          560: {
            perPage: 1,
          }
        },
      },
      cards: [
        {
          id: 1,
          src: '/src/assets/images/chaos_space_marines.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: 'Magic: the Gathering',
          price: '3657',
        },
        {
          id: 2,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '6000',
        },
        {
          id: 3,
          src: '/src/assets/images/broken_realms-card.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: "Broken Realms: Horrek's Dreadlance",
          price: '4999'
        },
        {
          id: 4,
          src: '/src/assets/images/star_wars-card.jpg',
          comunity: '3-8',
          time: '30-60',
          age: '16',
          name: 'Звездные войны Внешнее кольцо',
          price: '3957'
        },
        {
          id: 5,
          src: '/src/assets/images/chaos_space_marines.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: 'Magic: the Gathering',
          price: '3657',
        },
        {
          id: 6,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '6000',
        },
        {
          id: 7,
          src: '/src/assets/images/broken_realms-card.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: "Broken Realms: Horrek's Dreadlance",
          price: '4999'
        },
        {
          id: 8,
          src: '/src/assets/images/star_wars-card.jpg',
          comunity: '3-8',
          time: '30-60',
          age: '16',
          name: 'Звездные войны Внешнее кольцо',
          price: '3957'
        },
        {
          id: 9,
          src: '/src/assets/images/chaos_space_marines.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: 'Magic: the Gathering',
          price: '3657',
          sale: 15,
        },
        {
          id: 10,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '6000',
        },
        {
          id: 11,
          src: '/src/assets/images/broken_realms-card.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: "Broken Realms: Horrek's Dreadlance",
          price: '4999',
        },
        {
          id: 12,
          src: '/src/assets/images/star_wars-card.jpg',
          comunity: '3-8',
          time: '30-60',
          age: '16',
          name: 'Звездные войны Внешнее кольцо',
          price: '3957'
        },
      ],
      cardsSale: [
        {
          id: 1,
          src: '/src/assets/images/chaos_space_marines.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: 'Magic: the Gathering',
          price: '3657',
          sale: 15,
          discount: '2999',
        },
        {
          id: 2,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '6000',
          sale: 20,
          discount: '3999',
        },
        {
          id: 3,
          src: '/src/assets/images/broken_realms-card.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: "Broken Realms: Horrek's Dreadlance",
          price: '4999',
          sale: 15,
          discount: '3999',
        },
        {
          id: 4,
          src: '/src/assets/images/star_wars-card.jpg',
          comunity: '3-8',
          time: '30-60',
          age: '16',
          name: 'Звездные войны Внешнее кольцо',
          price: '3957',
          sale: 15,
          discount: '2999',
        },
        {
          id: 5,
          src: '/src/assets/images/chaos_space_marines.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: 'Magic: the Gathering',
          price: '3657',
          sale: 20,
          discount: '3999',
        },
        {
          id: 6,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '6000',
          sale: 20,
          discount: '3999',
        },
        {
          id: 7,
          src: '/src/assets/images/broken_realms-card.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: "Broken Realms: Horrek's Dreadlance",
          price: '4999',
          sale: 15,
          discount: '3999',
        },
        {
          id: 8,
          src: '/src/assets/images/star_wars-card.jpg',
          comunity: '3-8',
          time: '30-60',
          age: '16',
          name: 'Звездные войны Внешнее кольцо',
          price: '3957',
          sale: 15,
          discount: '3999',
        },
        {
          id: 9,
          src: '/src/assets/images/chaos_space_marines.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: 'Magic: the Gathering',
          price: '3657',          
          sale: 15,
          discount: '3999',
        },
        {
          id: 10,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '6000',
          sale: 30,
          discount: '3999',
        },
        {
          id: 11,
          src: '/src/assets/images/broken_realms-card.jpg',
          comunity: '2-4',
          time: '30-60',
          age: '18',
          name: "Broken Realms: Horrek's Dreadlance",
          price: '4999',
          sale: 10,
          discount: '4000',
        },
        {
          id: 12,
          src: '/src/assets/images/star_wars-card.jpg',
          comunity: '3-8',
          time: '30-60',
          age: '16',
          name: 'Звездные войны Внешнее кольцо',
          price: '3957',
          sale: 15,
          discount: '3999',
        },
      ],
    }
  },

  computed: {
    cardsSaleForMobile() {
      if(window.innerWidth < 800) {
        return this.cardsSale.filter((elem, index) => index < 4);
      }
      return this.cardsSale
    },
    cardsForMobile() {
      if(window.innerWidth < 800) {
        return this.cards.filter((elem, index) => index < 4);
      }
      return this.cards
    }
  },
 
}

</script>

<style lang="scss" scoped>
  .greetings {

    h1 {
      color: $--color-dove-gray;
      font-family: "trebuchetms";
    }
  }
  .title {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 20px;
    padding: 0 20px;

    @media (max-width: 830px) {
      margin-top: 60px;
    }
    
    @media (max-width: 600px) {
      margin-top: 40px;
    }

  }

</style>
