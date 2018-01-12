import { createStore, combineReducers } from 'redux'
import todoAppReducer from '../reducers/reducersIndex'

export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      todo: todoAppReducer,
    })
  );

  return store;
}
