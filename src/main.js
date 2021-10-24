import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLink, faFolder, faFolderOpen, faPhone, faHome, faAt, faCalendar, faLongArrowAltRight, faEye, faEyeSlash, 
	faMap, faAngleUp, faAngleDown, faEnvelope, faPen, faHighlighter, faTimes, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { langApi } from './langApi';

import '../node_modules/country-flag-icons/3x2/flags.css';

library.add(faLink, faFolder, faFolderOpen, faPhone, faHome, faAt, faCalendar, faLongArrowAltRight, faEye, 
	faEyeSlash, faMap, faAngleUp, faAngleDown, faEnvelope, faPen, faHighlighter, faTimes, faCamera)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

/* lang filter */
Vue.filter('trad', function (value) {
  if (!value) return '';
  return langApi.getLabel(value) || value;
});

new Vue({
  render: h => h(App),
}).$mount('#app');
