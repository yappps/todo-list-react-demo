import React, { Component } from "react";
import TodoList from "../todo-list/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return <TodoList title="Todos" />;
  }
}

export default App;
