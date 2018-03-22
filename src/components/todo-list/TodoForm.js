import React, { Component } from "react";
class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: { description: "", isCompleted: false }
    };
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
        </form>;
      </div>
    );
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
    event.preventDefault();
    console.log(this.state.newTodo);
    this.props.handleSubmit(this.state.newTodo);
    this.setState({
      newTodo: {
        description: "",
        isCompleted: "false"
      }
    });
  }
}

export default TodoForm;
