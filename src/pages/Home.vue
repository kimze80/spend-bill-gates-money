<template>
  <div class="home">
    <Header />
    <MoneyCard />
    <div class="home__items">
      <Item
        v-for="item in items"
        :key="item.id"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity"
        :id="item.id"
      />
    </div>
    <ShoppingCart />
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import Item from '../components/Item.vue';
import MoneyCard from '../components/MoneyCard.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

import { items } from '../items/items_list';

export default {
  name: 'Home',
  components: {
    Header,
    MoneyCard,
    Item,
    ShoppingCart,
  },

  data: () => ({
    items: [],
  }),

  created() {
    this.items = items;
  },

  computed: {
  },

};
</script>

<style lang="scss" scoped>
  .home {
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }

</style>
