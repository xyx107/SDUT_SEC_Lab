import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import 'normalize.css/normalize.css'
import './assets/css/global.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueLazyload, {
  preLoad: 1.0, // 页面预加载
  error: './assets/imgs/green.png',
  loading: 'https://img.lanrentuku.com/img/allimg/1212/5-121204193955-51.gif',
  // attempt: 1 // 尝试计数
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
