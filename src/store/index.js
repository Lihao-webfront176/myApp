import Vue from 'vue'
import Vuex from 'vuex'

import spuDetails from './modules/spuDetails'

Vue.use(Vuex)

const debug = false

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		spuDetails
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
})