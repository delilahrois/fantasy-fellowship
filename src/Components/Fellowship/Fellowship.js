import React from 'react';
import './Fellowship.css';

const Fellowship = ({team, findPlayer, removePlayer}) => {

  let teamMembers;

  team.length ? 

  teamMembers = team.map(player => {
    let { name } = player[0];
    return (
      <div className="player-card">
        <img src={player.image} alt={player.name} className='grid-img' id={player.id} onClick={() => findPlayer(player.name)}></img>
        <p>{name}</p>
        <button onClick={() => removePlayer(player)}>Remove player</button>
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