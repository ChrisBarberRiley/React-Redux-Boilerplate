import React, {component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

const Jsx = (props) => (
  <div>
    <h1>Hello World</h1>
  </div>
)


render(<Jsx />, document.getElementById('app'))
