import React from "react";

const Pagination = ({ meta, setPage }) => {
    function pagesNumbers() {
        const pagesNumbers = [];
    for (let i = 1; i <= meta.total_pages; i++) {
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
    ))
    }
    return (
        pagesNumbers()
    )
       
  };

export default Pagination;