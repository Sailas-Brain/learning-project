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

  <tabs 
    :tabs="tabs"
    @handlerClick="changeContent"
    :componentsList="comp"
  >
    <div class="tabs__item active" ref="item-0">
      <h1>"hello world</h1>
    </div>

    <div class="tabs__item" ref="item-1">
      <h1>"hello world2</h1>
    </div>

    <div class="tabs__item" ref="item-2">
      <h1>"hello world3</h1>
    </div>

    <div class="tabs__item" ref="item-3">
      <discription-product />
    </div>

  </tabs>


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
      tabs: ['1', '2', '3', '4',],
    }
  },

  methods: {
    changeContent(index) {
      const allItems = document.querySelectorAll('.tabs__item');
      allItems.forEach(elem => elem.classList.remove('active'));

      this.$refs['item-' + index].classList.add("active");
    }
  }
}

</script>

<style lang="scss" scoped>

</style>