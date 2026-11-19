import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-5 my-5">
      <div className="display-1 fw-extrabold text-success mb-2">404</div>
      <h2 className="fw-bold text-white mb-3">Page Not Found</h2>
      <p className="text-muted small mb-4" style={{ maxWidth: '420px', margin: '0 auto' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className="btn-primary-custom px-4" onClick={() => navigate('/')}>
        <i className="fa-solid fa-house me-2"></i> Return to Dashboard
      </button>
    </div>
  );
};

export default NotFound;
