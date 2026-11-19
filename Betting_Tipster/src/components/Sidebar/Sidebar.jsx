import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ mobileOpen, onCloseMobile }) => {
  return (
    <aside className={`aside-sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-menu-group">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
          end
        >
          <i className="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/tips"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-clipboard-list"></i>
          <span>Tips</span>
        </NavLink>

        <NavLink
          to="/hot-tips"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-fire text-warning"></i>
          <span>Hot Tips</span>
          <span className="hot-badge">HOT</span>
        </NavLink>

        <NavLink
          to="/football"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-futbol"></i>
          <span>Football</span>
        </NavLink>

        <NavLink
          to="/tennis"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-circle"></i>
          <span>Tennis</span>
        </NavLink>

        <NavLink
          to="/basketball"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-basketball"></i>
          <span>Basketball</span>
        </NavLink>

        <NavLink
          to="/racing"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-horse"></i>
          <span>Racing</span>
        </NavLink>

        <div className="sidebar-divider"></div>

        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-chart-column"></i>
          <span>Stats</span>
        </NavLink>

        <NavLink
          to="/tipsters"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-user-tie"></i>
          <span>Tipsters</span>
        </NavLink>

        <NavLink
          to="/bookmakers"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-building"></i>
          <span>Bookmakers</span>
        </NavLink>

        <NavLink
          to="/competitions"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-trophy"></i>
          <span>Competitions</span>
        </NavLink>

        <NavLink
          to="/previews"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-newspaper"></i>
          <span>Previews</span>
        </NavLink>

        <NavLink
          to="/football-statistics"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-chart-line"></i>
          <span>Football Stats</span>
        </NavLink>

        <NavLink
          to="/bonus-codes"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-gift"></i>
          <span>Bonus Codes</span>
        </NavLink>

        <NavLink
          to="/casino"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-dice"></i>
          <span>Casino</span>
        </NavLink>

        <NavLink
          to="/poker"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-diamond"></i>
          <span>Poker</span>
        </NavLink>

        <NavLink
          to="/bingo"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-circle-dot"></i>
          <span>Bingo</span>
        </NavLink>

        <div className="sidebar-divider"></div>

        <NavLink
          to="/casino/beginners-guide"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-compass"></i>
          <span>Gambling Guide</span>
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-blog"></i>
          <span>Blog</span>
        </NavLink>

        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? 'sidebar-item active' : 'sidebar-item')}
          onClick={onCloseMobile}
        >
          <i className="fa-solid fa-store"></i>
          <span>BE Store</span>
        </NavLink>
      </div>

      <div className="community-card">
        <h6>JOIN OUR COMMUNITY</h6>
        <p>Get free tips, stats and expert advice straight to your inbox.</p>
        <button
          type="button"
          className="btn-primary-custom w-100 justify-content-center py-2"
          onClick={() => alert("Thank you for joining our community newsletter!")}
        >
          <i className="fa-solid fa-paper-plane me-1"></i> Join Now
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
