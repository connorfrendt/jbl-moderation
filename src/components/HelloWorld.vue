<template>
  <div class="hello">
    <h1>{{ info }}</h1>
    <p>Hello World Component</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    info: String
  },
  created() {
    axios
      .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
      .then(res => (this.info = res.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>