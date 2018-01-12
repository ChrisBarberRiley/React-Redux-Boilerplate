/*
  Action Types
*/
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SHOW_ALL = 'SHOW_ALL'
/*
  Action Creators
*/
export function addTodo(text){
    return {
      type: ADD_TODO,
      text
    }
}

export function toggleTodo(index){
  return{
    type: TOGGLE_TODO,
    index
  }
}

export function visibilityFilters(filter){
  return{
    type: SHOW_ALL,
    filter
  }
}
