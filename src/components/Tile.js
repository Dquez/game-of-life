import React from 'react';
import './Tile.css'

export default ({x, y, tileSize}) => {
      return (
        <div 
        className="tile" 
        style={{
                left: `${tileSize * x }px`,
                top: `${tileSize * y }px`,
                width: `${tileSize - 1}px`,
                height: `${tileSize - 1}px`,
            }}
        />
      );
}