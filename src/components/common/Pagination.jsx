import React, { useState } from "react";

const Pagination = ({ totalPages = 6, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  // Create array of page numbers [1, 2, 3, ..., totalPages]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-sec mt-5">
      <div className="container">
        <div className="pagination">
          <div className="prev-page" onClick={handlePrev} style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}>
            <i className="ri-arrow-left-s-line"></i>
          </div>

          {pages.map((page) => (
            <div
              key={page}
              className={`page-n ${page === currentPage ? "activePage" : ""}`}
              onClick={() => handlePageClick(page)}
              style={{ cursor: "pointer" }}
            >
              {page}
            </div>
          ))}

          <div className="next-page" onClick={handleNext} style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
