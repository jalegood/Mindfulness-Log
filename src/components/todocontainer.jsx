import React, { Component } from "react";
import Todo from "../components/todo";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: 1, value: "Finish Infinite Options project" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" },
    ],
  };
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          To Do
        </div>
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            number={todo.id}
            value={todo.value}
            checked={todo.checked}
          />
        ))}
      </div>
    );
  }
}

export default TodoContainer;
