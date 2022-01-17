import React from 'react';
import './Character.css';

const Character = ({player, image, findPlayer}) => {

  const character = player[0];

  return (
    <div className="player-container">
      <img src={image} alt={character.name} className='grid-img' id={character.id} onClick={() => findPlayer(character.name)}></img>
      <h2 className="player" onClick={() => findPlayer(character.name)}>{character.name}</h2>
    </div>
  )
}

export default Character;