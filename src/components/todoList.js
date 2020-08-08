import React, { Component } from "react";
import TodoForm from "./todoForm";
import TodoShow from "./todoShow";
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
  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            compelete: !todo.compelete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => {
          return (
            <TodoShow
              key={todo.id}
              toggleItem={() => this.toggleItem(todo.id)}
              todo={todo}
            />
          );
        })}
      </div>
    );
  }
}
