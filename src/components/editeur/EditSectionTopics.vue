<template>
	<div id="topic" :style="topic.style" :class="{ 'w3-blue-gray': !hasBgColor }">
		<div>
			<header class="w3-container">
				<h4 id="topicTitle"><title-input :title="topic.title" :class="{ selectedTopic: selected }" :titleStyle="inputStyle" @save="saveTopicAttribute('title', $event)" @select="selectTopic" /></h4>
				<h6><title-input :title="topic.sub_title" :titleStyle="inputStyle" @save="saveTopicAttribute('sub_title')" /></h6>
			</header>
			<div v-if="isNoted" id="bar-flex" class="bordered progress-bar">
				<div class="progress" :style="{ width: noteWidth, 'background-color': noteBG }"></div> <!--, 'background-color': noteBG-->
			</div>
		</div>
		<div class="w3-display-container">
			<div class="w3-display-left" style="width:0px;">
				<p  style="writing-mode: vertical-rl;">{{topic.sidenote}}</p>
			</div>
			<ol v-if="topic.details.length > 0" class="w3-rest">
				<!--<topic-details v-for="(item, index) in topic.details" v-bind:detail="item" v-bind:key="index" v-bind:selectedLink="selectedLink" v-bind:parentLink="selectedLink == topic.title" />-->
			</ol>
		</div>
	</div>
</template>

<script>
import less from 'less';
import stLinks from '../../data/links.json';

import TitleInput from '../generic/TitleInput.vue';

export default {
	name: 'EditSectionTopics',
	components: {
		TitleInput
	},
	props: {
		sid : Number,
		topic : Object,
		selectedLink: String,
		events: Object
	},
	data: function() {
		return {
			links: stLinks,
			isNoted : this.topic.note ? true : false,
			noteWidth : this.topic.note *100 + '%',
			noteBG : this.topic.style['background-color'],
			selected: false
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
		inputStyle: function() {
			return {
				color: '#FFF'	
			}
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
		},
		saveTopicAttribute: function(attr, value) {
			this.topic[attr] = value;
		},
		selectTopic: function() {
			this.$emit("selectElement", {type: "topic", id: this.topic.id});
			this.selected = true;
		},
	},
	created() {
		this.events.$on("selectElement", (args) => {
			if (this.selected && (args.type !== "topic" || args.id !== this.topic.id)) {
				this.selected = false;
			}
		});
	},
	beforeUpdate() {
		var bg_color = "#900";
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
.selectedTopic {
	background-color: darken(@bg, 20%);
}

#topic {
	margin : 5px;
	.bordered();
	.shadowed();
}

#topicTitle {

}

/* global */
h6 {
	margin-top: -5px;
}
ol {
	list-style-type: none;
}
</style>