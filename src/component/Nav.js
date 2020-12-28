import React from "react";
import "../index.css";
import { Button } from "../ui/Button";

const Nav = ({ setPage }) => {
  return (
    <nav>
      <Button
        className="list"
        variant="primary"
        onClick={() => setPage("teams")}
      >
        teams
      </Button>
      <Button
        className="list"
        variant="secondary"
        onClick={() => setPage("players")}
      >
        players
      </Button>
    </nav>
  );
};

export default Nav;
