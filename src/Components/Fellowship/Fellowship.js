import React from 'react';
import {Link} from 'react-router-dom';
import Character from '../Character/Character';
import PropTypes from 'prop-types';
import './Fellowship.css';

const Fellowship = ({team, findPlayer, removePlayer}) => {


  let teamMembers;
  let fellowshipHeader;

  team.length ? 

  teamMembers = team.map(player => {
    
    const firstName = player.name.split(' ')[0];
    const image = player.image;
    const key = player._id;
   
    return (
      <div className="player-card">
        <Link to={`/${player.name.split(' ')[0]}`} style={{textDecoration: 'none'}}>
          <Character key={key} player={player} stats={player[1]} image={image} findPlayer={findPlayer}></Character>
        </Link>
        <button className="remove-btn" onClick={() => removePlayer(player)}>Remove {firstName}</button>
      </div>
    )
  })
  : teamMembers = <p className="no-team-msg">You haven't added anyone to your Fellowship yet.</p>

  team.length ? fellowshipHeader = <header className="fellowship-header">You have chosen.</header> : fellowshipHeader = <header className="fellowship-header">Let's not be hasty!</header>

  return (
    <>
      {fellowshipHeader}
      <section className="points-header">
        {/* <h2>Your Fellowship's Current Scores:</h2> */}
      </section>
      <div className="team-container">
        {teamMembers}
      </div>
    </>
  )
}

export default Fellowship;

Fellowship.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object).isRequired
}