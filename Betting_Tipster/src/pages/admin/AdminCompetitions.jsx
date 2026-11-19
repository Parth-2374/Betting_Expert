import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminCompetitions = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingComp, setEditingComp] = useState(null);

  const columns = [
    { key: 'title', label: 'Competition Title' },
    { key: 'sponsor', label: 'Sponsor' },
    { key: 'prizePool', label: 'Prize Pool' },
    { key: 'firstPrize', label: '1st Prize' },
    { key: 'participants', label: 'Participants' },
    { key: 'status', label: 'Status' }
  ];

  const fields = [
    { key: 'title', label: 'Competition Title', required: true, col: 'col-md-6' },
    { key: 'sponsor', label: 'Sponsor Name', required: true, col: 'col-md-6' },
    { key: 'prizePool', label: 'Prize Pool Amount', required: true, col: 'col-md-6' },
    { key: 'firstPrize', label: 'First Place Prize', required: true, col: 'col-md-6' },
    { key: 'daysLeft', label: 'Days Remaining', type: 'number', required: true, col: 'col-md-6' },
    { key: 'status', label: 'Status', type: 'select', options: [{ value: 'Active', label: 'Active' }, { value: 'Finished', label: 'Finished' }], required: true, col: 'col-md-6' },
    { key: 'description', label: 'Rules & Overview', type: 'textarea', col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingComp(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingComp(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingComp) {
      updateItem('competitions', editingComp.id, formData);
    } else {
      addItem('competitions', { ...formData, participants: 1, leaderboard: [] });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Tipster Prize Leagues Management" subtitle="Create monthly competitions, sponsors, and prize money pools" badgeText="COMPETITIONS" />
      <AdminTable
        collectionKey="competitions"
        title="Tipster Leagues"
        columns={columns}
        data={collections.competitions || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingComp ? "Edit Competition" : "Create New Competition"}
        fields={fields}
        initialValues={editingComp}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminCompetitions;
