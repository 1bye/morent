<template>
  <button class="btn-round-circle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ui-btn-round-circle"
}
</script>

<style lang="scss" scoped>

  .btn-round-circle {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #3563E9;
    border-radius: 10px;
    border: 0;

    &:hover {
      background: #3D81DB;
    }
  }

</style>