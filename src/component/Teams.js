import React from "react";
import { useQuery } from "react-query";
import Team from "./Team";

const fetchPlayers = async () => {
  const res = await fetch("https://www.balldontlie.io/api/v1/teams");
  const teams = await res.json();
  return teams;
};

const Teams = () => {
  const { data, status } = useQuery("teams", fetchPlayers);
  console.log(data, status);

  return (
    <>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ul>
          {data.data.map((team) => (
            <Team team={team} key={team.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Teams;
