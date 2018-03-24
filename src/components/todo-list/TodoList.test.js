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

  it("should have the correct no. of <TodoItem/>", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    // note: wrapper.state().todos.length  will change accordingly with the updated seed Data

    // This is wrong as "li" is inside TodoItem and not in Todolist
    // expect(wrapper.find("ol")).toHaveLength(wrapper.state().todos.length);
  });
  xit("handleDone() should be called and change isCompleted to true if not done..", () => {
    const todo = { description: "finish test", isCompleted: "false" };
    const mockHandleDone = jest.fn();
    const wrapper = shallow(<TodoList handleDone={mockHandleDone} />);

    // note: use shallow(<TodoList/>) instead of shallow(<TodoItem/>) when testing TodoList component.

    // wrapper.find("TodoItem").first() will go to the 1st element of the seedData
    const expectedIsCompleted = "true";
    console.log(wrapper.find("TodoItem"));
  });
  it("should have 1 TodoForm for each TodoList", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });

  it("It should add a new todo when handleSubmit is called", () => {
    const newTodo = { description: "bla", isCompleted: "false" };
    const wrapper = shallow(<TodoList />);
    const expectedLength = wrapper.state().todos.length + 1;
    // invoking handler via props
    wrapper
      .find("TodoForm")
      .props()
      .handleSubmit(newTodo);
    expect(wrapper.state().todos).toHaveLength(expectedLength);
  });
});
