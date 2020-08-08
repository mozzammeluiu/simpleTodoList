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
        {JSON.stringify(this.state.todos)}
      </div>
    );
  }
}
