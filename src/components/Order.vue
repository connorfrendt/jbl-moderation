<template>
    <div>
       {{ recipeSetId }}
       <img :src="printOutputURL"/>
       <button @click="$emit('approve', recipeSetId)">Approve</button>
       <button @click="$emit('deny', recipeSetId)">Deny</button>
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
li {
    text-align: center;
		list-style: none;
		color: white;
}
</style>