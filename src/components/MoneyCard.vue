<template>
  <div class="money">
    {{billMoney}} left
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'MoneyCard',
  computed: {
    ...mapGetters(['billMoney']),
  },
};

</script>

<style lang="scss" scoped>
  .money {
    color: white;
    background-color: rgb(46, 204, 113);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    top: 0px;
    position: sticky;
    padding: 20px;
    margin: 10px 0px;
  }
</style>
