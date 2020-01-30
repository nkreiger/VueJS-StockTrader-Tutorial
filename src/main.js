import Vue from 'vue'
// import external vuejs helpers
<<<<<<< HEAD
import VueRouter from 'vue-router';
=======
>>>>>>> d3c8cfe7eb1d1ec806d37a20d55d8e99976b6e96
import VueLogger from 'vuejs-logger';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import main app
import App from './App.vue'

<<<<<<< HEAD
// get services
import router from "@/router/router";
import store from "@/store/store";

// import global components, mixins, filters
import '@/global/global';

// import bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

=======
// import bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

>>>>>>> d3c8cfe7eb1d1ec806d37a20d55d8e99976b6e96
// set production
const isProduction = process.env.NODE_ENV === 'production';

// create logging
Vue.config.productionTip = isProduction
const options = {
<<<<<<< HEAD
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
};

// enabkle services
Vue.use(VueRouter);

=======
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

// enable services
>>>>>>> d3c8cfe7eb1d1ec806d37a20d55d8e99976b6e96
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLogger, options);

// create and mount vue spa app on index.html
new Vue({
<<<<<<< HEAD
    router,
    store,
    render: h => h(App),
}).$mount('#app')
=======
  render: h => h(App),
}).$mount('#app')
>>>>>>> d3c8cfe7eb1d1ec806d37a20d55d8e99976b6e96
