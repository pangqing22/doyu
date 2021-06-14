import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/style/reset.css'
import http from '../src/utils/http'
Vue.prototype.$http = http;
	
Vue.prototype.bus = new Vue()　
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
