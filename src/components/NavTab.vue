<template>
  <nav id="navTab" class="w3-bar-block w3-collapse w3-white w3-hover-border-gray w3-animate-left">
    <transition name="slide">
      <a href="#" v-on:mouseover="animateTree" v-bind:class="{ 'w3-green' : tree.label == 'Navigation', 'w3-black' : tree.label != 'Navigation' }" class="w3-bar-item w3-button w3-padding-large" style="width:100%;">
        <span v-bind:style="{ 'margin-left' : (depth *10) + 'px' }"><font-awesome-icon v-if="tree.label != 'Navigation'" icon="long-arrow-alt-right" /> {{tree.label}}</span>
      </a>
    </transition>
    <nav-tab v-for="node in tree.nodes" v-bind:key="node.label" v-bind:tree="node" v-bind:depth="depth+1" />
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
    animateTree: function() {
      
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
</style>
