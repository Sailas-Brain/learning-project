<template>
  <Header />
  <main>
    <catalog-banner />
    <Filter />

  </main>

  <Footer />
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CatalogBanner from '@/components/CatalogBanner.vue'
import Filter from '@/components/Filter.vue'
  
export default {
  
  components: {
    Header,
    Footer,
    CatalogBanner,
    Filter,
  },
  
  data() {
    return {

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
</style>
