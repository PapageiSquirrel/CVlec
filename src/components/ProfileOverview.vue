<template>
	<div id="profileOverview" class="w3-container">
		<h2><span class="bgi">{{profile.title}}</span></h2>
		<div id="overview">
			<div v-for="item in profile.sections" v-bind:key="item.id">
				<transition name="enlarge">
					<profile-sections v-if="isShown(item.id)" class="trans-section" v-bind:section="item" v-on:selectSection="SelectSection" />
				</transition>
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
		selectedSection : Number
	},
	methods: {
		SelectSection: function(val) {
			this.$emit("selectSection", val);
		},
		isShown: function(sid) {
			if (this.selectedSection != -1 && this.selectedSection != sid) return false;
			return true;
		}
	}
}
</script>

<style lang="less" scoped>
.grid-container {
	display: grid;
	grid-template-columns: auto auto;
}
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
	.grid-container();
}

h2 {
	text-shadow:1px 1px 0 #444;
}
.bgi {
	background-image: radial-gradient(lightgray 50%, white 50%);
}
</style>