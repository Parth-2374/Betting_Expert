import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <NavLink to="/admin" end className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-gauge-high"></i>
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/admin/users" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-users"></i>
        <span>Users</span>
      </NavLink>

      <NavLink to="/admin/tips" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-clipboard-list"></i>
        <span>Tips</span>
      </NavLink>

      <NavLink to="/admin/tipsters" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-user-tie"></i>
        <span>Tipsters</span>
      </NavLink>

      <NavLink to="/admin/matches" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-futbol"></i>
        <span>Matches</span>
      </NavLink>

      <NavLink to="/admin/sports" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-trophy"></i>
        <span>Sports</span>
      </NavLink>

      <NavLink to="/admin/competitions" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-medal"></i>
        <span>Competitions</span>
      </NavLink>

      <NavLink to="/admin/bookmakers" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-building"></i>
        <span>Bookmakers</span>
      </NavLink>

      <NavLink to="/admin/bonus-codes" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-gift"></i>
        <span>Bonus Codes</span>
      </NavLink>

      <NavLink to="/admin/articles" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-newspaper"></i>
        <span>Articles / Blog</span>
      </NavLink>

      <NavLink to="/admin/testimonials" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-comment-dots"></i>
        <span>Testimonials</span>
      </NavLink>

      <NavLink to="/admin/reviews" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-star"></i>
        <span>Reviews</span>
      </NavLink>

      <NavLink to="/admin/statistics" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-chart-line"></i>
        <span>Statistics</span>
      </NavLink>

      <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}>
        <i className="fa-solid fa-gear"></i>
        <span>Settings</span>
      </NavLink>
    </aside>
  );
};

export default AdminSidebar;
