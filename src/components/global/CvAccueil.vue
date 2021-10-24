<template>
  <div>
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
</template>

<script>
import UserInfo from '../display/UserInfo.vue'
import ProfileOverview from '../display/ProfileOverview.vue'
import NavContact from '../NavContact.vue'
import NavTab from '../NavTab.vue'
import NavLink from '../NavLink.vue'

import Data from '../../data/user.json'

export default {
  name: 'CvAccueil',
  props: {
    sidebarMargin: Number
  },
  components: {
    UserInfo,
    ProfileOverview,
    NavContact,
    NavTab,
    NavLink
  },
  data: function() {
    return {
      selectedProfile : 0,
      selectedSection: -1,
      selectedLink : null,
      user : Data.Me
    }
  },
  computed: {
    tree: function() {
      var profile = this.user.profiles[this.selectedProfile];
      var t = { id: 0, label: "nav.navigation", nodes: [] };
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
    NavigateTo: function(val) {
      if (val["profile"] != null) {
        this.SelectProfile(val["profile"]);
      } else if (val["section"] != null) {
        this.SelectSection(val["section"]);
      }
    }
  }
}
</script>

<style lang="less" scoped>
#main-view {
  overflow-y: auto;
  padding-bottom: 30px;
}
#nav-contact {
  
}
</style>
