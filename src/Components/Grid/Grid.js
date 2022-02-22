import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';
import {Link} from 'react-router-dom';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer, msg, selectedPlayers}) => {

  const players = characters.map(character => {

    const firstName = character.name.split(' ')[0];
    const image = character.image;
    const key = character._id;

    return (
      <div className="player-container">
        <Link to={`/${firstName}`} style={{textDecoration: 'none'}}>
          <Character key={key} player={character} stats={character[1]} findPlayer={findPlayer} addPlayer={addPlayer} selectedPlayers={selectedPlayers}></Character>
        </Link>
        <button className="add-player-btn" id={character.id} onClick={() => addPlayer(character)}>{firstName}</button>
      </div>
     )
    }
  )

  const errorMessage = () => {
    let error;
    !msg.length ? error = 'Please select your players.' : error = msg;
    return error;
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