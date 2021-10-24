<template>
  <div id="userinfo" class="w3-container w3-row w3-card-4">
      <div class="w3-col l2 m3 s4">
        <font-awesome-icon icon="camera" class="w3-xxlarge w3-border w3-round" style="height: 300px; width: 200px;" /><!-- TODO: add modal for default photo -->
      </div>
      <div class="w3-col l4 m9 s8 w3-left-align">
        <div class="w3-panel">
          <h1 class="maintitle" id="user.id">
            <input class="w3-input" type="text" v-bind:value="user.realname" v-bind:placeholder="emptyUser.realname | trad" />
          </h1>
          <h5 id="identite" class="w3-row w3-section">
            <div class="w3-col w3-xlarge" style="width:30px">
              <font-awesome-icon icon="calendar" /> 
            </div>
            <div class="w3-rest">
              <input class="w3-input" type="text" v-bind:value="user.age" v-bind:placeholder="emptyUser.age | trad" />
            </div>
            <div class="w3-col w3-xlarge" style="width:30px">
              <font-awesome-icon icon="home" />
            </div>
            <div class="w3-rest">
              <input class="w3-input" type="text" v-bind:value="user.adresse" v-bind:placeholder="emptyUser.adresse | trad" />
            </div>
            <div class="w3-col w3-xlarge" style="width:30px">
              <font-awesome-icon icon="phone" />
            </div>
            <div class="w3-rest">
              <input class="w3-input" type="text" v-bind:value="user.tel" v-bind:placeholder="emptyUser.tel | trad" />
            </div>
            <div class="w3-col w3-xlarge" style="width:30px">
              <font-awesome-icon icon="at" />
            </div>
            <div class="w3-rest">
              <input class="w3-input" type="text" v-bind:value="user.email" v-bind:placeholder="emptyUser.email | trad" />
            </div>
          </h5>
        </div>
      </div>
      <div class="w3-col l5 m12 s12">
        <h2 class="w3-left-align" style="margin-left:20px;">{{"user.profil" | trad}}</h2>
        <p class="w3-sand w3-leftbar w3-panel w3-opacity w3-left-align" style="max-height:10em;overflow:hidden;text-overflow:ellipsis;">
          <span style="font-size:25px;line-height:0.6em;opacity:0.8">&#10077;</span> 
          <i style="margin-top: -5px;margin-bottom: -5px">
            <input class="w3-input" type="textarea" v-bind:value="user.aboutme" v-bind:placeholder="emptyUser.aboutme | trad" />
          </i> 
          <span style="font-size:25px;line-height:0.6em;opacity:0.8">&#10078;</span>
        </p>
      </div>
    </div>
</template>

<script>
import emptyUser from '../../data/emptyUser.json'

export default {
  name: 'EditUserInfo',
  props: {

  },
  data: function() {
    return {
      user: {
        id: 0,
        nickname: "",
        realname: "",
        age: "",
        adresse: "",
        fixe: "",
        tel: "",
        email: "",
        aboutme: "",
        photo: "",
        contacts: []
      },
      emptyUser: emptyUser
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin : 2px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 100%;
}
div {
  margin: 0px 10px;
  padding: 0;
}
#userinfo > div {
  margin: 0;
  padding: 0;
}

.maintitle {
  font-size: 3em;
}

#identite {
  color: grey;
}
</style>
