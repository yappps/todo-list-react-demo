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

describe("TodoList", () => {
  it("should have 1 #todo-list", () => {
    //   console.log(wrapper.debug())
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("#todo-list")).toHaveLength(1);
  });
  it("should have 1 #todo-title", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("h1#todo-title")).toHaveLength(1);
  });
  //   it("{this.props.title} should display the correct title for #todo-title", () => {
  //     const wrapper = shallow(<TodoList />);
  //     console.log(wrapper.find("h1#todo-title").props());
  //   });
  it("should have the correct no. of <TodoItem/>", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    // note: wrapper.state().todos.length   will change accordingly with the updated seed Data

    // This is wrong as "li" is inside TodoItem and not in Todolist
    // expect(wrapper.find("ol")).toHaveLength(wrapper.state().todos.length);
  });
  it("handleDone() should  ..", () => {
    const mockHandleDone = jest.fn();
    const wrapper = shallow(<TodoList handleDone={mockHandleDone} />);
    //   console.log(<TodoList handleDone={mockHandleDone}/>)
    //   console.log(<TodoItem handleDone={mockHandleDone}/>)
    console.log(wrapper.find("TodoItem").first().props().handleDone());
  });
  it("should have 1 TodoForm for each TodoList", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });
});
