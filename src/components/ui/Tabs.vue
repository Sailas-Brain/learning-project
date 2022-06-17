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
    width: 70%;
    font-family: "trebuchetms";
    
    &__tabs-navigation {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(42, 42, 42, 0.12);
    }

    &__tab-btn {
      cursor: pointer;
      border: none;
      background: inherit;
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      
      &.active {
        border-bottom: 3px solid #2A2A2A;
      }
    }

    // &__tabs-content {
    //   margin-bottom: 10px;
    // }

    &__item {
      display: none;

      &.active {
        display: block;
      }

      p {
        margin-top: 20px;
      }
    }

  }

</style>