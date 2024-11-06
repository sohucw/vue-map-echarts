import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);


import global from './utils/global' // 全局方法
Vue.use(global)

// 引入全局css
import './assets/scss/style.scss';

Vue.use(ElementUI);

//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import 'echarts/map/js/china.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
