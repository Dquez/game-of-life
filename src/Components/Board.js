import React, {Component} from 'react';
import Tile from './Tile';
import './Board.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.width = this.props.width;
        this.height = this.props.height;
        this.tileSize = this.props.tileSize;
        this.state = {
            tiles: [],
            rows: Math.round(this.height / this.tileSize),
            columns: Math.round(this.width / this.tileSize),
            interval: 250,
            intervalId: null,
            isRunning: false
        }
        this.board = this.createEmptyBoard();
    }
    // Create an empty board
    createEmptyBoard() {
        const board = [];
        const {rows, columns} = this.state;
        // iterate over the each row
        for (let y = 0; y < rows; y++) {
            board[y] = [];
            // iterate over each tile in given column
            for (let x = 0; x < columns; x++) {
                // set tile to false   
                board[y][x] = false;
            }
        }
        return board;
    }
    makeRandomBoard = () => {
        const board = [];
        const {rows, columns} = this.state;
        // iterate over the each row
        for (let y = 0; y < rows; y++) {
            board[y] = [];
            // iterate over each tile in given column
            for (let x = 0; x < columns; x++) {
                // set tile to true or false based on a ~50% chance
                  
                board[y][x] = (Math.random() >= .5);
            }
        }
        this.board = board;
        this.setState({tiles: this.createTiles()});
    }
    // Create tiles from this.board
    createTiles() {
        const tiles = [];
        const {rows, columns} = this.state;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                if (this.board[y][x]) {
                    tiles.push({ x, y });
                }
            }
        }
        return tiles;
    }
    runGame = () => {
        const intervalId = setInterval(this.evolve, this.state.interval);
        this.setState({ 
            isRunning: true,
            intervalId
        });
    }
    stopGame = () => {
        clearInterval(this.state.intervalId);
        this.setState({ isRunning: false, intervalId: null});
    }
    clearBoard = () => {
        clearInterval(this.state.intervalId);
        this.setState({ isRunning: false, intervalId: null});
        this.setState({tiles: [], board : this.createEmptyBoard()})
    }
    evolve = () => {
        const newBoard = this.createEmptyBoard();
        const {rows, columns} = this.state;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                // for each iteration, we need to find the total neighbors branching from all directions, including diagonal 
                let neighbors = this.calculateNumNeighbors(x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        // Any live cell with two or three live neighbors lives on to the next generation.
                        newBoard[y][x] = true;
                    } else {
                        // Any live cell with fewer than two live neighbors dies, as if caused by under population.
                        // Any live cell with more than three live neighbors dies, as if by overpopulation.
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                        newBoard[y][x] = true;
                    }
                }
            }
        }
        this.board = newBoard;
        // reinitialize the tiles at their new positions
        this.setState({ tiles: this.createTiles() });   
    }

    calculateNumNeighbors(x, y) {
        let neighbors = 0;
        const {rows, columns} = this.state;
        // [y, x] coordinates in relation to the current tile assuming we're at position [0, 0], this is clockwise starting from [-1,-1]
        // top-left top-mid top-right mid-right bottom-right  bottom-middle bottom-left middle left 
        const positions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        positions.forEach(position=>{
            let [y1, x1] = position;
            // shift positions according to neighbor
            y1 += y;
            x1 += x
            // need this error-boundary because without it, we could be checking a tile that doesn't exist for neighbors, which would throw and error
            if (y1 >= 0 && y1 < rows && x1 >= 0 && x1 < columns  && this.board[y1][x1]) {
                neighbors++;
            } 
        }) 
        return neighbors;
    }

    handleClick = event => {
        const {rows, columns} = this.state;
        // calculates the position of the board rectangle
        const rect = this.boardRef.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const x = Math.floor(offsetX / this.tileSize);
        const y = Math.floor(offsetY / this.tileSize);
        // check if x and y are both in the bounds of the grid
        if (x >= 0 && x <= columns && y >= 0 && y <= rows) {
            this.board[y][x] = !this.board[y][x];
        }
        this.setState({ tiles: this.createTiles() });
    }
    componentWillUnmount() {  
        clearInterval(this.state.intervalId);
    }
    render() {
        const { tiles } = this.state;
        return (
        <>
            <div className='controls center aligned'>
                <button onClick={this.runGame} className='ui button primary start'>Start</button>
                <button onClick={this.stopGame} className='ui button red stop'>Stop</button>
                <button onClick={this.makeRandomBoard} className='ui button green random'>Random Board</button>
                <button onClick={this.clearBoard} className='ui button yellow clear'>Clear Board</button>
                
            </div>
            <div 
            className='Board'
            style={{ width: this.width, height: this.height, backgroundSize: `${this.tileSize}px ${this.tileSize}px`}}
            onClick={this.handleClick}
            ref={(n) => { this.boardRef = n; }}
            >
            {tiles.map(tile => (
            <Tile 
            tileSize={this.tileSize}
            x={tile.x} 
            y={tile.y}
            key={`${tile.x},${tile.y}`}
            />
            ))}

            </div>
        </>
        );
    }
}