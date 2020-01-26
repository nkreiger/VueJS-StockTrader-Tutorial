import Vue from 'vue'
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

// get routes
import router from "@/router/router";

// import global components, mixins, filters
import '@/global/global';

// import bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// enabkle services
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
