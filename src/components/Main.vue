<template>
  <main class="greetings">
    <banner-on-main />
    <catalog-on-main />
    <event-on-main />
  </main>
</template>

<script>
  import bannerOnMain from '@/components/bannerOnMain.vue'
  import CatalogOnMain from '@/components/CatalogOnMain.vue'
  import EventOnMain from '@/components/EventOnMain.vue'
  

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
      EventOnMain
      
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
