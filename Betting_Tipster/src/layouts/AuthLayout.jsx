import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout-container">
      <div className="w-100" style={{ maxWidth: '460px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
