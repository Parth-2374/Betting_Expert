import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminBookmakers = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingBookie, setEditingBookie] = useState(null);

  const columns = [
    { key: 'name', label: 'Bookmaker Name' },
    { key: 'rating', label: 'Rating' },
    { key: 'bonus', label: 'Welcome Bonus' },
    { key: 'code', label: 'Promo Code' },
    { key: 'bestOddsFor', label: 'Best Odds Market' }
  ];

  const fields = [
    { key: 'name', label: 'Bookmaker Name', required: true, col: 'col-md-6' },
    { key: 'rating', label: 'Rating (1-5)', type: 'number', required: true, col: 'col-md-6' },
    { key: 'bonus', label: 'Welcome Bonus Offer', required: true, col: 'col-md-6' },
    { key: 'code', label: 'Promo Code', required: true, col: 'col-md-6' },
    { key: 'bestOddsFor', label: 'Best Odds Market', required: true, col: 'col-md-6' },
    { key: 'visitUrl', label: 'Affiliate URL', required: true, col: 'col-md-6' }
  ];

  const handleAdd = () => {
    setEditingBookie(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingBookie(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingBookie) {
      updateItem('bookmakers', editingBookie.id, formData);
    } else {
      addItem('bookmakers', { ...formData, logo: 'https://via.placeholder.com/120x40/007a33/ffffff?text=Bookie', pros: ['Great odds'], features: ['Cash Out'] });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Bookmaker Directory Management" subtitle="Manage sportsbook partners, bonuses, rating scores, and referral links" badgeText="BOOKMAKERS" />
      <AdminTable
        collectionKey="bookmakers"
        title="Partner Sportsbooks"
        columns={columns}
        data={collections.bookmakers || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingBookie ? "Edit Bookmaker Partner" : "Add New Bookmaker"}
        fields={fields}
        initialValues={editingBookie}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminBookmakers;
