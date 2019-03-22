<template>
  <div id="navContact">
    <ol class="w3-ul w3-border w3-card">
      <li class="w3-bar-item w3-padding-large w3-green">
        <span><font-awesome-icon icon="link" /> Liens</span>
      </li>
      <div v-for="(contact, c_index) in contacts" v-bind:key="contact.type" v-on:mouseleave="onLinkMouseLeave(c_index)">
        <li class="w3-block w3-hover-blue" v-on:mouseover="onLinkMouseOver(c_index)">
          <a v-bind:href="contact.link">{{contact.type}}</a>
        </li>
        <transition name="slide">
          <div v-if="slides[c_index] == true" class="w3-border trans-slide">
            <ol class="w3-ul">
              <li v-for="(sl,index) in contact.sublinks" v-bind:key="index" class="w3-block w3-gray w3-hover-blue"><a href="#">{{sl}}</a></li>
            </ol>
          </div>
        </transition>
      </div>
    </ol>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'NavContact',
  props: {
    contacts: Array
  },
  data: function() {
    return {
      slides: []
    }
  },
  methods: {
    onLinkMouseOver: function(index) {
      if (this.contacts[index].sublinks.length > 0) Vue.set(this.slides, index, true);
    },
    onLinkMouseLeave: function(index) {
      Vue.set(this.slides, index, false);
    }
  },
  created() {
    for (var i=0;i<this.contacts.length;i++) {
      this.slides.push(false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navContact {
  border: solid 1px #ccc;
}

ol {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
p {
  padding: 10px;
}

.trans-slide {
  max-height: 20em;
  overflow: hidden;
}
.slide-enter-active {
  transition: all .8s ease;
}
.slide-leave-active {
  transition: all .8s ease;
}
.slide-enter, .slide-leave-to {
  max-height: 0px;
}
</style>
