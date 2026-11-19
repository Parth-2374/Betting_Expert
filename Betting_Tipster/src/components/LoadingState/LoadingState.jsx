import React from 'react';

const LoadingState = ({ message = "Loading analytics data..." }) => {
  return (
    <div className="py-5 text-center my-4">
      <div className="spinner-border text-success mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted small mb-0">{message}</p>
    </div>
  );
};

export default LoadingState;
