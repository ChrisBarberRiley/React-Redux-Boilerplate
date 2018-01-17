import React, {Component} from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/actionsIndex'

const Main = (props) => (
  <div>
    <h1>Hello {props.name}</h1>
    {props.todos.todos.map((todo) => {

        return (
          <li key={todo.index} onClick={()=> props.dispatch(toggleTodo(todo.index))}>
          {todo.index} - {todo.text} <br/>
          Toggle: {todo.visible ? 'true' : 'false' }
          </li>
        )

    })}
  </div>
)

Main.defaultProps = {
  name: 'Chris'
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Main)
