import React from 'react';

const StatsCard = ({ label, value, subtext, icon, color = "success" }) => {
  return (
    <div className="be-card">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="extra-small text-muted fw-bold text-uppercase">{label}</span>
        {icon && (
          <div className={`logo-icon-box bg-${color}-subtle text-${color}`} style={{ width: '32px', height: '32px', fontSize: '14px' }}>
            <i className={`fa-solid ${icon}`}></i>
          </div>
        )}
      </div>
      <div className={`h3 fw-extrabold text-${color} mb-1`}>{value}</div>
      {subtext && <div className="extra-small text-muted">{subtext}</div>}
    </div>
  );
};

export default StatsCard;
