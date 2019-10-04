<template>
  <ul>
    <Order
      />
  </ul>
</template>

<script>
import Order from './Order.vue';

export default {
  // props: {
  //   orders: Array
  // },
  components: {
    Order
  }
};

/*
  v-for="order in orders"
  v-bind:key="order.order"
  v-bind:order="order"
*/
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  }
</style>
/*
  
*/