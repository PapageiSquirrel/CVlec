<template>
  <div id="app">
    <user-info v-bind:user="user" />

    <user-profiles v-bind:user="user" v-on:select="SelectProfile" />

    <profile-overview v-if="selectedProfile != -1" v-bind:profile="user.profiles[selectedProfile]" />
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'
import UserProfiles from './components/UserProfiles.vue'
import ProfileOverview from './components/ProfileOverview.vue'

import Data from './data/user.json'

export default {
  name: 'app',
  components: {
    UserInfo,
    UserProfiles,
    ProfileOverview
  },
  data: function() {
    return {
      selectedProfile : -1,
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

.transform(@transform) {
    -webkit-transform: @transform;
    -moz-transform: @transform;
    -ms-transform: @transform; /* note that you have @trasnform here */
    -o-transform: @transform;
    transform: @transform; 
}
</style>
