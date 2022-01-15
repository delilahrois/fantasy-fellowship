import React from 'react';
import {Link} from 'react-router-dom';
import './Character.css';

const Character = ({player}) => {
  return (
    <div className="player-container">
      <Link to={player.name}>
        <h2>{player.name}</h2>
        <p>{player.race}</p>
      </Link>
    </div>
  )
}

export default Character;