import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		smartlist:[],
	},
	getters: {
	    doneTodos: state => {
	      console.log("store")
	    }
	},
	plugins: [
		createPersistedState({ 
			storage: window.sessionStorage ,
		})
	] 
})
export default store