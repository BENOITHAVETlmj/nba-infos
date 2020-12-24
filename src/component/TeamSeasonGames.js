import React from "react";
import { useQuery } from "react-query";

const LIST_ITEM_STYLE = {
  borderTop: "1px solid black",
};

const fetchGames = async (key, teamId) => {
  const res = await fetch(
    `https://www.balldontlie.io/api/v1/games?seasons[]=2019&team_ids[]=${teamId.teamId}`
  );
  const games = await res.json();
  return games;
};

function TeamSeasonGames(teamId) {
  const { data, status } = useQuery(["teams", teamId], fetchGames);
  console.log(status === "success" && data);
  const gamesInfos =
    status === "success" &&
    data.data.reduce(
      (acc, curr) => [
        ...acc,
        {
          home_team: curr.home_team.full_name,
          home_team_score: curr.home_team_score,
          visitor_team: curr.visitor_team.full_name,
          visitor_team_score: curr.visitor_team_score,
          date: curr.date,
        },
      ],
      []
    );
  console.log(gamesInfos);

  return (
    <>
      {status === "success" && (
        <>
          <h3>Games and scores for 2019 season</h3>
          {gamesInfos.map((gameInfo) => (
            <ul style={LIST_ITEM_STYLE} key={gameInfo.date}>
              <li>
                {gameInfo.home_team} {gameInfo.home_team_score} -{" "}
                {gameInfo.visitor_team} {gameInfo.visitor_team_score}
              </li>
              <li>Date: {gameInfo.date}</li>
            </ul>
          ))}
        </>
      )}
    </>
  );
}

export default TeamSeasonGames;
