<template>
	<div id="topic" v-bind:style="topic.style">
		<div class="flex-container">
			<div id="title-flex"><h4><font-awesome-icon v-if="isLinked" v-on:click="InitLink" icon="link" /> {{topic.title}}</h4></div>
			<div v-if="isNoted" id="bar-flex" class="bordered progress-bar">
				<div class="progress" v-bind:style="{ width: noteWidth, 'background-color': noteBG }"></div>
			</div>
		</div>
		<ol>
			<topic-details v-for="item in topic.details" v-bind:detail="item" v-bind:key="item.sub_title" />
		</ol>
	</div>
</template>

<script>
import TopicDetails from './TopicDetails.vue'

export default {
	name: 'SectionTopics',
	components: {
		TopicDetails
	},
	data: function() {
		return {
			isNoted : this.topic.note ? true : false,
			noteWidth : this.topic.note / 5 *100 + '%',
			noteBG : this.topic.style['background-color'] ? this.topic.style['background-color'] : '#FFF'
		}
	},
	props: {
		topic : Object
	}
}
</script>

<style lang="less" scoped>
.progress-bar {
	background-color: #FFF;
	flex-grow: 2;
	height: 20px;
	position: relative;
	padding: 5px;
}
.progress {
	display: block;
  	height: 100%;
  	position: relative;
	overflow: hidden;
}

.flex-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.flex-container > div {
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 5px;
}
.flex-container > #title-flex {
	flex-grow: 1;
	text-align: right;
}
.flex-container > #bar-flex {
	flex-grow: 2;
}

.bordered {
	border-top: solid 1px black;
	border-left: solid 1px black;
	border-right: solid 1px black;
	border-bottom: solid 2px black;
}
.shadowed {
	box-shadow: 5px 5px 5px grey;
}

#topic {
	margin : 5px;
	.bordered();
	.shadowed();
}

/* global */
h4 {

}
ol {
	list-style-type: none;
}
</style>