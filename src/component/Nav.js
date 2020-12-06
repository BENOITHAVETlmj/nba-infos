import React from "react";
import "../index.css";

const Nav = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("teams")}>teams</button>
      <button onClick={() => setPage("players")}>players</button>
    </nav>
  );
};

export default Nav;
