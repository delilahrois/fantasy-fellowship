import React from 'react';
import './Grid.css';

const Grid = ({characters}) => {

  characters.map(character => 
    <div>
      <p>{character.age}</p>
    </div>
  )

  return (
    <div></div>
  )
}

export default Grid;