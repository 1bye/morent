<template>
  <div class="dropdown">
    <div @click="dropdown"  class="dropdown__title">{{ title }} <img src="public/arrow-down.svg" alt="arrow-down"></div>
    <div v-if="showDropDown" class="dropdown__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-dropdown",
  props: {
    title: String,
    show: { type: Boolean, default: false }
  },
  data() {
    return {
      showDropDown: false,
    }
  },
  mounted() {
    this.showDropDown = this.show

  },
  methods: {
    dropdown(){
      this.showDropDown = !this.showDropDown
    }
  }
}
</script>

<style lang="scss" scoped>

  .dropdown {

    .dropdown__title {
      font-weight: 500;
      font-size: 12px;
      line-height: 200%;
      letter-spacing: -0.01em;
      color: #90A3BF;
      display: flex;
      gap: 22px;

      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      
      @media (max-width: 600px) {
        max-height: 20px;
        overflow-y: hidden;
      }
    }

    .dropdown__content {
      position: absolute;
      height: auto;
      min-width: 125px;
      width: auto;
      background: #ffffff;
      padding: 12px;

      box-shadow:
          0px 0px 0.7px rgba(0, 0, 0, 0.015),
          0px 0px 2.5px rgba(0, 0, 0, 0.018),
          0px 0px 11px rgba(0, 0, 0, 0.05)
      ;

    }
  }

</style>