import React from 'react';
import {mount} from 'enzyme';
import Board from '../Board';
import Tile from '../tile';

let wrapped;
beforeEach(()=> wrapped = mount(<Board tileSize={32} width={1024} height={728}/>));
afterEach(()=> wrapped.unmount());


describe('Board component', () => {
    it('renders the controls div', () =>{
        expect(wrapped.childAt(0).hasClass('controls')).toEqual(true);        
    })
    it('renders the Board div', () =>{
        expect(wrapped.childAt(1).hasClass('Board')).toEqual(true);  
    })
})
