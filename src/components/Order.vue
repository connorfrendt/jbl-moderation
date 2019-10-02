<template>
    <div id='order'>
        <img v-bind:src="imageUrl">
        <button @click="approve">Approve</button>
        <button @click="deny">Deny</button>
    </div>
</template>

<script>
import axios from axios;

export default {
    name: "order",
    props: {
        recipeId: String,
    },
    data: function(){
        return {
            imageUrl: ''
        }
    },
    methods: {
        approve: function(){
            //make GET request to approval route
        },

        deny: function(denialText){
            //make GET request to denial route 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>