<template>
  <div id="navContact">
     <ol class="w3-ul w3-border w3-card">
      <li v-for="contact in contacts" v-bind:key="contact.type" class="w3-block w3-hover-blue">
        <a class="" v-bind:href="contact.link">{{contact.type}}</a>
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
</style>
