import React from "react";

const Pagination = ({ meta, setPage, page }) => {
  const [currentClickablePages, setCurrentClickablePages] = React.useState(1);
  const pagesNumbers = React.useCallback(() => {
    const pagesNumbers = [];
    for (let i = currentClickablePages; i <= currentClickablePages + 9; i++) {
      pagesNumbers.push(i);
    }

    return pagesNumbers.map((pageNumber) => (
      <button
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
      >
        {pageNumber}
      </button>
    ));
  }, [currentClickablePages, setPage, meta]);

  return (
    <>
      <button
        className="page-number-from-to"
        disabled={page === 1}
        onClick={() => {
          setCurrentClickablePages((old) => Math.max(old - 10, 1));
          setPage(currentClickablePages < 10 ? 1 : currentClickablePages - 10);
        }}
      >
        Previous...
      </button>
      {pagesNumbers()} / {meta.total_pages}
      <button
        className="page-number-from-to"
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
      </button>
    </>
  );
};

export default Pagination;
