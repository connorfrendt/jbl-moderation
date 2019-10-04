import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data() {
    return {
      orders: null
    }
  },
  render: h => h(App),
}).$mount('#app')