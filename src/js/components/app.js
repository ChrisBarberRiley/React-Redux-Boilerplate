import React, {component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/storeIndex'

const store = configureStore();

const Jsx = (props) => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
)


render(<Jsx />, document.getElementById('app'))
