/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
import Vue from 'vue';
import Vuex from 'vuex';
import { items } from '../items/items_list';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    billMoney: 90000000000,
    items,

  },
  mutations: {

    incrementQuantity: (state, id) => {
      const item = state.items.find((item) => item.id === id);
      if (!item) return;
      state.billMoney -= item.price;
      item.quantity++;
    },
    decrementQuantity: (state, id) => {
      const item = state.items.find((item) => item.id === id);
      if (!item) return;
      state.billMoney += item.price;
      item.quantity--;
    },
  },
  actions: {
    // eslint-disable-next-line no-undef
    buy: (context, id) => context.commit('incrementQuantity', id),
    sell: (context, id) => context.commit('decrementQuantity', id),
  },
  getters: {
    billMoney: (state) => {
      const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });
      return format.format(state.billMoney);
    },
    billMoneyRaw: (state) => state.billMoney,
    shoppingCart: (state) => state.items.filter((item) => item.quantity > 0),
  },
});
