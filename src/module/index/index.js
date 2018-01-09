import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import { createRouter } from '../../router/index.js'

const router = createRouter()

// 写入全局样式
import '@/assets/css/reset.css'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default app
