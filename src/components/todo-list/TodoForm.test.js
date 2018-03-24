import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

/* <div>
      <form onSubmit={[Function: bound handleSubmit]}>
        <label>
          <input type="text" value={[undefined]} onChange={[Function: bound handleChange]} placeholder="Add task" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
*/
describe("TodoForm", () => {
  it("should have 1 form", () => {
    const wrapper = shallow(<TodoForm />);
    // console.log(wrapper.debug());
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("To verify if handleSubmit (event handler) is working ", () => {
    // Do this when you need to pass an event as an arg to its event handler
    const event = { target: { value: "dummy text" } };
    // create a mock event handler function
    const mockHandleSubmit = jest.fn();
    const wrapper = shallow(<TodoForm handleSubmit={mockHandleSubmit} />);
    // when form is submitted
    wrapper
      .find("form#submit")
      .props()
      .onSubmit(event);
 
    wrapper.find("form#submit").simulate("submit",{preventDEfault(){}});
    expect(mockHandleSubmit).toBeCalled();
  });

  it("should have 1 <label></label>", () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("should have 2 input type", () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it('handleChange should be invoked when there is achange on the "text" field ', () => {
    const wrapper = shallow(<TodoForm />);
    // Do this when you need to pass an event as an arg to its event handler
    const event = {
      target: { value: "dummy text" }
    };
    // simulating an event when a text="dummy text" is type on the text field
    wrapper
      .find("input#textField")
      .props()
      .onChange(event);
    // console.log(wrapper.state());
    expect(wrapper.state().newTodo.description).toEqual(event.target.value);
  });
});
