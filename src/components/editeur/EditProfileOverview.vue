<template>
	<div id="profileOverview" class="w3-container">
		<h2><input class="w3-input" type="text" :value="profile.title" :placeholder="emptyProfile.title | trad" /></h2>
		<div id="overview" class="w3-row">
			<div v-for="n in nbColumn" :key="n" class="w3-col" :style="{ width: 100/nbColumn + '%' }">
				<div v-for="item in sectionsColumnSliced(n)" :key="item.id">
					<edit-profile-sections class="trans-section" :events="events" :section="item" @selectElement="onSelectElement" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import emptyProfile from '../../data/emptyProfile.json';

import EditProfileSections from './EditProfileSections.vue';

export default {
	name: 'EditProfileOverview',
	components : {
		EditProfileSections
	},
	props: {
		events: Object
	},
	data: function() {
		return {
			profile: {
				id: 0,
				title: "",
				mode: "",
				sections: []
			},
			emptySection: {
				id: 0,
				title: "section.default.title",
				style: {},
				order: 0,
				topics: []
			},
			emptyProfile: emptyProfile,
			selectedSection: -1
		}
	},
	computed: {
		sectionsSortedByOrder: function() {
			return this.profile.sections.slice().sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)); 
		},
		nbColumn: function() {
			return Math.round(this.profile.sections.length/2); 
		},
		newSectionTitle: function() {
			return this.emptySection.title;
		}
	},
	methods: {
		sectionsColumnSliced: function(n) {
			return this.sectionsSortedByOrder.slice(2*(n-1), 2*n);
		},
		onSelectElement: function(args) {
			if (args.type === "section") this.selectedSection = args.id;
			this.$emit("selectElement", args);
		},
		createNewSection: function() {
			let newSection = { ...this.emptySection }
			var newIndex = this.getNewSectionIndex();
			newSection.id = newIndex;
			newSection.order = newIndex;
			return newSection;
		},
		getNewSectionIndex: function() {
			return this.profile.sections.length;
		},
		saveSectionTitle: function(newValue) {
			this.newSection.title = newValue;
		}
	},
	created: function() {
		// TODO : retrieve previously saved profiles
		this.profile.sections = this.emptyProfile.sections;

		this.events.$on('addElement', (args) => {
        	if (args === "section") {
        		this.profile.sections.push(this.createNewSection());
        	}
    	});
	}
}
</script>

<style lang="less" scoped>
.trans-section {
	width: 100%;
	overflow:hidden;
}
</style>