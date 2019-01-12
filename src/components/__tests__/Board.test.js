import React from 'react';
import {shallow} from 'enzyme';
import Board from '../Board.js';


let wrapped;
beforeEach(()=> wrapped = shallow(<Board/>));
afterEach(()=> wrapped.unmount());


describe('Board component', () => {
    it('renders the controls div', () =>{
        expect(wrapped.childAt(0).hasClass('controls')).toEqual(true);        
    })
    it('renders the Board div', () =>{
        expect(wrapped.childAt(1).hasClass('Board')).toEqual(true);  
    })
})
