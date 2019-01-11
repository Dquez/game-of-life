import React, {Component} from "react";
import Board from './Components/Board';

export default class App extends Component{
    render(){
        return(
            <div className="grid-container">
              <Board />
            </div>
        )
    }
}
