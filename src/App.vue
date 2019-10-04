<template>
  <div id="app">
    <Orders v-bind:orders="orders"/>
  </div>
</template>

<script>
import Orders from './components/Orders.vue';
import axios from 'axios'


export default {
  data() {
    return {
      orders
    }
  },
  components: {
    Orders
  },
  created() {
      axios
      .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
      .then(res => {
        this.orders = res.data
        });
  }

}
</script>

<style>
body {
  background-color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>