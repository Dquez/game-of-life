import React, {Component} from "react";
import Board from './Board';
export default class App extends Component{
    render(){
        return(
            <div className="ui container">
                {/* Most commonly used screen resolutions */}
                <Board tileSize={32} width={1024} height={728}/>
            </div>
        )
    }
}
