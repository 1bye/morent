<template>
  <div class="__heart">
    <svg v-if="!liked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 20" fill="none">
      <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="liked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 18" fill="none">
      <path d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z" fill="#ED3F3F"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ui-heart",
  props: {
    liked: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>