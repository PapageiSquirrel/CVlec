<template>
	<li id="details" v-bind:style="linkStyle">
		<div class="grid-container">
			<div v-bind:style="{ 'grid-column': '1 / span 3', 'grid-row': '1' }">
				<span class="title">{{ detail.sub_title }}</span><span id="desc"> {{ detail.description }}   </span>
				<font-awesome-icon id="iconmore" v-on:click="SeeMore" v-bind:icon="icon" />
			</div>
			<div v-bind:style="{ 'grid-column': '4', 'grid-row': '1 / span 3' }">
				<ul >
					<li id="tags" v-for="(tag, index) in detail.tags" v-bind:key="index"><span> {{tag}}</span></li>
				</ul>
			</div>
			<p v-if="toggle" v-bind:style="{ 'grid-column': '1 / span 3', 'grid-row': '1 / span 2' }">
				{{detail.learn_more}} 
				<span v-for="item in detail.refs" v-bind:key="item"><a v-bind:href="item">{{item}}</a></span>
			</p>
		</div>
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