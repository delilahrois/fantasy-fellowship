import React from 'react';
import './CharacterPage.css';

const CharacterPage = ({player, addPlayer}) => {

  const character = player[0];
  const firstName = character.name.split(' ')[0]

  return (
    <div className='character'>
      <h2>{character.name}</h2> 
        <p>{character.race}</p>
        <p>Birth {character.birth ? character.birth : '(unknown)'}</p>
      <button onClick={() => addPlayer(player)}>Add {firstName} to your Fellowship</button>
    </div>
  )
}

export default CharacterPage;


