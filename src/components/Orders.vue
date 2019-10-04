<template>
  <ul>
    <Order
      v-for="order in orders"
      v-bind:key="order.order"
      v-bind:order="order"/>
  </ul>
</template>

<script>
import Order from './Order.vue';
import axios from 'axios';

export default {
  props: {
    orders: Array
  },
  components: {
    Order
  },
  created() {
        axios
        .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
        .then(res => {
            this.order = res.data
            });
  }
};
</script>

<style scoped>

</style>