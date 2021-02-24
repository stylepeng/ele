import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import fastClick from 'fastclick'
import lazyLoad from 'vue-lazyload'

fastClick.attach(document.body)
Vue.use(MintUI)
Vue.use(lazyLoad)

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
