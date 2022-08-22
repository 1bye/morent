<template>
  <div class="card__car__list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ui-card-list"
}
</script>

<style lang="scss" scoped>

  .card__car__list {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: 1300px) {
      justify-content: center;
    }
  }

</style>