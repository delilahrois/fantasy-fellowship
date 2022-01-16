import React from 'react';
import './Character.css';

const Character = ({player, findPlayer}) => {

  const character = player[0];

  return (
    <div className="player-container">
      <h2 className="player" onClick={() => findPlayer(character.name)}>{character.name}</h2>
    </div>
  )
}

export default Character;