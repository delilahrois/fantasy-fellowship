import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CharacterPage.css';

const CharacterPage = ({player, image, addPlayer}) => {

  CharacterPage.propTypes = {
    player: PropTypes.object,
    image: PropTypes.string
  }

  const character = player[0];
  const firstName = character.name.split(' ')[0]

  useEffect(() => {
    refresh();
  })

  const refresh = () => {

  }

  //  !character.name ? fetchData() 
  // characters in local storage?

  return (
    <>
    <div className='character'>
      <h2 className="character-header">{character.name}</h2> 
      <img src={image} alt={character.name} className="character-img"></img>
        <p className="character-text">{character.race}</p>
        <p className="character-text">Birth {character.birth ? character.birth : '(unknown)'}</p>
      <button onClick={() => addPlayer(player)}>Add {firstName} to your Fellowship</button>
    </div>
    </>
  )
} 

export default CharacterPage;


