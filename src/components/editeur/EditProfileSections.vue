<template>
	<div id="section">
		<h3 id="sectionTitle">
			<title-input :class="{ selectedSection: selected }" :title="section.title" @save="saveSectionTitle" @select="selectSection" />
		</h3>
		<div v-for="item in topicsSortedByOrder" :key="item.id">
			<edit-section-topics :sid="section.id" :topic="item" :events="events" :selectedLink="selectedLink" @selectLink="SelectLink" />
		</div>
	</div>
</template>

<script>
import EditSectionTopics from './EditSectionTopics.vue';
import TitleInput from '../generic/TitleInput.vue';

export default {
	name: 'EditProfileSections',
	components: {
		EditSectionTopics,
		TitleInput
	},
	props: {
		section: Object,
		selectedLink: String,
		events: Object
	},
	data() {
		return {
			selected: false,
			emptyTopic: {
				id: 0,
				title: "topic.default.title",
				sub_title: "topic.default.subtitle",
				date: "topic.default.date",
				type: "NA",
				style: {},
				order: 0,
				note: 0,
				details: []
			}
		}
	},
	computed: {
		topicsSortedByOrder: function() {
			return this.section.topics.slice().sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
		}
	},
	methods: {
		saveSectionTitle: function(newValue) {
			this.section.title = newValue;
		},
		SelectLink: function(val) {
			this.$emit("selectLink", val);
		},
		selectSection: function() {
			this.$emit("selectElement", {type: "section", id: this.section.id});
		},
		getNewTopicIndex: function() {
			return this.section.topics.length;
		},
		createNewTopic: function() {
			let newTopic = { ...this.emptyTopic };
			var newIndex = this.getNewTopicIndex();
			newTopic.id = newIndex;
			newTopic.order = newIndex;
			return newTopic;
		}
	},
	created() {
		this.events.$on('addElement', (args) => {
        	if (args === "topic" && this.selected) {
        		this.section.topics.push(this.createNewTopic());
        	}
    	});
		this.events.$on("selectElement", (args) => {
			this.selected = args.type === "section" && args.id === this.section.id;
		});
	}
}
</script>

<style lang="less" scoped>
#sectionTitle {
	border-bottom: 2px solid black;
	cursor: pointer;
}

#sectionTitle:hover {
	text-shadow:1px 1px 0 #444;
	background-color: #ccc;
}

.selectedSection {
	text-shadow:1px 1px 0 #444;
	background-color: #ccc;
}
</style>