import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import store from './vuex/store';

import AwesomeSwiper from 'vue-awesome-swiper';

/*加载路由*/
import routes from './routes'
Vue.use(Router);
Vue.use(AwesomeSwiper);
Vue.use(Vuex);

require('./assets/js/flexible.js')


//const routes = [
  //  { path: '/', component: home },
  //{ path: '/bar', component: banner }
//]

const router = new Router({
  routes :routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


