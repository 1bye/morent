<template>
  <select class="input-select">
    <option disabled selected > {{ title }}</option>
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "ui-select-border",
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>

  .input-select {
    width: 126px;
    height: 20px;

    border: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 200%;
    color: #90A3BF;
  }

</style>