import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局的样式文件
import './assets/scss/style.scss'

import axios from 'axios'
// 请求基准路径的配置
axios.defaults.baseURL = 'http://127.0.0.1:8002/'
// 将axios挂载到Vue的原型对象上
// 在别的组件中 this.$http
Vue.prototype.$http = axios

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echart
Vue.prototype.$echarts = window.echarts

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
