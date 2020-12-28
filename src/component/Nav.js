// /** @jsxImportSource  @emotion/react */
import "../index.css";
import { Button } from "../ui/Button";
import styled from "@emotion/styled";

const StyledNav = styled.nav({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
});

const list = {
  padding: "10px",
  fontWeight: "700",
  marginRight: "30px",
};

const Nav = ({ setPage }) => {
  return (
    <StyledNav>
      <Button css={list} variant="primary" onClick={() => setPage("teams")}>
        teams
      </Button>
      <Button css={list} variant="secondary" onClick={() => setPage("players")}>
        players
      </Button>
    </StyledNav>
  );
};

export default Nav;
