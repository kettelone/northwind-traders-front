import { createStore } from 'redux'

interface DeafultState {
	info: {
		msg: Array<string | number>
	}[]
}

const defaultState: DeafultState = {
	info: [
		{
			msg: []
		}
	]
}

interface Action {
	type: string
	payload: {
		msg: Array<string | number>
	}
}

const reducer = (state = defaultState, action: Action) => {
	switch (action.type) {
		case 'ADD_SQL':
			return { ...state, info: [ ...state.info, action.payload ] }

		default:
			return state
	}
}
const store = createStore(reducer)

export { store, DeafultState, Action }
