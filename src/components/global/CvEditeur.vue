<template>
  <div>
    <!--<div class="w3-sidebar w3-collapse" v-bind:style="{ 'margin-top': sidebarMargin + 'px' }" style="width:210px;">
      <nav-tab class="nav-tab" v-bind:tree="tree" v-bind:depth="0" v-on:navigateTo="NavigateTo" style="width:200px;" /><br>
      <nav-link class="nav-tab" v-bind:selectedLink="selectedLink" v-on:selectLink="SelectLink" style="width:200px; margin-top:100px;" />
    </div>-->

    <!--<div id="nav-contact" class="w3-sidebar w3-collapse" v-bind:style="{ 'margin-top': sidebarMargin + 'px' }" style="width:150px;right:0;">
      <nav-contact class="nav-tab" v-bind:contacts="user.contacts" />
    </div>-->

    <div class="w3-main w3-row" style="margin-left: 200px; margin-right: 150px;">
      <div id="main-view">
        <edit-user-info />

        <editable-node-element :node="emptyProfile" :events="events" @selectElement="onSelectElement">

        </editable-node-element>
      </div>
    </div>
  </div>
</template>

<script>
import emptyProfile from '../../data/emptyProfile.json';

import EditUserInfo from '../editeur/EditUserInfo.vue'
import EditableNodeElement from '../generic/EditableNodeElement.vue'
import NavContact from '../NavContact.vue'
import NavTab from '../NavTab.vue'
import NavLink from '../NavLink.vue'

export default {
  name: 'CvEditeur',
  props: {
    events: Object
  },
  components: {
    EditUserInfo,
    EditableNodeElement
  },
  data: function() {
    return {
      selectedProfile : 0,
      selectedLink : null,
      user : {},
      emptyProfile: emptyProfile
    }
  },
  computed: {

  },
  methods: {
    onSelectElement: function(args) {
      this.$emit("selectElement", args);
    }
  },
  created() {
    this.events.$on('addElement', (args) => {
        
    });
  }
}
</script>

<style lang="less" scoped>
#main-view {
  overflow-y: auto;
  padding-bottom: 60px;
}
#nav-contact {
  
}
</style>
