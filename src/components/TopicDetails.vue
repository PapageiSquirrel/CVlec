<template>
	<li id="details" v-bind:style="linkStyle">
		<div>
			<div>
				<div class="w3-container">
					<span class="title">{{ detail.sub_title }}</span><span id="desc"> {{ detail.description }}   </span>
					<font-awesome-icon id="iconmore" v-if="detail.learn_more != ''" v-on:click="SeeMore" v-bind:icon="icon" />
				</div>
				<transition name="slide" v-on:after-enter="afterEnter">
					<div v-if="toggle" v-bind:class="{ 'w3-hide': afterEnter() }" class="trans-slide w3-container w3-card-4">
						<i>{{detail.learn_more}} </i>
						<span v-for="item in detail.refs" v-bind:key="item"><a v-bind:href="item">{{item}}</a></span>
					</div>
				</transition>
			</div>
			<div class="w3-container">
				<ul>
					<li id="tags" v-for="(tag, index) in detail.tags" v-bind:key="index">
						<i class="w3-small w3-tag w3-gray w3-hover-white" style="transform:rotate(-5deg)"> {{tag}}</i>
					</li>
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
		},
		afterEnter: function() {
			return !this.toggle;
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
	padding: 4px;
	display: inline;
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
.trans-slide {
	padding: 10px 10px;
	max-height: 10em;
	overflow:hidden;
}

.slide-enter-active {
	transition: all .3s ease;
}
.slide-leave-active {
	transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
	transform: translateX(30px);
	opacity: 0;
	max-height: 0px;
	padding: 0px 10px;
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
@keyframes slide {
	from {height: 0%;}
	to {height: 100%;}
}
*/
</style>