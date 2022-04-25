<template>
  <main class="greetings">
    <h1>{{ msg }}</h1>
    <my-button class="button">Создать пост</my-button>
  </main>
</template>

<script>

  export default {
    props: {
      msg: {
        type: String,
        default: '',
      }
    }
  }

</script>

<style lang="scss" scoped>
  .greetings {

    h1 {
      color: yellow;
    }
    
  }
</style>
