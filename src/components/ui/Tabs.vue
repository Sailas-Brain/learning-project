<template>
  <div class="tabs">
    <div class="tabs__tabs-navigation">
      <template  
        v-for="(tab, index) in tabs" 
        :key="index.id" 
      >
        <button class="tabs__tab-btn" @click="handlerClick(index)" ref="tabs">{{ tab }}</button>
      </template>
    </div>
    <div class="tabs__tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tabs',

  props: {

    tabs: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: []
    }

  },

  data() {
    return {

    }
  },

  mounted() {

    this.$refs.tabs[0].classList.add("active");

  },  

  methods: {
    handlerClick(index) {
      this.$refs.tabs.forEach(elem => elem.classList.remove('active'))
      const target = event.target;
      target.classList.add("active");

      this.$emit("handlerClick", index);
    }
  }
}

</script>

<style lang="scss">

  .tabs {
    max-width: 700px;
    margin: 0 auto;

    &__tabs-navigation {
      display: flex;
      justify-content: space-between;
    }

    &__tab-btn {
      width: 150px;
      height: 30px;
      cursor: pointer;
      border-radius: 6px;

      &.active {
        background: #999;
      }
    }

    &__tabs-content {
      margin-top: 30px;
    }

    &__item {
      display: none;

      &.active {
        display: block;
      }
    }

  }

</style>