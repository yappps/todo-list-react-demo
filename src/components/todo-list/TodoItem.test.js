import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const sampleData = { description: "buy milk", isCompleted: true };
  it("should render a TodoItem element properly", () => {
    const wrapper = shallow(<TodoItem todo={sampleData} />);
    /*
    wrapper = shallowWrapper {length: 1}
    wrapper.prop("className") = done (because it is set to true)
    wrapper.text()={props.todo.description} --> whatever you pass in between the html tag
     */
    expect(wrapper.prop("className")).toEqual("done");
    expect(wrapper.text()).toEqual(sampleData["description"]);
  });

  it("To verify if handleDone function (event handler) is working properly", () => {
    // create a function for fake event handler for clicking
    const mockHandleDone = jest.fn();
    // pass it to handleDone props
    const wrapper = shallow(
      <TodoItem todo={sampleData} handleDone={mockHandleDone} />
    );
    // to simulate click
    wrapper.find("ol").simulate("click");
    expect(mockHandleDone).toBeCalled();
  });
});
