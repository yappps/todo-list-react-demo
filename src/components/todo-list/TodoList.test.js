import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

/* 

 <div id="todo-list">
        <h1 id="todo-title" />
        <TodoItem todo={{...}} handleDone={[Function: bound handleDone]} />
        <TodoItem todo={{...}} handleDone={[Function: bound handleDone]} />
        <TodoItem todo={{...}} handleDone={[Function: bound handleDone]} />
        <TodoItem todo={{...}} handleDone={[Function: bound handleDone]} />
        <TodoItem todo={{...}} handleDone={[Function: bound handleDone]} />
        <br />
        <TodoForm handleSubmit={[Function: bound handleSubmit]} />
      </div>
*/

xdescribe("TodoList", () => {
  const wrapper = shallow(<TodoList />);
//   console.log(wrapper.debug())
  it("should have 1 #todo-list", () => {
    expect(wrapper.find("#todo-list")).toHaveLength(1);
  });
  it("should have 1 #todo-title", () => {
    expect(wrapper.find("h1#todo-title")).toHaveLength(1);
  });
//   it("{this.props.title} should display the correct title for #todo-title",()=>{
//       console.log(wrapper.find("h1#todo-title")
//   })
  it("should have the correct no. of <TodoItem/>", () => {
    expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);

    // note: wrapper.state().todos.length   will change accordingly with the updated seed Data

    // This is wrong as "li" is inside TodoItem and not in Todolist
    // expect(wrapper.find("ol")).toHaveLength(wrapper.state().todos.length);
  });
  it("should have 1 TodoForm for each TodoList", () => {
    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });

});

