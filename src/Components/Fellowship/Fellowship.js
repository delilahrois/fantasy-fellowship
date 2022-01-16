import React from 'react';

const Fellowship = ({team}) => {

  let teamMembers;

  team.length > 0 ? 

  teamMembers = team.map(player => {
    let { name } = player[0];
    return (
      <div className="player-card">
        <p>{name}</p>
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