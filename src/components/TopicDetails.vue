<template>
	<li v-bind:style="linkStyle">
		<span id="title">{{ detail.sub_title }} </span><span id="desc">{{ detail.description }}</span>
		<button v-on:click="SeeMore">{{text}}</button> 
		<p v-if="toggle">{{detail.learn_more}} <span v-for="item in detail.refs" v-bind:key="item"><a v-bind:href="item">{{item}}</a></span></p>
	</li>
</template>

<script>
import stLinks from '../data/links.json'

export default {
	name: 'TopicDetails',
	props: {
		detail : Object
	},
	data: function() {
		return {
			links: stLinks,
			toggle : false,
			text : '+'
		}
	},
	computed: {
		linkStyle: function() {
			if (this.detail.link) {
				var link_name = this.detail.link;
				var link = this.links.find(function(l) {
					return l.name == link_name;
				});
				return link.style;
			} else
				return {};
		}
	},
	methods: {
		SeeMore: function() {
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

/* span style */
span #title {
	text-decoration: underline;
}
span #desc {

}

p {
	color: #444;
}

/* link style */
a {
	
}
a:link {
	color: #222;
	text-decoration: none;
}

a:visited {
	color: #222;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

a:active {
	text-decoration: underline;
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