import React, {component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/storeIndex'

import { addTodo, toggleTodo } from '../actions/actionsIndex'

const store = configureStore();``

store.subscribe(() => console.log(store.getState()))
store.dispatch(addTodo({index: 1, text: 'Some text in here' }))
store.dispatch(addTodo({index: 2, text: 'Other text' }))
store.dispatch(toggleTodo(1))

const Jsx = (props) => (
  <Provider store={store}>
    <h1>Hello {props.name}</h1>
  </Provider>
)

Jsx.defaultProps = {
  name: 'Chris'
}

render(<Jsx />, document.getElementById('app'))
