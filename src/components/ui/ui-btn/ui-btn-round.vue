<template>

  <button class="btn-round" ref="btn">
    <slot></slot>
  </button>

</template>

<script>
export default {
  name: "ui-btn-round",
  props: {
    invert: Boolean
  },
  mounted() {
    if (this.invert){
      this.$refs.btn.classList.add('invert')
    }
  }
}
</script>

<style lang="scss" scoped>

  .btn-round {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 8px;

    min-width: 120px;
    height: 44px;

    background: #3563E9;
    border-radius: 4px;
    color: #ffffff;
    border: 0;

    &:hover {
      background: #3D81DB;
    }
  }
  .invert {
    background: #5CAFFC;
    &:hover {
      background: #7EC2FF;
    }

  }

</style>