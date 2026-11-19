import React from 'react';

const PageHeader = ({ title, subtitle, badgeText, children }) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 border-bottom border-secondary pb-3">
      <div>
        <div className="d-flex align-items-center gap-2 mb-1">
          {badgeText && <span className="badge-custom badge-green">{badgeText}</span>}
          <h1 className="h3 fw-extrabold text-white mb-0">{title}</h1>
        </div>
        {subtitle && <p className="text-muted small mb-0">{subtitle}</p>}
      </div>
      {children && <div className="d-flex align-items-center gap-2">{children}</div>}
    </div>
  );
};

export default PageHeader;
