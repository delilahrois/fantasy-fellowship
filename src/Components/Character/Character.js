import React from 'react';
import './Character.css';

const Character = ({player, image, findPlayer}) => {

  const character = player[0];

  return (
    <>
      <img src={image} alt={character.name} className='grid-img' id={character.id} onClick={() => findPlayer(character.name)}></img>
    </>
  )
}

export default Character;