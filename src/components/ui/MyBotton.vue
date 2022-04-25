<template>
  <button class="button">
    <slot></slot>
  </button>
</template>


<script>
export default {
  name: 'my-button'
}
</script>

<style lang="scss" scoped>

  .button {
    width: 150px;
    height: 30px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 15px;
  }

</style>