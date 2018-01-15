import React, {component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/storeIndex'

import { addTodo } from '../actions/actionsIndex'

const store = configureStore();``

store.subscribe(() => console.log(store.getState()))
store.dispatch(addTodo({text: 'Some text in here' }))
store.dispatch(addTodo({text: 'Other text' }))


const Jsx = (props) => (
  <Provider store={store}>
    <h1>Hello {props.name}</h1>
  </Provider>
)

Jsx.defaultProps = {
  name: 'Chris'
}

render(<Jsx />, document.getElementById('app'))
