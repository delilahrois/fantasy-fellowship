import React from 'react';
import PropTypes from 'prop-types';
import './Character.css';

const Character = ({player, findPlayer, addPlayer, selectedPlayers}) => {

    let chosenClass;

    !selectedPlayers.includes(player) ? chosenClass = 'grid-img' : chosenClass = 'chosen';
    

  return (
    <>
      <img src={player.image} alt={player.name} className={chosenClass} id={player.id} onClick={() => findPlayer(player.name)}></img>
    </>
  )
}

export default Character;

Character.propTypes = {
  player: PropTypes.object.isRequired,
  image: PropTypes.string
}