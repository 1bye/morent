<template>
  <button class="btn-circle">
    <span v-if="notification" class="notification"></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ui-btn-circle",
  props: {
    notification: { type: Boolean }
  }
}

</script>

<style lang="scss" scoped>

  .btn-circle {
    display: flex;
    justify-content: center;
    align-content: center;

    opacity: 0.8;
    background: none;
    border: 1px solid rgba(195, 212, 233, 0.4);
    border-radius: 90px;
    padding: 10px;

    .notification {
      background: #FF4423;
      color: #ffffff;
      position: absolute;
      height: 11px;
      width: 11px;
      border-radius: 100vw;
      margin-left: 30px;
      margin-top: -10px;
    }

  }


</style>