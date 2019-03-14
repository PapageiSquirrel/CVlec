<template>
	<li>
		<span>{{ detail.sub_title }} {{ detail.description }}</span>
		<button v-on:click="SeeMore">{{text}}</button> 
		<p v-if="toggle">{{detail.learn_more}}</p>
	</li>
</template>

<script>
export default {
	name: 'TopicDetails',
	props: {
		detail : Object
	},
	data: function() {
		return {
			toggle : false,
			text : '+'
		}
	},
	methods: {
  		SeeMore: function(event) {
  			if (this.text == '+') this.text = '-';
  			else this.text = '+';

  			this.toggle = !this.toggle;
  		}
  	}
}
</script>

<style lang="less" scoped>
/* list style */
li {
	text-align: left;
}

/* buttons style */
button {
	border-radius: 2px;
	padding: 4px;
	margin: 4px;
}
button:hover {
	animation-name: grow;
  	animation-duration: 1s;
  	animation-fill-mode: forwards;
}
@keyframes grow {
	from {transform: scale(1, 1);}
	to {transform: scale(1.2, 1.2);}
}
</style>