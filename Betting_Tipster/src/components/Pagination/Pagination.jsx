import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top border-secondary">
      <small className="text-muted">Showing Page {currentPage} of {totalPages}</small>
      <div className="d-flex gap-1">
        <button
          className="btn btn-sm btn-outline-secondary"
          disabled={currentPage === 1}
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
        >
          <i className="fa-solid fa-chevron-left"></i> Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              className={`btn btn-sm ${page === currentPage ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
              onClick={() => onPageChange && onPageChange(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          className="btn btn-sm btn-outline-secondary"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
        >
          Next <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
