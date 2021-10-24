<template>
	<h1 v-if="size === 1">
		<slot></slot>
	</h1>
	<h2 v-else-if="size === 2">
		<slot></slot>
	</h2>
	<h3 v-else-if="size === 3">
		<slot></slot>
	</h3>
	<h4 v-else-if="size === 4">
		<slot></slot>
	</h4>
	<h5 v-else-if="size === 5">
		<slot></slot>
	</h5>
	<h6 v-else-if="size === 6">
		<slot></slot>
	</h6>
	<p v-else>
		<slot></slot>
	</p>
</template>

<script>
export default {
	name: 'HeaderSize',
	props: {
		size: Number
	}
}
</script>

<style lang="less" scoped>

</style>