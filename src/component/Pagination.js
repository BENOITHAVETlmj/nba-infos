// /** @jsxImportSource  @emotion/react */
import React from "react";
import { Button } from "../ui/Button";

const css = {
  margin: "5px",
  fontWeight: "700",
  minWidth: "40px",
  color: "#01589b",
  backgroundColor: "rgb(252, 252, 252)",
  "&:hover": {
    color: "rgb(252, 252, 252)",
    backgroundColor: "#01589b",
  },
};

const Pagination = ({ meta, setPage, page }) => {
  const [currentClickablePages, setCurrentClickablePages] = React.useState(1);
  const pagesNumbers = React.useCallback(() => {
    const pagesNumbers = [];
    for (let i = currentClickablePages; i <= currentClickablePages + 9; i++) {
      pagesNumbers.push(i);
    }

    return pagesNumbers.map((pageNumber) => (
      <Button
        onClick={() => {
          setPage(pageNumber);
          setCurrentClickablePages(
            pageNumber < meta.total_pages - 9
              ? pageNumber
              : meta.total_pages - 9
          );
        }}
        key={pageNumber}
        className="page-number"
        variant="secondary"
      >
        {pageNumber}
      </Button>
    ));
  }, [currentClickablePages, setPage, meta]);

  return (
    <>
      <Button
        css={{
          css,
        }}
        disabled={page === 1}
        onClick={() => {
          setCurrentClickablePages((old) => Math.max(old - 10, 1));
          setPage(currentClickablePages < 10 ? 1 : currentClickablePages - 10);
        }}
      >
        Previous...
      </Button>
      {pagesNumbers()} / {meta.total_pages}{" "}
      <Button
        css={{
          css,
        }}
        disabled={page >= meta.total_pages - 9}
        onClick={() => {
          setCurrentClickablePages(
            currentClickablePages < meta.total_pages - 18
              ? currentClickablePages + 9
              : meta.total_pages - 9
          );
          setPage(
            currentClickablePages < meta.total_pages - 18
              ? currentClickablePages + 9
              : meta.total_pages - 9
          );
        }}
      >
        Next...
      </Button>
    </>
  );
};

export default Pagination;
