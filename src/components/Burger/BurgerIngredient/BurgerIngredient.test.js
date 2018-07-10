import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BurgerIngredient from './BurgerIngredient';

import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('BurgerIngredient', () => {

    let wrapper;
    let spy;
    beforeEach(() => {
        wrapper = mount(<BurgerIngredient />);
        spy = sinon.spy(BurgerIngredient.prototype, 'componentWillReceiveProps');
    });

    it('BurgerIngredient should render properly', () => {

        //const wrapper = shallow(<BurgerIngredient type="bread-bottom"/>);
        wrapper.setProps({ type: 'meat' });
        console.log(wrapper.props());
        // expect(wrapper.props().type).not.toBe('bread-bottom');

        expect(wrapper.props().type).not.toBe('bread-bottom');
        expect(wrapper.props().type).toBe('meat');

        expect(spy.calledOnce).to.equal(false);

        wrapper.setProps({ type: 'salad' });
        expect(spy.calledOnce).to.equal(true);

    })
})