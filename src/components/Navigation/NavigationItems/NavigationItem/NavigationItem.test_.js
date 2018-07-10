import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavigationItem } from './NavigationItem';

configure({adapter: new Adapter()});

describe('NavItem', () => {

    it('navitem should render properly', () => {

        const { data = [] } = {};
        const wrapper = mount(<NavigationItem {...data}/>);
    })
})