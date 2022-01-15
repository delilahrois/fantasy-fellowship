import React from 'react';
import './CharacterPage.css';

const CharacterPage = ({player, addPlayer}) => {


  return (
    <div className='character'>
      <p>{player.name}</p>
    </div>
  )
}

export default CharacterPage;


