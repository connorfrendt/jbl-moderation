<template>
    <div id="order">
      <img :src="printOutputURL"/>
      <div id="flex-buttons">
        <button id="approve" @click="$emit('approve', recipeSetId)">APPROVE</button>
        <button id="deny" @click="$emit('deny', recipeSetId)">DENY</button>
      </div>
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
    background-color: rgba(128, 128, 128, .4);
    margin: 20px;
    text-align: center;
    border-radius: 5px;
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