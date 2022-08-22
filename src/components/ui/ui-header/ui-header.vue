<template>

  <div class="header">
    <div class="header__inner">
      <div class="header__logo">MORENT</div>
      <div class="search">
        <img src="public/search-normal.svg" alt="search-icon">
        <input type="text" placeholder="Search something here" />
        <img src="public/filter.svg" alt="search-filter">
      </div>
    </div>

    <div class="header__inner">
      <div class="header__right">

        <ui-btn-circle><img src="public/heart.svg" style="padding: 3px 2px 3px 2px"></ui-btn-circle>
        <ui-btn-circle notification ><img src="public/notification.svg"></ui-btn-circle>
        <ui-btn-circle><img src="public/settings.svg" style="padding: 2.5px 2px 2.5px 2px"></ui-btn-circle>
        <ui-btn-circle style="padding: 0"><img src="public/avatar.jpg"></ui-btn-circle>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ui-header",
  components: {}

}
</script>

<style lang="scss" scoped>



</style>