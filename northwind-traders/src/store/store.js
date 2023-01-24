import { createStore } from 'redux';

const defaultState = {
  info: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case "ADD_SQL":
      return { ...state, info: [...state.info, action.payload],  }

    default:
      return state
  }
}
const store = createStore(reducer)

export default store