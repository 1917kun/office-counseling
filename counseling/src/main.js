import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight, faCrown, faEye, faHeart, faWifi, faCoffee, faBabyCarriage } from '@fortawesome/free-solid-svg-icons'
import { faGratipay, faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import './plugins/bootstrap-vue'
import './style/css/style.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
library.add(faAngleRight, faCrown, faEye, faHeart, faGratipay, faWifi, faCoffee, faBabyCarriage, faFacebook, faInstagram, faLine)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
