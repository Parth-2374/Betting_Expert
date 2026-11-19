import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminBonusCodes = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingCode, setEditingCode] = useState(null);

  const columns = [
    { key: 'bookmaker', label: 'Bookmaker' },
    { key: 'bonus', label: 'Bonus Offer' },
    { key: 'code', label: 'Promo Code' },
    { key: 'conditions', label: 'Terms & Conditions' }
  ];

  const fields = [
    { key: 'bookmaker', label: 'Bookmaker Name', required: true, col: 'col-md-6' },
    { key: 'code', label: 'Promo Code', required: true, col: 'col-md-6' },
    { key: 'bonus', label: 'Bonus Description', required: true, col: 'col-md-6' },
    { key: 'signupOffer', label: 'Sign-up Offer Details', required: true, col: 'col-md-6' },
    { key: 'conditions', label: 'Terms & Conditions', type: 'textarea', col: 'col-12' },
    { key: 'claimUrl', label: 'Claim Target Link', col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingCode(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingCode(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingCode) {
      updateItem('bonusCodes', editingCode.id, formData);
    } else {
      addItem('bonusCodes', { ...formData, logo: 'https://via.placeholder.com/100x35/007a33/ffffff?text=Offer' });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Betting Bonus & Promo Codes Management" subtitle="Manage promo codes, conditions, and claim links" badgeText="BONUS CODES" />
      <AdminTable
        collectionKey="bonusCodes"
        title="Promotional Offer Codes"
        columns={columns}
        data={collections.bonusCodes || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingCode ? "Edit Bonus Code" : "Add New Promo Code"}
        fields={fields}
        initialValues={editingCode}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminBonusCodes;
