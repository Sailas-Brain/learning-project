<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">

.container {
  width: 100%;
  margin: 0 auto;
  background: $--color-background;
}

</style>
