<template>
    <li>
       {{ recipeSetId }}
    </li>
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
      addToCartURL() {
        return `https://api.spectrumcustomizer.com/api/assets/generated/recipeset/readable/${this.recipeSetId}/north/state/ber-print-output/camera/Ortho/)`;
      },
      printOutputURL() {
        return 
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