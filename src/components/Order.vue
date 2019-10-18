<template>
    <li>
       {{ order }}
    </li>
</template>

<script>
export default {
  props: {
    recipeSetId: {
      type: String,
      required: true
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