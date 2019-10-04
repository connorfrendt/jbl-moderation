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
		created() {
        axios
        .get('https://api.spectrumcustomizer.com/api/external/jbl/orders/under-review')
        .then(res => {
            this.order = res.data
            });
  	}
};
</script>

<style scoped>
li {
    text-align: center;
		list-style: none;
}
</style>