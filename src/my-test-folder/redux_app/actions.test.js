import { addTodo, uid, toggleTodo } from './actions';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const new_text = "New text";
const newId = uid(new_text);

describe('test actions', () => {

    it('should create an action', () => {
        const element = {
            id: newId,
            isDone: false,
            isBold: false,
            text: new_text
        }
        const expectedElement = {
            type: 'ADD_TODO',
            payload: element
        }
        console.log('EXPECTED', expectedElement);
        console.log('GOT THIS', addTodo(new_text));

        expect(addTodo(new_text)).toEqual(expectedElement);
    })

    it('should create TOGGLE_TODO action', () => {
        const element = {
            type: 'TOGGLE_TODO',
            payload: newId,
        }
        expect(toggleTodo(newId)).toEqual(element);
    })
})