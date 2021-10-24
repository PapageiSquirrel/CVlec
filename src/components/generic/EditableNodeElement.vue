<template>
	<div :id="nodeType">
		<div v-for="attr in nodeAttributes" :key="attr.name">
			<header-size :id="nodeType + attr.name" :size="attr.size">
				<title-input :class="{ selectedNode: selected }" :title="node[attr.name]" 
					@save="saveNodeAttribute(attr.name, $event)" @select="selectNode" />
			</header-size>
		</div>
		<div v-if="!!childNodes">
			<div v-for="item in nodesSortedByOrder" :key="item.id">
				<editable-node-element :level="level+1" :node="item" :events="events" @selectElement="onSelectElement" />
			</div>
		</div>

		<div v-else>
			Sub-details
		</div>
	</div>
</template>

<script>
import NodeUtilsMixin from '../../data/utils/NodeUtilsMixin.js';

import TitleInput from './TitleInput.vue';
import HeaderSize from './HeaderSize.vue';

export default {
	name: 'EditableNodeElement',
	mixins: [NodeUtilsMixin],
	components: {
		TitleInput,
		HeaderSize
	},
	props: {
		level: {
			type: Number,
			default: 0
		},
		node: Object,
		events: Object
	},
	data() {
		return {
			selected: false
		}
	},
	computed: {
		nodeType() {
			return this.getTypeByTreeLevel(this.level);
		},
		nodeAttributes() {
			return this.getAttributes(this.nodeType);
		},
		childNodes() {
			return this.getChildAttribute(this.nodeType);
		},
		emptyChildNode() {
			return this.getEmpty(this.getChildType(this.nodeType));
		},
		nodesSortedByOrder() {
			return this.node[this.childNodes].slice().sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
		}
	},
	methods: {
		saveNodeAttribute(attribute, newValue) {
			this.node[attribute] = newValue;
		},
		selectNode() {
			this.$emit("selectElement", {type: this.nodeType, id: this.node.id});
			this.selected = true;
		},
		getNewChildIndex() {
			return this.node[this.childNodes].length;
		},
		createNewChild() {
			let newChildNode = { ...this.emptyChildNode };
			var newIndex = this.getNewChildIndex();
			newChildNode.id = newIndex;
			newChildNode.order = newIndex;
			return newChildNode;
		},
		onSelectElement(args) {
			this.$emit("selectElement", args);
		}
	},
	created() {
		this.events.$on('addElement', (args) => {
        	if (args.type === this.getChildType(this.nodeType) && this.selected) {
        		this.node[this.childNodes].push(this.createNewChild());
        	}
    	});
		this.events.$on('selectElement', (args) => {
			if (this.selected && (args.type !== this.nodeType || args.id !== this.node.id)) {
				this.selected = false;
			}
		});
	},
	beforeUpdate() {
		var bg_color = this.node && this.node.style && this.node.style['background-color'] || "#FFF";
		less.modifyVars({
			'@bg': bg_color
		});
	}
}
</script>

<style lang="less" scoped>
@bg: #FFF;
#sectionTitle {
	border-bottom: 2px solid black;
	cursor: pointer;
}

#sectionTitle:hover {
	text-shadow:1px 1px 0 #444;
	background-color: #ccc;
}

.selectedNode {
	text-shadow:1px 1px 0 #444;
	background-color: darken(@bg, 20%);
}
</style>