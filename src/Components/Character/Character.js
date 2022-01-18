import React from 'react';
import PropTypes from 'prop-types';
import './Character.css';

const Character = ({player, image, findPlayer}) => {

  Character.propTypes = {
    player: PropTypes.object,
    image: PropTypes.string
  }

  const character = player[0];

  return (
    <>
      <img src={image} alt={character.name} className='grid-img' id={character.id} onClick={() => findPlayer(character.name)}></img>
    </>
  )
}

export default Character;