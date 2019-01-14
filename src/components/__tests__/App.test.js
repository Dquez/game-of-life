import React from 'react';
import {mount} from 'enzyme';
import App from '../app.js';
import Board from '../board.js';

let wrapped;
beforeEach(() => {
    wrapped = mount(
    <App>
        <Board />
    </App>
    )   
})

describe('App component', ()=>{
    it('is a div with a class name of container', () =>{  
        expect(wrapped.childAt(0).hasClass('container')).toEqual(true);        
    })
    it('renders a Board component', () =>{
         expect(wrapped.contains(Board)).toEqual(true);
    })
})
