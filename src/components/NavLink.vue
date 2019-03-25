<template>
  <nav id="navLink" class="w3-bar-block w3-collapse w3-white w3-hover-border-gray w3-animate-left">
    <div v-on:click="SelectLink()">
      <b><a class="w3-bar-item w3-button w3-padding-large w3-white" style="border:solid 2px;">Tout Montrer<font-awesome-icon v-bind:icon="iconName()" class="w3-right" /></a></b>
    </div>
    <div v-for="link in links" v-bind:key="link.name" v-on:click="SelectLink(link.name)">
      <a class="w3-bar-item w3-button w3-padding-large" v-bind:style="link.style">{{link.name}}<font-awesome-icon v-bind:icon="iconName(link.name)" class="w3-right" /></a>
    </div>
  </nav>
</template>

<script>
import stLinks from '../data/links.json'

export default {
  name: 'NavLink',
  props: {
    selectedLink: String
  },
  data: function() {
    return {
      links: stLinks,
    }
  },
  methods: {
    iconName: function(name) {
      if (this.selectedLink == null) return 'eye';
      else if (this.selectedLink == name) return 'eye';
      else return 'eye-slash';
    },
    SelectLink: function(name) {
      this.$emit("selectLink", name);
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
