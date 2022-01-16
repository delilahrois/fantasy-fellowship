import React from 'react';

const Fellowship = ({team, removePlayer}) => {

  let teamMembers;

  team.length ? 

  teamMembers = team.map(player => {
    let { name } = player[0];
    return (
      <div className="player-card">
        <p>{name}</p>
        <button onClick={() => removePlayer(player)}>Remove player</button>
      </div>
    )
  })
  : teamMembers = <p>You haven't added anyone to your Fellowship yet.</p>

  return (
    <div className="team-container">
      {teamMembers}
    </div>
  )
}

export default Fellowship;