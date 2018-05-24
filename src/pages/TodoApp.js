import React, { Component } from 'react'
import styled from 'styled-components'

const Todo = styled.li`
  text-decoration: ${props => (props.completed ? 'line-through' : '')};
`

export default class extends Component {
  state = {
    input: '',
    todos: [
      { id: 1, body: 'Todo 1', completed: false },
      { id: 2, body: 'Todo 2', completed: false },
      { id: 3, body: 'Todo 3', completed: true }
    ]
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onClickHandler = () => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: prevState.todos.length + 1,
          body: prevState.input,
          completed: false
        }
      ]
    }))
  }

  onTodoToggleHandler = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  }

  renderTodos = () =>
    this.state.todos.map(todo => (
      <Todo
        onClick={() => this.onTodoToggleHandler(todo.id)}
        key={todo.id}
        completed={todo.completed}
      >
        {todo.body}
      </Todo>
    ))

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input value={this.state.input} onChange={this.onInputChange} />
        <button onClick={this.onClickHandler}>add</button>
        <br />
        {this.renderTodos()}
      </div>
    )
  }
}
