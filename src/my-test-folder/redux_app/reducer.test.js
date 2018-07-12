import reducer, { init } from './reducer';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { List, Map } from 'immutable';

configure({ adapter: new Adapter() });

describe('test reducer', () => {
    // it('should return the initial state', () => {
    //     expect(reducer(undefined, {})).toEqual(init)
    // })

    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: 'ADD_TODO',
                payload: {
                    id: 1,
                    isDone: false,
                    isBold: false,
                    text: 'text'
                }
            })
        ).toEqual([Map(
            {
                id: 1,
                isDone: false,
                isBold: false,
                text: 'text',
            })]
        )
    })

})