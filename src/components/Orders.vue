<template>
  <ul>
    <Order
      
      />
  </ul>
</template>

<script>
import Order from './Order.vue';

export default {
  props: {
    orders: Array
  },
  components: {
    Order
  }
};
</script>

<style scoped>

</style>