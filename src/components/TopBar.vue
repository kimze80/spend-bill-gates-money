<template>
  <div class="top-bar">
    <div class="top-bar__text">Kim.fun</div>
  </div>
</template>

<script>
export default {
  name: 'MoneyCard',
};
</script>

<style lang="scss" scoped>
  .top-bar {
    font-size: 30px;
    font-weight: bold;
    background-color: white;
    margin-bottom: 25px;
    padding: 30px 0px;

    &__text {
      max-width: 950px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 15px;
    }
  }
</style>
