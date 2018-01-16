import {
  ADD_TODO,
  TOGGLE_TODO,
  visibilityFilters
} from '../actions/actionsIndex.js'

const defaultState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
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

    case TOGGLE_TODO:
      console.log(action.index);
      return state.map((state) => {
        console.log(state);
      })
      break;
    default:
      return state;
  }
}

export default todoAppReducer;
