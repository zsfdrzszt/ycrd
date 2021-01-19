import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store'

Vue.config.productionTip = false
Vue.use(uView);
App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue({
    ...App
})
app.$mount()
