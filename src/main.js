// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import httpUtil from './utils/httpUtil'
Vue.prototype.$http = httpUtil;

import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

Vue.config.productionTip = false

Vue.prototype.axios = axios

router.beforeEach((to, from, next) => {
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
