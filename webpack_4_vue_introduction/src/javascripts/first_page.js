import Vue from 'vue';
import Vuex from 'vuex'
import store from '@/javascripts/vue_applications/pages/first_page/store'
Vue.use(Vuex)

import App from '@/javascripts/vue_applications/pages/first_page/App';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
