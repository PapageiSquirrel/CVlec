import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://cvlec.acclarare.net:40258/',
  json: true
});

export default {
  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data
    })
  },
  async sendMail (mail) {
    return this.execute('post', '/mail', mail);
  }
}