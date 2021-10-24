<template>
  <div class="modal-mask w3-border-top w3-border-black w3-card-2" v-bind:style="{ 'margin-top': topmargin + 'px' }">
    <div class="w3-blue-gray">
      <div class="w3-container">
        <div v-if="message != ''" class="w3-panel w3-display-container" v-bind:class="msg_class">
          <button class="w3-button w3-display-topright" v-on:click="message = ''"><font-awesome-icon icon="times" /></button>
          <p>{{message}}</p>
        </div>

        <p><font-awesome-icon icon="at" /><input class="w3-input w3-border-black w3-hover-gray" type="text" v-model="from" placeholder="Email" required /></p>
        <p><font-awesome-icon icon="highlighter" /><input class="w3-input w3-border-black w3-hover-gray" type="text" v-model="subject" placeholder="Objet de votre message" required /></p>
        <p><font-awesome-icon icon="pen" /><textarea class="w3-input w3-border-black w3-hover-gray" v-model="text" placeholder="Contenu de votre message" required /></p>
      </div>
      <button class="w3-btn w3-green" v-on:click="send" style="width: 50%;"><font-awesome-icon icon="envelope" />   Envoyer</button>
      <button class="w3-btn w3-black" v-on:click="$emit('close')" style="width: 50%;"><font-awesome-icon icon="times" />   Fermer</button>
    </div>
  </div>
</template>

<script>
import api from '../../api'

export default {
  name: 'ModalContact',
  props: {
    topmargin: Number
  },
  data: function() {
    return {
      from: '', 
      subject: '', 
      text: '',
      message: '',
      msg_class: '' 
    }
  },
  methods: {
    send: function() {
      if (this.from !== '' && this.subject !== '' && this.text !== '') {
        let mail = {from: this.from, to: 'mael.rabasse@acclarare.net', subject: this.subject, text: this.text}
        api.sendMail(mail);
        this.message = "Message envoyé !";
        this.msg_class = "w3-green";
      } else {
        this.message = "Tous les champs doivent être renseigner !";
        this.msg_class = "w3-red";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  z-index: 9999;
  position: fixed;
  width: 400px;
  top: 30;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
}
p {
  text-align: left;
}
input {
  
}
textarea {
  width: 100%;
  height: 200px;
}
</style>