import Vue from 'vue'
// import external vuejs helpers
import VueLogger from 'vuejs-logger';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import main app
import App from './App.vue'

// import bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// set production
const isProduction = process.env.NODE_ENV === 'production';

// create logging
Vue.config.productionTip = isProduction
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

// enable services
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLogger, options);

// create and mount vue spa app on index.html
new Vue({
  render: h => h(App),
}).$mount('#app')