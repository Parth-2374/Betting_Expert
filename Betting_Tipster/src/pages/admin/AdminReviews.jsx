import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminReviews = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const columns = [
    { key: 'targetName', label: 'Target Operator' },
    { key: 'category', label: 'Category' },
    { key: 'author', label: 'Reviewer' },
    { key: 'rating', label: 'Rating' },
    { key: 'status', label: 'Status' }
  ];

  const fields = [
    { key: 'targetName', label: 'Operator Name (e.g. Bet365)', required: true, col: 'col-md-6' },
    { key: 'category', label: 'Category', type: 'select', options: [{ value: 'Bookmaker', label: 'Bookmaker' }, { value: 'Casino', label: 'Casino' }, { value: 'Poker', label: 'Poker' }, { value: 'Bingo', label: 'Bingo' }], required: true, col: 'col-md-6' },
    { key: 'author', label: 'Author Name', required: true, col: 'col-md-6' },
    { key: 'rating', label: 'Rating (1-5)', type: 'number', required: true, col: 'col-md-6' },
    { key: 'status', label: 'Status', type: 'select', options: [{ value: 'Published', label: 'Published' }, { value: 'Pending', label: 'Pending' }], required: true, col: 'col-md-6' },
    { key: 'comment', label: 'Review Comment', type: 'textarea', required: true, col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingItem(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingItem) {
      updateItem('reviews', editingItem.id, formData);
    } else {
      addItem('reviews', { ...formData, date: new Date().toISOString().split('T')[0] });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="User Reviews Moderation" subtitle="Moderate user reviews for bookmakers, casino operators, and poker rooms" badgeText="REVIEWS" />
      <AdminTable
        collectionKey="reviews"
        title="User Submissions"
        columns={columns}
        data={collections.reviews || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingItem ? "Edit User Review" : "Add Review"}
        fields={fields}
        initialValues={editingItem}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminReviews;
