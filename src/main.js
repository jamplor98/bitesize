// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d);
Vue.config.productionTip = false
Vue.use(VueRouter);
// Vue.use(VueReCaptcha, { siteKey: '6LeE-qoUAAAAAJH8K2YJIk-bxzIgcYHTUXFTTBbc' })
// Vue.use(VueReCaptcha, {
//   siteKey: '6LeE-qoUAAAAAJH8K2YJIk-bxzIgcYHTUXFTTBbc',
//   loaderOptions: {
//     useRecaptchaNet: true
//   }
// })
/* eslint-disable no-new */
const router = new VueRouter({
		routes: Routes,
		mode: 'history'
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
   router : router
})

