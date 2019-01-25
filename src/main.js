// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import museUI from 'muse-ui'
import elementUI from 'element-ui'
import axios from 'axios'
import store from './store/store'
import { emoji } from './utils/emoji.js'
import $ from 'jquery';

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-light.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.emoji = emoji;
Vue.prototype.path = "http://appinter.sunwoda.com/common/community/";
// Vue.prototype.path='http://172.30.128.32:8085/swdAPP/common/community/'

Vue.use(museUI);
Vue.use(elementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
