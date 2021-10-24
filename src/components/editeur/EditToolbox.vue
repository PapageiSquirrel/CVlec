 <template>
  <div class="w3-cell-row">
    <button v-for="(btn, index) in buttons" :id="btn" :key="index" :disabled="isDisabled(index)" class="w3-cell w3-button" 
      @click="add(btn, )">{{"toolbox.button." + btn | trad}}</button>
  </div>
</template>

<script>
export default {
  name: 'EditToolbox',
  props: {
    selectedElement: String
  },
  components: {
    
  },
  data: function() {
    return {
      buttons: [
        "section", "topic", "detail"
      ]
    }
  },
  computed: {

  },
  methods: {
    add: function(type) {
      this.$emit("addElement", {type: type});
    },
    isDisabled: function(index) {
      var elementIndex = this.buttons.findIndex(button => button === this.selectedElement);
      return index > elementIndex+1;
    }
  }
}
</script>

<style lang="less" scoped>

</style>