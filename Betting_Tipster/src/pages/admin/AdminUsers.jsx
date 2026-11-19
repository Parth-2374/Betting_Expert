import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminUsers = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const columns = [
    { key: 'name', label: 'Full Name' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'points', label: 'Points' }
  ];

  const fields = [
    { key: 'name', label: 'Full Name', required: true, col: 'col-md-6' },
    { key: 'username', label: 'Username', required: true, col: 'col-md-6' },
    { key: 'email', label: 'Email Address', type: 'email', required: true, col: 'col-md-6' },
    { key: 'role', label: 'Role', type: 'select', options: [{ value: 'Admin', label: 'Admin' }, { value: 'Tipster', label: 'Tipster' }, { value: 'User', label: 'User' }], required: true, col: 'col-md-6' },
    { key: 'status', label: 'Status', type: 'select', options: [{ value: 'Active', label: 'Active' }, { value: 'Inactive', label: 'Inactive' }], required: true, col: 'col-md-6' },
    { key: 'points', label: 'Points Balance', type: 'number', col: 'col-md-6' }
  ];

  const handleAdd = () => {
    setEditingUser(null);
    setModalShow(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingUser) {
      updateItem('users', editingUser.id, formData);
    } else {
      addItem('users', { ...formData, joinDate: new Date().toISOString().split('T')[0] });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="User Account Management" subtitle="Manage registered users, tipsters, and admin permissions" badgeText="USERS MODULE" />
      <AdminTable
        collectionKey="users"
        title="Registered Platform Users"
        columns={columns}
        data={collections.users || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingUser ? "Edit User Account" : "Add New User Account"}
        fields={fields}
        initialValues={editingUser}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminUsers;
