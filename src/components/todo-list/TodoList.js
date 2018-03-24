import React, { Component } from "react";
import { todosArray } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import '../../index.css';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosArray,
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Event handler for strike
  handleDone(todoIndex) {
    const todoToBeUpdated = this.state.todos[todoIndex];
    todoToBeUpdated["isCompleted"] = !todoToBeUpdated["isCompleted"];
    this.setState({
      todos: this.state.todos
    });
  }

  // Event handler for submitting newTodo to the Original data
  handleSubmit(newTodo) {
    // to add to the ORIGINAL ARRAY
    this.state.todos.push(newTodo);
    // dont understand this
    this.setState({
      value: "asdf"
    });
  }
  render() {
    const displayItems = this.state.todos.map((element, index) => {
      return (
        <TodoItem
          key={index}
          todo={element}
          handleDone={this.handleDone.bind(this, index)}
        />
      );
    });
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {displayItems}
        <br />
        <TodoForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default TodoList;
