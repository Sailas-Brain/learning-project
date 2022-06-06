<template>
  <main class="greetings">
    <slider-main 
      :options="options"
    >
      <template v-for="slide in slides" :key="slide.id">
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
    <slider-card-on-main
      :options="optionsCard"
       >
      <template v-for="card in cards" :key="card.id">
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
    </slider-card-on-main>
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
import SliderCardOnMain from '@/components/SliderCardOnMain.vue'
import CardProduct from './cardProduct.vue'
  
export default {
  data() {
    return {
      options: {
        rewind : true,
        width  : '100%',
        // gap    : '1rem',
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
          1100: {
            perPage: 3,
          },
          768: {
            perPage: 2,
            arrows: false,
            pagination: true,
          },
          530: {
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
          name: 'Magic: the Gathering1',
          price: '3657'
        },
        {
          id: 2,
          src: '/src/assets/images/gravity_falls-card.jpg',
          comunity: '2-6',
          time: '20-40',
          age: '6',
          name: 'Гравити Фолз: Спасти Пухлю',
          price: '2657'
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
      ],
    }
  },

  components: {
    SliderMain,
    CatalogOnMain,
    moreInfoOnMain,
    EventOnMain,
    InfoShopOnMain,
    ContactsAndMap,
    ItemBannerOnMain,
    SliderCardOnMain,
    CardProduct
}
}

</script>

<style lang="scss" scoped>
  .greetings {

    h1 {
      color: $--color-dove-gray;
      font-family: "trebuchetms";
    }
  
    
  }
  
</style>
