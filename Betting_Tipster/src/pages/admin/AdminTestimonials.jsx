import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminTestimonials = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const columns = [
    { key: 'name', label: 'User Name' },
    { key: 'role', label: 'Role' },
    { key: 'rating', label: 'Rating' },
    { key: 'status', label: 'Status' },
    { key: 'comment', label: 'Comment' }
  ];

  const fields = [
    { key: 'name', label: 'User Name', required: true, col: 'col-md-6' },
    { key: 'role', label: 'User Role', required: true, col: 'col-md-6' },
    { key: 'rating', label: 'Star Rating (1-5)', type: 'number', required: true, col: 'col-md-6' },
    { key: 'status', label: 'Status', type: 'select', options: [{ value: 'Published', label: 'Published' }, { value: 'Draft', label: 'Draft' }], required: true, col: 'col-md-6' },
    { key: 'comment', label: 'Testimonial Comment', type: 'textarea', required: true, col: 'col-12' }
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
      updateItem('testimonials', editingItem.id, formData);
    } else {
      addItem('testimonials', { ...formData, date: new Date().toISOString().split('T')[0], avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150' });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Community Testimonials Management" subtitle="Moderate user reviews and homepage testimonials" badgeText="TESTIMONIALS" />
      <AdminTable
        collectionKey="testimonials"
        title="Community Testimonials"
        columns={columns}
        data={collections.testimonials || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingItem ? "Edit Testimonial" : "Add Testimonial"}
        fields={fields}
        initialValues={editingItem}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminTestimonials;
