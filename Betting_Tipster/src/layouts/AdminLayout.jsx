import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import DeleteConfirmModal from '../components/admin/DeleteConfirmModal';
import ToastNotification from '../components/admin/ToastNotification';

const AdminLayout = () => {
  return (
    <div className="admin-layout-container">
      <AdminHeader />
      <div className="admin-content-layout">
        <AdminSidebar />
        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>
      <DeleteConfirmModal />
      <ToastNotification />
    </div>
  );
};

export default AdminLayout;
