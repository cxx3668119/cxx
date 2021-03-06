import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ ) //swiper

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')