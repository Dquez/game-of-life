import React from 'react';
import Board from './Board';
export default () =>{
        return(
            <div className='ui container'>
                {/* Most commonly used screen resolutions */}
                <Board tileSize={32} width={1024} height={728}/>
            </div>
        )
}
