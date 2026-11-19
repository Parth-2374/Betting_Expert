import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = ({ onToggleMobileSidebar }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme, isDark } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <header className="header-bar">
      <div className="d-flex align-items-center gap-3">
        <button
          className="action-btn-icon d-lg-none"
          onClick={onToggleMobileSidebar}
          aria-label="Toggle mobile menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <Link to="/" className="logo-link">
          <div className="logo-icon-box">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <div className="logo-text-box">
            <div className="brand-title">
              <span className="bet-white">Betting</span>
              <span className="exp-green">Expert</span>
            </div>
            <small className="tagline">Tipsters At Your Service</small>
          </div>
        </Link>
      </div>

      <nav className="d-none d-lg-block">
        <ul className="nav-menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
          <li><NavLink to="/tips" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tips</NavLink></li>
          <li><NavLink to="/hot-tips" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Hot-Tips</NavLink></li>
          <li><NavLink to="/football" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Football</NavLink></li>
          <li><NavLink to="/tennis" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tennis</NavLink></li>
          <li><NavLink to="/basketball" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Basketball</NavLink></li>
          <li><NavLink to="/stats" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Stats</NavLink></li>
          <li><NavLink to="/tipsters" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tipsters</NavLink></li>
          <li><NavLink to="/bookmakers" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Bookmakers</NavLink></li>
          
          <li
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-link cursor-pointer d-flex align-items-center gap-1">
              More <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '11px' }}></i>
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu-custom">
                <Link to="/previews" onClick={() => setDropdownOpen(false)}>About Us</Link>
                <Link to="/blog" onClick={() => setDropdownOpen(false)}>Contact</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <button
          className="action-btn-icon"
          onClick={handleSearchClick}
          title="Search BettingExpert"
          aria-label="Search"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        {/* <button
          className="action-btn-icon"
          onClick={toggleTheme}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Theme toggle"
        >
          <i className={isDark ? "fa-solid fa-sun text-warning" : "fa-solid fa-moon text-primary"}></i>
        </button> */}

        {isAuthenticated ? (
          <div className="d-flex align-items-center gap-2">
            <Link to="/profile" className="btn-outline-custom d-flex align-items-center gap-2">
              <img
                src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"}
                alt="Avatar"
                style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <span>{user?.username || 'Profile'}</span>
            </Link>
            <button className="action-btn-icon text-danger" onClick={logout} title="Logout" aria-label="Logout">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn-outline-custom">Login</Link>
            <Link to="/register" className="btn-primary-custom">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
