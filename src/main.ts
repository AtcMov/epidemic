import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { mixin } from './mixin'/* 混入 */
import './icon/iconfont.css'
import { Progress } from 'element-ui';/* element-ui */
Vue.use(Progress )
Vue.mixin(mixin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
