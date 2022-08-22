<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ui-container"
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding:32px 32px 0 32px;
    flex-direction: column;
    @media (max-width: 500px) {
      padding: 16px;
    }
  }

</style>