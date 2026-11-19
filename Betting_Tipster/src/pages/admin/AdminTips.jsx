import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminTips = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingTip, setEditingTip] = useState(null);

  const columns = [
    { key: 'match', label: 'Match Fixture' },
    { key: 'sport', label: 'Sport' },
    { key: 'tipsterName', label: 'Tipster' },
    { key: 'selection', label: 'Selection' },
    { key: 'odds', label: 'Odds' },
    { key: 'stake', label: 'Stake' },
    { key: 'status', label: 'Status' }
  ];

  const fields = [
    { key: 'match', label: 'Match Fixture', required: true, col: 'col-md-6' },
    { key: 'competition', label: 'Competition Name', required: true, col: 'col-md-6' },
    { key: 'sport', label: 'Sport Category', type: 'select', options: [{ value: 'football', label: 'Football' }, { value: 'tennis', label: 'Tennis' }, { value: 'basketball', label: 'Basketball' }, { value: 'racing', label: 'Racing' }], required: true, col: 'col-md-6' },
    { key: 'tipsterName', label: 'Tipster Name', required: true, col: 'col-md-6' },
    { key: 'selection', label: 'Selection / Pick', required: true, col: 'col-md-6' },
    { key: 'odds', label: 'Decimal Odds', type: 'number', required: true, col: 'col-md-3' },
    { key: 'stake', label: 'Stake (1-10)', type: 'number', required: true, col: 'col-md-3' },
    { key: 'bookmaker', label: 'Bookmaker', required: true, col: 'col-md-6' },
    { key: 'status', label: 'Status', type: 'select', options: [{ value: 'Active', label: 'Active' }, { value: 'Won', label: 'Won' }, { value: 'Lost', label: 'Lost' }], required: true, col: 'col-md-6' },
    { key: 'analysis', label: 'Tipster Tactical Analysis', type: 'textarea', col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingTip(null);
    setModalShow(true);
  };

  const handleEdit = (tip) => {
    setEditingTip(tip);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingTip) {
      updateItem('tips', editingTip.id, formData);
    } else {
      addItem('tips', { ...formData, date: new Date().toISOString().split('T')[0], confidence: 88 });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Tips & Predictions Management" subtitle="Create, edit, and audit sports betting tips and odds" badgeText="TIPS MODULE" />
      <AdminTable
        collectionKey="tips"
        title="Published Predictions"
        columns={columns}
        data={collections.tips || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingTip ? "Edit Prediction Tip" : "Publish New Prediction Tip"}
        fields={fields}
        initialValues={editingTip}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminTips;
