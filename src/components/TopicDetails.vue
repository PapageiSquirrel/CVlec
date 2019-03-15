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
			icon : 'folder'
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
			} else if (this.detail.link == "") {
				return {
					margin: "1px 10px",
					padding: "2px 10px",
					border: "2px solid #666666",
					"border-radius": "25px",
					"background-color": "#d9d9d9",
					color: "#000"
				};
			} else return {}
		}
	},
	methods: {
		SeeMore: function() {
			if (this.icon == 'folder') this.icon = 'folder-open';
			else this.icon = 'folder';

			this.toggle = !this.toggle;
		}
	}
}
</script>

<style lang="less" scoped>
/* list style */
ul {
	list-style-type: none;
}
li {
	text-align: left;
}
li #tags {
	display: inline;
}
li #tags > span {
	padding-right: 6px;
	text-align: right;
	font-style: italic;
	font-size: 14px;
	border-right: solid 3px #4d4d4d;
}
li #tags > span:hover {
	background-color: #FFF
}

/* span style */
span #desc {

}

p {
	color: #444;
}

/* link style */
a {
	
}
a:link {
	color: #990000;
	text-decoration: none;
}

a:visited {
	color: #660066;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

a:active {
	text-decoration: underline;
}

.grid-container {
	display: grid;
}
.title {
	text-decoration: underline;
}


/* buttons style */
#iconmore {
	padding: 0px;
	margin: 0px;
}
#iconmore:hover {
	animation-name: grow;
	animation-duration: 0.5s;
	animation-fill-mode: forwards;
}
@keyframes grow {
	from {transform: scale(1, 1);}
	to {transform: scale(1.2, 1.2);}
}
</style>