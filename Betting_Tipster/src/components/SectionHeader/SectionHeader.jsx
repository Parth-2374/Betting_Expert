import React from 'react';

const SectionHeader = ({ title, subtitle, icon, actionText, onAction }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3" >
      <div>
        <h2 className="h5 fw-bold text-white mb-0 d-flex align-items-center gap-2">
          {icon && <i className={`${icon} text-success`}></i>}
          <span >{title}</span>
        </h2>
        {subtitle && <p className="text-muted extra-small mb-0" style={{marginLeft:"10px"}}>{subtitle}</p>}
      </div>
      {actionText && (
        <button className="btn btn-sm btn-outline-success border-0 text-success fw-bold p-0 hover-underline" onClick={onAction}>
          {actionText} <i className="fa-solid fa-arrow-right ms-1" style={{ fontSize: '11px' }}></i>
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
