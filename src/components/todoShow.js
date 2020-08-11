import React, { Component } from "react";

export default class TodoShow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textDecoration: this.props.todo.compelete ? "line-through" : "",
          }}
          onClick={this.props.toggleItem}
        >
          {this.props.todo.text}
        </div>
        <button onClick={this.props.deleteTodo}>x</button>
      </div>
    );
  }
}
