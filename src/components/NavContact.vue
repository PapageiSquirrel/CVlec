<template>
  <div id="navContact">
     <ol>
      <li v-for="contact in contacts" v-bind:key="contact.type">
        <p><a v-bind:href="contact.link">{{contact.type}}</a></p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'NavContact',
  props: {
    contacts: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navContact {
  border: solid 1px #ccc;
}

ol {
  list-style-type: none;
  padding: 0;
}
p {
  padding: 10px;
}

/* link style */
a {
  text-decoration: none;
  padding: 10px;
}
a:link {
  border: solid 2px dodgerblue;
  background-color: #FFF;
  color: #000;
}

a:visited {
  border: solid 2px dodgerblue;
  background-color: lightblue;
  color: #000;
}

a:hover {
  border: solid 2px dodgerblue;
  background-color: dodgerblue;
  color: #FFF;
}

a:active {
  
}
</style>
