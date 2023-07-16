import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import VueCompositionAPI from '@vue/composition-api'
import { initializeApp } from "firebase/app";
import firebaseKey from "@/firebaseKey";

initializeApp(firebaseKey);

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false

// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
Vue.use(VueCookies);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
