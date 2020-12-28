import React, { useState } from "react";
import styled from "@emotion/styled";
import "../index.css";
import Nav from "./Nav";
import Players from "./Players";
import Teams from "./Teams";

const HeaderText = styled.div({
  border: "3px solid white",
  borderRadius: "4px",
  padding: "10px",
  color: "white",
  fontWeight: "700",
  fontSize: "30px",
  width: "fit-content",
});

const Content = styled.div({
  margin: "20px 0",
  border: "1px solid white",
  padding: "20px 10px",
  color: "white",
  fontWeight: "700",
  fontSize: "15px",
});

function App() {
  const [page, setPage] = useState("players");

  return (
    <div className="App">
      <header>
        <HeaderText>NBA INFOS</HeaderText>
      </header>
      <Nav setPage={setPage} />
      <Content>{page === "players" ? <Players /> : <Teams />}</Content>
    </div>
  );
}

export default App;
