import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';
import {Link} from 'react-router-dom';
import './Grid.css';

const Grid = ({characters, findPlayer, addPlayer, msg}) => {

  // Grid.propTypes = {
  //   characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   msg: PropTypes.string.isRequired
  // }


  const players = characters.map(character => {


    const player = character;
    const firstName = player.name.split(' ')[0];
    console.log(firstName)
    const image = character.image;

    return (
      <div className="player-container">
        <Link to={`/${player.name.split(' ')[0]}`} style={{textDecoration: 'none'}}>
          <Character key={player.id} player={character} stats={character[1]} image={image} findPlayer={findPlayer} addPlayer={addPlayer}></Character>
        </Link>
        <button className="add-player-btn" id={player.id} onClick={() => addPlayer(character)}>Add {firstName} to Fellowship</button>
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
      <section key={Date.now()} className="error-msg">{msg}</section>
      <div className="grid">
        {players}
      </div>
    </>
  )
}

export default Grid;