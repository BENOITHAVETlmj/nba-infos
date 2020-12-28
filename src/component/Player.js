import React from "react";
import { Card } from "../ui/Card";

const Player = ({ player }) => {
  return (
    <Card>
      <p>
        {player.first_name} {player.last_name}
      </p>
      <p>Position: {player.position}</p>
      <p>Team: {player.team.full_name}</p>
    </Card>
  );
};

export default Player;
