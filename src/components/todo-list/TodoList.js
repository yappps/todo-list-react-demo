import React, { Component } from "react";
import { todosArray } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosArray,
      value: ""
    };
    this.handleSubmitNewTodos = this.handleSubmit.bind(this);
  }

  // Event handler for strike
  handleDone(todoIndex) {
    const todoToBeUpdated = this.state.todos[todoIndex];
    todoToBeUpdated["isCompleted"] = !todoToBeUpdated["isCompleted"];
    this.setState({
      todos: this.state.todos
    });
  }

  handleSubmit(newTodo) {
    // alert("Added a new Todo Item: " + this.state.value);
    // event.preventDefault();
    this.state.todos.push(newTodo);
    this.setState({
      value: ""
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
