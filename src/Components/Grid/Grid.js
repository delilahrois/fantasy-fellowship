import React from 'react';
import Character from '../Character/Character';
import {Link} from 'react-router-dom';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer}) => {

  const players = characters.map(character => 
    <Link to={`/${character[0].name.split(' ')[0].toLowerCase()}`}>
      <Character key={character[0].id} player={character[0]} stats={character[1]} findPlayer={findPlayer}></Character>
    </Link>
  )

  return (
    <div>
      {players}
    </div>
  )
}

export default Grid;