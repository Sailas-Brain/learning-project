<template>
  <div class="social">
    <a class="social-icon" href="#">
      <img class="instagram-icon" src="@/assets/pictures/instagram-icon.svg">
    </a>

    <a class="social-icon social-icon--position" href="#">
      <img class="vk-icon" src="@/assets/pictures/vk-icon.svg">
      <img class="vk" src="@/assets/pictures/vk.svg">
    </a>

    <a class="social-icon" href="#">
      <img class="facebook-icon" src="@/assets/pictures/facebook-icon.svg">
    </a>
  </div>
</template>


<script>
export default {
  name: 'icon-social'
}
</script>

<style lang="scss" scoped>

    .social {
      display: flex;
      align-items: center;
      width: 83px;
      margin-left: auto;
      
    }

    .social-icon {
      display: flex;
      align-items: center;
      text-align: center;
      width: 30x;
      height: 30px;

      &--position {
        position: relative;
      }
    }

    .vk-icon {
      text-align: center;
      margin: 0 6px;
    }

    .vk {
      position: absolute;
      top:11px;
      left: 11px;
    }

</style>