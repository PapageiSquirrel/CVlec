<template>
  <div>
    <ol>
      <li v-for="profile in profiles" v-bind:key="profile.id">
        <button v-on:click="id_chosen = profile.id" v-bind:class="{ active: id_chosen === profile.id }" v-bind:style="{ width: buttonWidth }">{{profile.title}}</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'UserProfiles',
  props: {
    profiles: Array
  },
  data: function() {
    return {
      id_chosen : 0
    }
  },
  computed: {
    buttonWidth: function() {
      return (1/this.profiles.length)*100 + '%';
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
ol {
  list-style-type: none;
  padding: 10px 0px 0px 0px;
  margin: 0;
}
li {
  display: inline;
  margin: 0;
}
a {
  color: #42b983;
}

div {
  margin: 0px;
  padding: 0px;
}

button {
  padding: 4px 0px;
  margin: 0px;
  border: 1px solid #ccc;
  background: #f0f0f0;
  cursor: pointer;
  margin-bottom: -1px;
  margin-right: -1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
button:hover {
  border: 1px solid #ccc;
  background: #e0e0e0;
}
button.active {
  background: #e0e0e0;
}
</style>