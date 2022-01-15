import React from 'react';
import Character from '../Character/Character';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer}) => {

  const players = characters.map(character => 
    <Character key={character[0].id} player={character[0]} stats={character[1]} findPlayer={findPlayer}></Character>
  )

  return (
    <div>
      {players}
    </div>
  )
}

export default Grid;