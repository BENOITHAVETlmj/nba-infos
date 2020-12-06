import React from "react";

const Player = ({ player }) => {
  return (
    <li className="card">
      {player.first_name} {player.last_name}
      <p>Position: {player.position}</p>
      <p>Team: {player.team.full_name}</p>
    </li>
  );
};

export default Player;
