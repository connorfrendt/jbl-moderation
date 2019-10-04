<template>
  <div id="app">
    <Orders />
  </div>
</template>

<script>
import Orders from './components/Orders.vue';

export default {
  components: {
    Orders
  },
  props: {
    orders: Array
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