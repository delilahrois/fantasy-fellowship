import React from 'react';
import PropTypes from 'prop-types';
import './Fellowship.css';

const Fellowship = ({team, findPlayer, removePlayer}) => {


  let teamMembers;
  let fellowshipHeader;

  team.length ? 

  teamMembers = team.map(player => {
    
    const firstName = player.name.split(' ')[0];
    const id = player._id
   
    return (
      <div className="player-card">
        <img src={player.image} alt={player.name} className='grid-img' id={id} onClick={() => findPlayer(player.name)}></img>
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