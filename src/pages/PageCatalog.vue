<template>
  <Header />
  <Catalog />
  <Footer />
</template>

<script>
import Catalog from '@/components/catalog.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
  
export default {
  
  components: {
    Catalog,
    Header,
    Footer
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
