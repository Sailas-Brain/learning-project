<template>
  <main class="greetings">
    <h1>{{ msg }}</h1>
    <my-button class="button">Создать пост</my-button>
    <link-button class="button">Создать пост</link-button>
    <banner-on-main />
    <catalog-on-main />
    
  </main>
</template>

<script>
  import bannerOnMain from '@/components/bannerOnMain.vue'
  import CatalogOnMain from '@/components/CatalogOnMain.vue'
  

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
