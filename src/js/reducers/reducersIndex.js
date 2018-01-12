import {
  ADD_TODO,
  visibilityFilters
} = '../actions/actionsIndex.js'

const defaultState = {
  visibilityFilter = visibilityFilters.SHOW_ALL,
  todo: []
}

function todoAppReducer(state = defaultState, action){
  switch (action.type) {
    case ADD_TODO:
        return [
          ...state,
          action.text
        ]
      break;
    default:
      return state;
  }
}

export default todoApp;
