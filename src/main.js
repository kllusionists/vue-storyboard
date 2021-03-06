import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/tailwind.css'

import './router/router.guard'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
