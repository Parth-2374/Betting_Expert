import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminSports = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingSport, setEditingSport] = useState(null);

  const columns = [
    { key: 'name', label: 'Sport Name' },
    { key: 'icon', label: 'Icon Class' },
    { key: 'tipsCount', label: 'Tips Count' },
    { key: 'activeMatches', label: 'Active Matches' },
    { key: 'description', label: 'Description' }
  ];

  const fields = [
    { key: 'name', label: 'Sport Name', required: true, col: 'col-md-6' },
    { key: 'icon', label: 'FontAwesome Icon (e.g. fa-futbol)', required: true, col: 'col-md-6' },
    { key: 'tipsCount', label: 'Tips Count', type: 'number', required: true, col: 'col-md-6' },
    { key: 'activeMatches', label: 'Active Matches', type: 'number', required: true, col: 'col-md-6' },
    { key: 'description', label: 'Description', type: 'textarea', col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingSport(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingSport(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingSport) {
      updateItem('sports', editingSport.id, formData);
    } else {
      addItem('sports', { ...formData, color: '#25D14E' });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Sports Category Management" subtitle="Manage sports categories, icons, and tip metrics" badgeText="SPORTS MODULE" />
      <AdminTable
        collectionKey="sports"
        title="Sports Directory"
        columns={columns}
        data={collections.sports || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingSport ? "Edit Sport Category" : "Add New Sport"}
        fields={fields}
        initialValues={editingSport}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminSports;
