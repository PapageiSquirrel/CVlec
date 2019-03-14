<template>
	<div id="section">
		<h3>{{section.title}}</h3>
		<div v-for="item in sortByOrder(section.topics)" v-bind:key="item.id">
			<section-topics v-bind:topic="item" />
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
	methods: {
		sortByOrder: function(topics) {
			if (topics) return topics.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
		}
	}
}
</script>

<style lang="less" scoped>
#section {
	margin: 5px;
}
</style>