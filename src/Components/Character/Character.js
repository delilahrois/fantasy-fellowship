import React from 'react';
import './Character.css';

const Character = ({player, findPlayer}) => {


  return (
    <div className="player-container">
      <h2 className="player" onClick={() => findPlayer(player.name)}>{player.name}</h2>
    </div>
  )
}

export default Character;