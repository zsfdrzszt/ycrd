import Vue from 'vue'
// main.js
import uView from "uview-ui";
import App from './App'


Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
