<template>
  <div>
    <ol v-if="id_chosen == -1">
      <li v-for="profile in user.profiles" v-bind:key="profile.id">
        <button v-on:click="id_chosen = profile.id">{{profile.title}}</button>
      </li>
    </ol>
    <button v-if="id_chosen != -1"  v-on:click="id_chosen = -1">Autre Profile</button>
  </div>
</template>

<script>
export default {
  name: 'UserProfiles',
  props: {
    user: Object
  },
  data: function() {
    return {
      id_chosen : -1
    }
  },
  watch: {
    id_chosen(val) {
      this.$emit("select", val);
    }
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
</style>