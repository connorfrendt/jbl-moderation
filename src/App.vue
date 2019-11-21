<template>
  <div id="app">
    <order
      v-for="order in orders"
      :key="order.recipeSetReadableId"
      :recipeSetId="order.recipeSetReadableId"
      :orderNumber="order.purchaseOrderNumber"
      :email="order.emailAddress"
      @approve="onApprove"
      @deny="onDeny"
    />
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
  methods: {
    onApprove(recipeSetReadableId) {
      axios
        .get(process.env.VUE_APP_MODERATION_BASE_URL + recipeSetReadableId + '/action/approved')
        .then(() => this.getOrders());
    },
    onDeny(recipeSetReadableId) {
      const order = this.orders.find(someOrder => someOrder.recipeSetReadableId === recipeSetReadableId);
      //const reason = window.prompt('Reason for denying:');
      // axios
      //   .get(process.env.VUE_APP_MODERATION_BASE_URL + recipeSetReadableId + '/action/denied')
      //   .then(() => this.getOrders());
      window.open(encodeURI(`mailto:hcgcustomersupport@harman.com?subject=PZ - Copyright ${order.purchaseOrderNumber}-${recipeSetReadableId}&body=Purchase Order Number: ${order.purchaseOrderNumber}-${recipeSetReadableId}

Image URL:
https://api.spectrumcustomizer.com/api/assets/generated/recipeset/readable/${recipeSetReadableId}/north/state/ber-print-output/camera/Ortho/width/381/height/286`));
    },
    getOrders() {
      axios
        .get(process.env.VUE_APP_LIST_URL)
        .then(res => {
          this.orders = res.data;
        });
    }
  },
  created() {
    this.getOrders();
  }

}
</script>

<style>
body {
  background-color: black;
  margin: 0px;
}

#app {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px;
  text-align: center;
}

@media (max-width: 800px) {
  #app {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0px;
  }
}

@media (max-width: 450px) {
  #app {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>