import { TodoCase, TodoList} from './components';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('test TodoCase', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<TodoCase todo="isBold" />);
    });

    it('should test component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have property set', () => {
        expect(wrapper.props().todo).not.toBe('isDone');
    });

    it('should have 1 property', () => {
        expect(wrapper.props()).toBeDefined();
    })
})