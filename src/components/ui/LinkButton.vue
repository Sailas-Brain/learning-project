<template>
  <a href="#" class="link">
    <slot></slot>
  </a>
</template>


<script>
export default {
  name: 'link-button',
  props: {
    
  }
}
</script>

<style lang="scss" scoped>

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 136.24px;
    height: 31.79px;
    background: linear-gradient(184.53deg, #F9A43F 5.27%, #FB791B 91.78%);
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 9px;
    outline: 0;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: "trebuchetms";
  }

</style>