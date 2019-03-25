import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink, faFolder, faFolderOpen, faPhone, faHome, faAt, faCalendar, faLongArrowAltRight, faEye, faEyeSlash, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLink, faFolder, faFolderOpen, faPhone, faHome, faAt, faCalendar, faLongArrowAltRight, faEye, faEyeSlash, faMap)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
