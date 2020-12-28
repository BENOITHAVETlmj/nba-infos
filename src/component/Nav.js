import React from "react";
import "../index.css";
import { Button } from "../ui/Button";

const Nav = ({ setPage }) => {
  return (
    <nav>
      <Button className="list" onClick={() => setPage("teams")}>
        teams
      </Button>
      <Button className="list" onClick={() => setPage("players")}>
        players
      </Button>
    </nav>
  );
};

export default Nav;
