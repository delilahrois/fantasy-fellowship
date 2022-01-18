import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';
import {Link} from 'react-router-dom';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer, msg}) => {

  Grid.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object),
    msg: PropTypes.string
  }


  const players = characters.map(character => {

    const player = character[0];
    const firstName = player.name.split(' ')[0];
    const image = character.image;

    return (
      <div className="player-container" key={player.id}>
        <Link to={`/${player.name.split(' ')[0].toLowerCase()}`} style={{textDecoration: 'none'}}>
          <Character player={character} stats={character[1]} image={image} findPlayer={findPlayer} addPlayer={addPlayer}></Character>
        </Link>
        <button className="add-player-btn" onClick={() => addPlayer(character)}>Add {firstName} to Fellowship</button>
      </div>
     )
    }
  )

  return (
    <>
      <section className="greeting">
        <h2 className="welcome-header">Welcome to Fantasy Fellowship.</h2>
        <p className="welcome-p">Please select your players.</p>
      </section>
      <section className="error-msg">{msg}</section>
      <div className="grid">
        {players}
      </div>
    </>
  )
}

export default Grid;