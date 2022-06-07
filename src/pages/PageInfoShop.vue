<template>
  <Header />
  <InfoShop />
  <Footer />
</template>

<script>
import InfoShop from '@/components/InfoShop.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
  
export default {
  
  components: {
    InfoShop,
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