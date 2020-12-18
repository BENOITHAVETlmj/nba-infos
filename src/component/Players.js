import React from "react";
import { useQuery } from "react-query";
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
  const { isPreviousData, data, status } = useQuery(
    ["players", page],
    fetchPlayers,
    {
      keepPreviousData: true,
    }
  );

  console.log(isPreviousData);
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
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Back
          </button>
          <span>{page}</span>
          <button
            className="page-number"
            onClick={() => {
              if (!isPreviousData) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isPreviousData || page === data.meta.total_pages}
          >
            Next
          </button>
          <ul>
            {data.data.map((player) => (
              <Player player={player} key={player.id} />
            ))}
          </ul>
          <>{pagination(data.meta.total_pages)}</>
        </>
      )}
    </>
  );
};

export default Players;
