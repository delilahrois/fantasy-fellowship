import React from 'react';
import PropTypes from 'prop-types';
import './Fellowship.css';

const Fellowship = ({team, findPlayer, removePlayer}) => {


  let teamMembers;

  team.length ? 

  teamMembers = team.map(player => {
    
    const firstName = player.name.split(' ')[0];
   
    return (
      <div className="player-card">
        <img src={player.image} alt={player.name} className='grid-img' id={player._id} onClick={() => findPlayer(player.name)}></img>
        <button className="remove-btn" onClick={() => removePlayer(player)}>Remove {firstName}</button>
      </div>
    )
  })
  : teamMembers = <p className="no-team-msg">You haven't added anyone to your Fellowship yet.</p>

  return (
    <>
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