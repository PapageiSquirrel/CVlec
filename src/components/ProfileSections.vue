<template>
	<div id="section">
		<h3>{{section.title}}</h3>
		<div v-for="item in topicsSortedByOrder" v-bind:key="item.id">
			<section-topics v-bind:sid="item.id" v-bind:topic="item" />
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
		section: Object
	},
	computed: {
		topicsSortedByOrder: function() {
			return this.section.topics.slice().sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
		}
	}
}
</script>

<style lang="less" scoped>
#section {
	margin: 5px;
}
</style>