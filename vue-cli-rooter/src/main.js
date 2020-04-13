import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {create} from '@/utils/create.js'


Vue.config.productionTip = false
Vue.prototype.$create = create

// new Vue的结果是根实例，$root
// App是跟组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
