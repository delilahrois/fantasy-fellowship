import React from 'react';
import './CharacterPage.css';

const CharacterPage = ({player, addPlayer}) => {

  console.log(player, '<<<<<<>>>>PLAYER')

  return (
    <div className='character'>
      <p>{player[0].name}</p> 
    </div>
  )
}

export default CharacterPage;


