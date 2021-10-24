<template>
  <div id="userinfo" class="w3-container w3-row w3-card-4">
      <div class="w3-col l2 m3 s4">
        <img src='../../assets/photo.webp' />
      </div>
      <div class="w3-col l4 m9 s8 w3-left-align">
        <div class="w3-panel">
          <h1 class="maintitle" id="user.id">{{user.realname}}</h1>
          <h5><span id="identite">
            <font-awesome-icon icon="calendar" /> {{user.age}} <br>
            <font-awesome-icon icon="home" /> {{user.adresse}} <br>
            <font-awesome-icon icon="phone" /> {{user.tel}} <br>
            <font-awesome-icon icon="at" /> {{user.email}}
          </span></h5>
        </div>
      </div>
      <div class="w3-col l5 m12 s12">
        <h2 class="w3-left-align" style="margin-left:20px;">{{"user.profil" | trad}}</h2>
        <p class="w3-sand w3-leftbar w3-panel w3-opacity w3-left-align" style="max-height:10em;overflow:hidden;text-overflow:ellipsis;">
          <span style="font-size:25px;line-height:0.6em;opacity:0.8">&#10077;</span> 
          <i style="margin-top: -5px;margin-bottom: -5px">{{user.aboutme}}</i> 
          <span style="font-size:25px;line-height:0.6em;opacity:0.8">&#10078;</span>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: Object
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
