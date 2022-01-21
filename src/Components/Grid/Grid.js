import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';
import {Link} from 'react-router-dom';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer, msg, selectedPlayers}) => {

  const players = characters.map(character => {


    const player = character;
    const firstName = player.name.split(' ')[0];
    const image = character.image;
    const key = character._id;

    return (
      <div className="player-container">
        <Link to={`/${player.name.split(' ')[0]}`} style={{textDecoration: 'none'}}>
          <Character key={key} player={character} stats={character[1]} image={image} findPlayer={findPlayer} addPlayer={addPlayer} selectedPlayers={selectedPlayers}></Character>
        </Link>
        <button className="add-player-btn" id={player.id} onClick={() => addPlayer(character)}>{firstName}</button>
      </div>
     )
    }
  )

  const errorMessage = () => {
    if(!msg.length) {
      return 'Please select your players.'
    } else {
      return msg
    }
  }

  return (
    <>
      <section className="greeting">
        <h2 className="welcome-header">Welcome to Fantasy Fellowship.</h2>
        <p className="welcome-p">{errorMessage()}</p>
      </section>
      <div className="grid">
        {players}
      </div>
    </>
  )
}

export default Grid;

  Grid.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    msg: PropTypes.string
  }