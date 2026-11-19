import React from 'react';

const ErrorState = ({ title = "Something Went Wrong", message = "An error occurred while fetching data. Please try again.", onRetry }) => {
  return (
    <div className="be-card border-danger text-center py-5 my-4">
      <div className="text-danger mb-3" style={{ fontSize: '3rem' }}>
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>
      <h4 className="fw-bold text-white mb-2">{title}</h4>
      <p className="text-muted small mb-4">{message}</p>
      {onRetry && (
        <button type="button" className="btn btn-outline-danger px-4 fw-bold" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
