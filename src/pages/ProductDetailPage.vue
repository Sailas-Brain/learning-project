<template>
  <Header />
  <!-- <slider-main :options="options">
    <template 
        v-for="slide in slides" 
        :key="slide.id"
      >
        <splide-slide >
          <img 
            :index="slide.id"
            :src="slide.src">
        </splide-slide>
      </template>
  </slider-main>
  <slider-main :options="options">
    <template 
        v-for="slide in slides" 
        :key="slide.id"
      >
        <splide-slide >
           <img 
            :index="slide.id"
            :src="slide.src">
        </splide-slide>
      </template>
  </slider-main> -->

  <discription-product />
  <Footer />
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import DiscriptionProduct from '@/components/DiscriptionProduct.vue'
  
export default {
  
  components: {
    Header,
    Footer,
    DiscriptionProduct
  },
  
  data() {
    return {
      options: {
        rewind : true,
        width  : '100%',
        type   : 'loop',
        padding: '20%',
        pagination: false,
        breakpoints: {

        },
      },
      slides: [
        {
          id: 1,
          src: '/src/assets/images/jenga-pdp-img1.jpg',
        },
        {
          id: 2,
          src: '/src/assets/images/jenga-pdp-img1.jpg',
        },
        {
          id: 3,
          src: '/src/assets/images/jenga-pdp-img1.jpg',
        },
      ],
    }

  },
}

</script>

<style lang="scss" scoped>

</style>