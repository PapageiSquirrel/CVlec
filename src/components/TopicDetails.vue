<template>
	<li id="details" v-bind:style="linkStyle">
		<div>
			<div class="infobox">
				<div>
					<span class="title">{{ detail.sub_title }}</span><span id="desc"> {{ detail.description }}   </span>
					<font-awesome-icon id="iconmore" v-on:click="SeeMore" v-bind:icon="icon" />
				</div>
				<transition name="slide-fade">
					<p v-if="toggle" class="vof">
						{{detail.learn_more}} 
						<span v-for="item in detail.refs" v-bind:key="item"><a v-bind:href="item">{{item}}</a></span>
					</p>
				</transition>
			</div>
			<div class="infobox">
				<ul >
					<li id="tags" v-for="(tag, index) in detail.tags" v-bind:key="index"><span> {{tag}}</span></li>
				</ul>
			</div>
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

/* classes */
.title {
	text-decoration: underline;
}
.infobox {
	display: inline-block;
	margin-left: 10px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.vof {
	margin: 0px;
	padding: 2px;
	height: auto;
	overflow-y: hidden;
}

.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
	height: 0px;
}

/* IDs */
#iconmore {
	padding: 0px;
	margin: 0px;
}
#iconmore:hover {
	animation-name: grow;
	animation-duration: 0.5s;
	animation-fill-mode: forwards;
}

/* animations */
@keyframes grow {
	from {transform: scale(1, 1);}
	to {transform: scale(1.2, 1.2);}
}
/*
@keyframes slip {
	from {height: 0%;}
	to {height: 100%;}
}
*/
</style>