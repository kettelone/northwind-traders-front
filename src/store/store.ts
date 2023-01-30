import { createStore } from 'redux'

interface DeafultState {
	info: {
		sqlString?: string
		timing?: number
		type?: string
		date?: string
	}[]
	metrics: {
		query_count: number
		result_count: number
		select: number
		select_where: number
		select_left_join: number
	}
}

interface Action {
	type: string
	payload: {
		sqlString?: string
		timing?: number
		type?: string
		date?: string
	}
	metrics: {
		query_count: number
		result_count: number
		select: number
		select_where: number
		select_left_join: number
	}
}

const defaultState: DeafultState = {
	info: [],
	metrics: {
		query_count: 0,
		result_count: 0,
		select: 0,
		select_where: 0,
		select_left_join: 0
	}
}

const reducer = (state = defaultState, action: Action) => {
	switch (action.type) {
		case 'ADD_SQL':
			return {
				...state,
				info: [ ...state.info, action.payload ],
				metrics: {
					query_count: state.metrics.query_count + action.metrics.query_count,
					result_count:
						state.metrics.result_count + action.metrics.result_count,
					select: state.metrics.select + action.metrics.select,
					select_where:
						state.metrics.select_left_join + action.metrics.select_where,
					select_left_join:
						state.metrics.select_left_join + action.metrics.select_left_join
				}
			}

		default:
			return state
	}
}
const store = createStore(reducer)

export { store, DeafultState, Action }
