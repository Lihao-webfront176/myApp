const state = {
	timeObj: {
		workTime: 0,
		studyTime: 0,
		funTime: 0
	},
	timeEvery: '分钟',
	hisList: []
}

//* getters
const getters = {
}

// 不允许再actions之外的地方访问后台数据
const actions = {
	getHistoryList(context, params) {
		let historyList = [{
			name: 'huahua',
			age: 23,
			hobby: 'running'
		},{
			name: 'haohao',
			age: 17,
			hobby: 'flying'
		}]
		// console.log(this, context, params)
		let data = historyList;
		let key = 'hisList';
		// commit('setStateValue', {data, key})
		context.commit({type: 'setStateValue', data, key})
	}
}

const mutations = {
	setStateValue(state, obj) {
		state[obj.key] = obj.data;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}