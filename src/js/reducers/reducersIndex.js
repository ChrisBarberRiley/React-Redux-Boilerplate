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
          {
            index: action.index,
            text: action.text,
            visible: action.visible
          }
        ]
      break;

    case TOGGLE_TODO:
      return state.map((todo) => {
        if(todo.index === action.index)
          return {
            ...todo,
            visible: !todo.visible
          }
        else
          return {...todo}
      })
      break;
    default:
      return state;
  }
}

export default todoAppReducer;
