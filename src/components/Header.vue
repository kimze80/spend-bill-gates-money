<template>
  <div class="header">
    <div class="header__main">
      <img src="https://neal.fun/Spend/billgates.png" alt="Bill Gates">
      <h1>Spend Bill Gates Money</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>

  .header {
    &__main {
      margin-bottom: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 1.6em;
      background: white;
      padding: 30px 20px;

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 35px;
        width: 125px;
        height: 125px;
        border-radius: 50%;
      }

      h1 {
        font-weight: bold;
        margin-bottom: 10px;
      }
    }

  }
</style>
