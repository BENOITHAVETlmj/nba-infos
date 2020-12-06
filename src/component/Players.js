import React from "react";
import { useQuery } from "react-query";
import Player from "./Player";

const fetchPlayers = async () => {
  const res = await fetch("https://www.balldontlie.io/api/v1/players");
  const players = await res.json();
  return players;
};

const Players = () => {
  const { data, status } = useQuery("players", fetchPlayers);
  console.log(data, status);

  return (
    <>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ul>
          {data.data.map((player) => (
            <Player player={player} key={player.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Players;
