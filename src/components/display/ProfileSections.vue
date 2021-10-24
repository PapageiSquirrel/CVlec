<template>
	<div id="section">
		<h3 v-on:click="selectSection">{{section.title}}</h3>
		<div v-for="item in topicsSortedByOrder" v-bind:key="item.id">
			<section-topics v-bind:sid="section.id" v-bind:topic="item" v-bind:selectedLink="selectedLink" v-on:selectLink="SelectLink" />
		</div>
	</div>
</template>

<script>
import SectionTopics from './SectionTopics.vue'

export default {
	name: 'ProfileSections',
	components: {
		SectionTopics
	},
	props: {
		section: Object,
		selectedLink: String
	},
	computed: {
		topicsSortedByOrder: function() {
			return this.section.topics.slice().sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
		}
	},
	methods: {
		selectSection: function() {
			this.$emit("selectSection", this.section.id);
		},
		SelectLink: function(val) {
			this.$emit("selectLink", val);
		}
	}
}
</script>

<style lang="less" scoped>
#section {
	
}
h3 {
	border-bottom: 2px solid black;
	cursor: pointer;
}
h3:hover {
	text-shadow:1px 1px 0 #444;
	background-color: #ccc;
}
</style>