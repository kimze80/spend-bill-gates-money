<template>
  <div class="item">
    <img :alt="name" :src="image">
    <h3>{{name}}</h3>
    <h4>{{formatMoney(price)}}</h4>

    <div class="item__inputs">
      <button
        :class="'item__inputs--btn-sell ' + disabled"
        :disabled="true && quantity < 1"
        @click="sell(id)">
          Sell
      </button>
      <input type="text" class="item__inputs--input" :value="quantity" readonly>
      <button
        class="item__inputs--btn-buy"
        :disabled="true && billMoneyRaw < price"
        @click="buy(id)">
          Buy
      </button>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Item',
  props: {
    image: String,
    name: String,
    price: Number,
    quantity: Number,
    id: Number,
  },

  methods: {
    formatMoney(money) {
      const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });
      return format.format(money);
    },

    ...mapActions(['buy', 'sell']),
  },

  computed: {
    disabled() {
      return this.quantity < 1 && 'disabled';
    },
    ...mapGetters(['billMoneyRaw']),
  },

};
</script>

<style lang="scss" scoped>
  .item {
    max-width: 100%;
    background-color: white;
    text-align: center;
    font-size: 18px;
    padding: 20px 15px;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 110px;
      object-fit: contain;
      padding: 15px 10px 10px;
    }

    h3 {
      font-size: 22px;
      font-weight: bold;
    }

    h4 {
      font-size: 20px;
      font-weight: bold;
      color: rgb(46, 204, 113);
    }

    &__inputs{
      display: flex;
      justify-content: space-between;
      margin-top: 25px;

      input {
        font-size: 16px;
        color: rgb(51, 51, 51);
        font-family: Roboto, sans-serif;
        -webkit-appearance: none;
        padding: 9px 12px;
        border-radius: 3px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(178, 190, 195);
        /* max-width: 100px; */
        text-align: center;
        margin: 0 10px;
        width: 100%;
      }

      button {
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        user-select: none;
        touch-action: manipulation;
        padding: 9px 20px;
        border-radius: 3px;
      }

      &--btn-buy {
        background-color: rgb(5, 196, 107);
        border: rgb(5, 196, 107);
        color: white;
      }

      &--btn-sell {
        background-color: rgb(245, 59, 87);
        border: rgb(245, 59, 87);
        color: white;
      }
    }
  }

  .disabled {
    background-color: #f1f2f6 !important;
    color: #333333 !important;
    cursor: auto;
  }
</style>
