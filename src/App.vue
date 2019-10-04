<template>
  <div id="app">
    <Orders />
  </div>
</template>

<script>
import Orders from './components/Orders.vue';
import axios from 'axios'

export default {
  components: {
    Orders
  },
  props: {
    orders: Array
  },
  created() {
        axios
        .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
        .then(res => {
            this.order = res.data
            });
  }
}
</script>

<style>
/* body {
  background-color: black;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>