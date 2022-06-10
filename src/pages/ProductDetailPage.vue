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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum sit quia libero et dolore.</p>
    </div>

    <div class="tabs__item" ref="item-1">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fuga eos. Sint veritatis itaque omnis unde cumque animi, laborum sed.</p>
    </div>

    <div class="tabs__item" ref="item-2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora laboriosam esse repudiandae! Dolores, dolor debitis eum repudiandae esse aliquam ad praesentium quam reprehenderit fugiat sequi laudantium excepturi, distinctio ratione.</p>
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
      tabs: ['Описание', 'Характеристики', 'Правила', ' Вопрос-ответ',],
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