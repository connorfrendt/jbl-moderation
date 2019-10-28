<template>
    <div id="order">
      {{ recipeSetId }}
      <img :src="printOutputURL"/>
      <button id="approve" @click="$emit('approve', recipeSetId)">Approve</button>
      <button id="deny" @click="$emit('deny', recipeSetId)">Deny</button>
    </div>
</template>

<script>
export default {
  props: {
    recipeSetId: {
      type: String,
      required: true
    }
  },
  computed: {
      printOutputURL() {
        return `https://api.spectrumcustomizer.com/api/assets/generated/recipeset/readable/${this.recipeSetId}/north/state/ber-print-output/camera/Ortho/width/381/height/286)`;
      }
  }
};
</script>

<style scoped>
  #order {
    background-color: gray;
    margin: 20px;
    text-align: center;
    border-radius: 5px;
  }
  
  #approve {
    background-color: lightgreen;
    padding: 10px;
    margin: 10px;
  }
  #approve:hover {
    background-color: rgb(0, 196, 0);
  }

  #deny {
    background-color: coral;
    padding: 10px;
    margin: 10px;
  }
  #deny:hover {
    background-color: red;
  }
</style>