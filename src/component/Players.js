import React from "react";
import { usePaginatedQuery } from "react-query";
import Player from "./Player";

const fetchPlayers = async (key, page) => {
  const res = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=${page}`
  );
  const data = res.json();
  return data;
};

const Players = () => {
  const [page, setPage] = React.useState(1);
  const { resolvedData, status } = usePaginatedQuery(
    ["players", page],
    fetchPlayers
  );
  const pagesNumbers = [];

  function pagination(pagesNumber) {
    for (let i = 1; i <= pagesNumber; i++) {
      pagesNumbers.push(i);
    }
    return pagesNumbers.map((pageNumber) => (
      <button
        onClick={() => setPage(pageNumber)}
        key={pageNumber}
        className="page-number"
      >
        {pageNumber}
      </button>
    ));
  }

  return (
    <>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button
            className="page-number"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Back
          </button>
          <span>{page}</span>
          <button
            className="page-number"
            onClick={() => setPage(page + 1)}
            disabled={page === resolvedData.meta.total_pages}
          >
            Next
          </button>
          <ul>
            {resolvedData.data.map((player) => (
              <Player player={player} key={player.id} />
            ))}
          </ul>
          <>{pagination(resolvedData.meta.total_pages)}</>
        </>
      )}
    </>
  );
};

export default Players;
