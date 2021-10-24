<template>
	<div id="profileOverview" class="w3-container">
		<h2><span class="bgi">{{profile.title}}</span></h2>
		<div id="overview" class="w3-row">
			<div v-for="n in nbColumn" v-bind:key="n" class="w3-col" v-bind:style="{ width: 100/nbColumn + '%' }">
				<div v-for="item in sectionsColumnSliced(n)" v-bind:key="item.id">
					<transition name="enlarge">
						<profile-sections v-if="isShown(item.id)" class="trans-section" v-bind:section="item" v-on:selectSection="SelectSection" v-bind:selectedLink="selectedLink" v-on:selectLink="SelectLink" />
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileSections from './ProfileSections.vue'

export default {
	name: 'ProfileOverview',
	components : {
		ProfileSections
	},
	props: {
		profile : Object,
		selectedSection : Number,
		selectedLink : String
	},
	computed: {
		sectionsSortedByOrder: function() {
			return this.profile.sections.slice().sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)); 
		},
		nbColumn: function() {
			if (this.selectedSection != -1) return 1;
			return Math.round(this.profile.sections.length/2);
		}
	},
	methods: {
		SelectSection: function(val) {
			this.$emit("selectSection", val);
		},
		SelectLink: function(val) {
			this.$emit("selectLink", val);
		},
		sectionsColumnSliced: function(n) {
			if (this.selectedSection != -1) return this.profile.sections.slice(this.selectedSection);
			return this.sectionsSortedByOrder.slice(2*(n-1), 2*n);
		},
		isShown: function(sid) {
			if (this.selectedSection != -1 && this.selectedSection != sid) return false;
			return true;
		}
	}
}
</script>

<style lang="less" scoped>
.trans-section {
	width: 100%;
	overflow:hidden;
}

.enlarge-enter-active {
	transition: all .3s ease;
}
.enlarge-leave-active {
	transition: all .3s ease;
}
.enlarge-enter, .enlarge-leave-to {
	width: 0%;
}

#overview {

}

h2 {
	text-shadow:1px 1px 0 #444;
}
.bgi {
	background-image: radial-gradient(lightgray 50%, white 50%);
}
</style>