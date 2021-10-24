<template>
	<div></div>
</template>

<script>
import EditProfileSections from './EditProfileSections.vue';

export default {
	name: 'EditProfileOverview',
	components : {
		EditProfileSections
	},
	props: {

	},
	data: function() {
		return {
			nodeType: "profile",
			nodeAttributes: [
				{name: "title", size: 2}
			],
			childNodes: "sections",
			childComponent: "EditProfileSections",
			emptyChildNode: {
				id: 0,
				title: "section.default.title",
				style: {},
				order: 0,
				topics: []
			},
			selected: false
		}
	},
	created() {
		console.log(this);
	}
}
</script>

<style lang="less" scoped>
.trans-section {
	width: 100%;
	overflow:hidden;
}
</style>