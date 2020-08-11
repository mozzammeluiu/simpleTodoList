import React, { Component } from "react";
import TodoForm from "./todoForm";
import TodoShow from "./todoShow";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoToShow: "all",
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
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  updateTodoToShow = (status) => {
    this.setState({
      todoToShow: status,
    });
  };
  removeAllCompeletedTodos = () => {
    console.log("called");
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.compelete),
    });
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.compelete);
    } else if (this.state.todoToShow === "compeleted") {
      todos = this.state.todos.filter((todo) => todo.compelete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("compeleted")}>
            Compeleted
          </button>
        </div>
        <div>
          <button onClick={() => this.removeAllCompeletedTodos()}>
            Remove All Compeleted Todos
          </button>
        </div>
        {todos.map((todo) => {
          return (
            <TodoShow
              key={todo.id}
              toggleItem={() => this.toggleItem(todo.id)}
              deleteTodo={() => this.deleteTodo(todo.id)}
              todo={todo}
            />
          );
        })}
        <div>
          Todos left:{this.state.todos.filter((todo) => !todo.compelete).length}
        </div>
      </div>
    );
  }
}
