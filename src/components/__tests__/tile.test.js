import React from 'react';
import {shallow} from 'enzyme';
import Tile from '../tile.js';

let wrapped;
beforeEach(()=> wrapped = shallow(<Tile tileSize={32} x={5} y={5} />));
afterEach(()=> wrapped.unmount());

describe('tile functional component', ()=>{
    it('returns a div with a className of tile', () =>{
        expect(wrapped.containsMatchingElement(<div className='tile'/>)).toBeTruthy() 
    })
    
    it('calculates styling based on props passed to it', () =>{
        const {left, top, width, height} = wrapped.props().style;
        expect(left).toEqual('160px')
        expect(top).toEqual('160px')
        expect(width).toEqual('31px')
        expect(height).toEqual('31px')
    })
})
