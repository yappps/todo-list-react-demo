import React, { Component } from "react";
class TodoForm extends Component {
  constructor() {
    super();
    // why do I need this. 
    this.state = {
      newTodo: { description: "", isCompleted: false }
    };
  }
  handleChange(event) {
    this.setState({
      newTodo: {
        description: event.target.value,
        isCompleted: false
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();   // To prevent default reloading of page
    // console.log(this.state.newTodo);  // return {description:"dsjf", isCompleted:"false"}

    // console.log(this.props);  // return {handleSubmit: ƒ}
    // console.log(this.props.handleSubmit) // return a function handleSubmit(newTodo){...} in Todolist.js
    this.props.handleSubmit(this.state.newTodo); 
    this.setState({
      newTodo: {
        description: "",
        isCompleted: "false"
      },
      value:""
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              placeholder="Add task"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;

// To see the how to transport todoForm from todoList
// d723c62d7a0ce41dde6d8555c6bfdfec78966d3a
// a6b3daa9728dae3510dc1c1dff5c2d208a26b82d
