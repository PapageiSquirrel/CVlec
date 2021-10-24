<template>
  <nav id="navTab" class="w3-bar-block w3-collapse w3-white w3-hover-border-gray w3-animate-left">
    <span v-if="tree.label == 'nav.navigation'" class="w3-bar-item w3-padding-large w3-green"><font-awesome-icon icon="map" /> {{tree.label | trad}}</span>
    <a v-else href="#" v-on:click="NavigateTo(tree.id)" v-bind:class="{ 'w3-green' : tree.active, 'w3-black': !tree.active }" class="w3-bar-item w3-button w3-padding-large" v-bind:style="{ 'margin-left': depth*3 + '%', width: 100-depth*3 + '%', 'opacity': 1-(depth-1)/10}">
      <span><font-awesome-icon icon="long-arrow-alt-right" /> {{tree.label}}</span>
    </a>
    <nav-tab v-for="node in tree.nodes" v-bind:key="node.label" v-bind:tree="node" v-bind:depth="depth+1" v-on:navigateTo="NavigateTo" />
  </nav>
</template>

<script>
export default {
  name: 'NavTab',
  props: {
    tree: Object,
    depth: Number
  },
  methods: {
    NavigateTo: function(val) {
      if (this.depth == 1 && typeof val == "number") {
        this.$emit("navigateTo", { "profile": val });
      } else if (this.depth == 2 && typeof val == "number") {
        this.$emit("navigateTo", { "section": val });
      } else if (val != null) {
        this.$emit("navigateTo", val);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navTab {
  
}

.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(10px);
}

a {

}
a:hover {
  transform: translateX(10px);
  transition: all .5s ease;
}
</style>
