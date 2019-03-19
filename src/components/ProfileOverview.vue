<template>
	<div id="profileOverview">
		<h2>{{profile.title}}</h2>
		<div id="overview">
			<div v-for="item in profile.sections" v-bind:key="item.id">
				<profile-sections v-bind:section="item" />
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
		profile : Object
	}
}
</script>

<style lang="less" scoped>
.grid-container {
	display: grid;
	grid-template-columns: auto auto;
}

#overview {
	.grid-container();
}
#profileOverview {
	margin: 0px;
	border: solid 1px #ccc;
}

h2 {

}
</style>