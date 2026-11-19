import React from 'react';

const EmptyState = ({ title = "No Results Found", message = "We couldn't find any items matching your criteria.", icon = "fa-folder-open", actionText, onAction }) => {
  return (
    <div className="be-card text-center py-5 my-4">
      <div className="logo-icon-box mx-auto mb-3" style={{ width: '64px', height: '64px', fontSize: '28px' }}>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <h4 className="fw-bold text-white mb-2">{title}</h4>
      <p className="text-muted small max-w-md mx-auto mb-4" style={{ maxWidth: '420px' }}>{message}</p>
      {actionText && onAction && (
        <button type="button" className="btn-primary-custom" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
