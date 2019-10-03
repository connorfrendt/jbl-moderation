<template>
  <div class="hello">
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Orders',
  props: {
    info: String
  },
  created() {
    axios
      .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
      .then(res => {
        this.info = res.data
        })
  }
}
</script>

<style scoped>
p {
  color: white;
}
</style>