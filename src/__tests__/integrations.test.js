import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../components/App';
import Board from '../components/Board';
import Tile from '../components/Tile';


let wrapper;
beforeEach(()=>{
    wrapper = mount(
        <App>
            <Board tileSize={32} width={1024} height={728}/>
        </App>
    )
});
afterEach(() =>{
    wrapper.unmount();
})
describe('Full game', ()=>{
    let boardWrapped;
    beforeEach(()=>{
        // mount Board component as shallow to access stat
        boardWrapped = shallow(<Board tileSize={32} width={1024} height={728}/>)
    })
    afterEach(() =>{
        boardWrapped.unmount();
    })
    it('can render random Tile components when you click the random board button', ()=>{    
        // simulate clicking the random board button
        wrapper.find('.random').at(0).simulate('click');  
        expect(wrapper.contains(Tile)).toEqual(true);
    })
    it('can render a grid, corresponding to the height and width of the container divided by the tile size', ()=>{
        // grab the props passed into the mounted component  
        const {height, width, tileSize} = wrapper.find(Board).props();  
        // calculate the rows and columns as would the component
        const rows = Math.round(height / tileSize);
        const columns = Math.round(width / tileSize);
        
        expect(boardWrapped.state().rows).toEqual(rows);
        expect(boardWrapped.state().columns).toEqual(columns);
    })
    it('can start the game by clicking the start button and stop the game by clicking stop', ()=>{
        
        boardWrapped.find('.random').at(0).simulate('click');
        expect(boardWrapped.state().isRunning).toEqual(false);

        boardWrapped.find('.start').at(0).simulate('click');
        expect(boardWrapped.state().isRunning).toEqual(true);

        boardWrapped.find('.stop').at(0).simulate('click');
        expect(boardWrapped.state().isRunning).toEqual(false);
    })
    it('can clear the board and restart the game by clicking on clear board', ()=>{
        boardWrapped.find('.random').at(0).simulate('click');
        boardWrapped.find('.start').at(0).simulate('click');
        boardWrapped.find('.clear').at(0).simulate('click');
        expect(boardWrapped.state().isRunning).toEqual(false);
        expect(boardWrapped.state().intervalId).toEqual(null);
        expect(boardWrapped.state().tiles.length).toEqual(0);
    })
})