import React from "react";
import "../index.css";
import { Button } from "../ui/Button";
import styled from "@emotion/styled";

const StyledNav = styled.nav({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
});

const Nav = ({ setPage }) => {
  return (
    <StyledNav>
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
    </StyledNav>
  );
};

export default Nav;
