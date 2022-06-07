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
      ]
    }
  },

  components: {
    SliderMain,
    CatalogOnMain,
    moreInfoOnMain,
    EventOnMain,
    InfoShopOnMain,
    ContactsAndMap,
    ItemBannerOnMain
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
