<template>
  <div>
      <div>
        <h1 id="user.id">{{user.realname}}</h1>
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

#identite {
  color: grey;
}
</style>
