<template>
  <main class="greetings">
    <banner-on-main />
    <catalog-on-main />
    
  </main>
</template>

<script>
  import bannerOnMain from '@/components/bannerOnMain.vue'
  import CatalogOnMain from '@/components/CatalogOnMain.vue'
  import moreInfoOnMain from '@/components/moreInfoOnMain.vue'
  

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
      moreInfoOnMain
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
