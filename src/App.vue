<template>
  <div id="app">
    <div >
      <div id="banniere-titre" class="w3-left" style="margin-left:30px;">
        <h1 class="w3-hide-small w3-wide">
          <b class="w3-text-blue-gray" style="font-size:1.5em;text-shadow:1px 1px 0 #444;">CV</b>
          <span class="w3-text-black" style="text-shadow:1px 1px 0 #444;">lec</span>
        </h1>
      </div>

      <nav id="nav-bar" ref="stickyBar" v-bind:class="{ sticky : isSticky }" class="w3-card-2 w3-bar w3-blue-gray">
        <div class="w3-bar-item w3-button">Accueil</div>
        <div class="w3-bar-item w3-button">Mon Portfolio</div>
        <div class="w3-bar-item w3-button">Mes Intérêts</div>
        <div class="w3-bar-item w3-button w3-right">Me Contacter</div>
      </nav>

      <div class="content">
        <div class="w3-sidebar w3-collapse" v-bind:style="{ 'margin-top': sidebarMargin + 'px' }" style="width:210px;">
          <nav-tab class="nav-tab" v-bind:tree="tree" v-bind:depth="0" v-on:navigateTo="NavigateTo" style="width:200px;" /><br>
          <nav-link class="nav-tab" v-bind:selectedLink="selectedLink" v-on:selectLink="SelectLink" style="width:200px; margin-top:100px;" />
        </div>

        <div id="nav-contact" class="w3-sidebar w3-collapse" v-bind:style="{ 'margin-top': sidebarMargin + 'px' }" style="width:150px;right:0;">
          <nav-contact class="nav-tab" v-bind:contacts="user.contacts" />
        </div>

        <div class="w3-main w3-row" style="margin-left: 200px;margin-right: 150px;">
          <div id="main-view">
            <user-info v-bind:user="user" />

            <!--<user-profiles v-bind:profiles="user.profiles" v-on:select="SelectProfile" />-->

            <profile-overview v-if="selectedProfile != -1" 
              v-bind:profile="user.profiles[selectedProfile]" 
              v-bind:selectedSection="selectedSection"
              v-on:selectSection="SelectSection" 
              v-bind:selectedLink="selectedLink" 
              v-on:selectLink="SelectLink" />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <span>- copyright 2019 Maël Rabasse -</span>
    </footer>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'
//import UserProfiles from './components/UserProfiles.vue'
import ProfileOverview from './components/ProfileOverview.vue'
import NavContact from './components/NavContact.vue'
import NavTab from './components/NavTab.vue'
import NavLink from './components/NavLink.vue'

import Data from './data/user.json'

export default {
  name: 'app',
  components: {
    UserInfo,
    //UserProfiles,
    ProfileOverview,
    NavContact,
    NavTab,
    NavLink
  },
  data: function() {
    return {
      barOffset: null,
      sidebarMargin: 0,
      isSticky: false,
      selectedProfile : 0,
      selectedSection: -1,
      selectedLink : null,
      user : Data.Me
    }
  },
  computed: {
    tree: function() {
      var profile = this.user.profiles[this.selectedProfile];
      var t = { id: 0, label: "Navigation", nodes: [] };
      for (var i=0;i<this.user.profiles.length;i++) {
        var isActiveProfile = profile.id == this.user.profiles[i].id;
        var b = { id: this.user.profiles[i].id, label: this.user.profiles[i].title, active: isActiveProfile, nodes: [] };
        t.nodes.push(b);
      }
      for (var j=0;j<profile.sections.length;j++) {
        var isActiveSection = this.selectedSection != -1 ? profile.sections[this.selectedSection].id == profile.sections[j].id : false;
        var sb = { id: profile.sections[j].id, label: profile.sections[j].title, active: isActiveSection, nodes: [] };
        t.nodes[this.selectedProfile].nodes.push(sb);
      }
      return t;
      /*
      if (selectedLink != null) {
        var link = profile.sections[selectedSection];
        t.nodes.push({ label: section.title, nodes: [] });
      }
      */
    },
  },
  methods: {
    SelectProfile: function(val) {
      this.selectedSection = -1;
      this.selectedProfile = val;
    },
    SelectSection: function(val) {
      this.selectedSection = val;
    },
    SelectLink: function(val) {
      this.selectedLink = val;
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
    NavigateTo: function(val) {
      if (val["profile"] != null) {
        this.SelectProfile(val["profile"]);
      } else if (val["section"] != null) {
        this.SelectSection(val["section"]);
      }
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
#nav-bar {
  z-index: 9999;
  overflow: hidden;
}
.nav-tab {
  /*
  border-top: solid 4px black;
  border-right: solid 4px black;
  border-bottom: solid 4px black;
  */
}
#main-view {
  overflow-y: auto;
  padding-bottom: 30px;
}
#nav-contact {
  
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky + .content {
  margin-top: 38px;
}
.content-margin {

}

footer {
  position: fixed;
  bottom: 0;
  background-color: #FFF;
  height: 30px;
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
