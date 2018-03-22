import React from "react";
import "../../index.css";

function TodoItem(props) {
  let isdone = props.todo.isCompleted ? "done" : "";
  return (
    <ol  className={isdone} onClick={props.handleDone}>
      {props.todo.description}
    </ol>
  );
}

export default TodoItem;
