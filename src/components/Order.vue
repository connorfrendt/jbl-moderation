<template>
    <li>
       {{ order }}
    </li>
</template>

<script>
import axios from 'axios';

export default {
    data() {
			return {
				order: Array
			}
		}
    // data() {
    //     return {
    //         imageUrl: ''
    //     }
    // },
    // methods: {
    //     approve: function(){
    //         //make GET request to approval route
    //     },

    //     deny: function(denialText){
    //         //make GET request to denial route 
    //     }
		// },
		
};
</script>

<style scoped>
li {
    text-align: center;
		list-style: none;
		color: white;
}
</style>