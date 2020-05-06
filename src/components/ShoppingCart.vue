<template>
  <div class="shopping-cart" v-if="shoppingCart.length">
    <h1>Your Shopping Spree</h1>
    <div class="shopping-cart__items">
      <div class="shopping-cart__items__item" v-for="item in shoppingCart" :key="item.id">
        <img :src="item.image" />
        <p class="shopping-cart__items__item--text">{{ item.name }} x {{ item.quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'MoneyCard',
  computed: {
    ...mapGetters(['shoppingCart']),
  },
};
</script>

<style lang="scss" scoped>
  .shopping-cart {
    max-width: 100%;
    background-color: white;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    padding: 15px;

    h1 {
      text-align: center;
      font-size: 28px;
      color: rgb(46, 204, 113);
      font-weight: bold;
      padding: 15px;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 0px;

      &__item {
        text-align: center;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;

        img {
          max-height: 50px;
          max-width: 50px;
          margin-right: 7px;
          display: inline;
        }

        p {
          font-size: 16px;
          font-weight: bold;
          display: inline;
        }
      }
    }
  }
</style>
