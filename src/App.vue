<template>
  <div id="app">
    <order v-for="order in orders" :key="order.purchaseOrderNumber" :recipeSetId="order.recipeSetReadableId"/>
  </div>
</template>

<script>
import Order from './components/Order.vue';
import axios from 'axios'

export default {
  data() {
    return {
      orders: []
    }
  },
  components: {
    Order
  },
  created() {
      console.log(process.env)
      axios
      .get(process.env.VUE_APP_LIST_URL)
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