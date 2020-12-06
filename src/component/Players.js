import React from "react";
import { useQuery } from "react-query";

const fetchPlayers = async () => {
  const res = await fetch("https://www.balldontlie.io/api/v1/playershh");
  const players = await res.json();
  return players;
};

const Players = () => {
  const { data, status } = useQuery("players", fetchPlayers);
  console.log(data, status);

  return (
    <>
      <>Players</>
      <p>{status}</p>
    </>
  );
};

export default Players;
