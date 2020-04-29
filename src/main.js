import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import store from './store'

// 根据前端跨域方式做调整，这里暂定是接口代理的形式
axios.defaults = {
  baseURL: '/api',
  timeout: 8000
}
// 接口错误拦截
axios.interceptors.response.use((response) => {
  const res = response.data
  if (res && res.status === 0) {
    return res.data
  } else if (res && res.status === 10) {
    window.location.href('/login')
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
