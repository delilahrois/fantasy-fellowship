import React from 'react';
import {Link} from 'react-router-dom';
import './Character.css';

const Character = ({player, findPlayer}) => {

  const firstName = player.name.split(' ')[0]

  return (
    <div className="player-container">
      <Link to={firstName} style={{textDecoration: 'none'}} onClick={() => {findPlayer(player.name)}}>
        <h2>{player.name}</h2>
      </Link>
    </div>
  )
}

export default Character;