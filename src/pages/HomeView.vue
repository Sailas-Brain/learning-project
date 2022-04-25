<template>
  <Header />

  <Main msg="Hello Main" />

  <Footer />
</template>


<script>
  import Header from '@/components/layout/Header.vue'
  import Footer from '@/components/layout/Footer.vue'
  import Main from '@/components/Main.vue'


  export default {
    
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style scoped>

</style>