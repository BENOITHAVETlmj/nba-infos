import React from "react";
import { useQuery } from "react-query";
import Team from "./Team";

const display = {
  all: "all",
  east: "East",
  west: "West",
};

const CONFERENCE_BUTTON_STYLE = {
  marginRight: "10px",
};

const fetchPlayers = async () => {
  const res = await fetch("https://www.balldontlie.io/api/v1/teams");
  const teams = await res.json();
  return teams;
};

const reducer = (state, action) => {
  switch (action.type) {
    case display.all:
      return display.all;
    case display.east:
      return display.east;
    case display.west:
      return display.west;
    default:
      console.error("something went wrong");
  }
};

const Teams = () => {
  const { data, status } = useQuery("teams", fetchPlayers);

  const [conferenceDisplay, dispatch] = React.useReducer(reducer, display.all);
  return (
    <>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button
            disabled={conferenceDisplay === display.all}
            onClick={() => dispatch({ type: display.all })}
            style={CONFERENCE_BUTTON_STYLE}
          >
            All
          </button>
          <button
            disabled={conferenceDisplay === display.east}
            onClick={() => dispatch({ type: display.east })}
            style={CONFERENCE_BUTTON_STYLE}
          >
            East
          </button>
          <button
            disabled={conferenceDisplay === display.west}
            onClick={() => dispatch({ type: display.west })}
            style={CONFERENCE_BUTTON_STYLE}
          >
            West
          </button>
        </>
      )}
      {status === "success" && conferenceDisplay === display.all && (
        <ul>
          {data.data.map((team) => (
            <Team team={team} key={team.id} teams={data.data} />
          ))}
        </ul>
      )}
      {status === "success" && conferenceDisplay === display.east && (
        <ul>
          {data.data
            .filter((team) => team.conference === display.east)
            .map((team) => (
              <Team team={team} key={team.id} />
            ))}
        </ul>
      )}
      {status === "success" && conferenceDisplay === display.west && (
        <ul>
          {data.data
            .filter((team) => team.conference === display.west)
            .map((team) => (
              <Team team={team} key={team.id} />
            ))}
        </ul>
      )}
    </>
  );
};

export default Teams;
