<template>
  <main class="greetings">
    <banner-on-main />
    <catalog-on-main />
    <event-on-main />
    <more-info-on-main />
    <info-shop-on-main />
    <contacts-and-map />
  </main>
</template>

<script>
  import bannerOnMain from '@/components/bannerOnMain.vue'
  import CatalogOnMain from '@/components/CatalogOnMain.vue'
  import moreInfoOnMain from '@/components/moreInfoOnMain.vue'
  import EventOnMain from '@/components/EventOnMain.vue'
  import InfoShopOnMain from '@/components/InfoShopOnMain.vue'
  import ContactsAndMap from '@/components/ContactsAndMap.vue'
  
  export default {
    props: {
      msg: {
        type: String,
        default: '',
      }
    },
    components: {
      bannerOnMain,
      CatalogOnMain,
      moreInfoOnMain,
      EventOnMain,
      InfoShopOnMain,
      ContactsAndMap,
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
