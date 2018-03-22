import React from 'react';
import {shallow} from "enzyme"; 
import TodoList from './TodoList';
import TodoItem from './TodoItem';

describe('TodoList', () => {
    xit('should render TodoList properly', () => {
        const wrapper =shallow(<TodoList/>);
        expect(wrapper.find("#todo-list")).toHaveLength(1);
        expect(wrapper.find("h1#todo-title")).toHaveLength(1); 
        // expect(wrapper.find("li")).toHaveLength(wrapper.state().todos.length);   // This is wrong as "li" is inside TodoItem and not in Todolist
        expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length)
        expect(wrapper.find("form")).toHaveLength(1);
    });
    
});