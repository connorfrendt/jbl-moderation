import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
      .then(res => (this.info = res))
  },
  render: h => h(App),
}).$mount('#app')
