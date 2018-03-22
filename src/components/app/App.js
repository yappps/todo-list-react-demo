import React, { Component } from "react";
import TodoList from "../todo-list/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList title="Jumpstart" />
        {/* <TodoList title="Homework" /> */}
      </div>
    );
  }
}

export default App;
