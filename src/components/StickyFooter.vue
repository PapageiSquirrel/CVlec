<template>
  <div>
    <div v-if="enableToolbox">
      <edit-toolbox :selectedElement="selectedElement" @addElement="onAddElement" />
    </div>

    <div v-else>

    </div>
  </div>
</template>

<script>
import EditToolbox from './editeur/EditToolbox.vue';

export default {
  name: 'StickyFooter',
  props: {
    enableToolbox: Boolean,
    selectedElement: String
  },
  components: {
    EditToolbox
  },
  data: function() {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    onAddElement: function(type) {
      this.$emit("addElement", type);
    }
  }
}
</script>

<style lang="less" scoped>
.edit {
  height: 60px;
}
.display {
  height: 30px;
}
</style>
