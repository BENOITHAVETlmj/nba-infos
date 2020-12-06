import React from "react";

const Team = ({ team }) => {
  return (
    <li className="card">
      <p>City: {team.city}</p>
      <p>Conference: {team.conference}</p>
      <p>Division: {team.division}</p>
      <p>Name: {team.full_name}</p>
    </li>
  );
};

export default Team;
