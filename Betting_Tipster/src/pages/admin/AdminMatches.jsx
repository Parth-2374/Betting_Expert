import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminMatches = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingMatch, setEditingMatch] = useState(null);

  const columns = [
    { key: 'homeTeam', label: 'Home Team' },
    { key: 'awayTeam', label: 'Away Team' },
    { key: 'competition', label: 'Competition' },
    { key: 'sport', label: 'Sport' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' }
  ];

  const fields = [
    { key: 'homeTeam', label: 'Home Team', required: true, col: 'col-md-6' },
    { key: 'awayTeam', label: 'Away Team', required: true, col: 'col-md-6' },
    { key: 'competition', label: 'Competition Name', required: true, col: 'col-md-6' },
    { key: 'venue', label: 'Stadium / Venue', required: true, col: 'col-md-6' },
    { key: 'sport', label: 'Sport', type: 'select', options: [{ value: 'football', label: 'Football' }, { value: 'tennis', label: 'Tennis' }, { value: 'basketball', label: 'Basketball' }, { value: 'racing', label: 'Racing' }], required: true, col: 'col-md-6' },
    { key: 'date', label: 'Match Date', type: 'date', required: true, col: 'col-md-3' },
    { key: 'time', label: 'Match Time', type: 'text', required: true, col: 'col-md-3' },
    { key: 'status', label: 'Status', type: 'select', options: [{ value: 'Upcoming', label: 'Upcoming' }, { value: 'Live', label: 'Live' }, { value: 'Finished', label: 'Finished' }], required: true, col: 'col-md-6' }
  ];

  const handleAdd = () => {
    setEditingMatch(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingMatch(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingMatch) {
      updateItem('matches', editingMatch.id, formData);
    } else {
      addItem('matches', { ...formData, odds: { home: 2.10, draw: 3.40, away: 3.20 } });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Match Fixtures Management" subtitle="Schedule upcoming matches and update live fixture status" badgeText="MATCHES MODULE" />
      <AdminTable
        collectionKey="matches"
        title="Sports Fixtures Directory"
        columns={columns}
        data={collections.matches || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingMatch ? "Edit Match Fixture" : "Schedule New Fixture"}
        fields={fields}
        initialValues={editingMatch}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminMatches;
