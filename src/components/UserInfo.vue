<template>
  <div id="userinfo" class="w3-container w3-row">
      <div class="w3-col m3 l2">
        <img class="w3-round" src='../assets/photo.webp' />
      </div>
      <div class="w3-col m6 l4">
        <h1 class="maintitle" id="user.id">{{user.realname}}</h1>
        <h5><span id="identite">{{user.age}} ans - {{user.adresse}} - {{user.tel}} - {{user.email}}</span></h5>
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
  height: 120px;
  width: 120px; 
}

.infobox {
  display: inline-block;
  margin-left: 10px;
  text-align: left;
}
.maintitle {
  font-size: 5em;
}

#identite {
  color: grey;
}
</style>
