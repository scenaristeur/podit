import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SolidPodPlugin from './plugins/solid-pod';
Vue.use(SolidPodPlugin, {store: store});
import SolidDataPlugin from './plugins/solid-data';
Vue.use(SolidDataPlugin, {store: store});
import VueOffline from 'vue-offline'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueOffline)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
