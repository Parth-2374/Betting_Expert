import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminTipsters = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingTipster, setEditingTipster] = useState(null);

  const columns = [
    { key: 'name', label: 'Tipster Name' },
    { key: 'specialty', label: 'Specialty' },
    { key: 'type', label: 'Tier' },
    { key: 'profit', label: 'Profit' },
    { key: 'yieldVal', label: 'Yield' },
    { key: 'winRate', label: 'Win Rate' }
  ];

  const fields = [
    { key: 'name', label: 'Tipster Name', required: true, col: 'col-md-6' },
    { key: 'specialty', label: 'Specialty', required: true, col: 'col-md-6' },
    { key: 'type', label: 'Tier Type', type: 'select', options: [{ value: 'Free', label: 'Free' }, { value: 'Trial', label: 'Trial' }, { value: 'Premium', label: 'Premium' }], required: true, col: 'col-md-6' },
    { key: 'profit', label: 'Profit Units', required: true, col: 'col-md-6' },
    { key: 'yieldVal', label: 'Yield %', required: true, col: 'col-md-6' },
    { key: 'winRate', label: 'Win Rate %', required: true, col: 'col-md-6' },
    { key: 'bio', label: 'Profile Bio', type: 'textarea', col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingTipster(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingTipster(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingTipster) {
      updateItem('tipsters', editingTipster.id, formData);
    } else {
      addItem('tipsters', { ...formData, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150', rank: (collections.tipsters?.length || 0) + 1 });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Tipster Management" subtitle="Manage verified tipster directory, tiers, and profit statistics" badgeText="TIPSTERS MODULE" />
      <AdminTable
        collectionKey="tipsters"
        title="Verified Tipsters List"
        columns={columns}
        data={collections.tipsters || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingTipster ? "Edit Tipster Profile" : "Add New Tipster"}
        fields={fields}
        initialValues={editingTipster}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminTipsters;
