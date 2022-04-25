<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

.container {
  width: 1200px;
  margin: 0 auto;
}

</style>
