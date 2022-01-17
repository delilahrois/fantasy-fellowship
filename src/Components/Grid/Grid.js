import React from 'react';
import Character from '../Character/Character';
import {Link} from 'react-router-dom';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer}) => {


  const players = characters.map(character => {

    const player = character[0];
    const firstName = player.name.split(' ')[0];
    const image = character.image;

    return (
      <div>
        <Link to={`/${player.name.split(' ')[0].toLowerCase()}`} style={{textDecoration: 'none'}}>
          <Character key={player.id} player={character} stats={character[1]} image={image} findPlayer={findPlayer} addPlayer={addPlayer}></Character>
        </Link>
        <button onClick={() => addPlayer(character)}>Add {firstName} to Fellowship</button>
    </div>
     )
    }
  )

  return (
    <div>
      {players}
    </div>
  )
}

export default Grid;