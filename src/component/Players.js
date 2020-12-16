import React from "react";
import { useQuery } from "react-query";
import Player from "./Player";

const fetchPlayers = async () => {
  const res = await fetch("https://www.balldontlie.io/api/v1/players?page=3");
  const players = await res.json();
  return players;
};

const Players = () => {
  const { data, status } = useQuery("players", fetchPlayers);
  const pagesNumbers = [];

  for (let i = 0; i < 131; i++) {
    pagesNumbers.push(i);
  }

  console.log(pagesNumbers);

  return (
    <>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ul>
          {data.data.map((player) => (
            <Player player={player} key={player.id} />
          ))}
        </ul>
      )}
      {pagesNumbers.map((pageNumber) => (
        <button className="page-number">{pageNumber}</button>
      ))}
    </>
  );
};

export default Players;
