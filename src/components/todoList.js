import React, { Component } from "react";
import TodoForm from "./todoForm";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    );
  }
}
