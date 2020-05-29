// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Toast from 'vue-easy-toast';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import App from './App';
import router from './router';

const HELIXPlugin = require('@/utils/HELIXPlugin').default;

Vue.use(HELIXPlugin);
Vue.use(Toast);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// Directives (global)
require('@/directives/click-outside.js');
require('@/directives/toast.js');

// Styles (global)
require('@/styles/font-awesome.scss');
require('@/styles/layout.styl');

require('@/lib/identi-qrcode');
require('@/utils/helix-node');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
