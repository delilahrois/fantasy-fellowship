import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import './CharacterPage.css';

const CharacterPage = ({player, addPlayer, characters}) => {

  const character = useParams().name;
  const selectedPlayer = characters && characters.find(person => person[0].name.includes(character))

  const firstName = selectedPlayer && selectedPlayer[0].name.split(' ')[0]

  const characterInfo = selectedPlayer &&
    <div className='character'>
    <h2 className="character-header">{character}</h2> 
    <img src={selectedPlayer.image} alt={character.name} className="character-img"></img>
      <p className="character-text">{character.race}</p>
      <p className="character-text">Birth {character.birth ? character.birth : '(unknown)'}</p>
    <button onClick={() => addPlayer(player)}>Add {firstName} to your Fellowship</button>
    </div> 


  return (
    <>
      {characterInfo}
    </>
  )
} 

export default CharacterPage;

CharacterPage.propTypes = {
  player: PropTypes.string,
  image: PropTypes.string
}


