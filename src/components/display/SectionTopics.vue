<template>
	<div id="topic" v-bind:style="topic.style" v-bind:class="{ 'w3-blue-gray': !hasBgColor }">
		<div>
			<header class="w3-container">
				<h4><font-awesome-icon v-if="isLinked" v-on:click="InitLink" v-bind:icon="iconName" style="cursor: pointer;" /><span style="color:#FFF;"> {{topic.title}}</span></h4>
				<h6 v-if="topic.sub_title !== ''">{{topic.sub_title}}</h6>
			</header>
			<div v-if="isNoted" id="bar-flex" class="bordered progress-bar">
				<div class="progress" v-bind:style="{ width: noteWidth, 'background-color': noteBG }"></div> <!--, 'background-color': noteBG-->
			</div>
		</div>
		<div class="w3-display-container">
			<div class="w3-display-left" style="width:0px;">
				<p  style="writing-mode: vertical-rl;">{{topic.sidenote}}</p>
			</div>
			<ol v-if="topic.details.length > 0" class="w3-rest">
				<topic-details v-for="(item, index) in topic.details" v-bind:detail="item" v-bind:key="index" v-bind:selectedLink="selectedLink" v-bind:parentLink="selectedLink == topic.title" />
			</ol>
		</div>
	</div>
</template>

<script>
import less from 'less'
import TopicDetails from './TopicDetails.vue'
import stLinks from '../../data/links.json'

export default {
	name: 'SectionTopics',
	components: {
		TopicDetails
	},
	props: {
		sid : Number,
		topic : Object,
		selectedLink: String
	},
	data: function() {
		return {
			links: stLinks,
			isNoted : this.topic.note ? true : false,
			noteWidth : this.topic.note *100 + '%',
			noteBG : this.topic.style['background-color']
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
		hasBgColor: function() {
			if (this.topic.style['background-color'] == null) return false;
			return true;
		},
		iconName: function() {
			if (this.selectedLink == null) return 'eye';
			var branch = { section: this.sid, topic: this.topic.id };
			var link_found = this.links.find(function(l) {
				return l.init.section == branch.section && l.init.topic == branch.topic;
			});
			if (link_found && this.selectedLink == link_found.name) return 'eye';
			else return 'eye-slash';
		}
	},
	methods: {
		InitLink: function() {
			var branch = { section: this.sid, topic: this.topic.id };
			var link_found = this.links.find(function(l) {
				return l.init.section == branch.section && l.init.topic == branch.topic;
			});
			if (link_found) {
				this.$emit("selectLink", link_found.name);
			}
		}
	},
	beforeUpdate() {
		var bg_color = "#900"; //this.topic.style['background-color'] ? this.topic.style['background-color'] :
		less.modifyVars({
			'@bg': bg_color
		});
	}
}
</script>

<style lang="less">
@bg: #000;
.progress-bar {
	background-color: #FFF;
	flex-grow: 2;
	height: 20px;
	position: relative;
	padding: 5px;
}
.progress {
	background-color: lighten(@bg, 20%);
	display: block;
	height: 100%;
	position: relative;
	overflow: hidden;
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
h6 {
	margin-top: -5px;
}
ol {
	list-style-type: none;
}
</style>