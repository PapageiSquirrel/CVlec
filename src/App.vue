<template>
  <div id="app">
    <div class="w3-container">
      <div id="banniere-titre" class="w3-row">
        <h1 class="w3-hide-small w3-wide">CVlec</h1>
      </div>

      <nav id="nav-bar" class="w3-row w3-bar w3-blue-gray">
        <div class="w3-bar-item w3-button">Home</div>
        <div class="w3-bar-item w3-button">About Me</div>
        <div class="w3-bar-item w3-button w3-right">Contact Me</div>
      </nav>

      <div class="w3-row">
        <nav id="nav-tab" class="w3-col m2 l2 w3-bar-block w3-collapse w3-white w3-hover-border-gray w3-animate-left"><br>
          <a href="#" v-on:change="" class="w3-bar-item w3-button w3-padding-large w3-black" style="width:100%;">
            {{user.profiles[selectedProfile].title}}
          </a>
        </nav>

        <div id="main-view" class="w3-col m8 l9">
          <user-info v-bind:user="user" />

          <user-profiles v-bind:profiles="user.profiles" v-on:select="SelectProfile" />

          <profile-overview v-if="selectedProfile != -1" v-bind:profile="user.profiles[selectedProfile]" />
        </div>

        <div id="nav-contact" class="w3-col m2 l1">
          <nav-contact v-bind:contacts="user.contacts" />
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
import UserProfiles from './components/UserProfiles.vue'
import ProfileOverview from './components/ProfileOverview.vue'
import NavContact from './components/NavContact.vue'

import Data from './data/user.json'

export default {
  name: 'app',
  components: {
    UserInfo,
    UserProfiles,
    ProfileOverview,
    NavContact
  },
  data: function() {
    return {
      selectedProfile : 0,
      user : Data.Me
    }
  },
  methods: {
    SelectProfile: function(val) {
      this.selectedProfile = val;
    }
  },
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#banniere-titre {
  
}
#nav-bar {
  
}
#nav-tab {
  border-right: solid 4px black;
}
#main-view {
  overflow-y: auto;
}
#nav-contact {
  
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
