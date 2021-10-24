<template>
  <div class="w3-container w3-row-padding" style="padding-top: 15px;">
    <div v-for="project in projects" v-bind:key="project.name" class="w3-col s4 m4 l4">
      <div class="w3-card-4">
        <header class="w3-container w3-blue-gray">
          <h1>{{project.name}}</h1>
          <p>{{project.description}}</p>
        </header>

        <div class="w3-container"> <!-- v-bind:style="{ 'background-image': 'url('+ require('../' + project.image) +')' }" -->
          <img v-if="project.image !== ''" v-bind:src="require('../' + project.image)" />
          <div class="w3-left-align">
            <p v-for="link in project.links" v-bind:key="link.label"><span>{{link.label}} <a v-bind:href=link.value>{{link.value}}</a></span></p>
          </div>
        </div>

        <transition name="slide">
          <div v-if="showDetail == project.name" class="w3-container trans-slide">
            <p v-for="(detail, index) in project.details" v-bind:key="index">{{detail}}</p>
          </div>
        </transition>

        <button class="w3-btn w3-white w3-block" v-on:click="showDetail == project.name ? showDetail = '' : showDetail = project.name">
          <font-awesome-icon v-bind:icon="iconName(project.name)" />
        </button>

        <footer class="w3-container w3-blue-gray">
          <ul>
            <li v-for="tag in project.tags" v-bind:key="tag"><span class="w3-tag w3-gray w3-hover-white w3-small">{{tag}}</span></li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Interets from '../../data/interets.json';

export default {
  name: 'CvInterets',
  props: {
    
  },
  data: function() {
    return {
      projects: Interets,
      showDetail: ""
    }
  },
  methods: {
    iconName: function(p_name) {
      if (this.showDetail == p_name) return "angle-up";
      else return "angle-down";
    },
    imgSrc: function(url) {
      if (url !== '') {
        const src = require(url);
        return src;
      } else return '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* list style */
ul {
  list-style-type: none;
}
li {
  text-align: left;
  padding: 4px;
  display: inline;
}

.trans-slide {
  padding: 10px 10px;
  max-height: 30em;
  overflow:hidden;
}

.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(30px);
  opacity: 0;
  max-height: 0px;
  padding: 0px 10px;
}

img# {
  width: 100px;
  height: 100px;
  background-color: red;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 4s;
}
</style>