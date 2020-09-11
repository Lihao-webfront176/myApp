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
import { bind } from 'file-loader'
Vue.use(vant)

Vue.config.productionTip = false

Vue.prototype.axios = axios

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    // 聚焦元素
    el.focus()
  }
})
// 自定义指令的生命周期
Vue.directive('click', {
  bind: function (el, binding, vnode) {
    // 生命周期函数接受三个参数
    // el：绑定对象，可直接操作DOM
    // binding：指令的信息
    // vnode：VUE翻译生成的虚拟节点
    // 只调用一次，指令第一次绑定到元素时候调用
    console.info(el, binding, vnode, 'bind doing----------');
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  },
  inserted: function (el) {
    // 绑定元素插入父节点的时候执行
    console.info('inserted doing-----------')
  },
  update: function (el) {
    // 被绑定与元素所在模板更新时调用
    console.info('update doing-----------')
  },
  componentUpdate: function (el) {
    // 被绑定的元素所在模板完成一次更新更新周期的时候调用
    console.info('componentUpdate doing-----------')
  },
  unbind: function (el) {
    // 只调用一次，指令月元素解绑的时候调用
    console.info('unbind doing-----------')
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
