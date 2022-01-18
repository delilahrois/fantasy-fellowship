import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useLocation} from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import './CharacterPage.css';

const CharacterPage = ({player, addPlayer, characters}) => {

  const character = useParams().name;
  const selectedPlayer = characters && characters.find(person => person.name.includes(character))

  const firstName = selectedPlayer && selectedPlayer.name.split(' ')[0]
  console.log(firstName)

  const characterInfo = selectedPlayer &&
    <div className='character'>
    <h2 className="character-header">{character}</h2> 
    <img src={selectedPlayer.image} alt={selectedPlayer.name} className="character-img"></img>
      <p className="character-text">{character.race}</p>
      <p className="character-text">Birth {selectedPlayer.birth ? selectedPlayer.birth : '(unknown)'}</p>
    <button onClick={() => addPlayer(player)}>Add {firstName} to your Fellowship</button>
    </div> 

    console.log(useLocation())

    let displayInfo;
    selectedPlayer ? displayInfo = characterInfo : displayInfo = <ErrorPage />


  return (
    <>
      {displayInfo}
    </>
  )
} 

export default CharacterPage;

CharacterPage.propTypes = {
  player: PropTypes.string,
  image: PropTypes.string
}


