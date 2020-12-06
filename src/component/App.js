import React, { useState } from "react";
import "../index.css";
import Nav from "./Nav";
import Players from "./Players";
import Teams from "./Teams";

function App() {
  const [page, setPage] = useState("players");

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-text">NBA PLAYERS INFOS</div>
      </header>
      <Nav setPage={setPage} />
      <div className="content">
        {page === "players" ? <Players /> : <Teams />}
      </div>
    </div>
  );
}

export default App;
