<template>
	<div id="topic" v-bind:style="topic.style">
		<div class="flex-container">
			<div id="title-flex">
				<h4><font-awesome-icon v-if="isLinked" v-on:click="InitLink" icon="link" /> {{topic.title}}</h4>
				<h5 v-if="topic.sub_title">{{topic.sub_title}}</h5>
			</div>
			<div v-if="isNoted" id="bar-flex" class="bordered progress-bar">
				<div class="progress" v-bind:style="{ width: noteWidth, 'background-color': noteBG }"></div>
			</div>
		</div>
		<ol v-if="topic.details.length > 0">
			<topic-details v-for="(item, index) in topic.details" v-bind:detail="item" v-bind:key="index" />
		</ol>
	</div>
</template>

<script>
import TopicDetails from './TopicDetails.vue'
import stLinks from '../data/links.json'

export default {
	name: 'SectionTopics',
	components: {
		TopicDetails
	},
	props: {
		sid : Number,
		topic : Object
	},
	data: function() {
		return {
			links: stLinks,
			isNoted : this.topic.note ? true : false,
			noteWidth : this.topic.note / 5 *100 + '%',
			noteBG : this.topic.style['background-color'] ? this.topic.style['background-color'] : '#FFF'
		}
	},
	computed: {
		isLinked: function() {
			var branch = { section: this.sid, topic: this.topic.id };
			var link_found = this.links.find(function(l) {
				return l.init.section == branch.section && l.init.topic == branch.topic;
			});
			if (link_found) {
				return true;
			}
			return false;
		},
	},
	methods: {
		InitLink: function() {
			var branch = { section: this.sid, topic: this.topic.id };
			var link_found = this.links.find(function(l) {
				return l.init.section == branch.section && l.init.topic == branch.topic;
			});
			if (link_found) {
				// TODO : ModeChange to highlight the link clicked
			}
		}
	}
}
</script>

<style lang="less" scoped>
@bg: #FFF;
@bglighter: #999;
.progress-bar {
	background-color: #FFF;
	flex-grow: 2;
	height: 20px;
	position: relative;
	padding: 5px;
}
.progress {
	background-color: screen(@bg, @bglighter);
	display: block;
	height: 100%;
	position: relative;
	overflow: hidden;
}

.flex-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	border-bottom: 2px solid black;
}
.flex-container > div {
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 5px;
}
.flex-container > #title-flex {
	flex-grow: 1;
	text-align: center;
	margin: 0px;
}
.flex-container > #bar-flex {
	flex-grow: 2;
}

.bordered {
	border-top: solid 1px black;
	border-left: solid 1px black;
	border-right: solid 1px black;
	border-bottom: solid 2px black;
}
.shadowed {
	box-shadow: 5px 5px 5px grey;
}

#topic {
	margin : 5px;
	.bordered();
	.shadowed();
}

/* global */
h4 {
	margin-top: 15px;
	margin-bottom: 8px;
}
h5 {
	margin: 0px;
	padding: 0px;
}
ol {
	list-style-type: none;
}
</style>