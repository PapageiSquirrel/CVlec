<template>
  <div id="app">
    <div>
      <div id="banniere-titre" class="w3-left" style="margin-left:30px;">
        <h1 class="w3-hide-small w3-wide">
          <b class="w3-text-blue-gray" style="font-size:1.5em;text-shadow:1px 1px 0 #444;">CV</b>
          <span class="w3-text-black" style="text-shadow:1px 1px 0 #444;">lec</span>
        </h1>
      </div>

      <div id="banniere-lang" class="w3-right">
        <button class="w3-button flag:FR" v-on:click="updateLang('fr')"></button>
        <button class="w3-button flag:GB" v-on:click="updateLang('gb')"></button>
        <button class="w3-button flag:ES" v-on:click="updateLang('es')"></button>
        <button class="w3-button flag:RU" v-on:click="updateLang('ru')"></button>
      </div>

      <nav id="nav-bar" ref="stickyBar" v-bind:class="{ sticky : isSticky }" class="w3-card-2 w3-bar w3-blue-gray">
        <button v-for="view in views" class="w3-bar-item w3-button" 
          v-bind:key="view.name"
          v-bind:class="{ active: currentView === view.name }"
          v-on:click="currentView = view.name">{{view.label | trad}}</button>
        <button class="w3-bar-item w3-button w3-right" v-on:click="showContact = !showContact">{{ "menu.contact" | trad}}</button>
      </nav>

      <div class="content">
        <modal-contact class="modal" v-if="showContact" v-bind:topmargin="sidebarMargin" v-on:close="showContact = false" />
        
        <component v-bind:is="currentViewComponent" v-bind="currentViewProperties" v-on="currentViewEvents"></component>
      </div>
    </div>

    <footer>
      <sticky-footer :enableToolbox="currentView === 'Editeur'" :selectedElement="selectedElement" @addElement="onAddElement" />
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { langApi } from './langApi.js'

import CvAccueil from './components/global/CvAccueil.vue'
import CvEditeur from './components/global/CvEditeur.vue'
import CvPortfolio from './components/global/CvPortfolio.vue'
import CvInterets from './components/global/CvInterets.vue'

import ModalContact from './components/modal/ModalContact.vue'
import StickyFooter from './components/StickyFooter.vue';

export default {
  name: 'app',
  components: {
    CvAccueil,
    CvEditeur,
    CvPortfolio,
    CvInterets,
    ModalContact,
    StickyFooter
  },
  data: function() {
    return {
      currentView: 'Accueil',
      views: [
        {name: 'Accueil', label: 'menu.accueil'}, 
        {name: 'Editeur', label: 'menu.editeur'}, 
        {name: 'Portfolio', label: 'menu.portfolio'}, 
        {name: 'Interets', label: 'menu.interets'}
      ],
      events: new Vue(),
      selectedElement: '',
      isSticky: false,
      barOffset: null,
      sidebarMargin: 0,
      showContact: false
    }
  },
  computed: {
    currentViewComponent: function() {
      return 'Cv' + this.currentView;
    },
    currentViewProperties: function() {
      if (this.currentViewComponent === 'CvAccueil') {
        return { sidebarMargin: this.sidebarMargin };
      } else if (this.currentViewComponent === 'CvEditeur') {
        return { events: this.events };
      }
      return {};
    },
    currentViewEvents: function() {
      if (this.currentViewComponent === 'CvEditeur') {
        return { selectElement: this.onSelectElement };
      }
      return {};
    }
  },
  methods: {
    updateLang: function(code) {
      return langApi.setCountryCode(code);
    },
    updateSticky: function() {
      if (this.barOffset == null && this.$refs.stickyBar) {
        this.barOffset = this.$refs.stickyBar.offsetTop;
      }

      if (this.barOffset != null) {
        if (window.pageYOffset >= this.barOffset) {
          this.sidebarMargin = 0;
          this.isSticky = true;
        } else {
          this.sidebarMargin = -1* window.pageYOffset;
          this.isSticky = false;
        }
      } 
    },
    onAddElement: function(type) {
      this.events.$emit("addElement", type);
    },
    onSelectElement: function(args) {
      this.selectedElement = args.type;
      this.events.$emit("selectElement", args);
    }
  },
  created () {
    window.addEventListener('scroll', this.updateSticky);
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateSticky);
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#banniere-titre {
  background-color:#ffffff;
}
#banniere-lang {
  margin: 30px;
}
#nav-bar {
  z-index: 9998;
  overflow: hidden;
}

/* Set flag icon height to 24px. */
[class*=' flag:'], [class^='flag:'] {
  font-size: 24px;
  margin-right: 8px;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.content {
  z-index: 0;
}
.sticky + .content {
  margin-top: 38px;
}

.active {
  background: #999;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  border-top: solid 2px black;
  padding-top: 4px;
}

.transform(@transform) {
  -webkit-transform: @transform;
  -moz-transform: @transform;
  -ms-transform: @transform;
  -o-transform: @transform;
  transform: @transform; 
}
</style>
