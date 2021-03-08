import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		smartlist:uni.getStorageSync("_history") || []
	},
	getters: {
	    doneTodos: state => {
	      console.log("store")
	    }
	},
	mutations:{
			SET_HISTORY_LISTS(state, history) {
				state.historyLists = history
			},
			CLEAR_HISTORY(state) {
				state.historyLists = []
			}
	},
	actions: {
			set_history({commit, state}, history){
				let list = state.historyLists
				list.unshift(history)
				// 存入本地缓存
				uni.setStorageSync('_history',list)
				commit('SET_HISTORY_LISTS', list)
			},
			clear_history({commit}){
				uni.removeStorageSync('_history')
				commit('CLEAR_HISTORY')
			}
		}
	
})
export default store