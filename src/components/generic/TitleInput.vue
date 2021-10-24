<template>
	<div>
		<div v-show="!editMode">
			<button class="w3-block w3-border-0 inputDisplay" :style="titleStyle" @click="select" @dblclick="edit">{{title | trad}}</button>
		</div>
		<div v-show="editMode">
			<input ref="editInput" class="w3-input inputEdit" type="text" v-model="newTitle" @keydown="save" @focusout="save" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'TitleInput',
	props: {
		title: String,
		titleClass: String,
		titleStyle: Object
	},
	data: function() {
		return {
			editMode: false,
			newTitle: ""
		}
	},
	methods: {
		save: function(e) {
			var keyCode = e && e.keyCode || 13;
			switch(keyCode) {
				case 27: // esc
					this.$emit("cancel", this.title);
					this.newTitle = "";
					this.editMode = false;
					break;
				case 13: // enter
					if (this.newTitle) this.$emit("save", this.newTitle);
					this.editMode = false;
					break;
			}
		},
		select: function() {
			this.$emit("select");
		},
		edit: function() {
			this.newTitle = "";
			this.editMode = true;
			this.$nextTick(() => {
    			this.$refs.editInput.focus();
    			this.$emit("edit", this.$refs.editInput);
			});
		}
	}
}
</script>

<style lang="less" scoped>
.inputDisplay {
	background-color: rgba(0,0,0, 0);
	cursor: pointer;
}
.inputDisplay:hover {
	background-color: rgba(0,0,0, .25);
}
.inputDisplay:active {
	border: 1px solid red;
}

.inputEdit {

}
</style>