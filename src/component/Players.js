// /** @jsxImportSource  @emotion/react */
import React from "react";
import { useQuery } from "react-query";
import Player from "./Player";
import Pagination from "./Pagination";
import { Button } from "../ui/Button";

const cssPageButton = {
  margin: "5px",
  fontWeight: "700",
  minWidth: "40px",
};

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
  return (
    <>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <Button
            css={cssPageButton}
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Back
          </Button>
          <span>page {page}</span>
          <Button
            css={cssPageButton}
            onClick={() => {
              if (!isPreviousData) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isPreviousData || page === data.meta.total_pages}
          >
            Next
          </Button>
          <ul>
            {data.data.map((player) => (
              <Player player={player} key={player.id} />
            ))}
          </ul>
          <Pagination meta={data.meta} setPage={setPage} page={page} />
        </>
      )}
    </>
  );
};

export default Players;
