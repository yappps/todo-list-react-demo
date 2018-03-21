import React, { Component } from "react";
import { todosArray } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosArray,
      value: ""
    };
    this.handleAddNewTodos = this.handleAddNewTodos.bind(this);
    this.handleSubmitNewTodos = this.handleSubmitNewTodos.bind(this);
  }

  // Event handler for strike
  handleDone(todoIndex) {
    const todoToBeUpdated = this.state.todos[todoIndex];
    todoToBeUpdated["isCompleted"] = !todoToBeUpdated["isCompleted"];
    this.setState({
      todos: this.state.todos
    });
  }

  // Event handler for form submit
  handleAddNewTodos(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmitNewTodos(event) {
    // alert("Added a new Todo Item: " + this.state.value);
    event.preventDefault();
    this.state.todos.push({
      description: this.state.value,
      isCompleted: false
    });
    this.setState({
      value: ""
    });
  }
  render() {
    const displayItems= this.state.todos.map((element, index) => {
      return (
        <TodoItem
          key={index}
          todo={element}
          handleDone={this.handleDone.bind(this,index)}
        />
      );
    })
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {displayItems}
        <br></br>
        <form onSubmit={this.handleSubmitNewTodos}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleAddNewTodos}
              placeholder="Add task"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TodoList;
