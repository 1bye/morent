<template>
  <div class="__stars" ref="stars">

  </div>
</template>

<script>
export default {
  name: "ui-star-review",
  props: {
    count: { type: Number, default: 0 }
  },
  mounted() {
    const stars = this.$refs.stars
    const star1Path = '<img src="public/star1.svg" >'
    const star2Path = '<img src="public/star2.svg" >'
    let r = 5 - this.count

    for (let i = 0; i < this.count; i++)
      stars.innerHTML += star1Path

    for (let i = 0; i < r; i++)
      stars.innerHTML += star2Path

  }

}
</script>

<style lang="scss" scoped>
  .__stars {
    width: 108px;
    display: flex;
    flex-direction: row;
    gap: 2px;
    height: 20px;
  }
</style>