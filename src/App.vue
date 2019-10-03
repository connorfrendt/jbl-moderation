<template>
  <div id="app">
    <Orders msg="JBL Moderation Tool"/>
  </div>
</template>

<script>
import Orders from './components/Orders.vue'

export default {
  name: 'app',
  components: {
    Orders
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