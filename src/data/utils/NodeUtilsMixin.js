export default {
	data() {
		return  {
			TYPES: {
				PROFILE: "profile", 
				SECTION: "section", 
				TOPIC: "topic", 
				DETAIL: "detail"
			},
			TREE_LEVEL: [
				"profile", 
				"section", 
				"topic", 
				"detail"
			]
		}
	},
	methods: {
		getTypeByTreeLevel(level) {
			return this.TREE_LEVEL[level];
		},
		getTreeLevelByType(type) {
			return this.TREE_LEVEL.findIndex(lvl => lvl === type);
		},
		getChildType(type) {
			var treeIndex = this.getTreeLevelByType(type);
			if (treeIndex === this.TREE_LEVEL.length-1) {
				return;
			}
			return this.TREE_LEVEL[treeIndex+1];
		},
		getChildAttribute(type) {
			return this.getChildType(type) + "s";
		},
		getEmpty(type) {
			let defaultEmpty = {
				id: 0,
				title: type + ".default.title",
				style: {},
				order: 0
			};
			let childKey = this.getChildAttribute(type);
			defaultEmpty[childKey] = [];
			switch(type) {
				case this.TYPES.PROFILE:
					defaultEmpty[childKey].push({
						"id": 0,
						"title" : "user.default.section.une",
						"style" : {},
						"order" : 0,
						"topics" : []
					},
					{
						"id": 1,
						"title" : "user.default.section.deux",
						"style" : {},
						"order" : 1,
						"topics" : []
					},
					{
						"id": 2,
						"title" : "user.default.section.trois",
						"style" : {},
						"order" : 2,
						"topics" : []
					},
					{
						"id": 3,
						"title" : "user.default.section.quatre",
						"style" : {},
						"order" : 3,
						"topics" : []
					});
					return defaultEmpty;
				case this.TYPES.SECTION:
					return defaultEmpty;
				case this.TYPES.TOPIC:
					return Object.assign(defaultEmpty, {
						sub_title: type + ".default.subtitle",
	        			date: type + ".default.date",
	        			type: "NA",
						note: 0
					});
				case this.TYPES.DETAIL:
					return Object.assign(defaultEmpty, {
						description: type + ".default.description",
	        			learn_more: type + ".default.learnMore",
	        			tags: [],
	        			refs: []
					});
			}
		},
		getAttributes(type) {
			let defaultAttributes = [
				{name: "title", size: 2}
			];
			switch(type) {
				case this.TYPES.PROFILE:
					break;
				case this.TYPES.SECTION:
					defaultAttributes[0].size = 3;
					break;
				case this.TYPES.TOPIC:
					defaultAttributes[0].size = 4;
					defaultAttributes.push({name: "sub_title", size: 5});
					break;
				case this.TYPES.DETAIL:
					defaultAttributes[0].size = 6;
					defaultAttributes.push({name: "description", size: 6});
					defaultAttributes.push({name: "learn_more", size: 6});
					break;
			}
			return defaultAttributes;

		}
	}
}