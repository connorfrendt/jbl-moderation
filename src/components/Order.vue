<template>
    <div id="order">
      <img :src="printOutputURL" />
      <div id="details">
        <div id="pic-header">
          <div id="pon">
            <p class="order-num-email" style="display: inline-block">Purchase Order Number: </p>
            <p class="pic-p"><b>{{ orderNumber }}</b></p>
          </div>
          <div id="email">
            <p class="order-num-email" style="display: inline-block">Email: </p>
            <p class="pic-p"><b>{{ email }}</b></p>
          </div>
        </div>
        
        <div id="flex-buttons">
          <button id="approve" @click="$emit('approve', recipeSetId)">APPROVE</button>
          <button id="deny" @click="$emit('deny', recipeSetId)">DENY</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    recipeSetId: {
      type: String,
      required: true
    },
    orderNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  computed: {
      printOutputURL() {
        return `https://api.spectrumcustomizer.com/api/assets/generated/recipeset/readable/${this.recipeSetId}/north/state/ber-print-output/camera/Ortho/width/381/height/286`;
      }
  }
};
</script>

<style scoped>
#order {
  background-color: rgba(128, 128, 128, .4);
  margin: 10px;
  text-align: center;
  border-radius: 5px;
}

@media (max-width: 450px) {
  #order {
    margin: 10px 0;
  }
}

#pic-header {
  color: lightgray;
  display: flex;
  justify-content: space-around;
  background: rgb(80, 80, 80);
  border-radius: 2.5px;
}

.order-num-email {
  margin: 0px;
  padding: 5px;
}

#pon {
  padding: 0 5px;
}

#email {
  padding: 0 5px;
}

.pic-p {
  padding: 5px 0px;
  margin: 0px;
}

#flex-buttons{
  display: flex;
  justify-content: space-around;
}

#approve {
  background-color: lightgreen;
  padding: 10px;
  margin: 5px;
  width: 100%;
}
#approve:hover {
  background-color: rgb(0, 196, 0);
}

#deny {
  background-color: coral;
  padding: 10px;
  margin: 5px;
  width: 100%;
}
#deny:hover {
  background-color: red;
}
</style>