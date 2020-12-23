import React from "react";

const Pagination = ({ meta, setPage }) => {
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
        onClick={() => {
          setCurrentClickablePages((old) => Math.max(old - 10, 1));
          setPage(currentClickablePages < 10 ? 1 : currentClickablePages - 10);
        }}
      >
        Previous 10 pages...
      </button>
      {pagesNumbers()} ...
      <button
        className="page-number-from-to"
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
        Next 10 pages...
      </button>
    </>
  );
};

export default Pagination;
