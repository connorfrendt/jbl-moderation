<template>
    <li>
       <p>{{ order }}</p>
    </li>
</template>

<script>
import axios from 'axios';

export default {
    data() {
			return {
				order: Array
			}
		},
		created() {
        axios
        .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
        .then(res => {
            this.order = res.data
            });
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
