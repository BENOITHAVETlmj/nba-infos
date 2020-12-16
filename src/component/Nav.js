import React from "react";
import "../index.css";

const Nav = ({ setPage }) => {
  return (
    <nav>
      <button className="list" onClick={() => setPage("teams")}>
        teams
      </button>
      <button className="list" onClick={() => setPage("players")}>
        players
      </button>
    </nav>
  );
};

export default Nav;
