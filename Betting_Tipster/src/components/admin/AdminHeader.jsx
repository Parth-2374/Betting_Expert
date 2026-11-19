import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const AdminHeader = () => {
  const { toggleTheme, isDark } = useTheme();
  const { user } = useAuth();

  return (
    <header className="admin-header-bar">
      <div className="d-flex align-items-center gap-3">
        <Link to="/admin" className="logo-link">
          <div className="logo-icon-box" style={{ width: '32px', height: '32px', fontSize: '16px' }}>
            <i className="fa-solid fa-gauge-high"></i>
          </div>
          <div className="logo-text-box">
            <div className="brand-title" style={{ fontSize: '16px' }}>
              <span className="bet-white">BettingExpert</span>
              <span className="exp-green ms-1">Control Center</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="d-flex align-items-center gap-3">
        <Link to="/" className="btn btn-sm btn-outline-success fw-bold">
          <i className="fa-solid fa-globe me-1"></i> Public Site
        </Link>

        <button
          className="action-btn-icon"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          <i className={isDark ? "fa-solid fa-sun text-warning" : "fa-solid fa-moon text-primary"}></i>
        </button>

        <div className="d-flex align-items-center gap-2 border-start border-secondary ps-3">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"}
            alt="Admin"
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div className="fw-bold text-white extra-small">{user?.username || 'Admin'}</div>
            <span className="badge bg-danger extra-small py-0">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
