import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
