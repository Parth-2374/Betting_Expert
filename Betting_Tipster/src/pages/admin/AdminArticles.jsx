import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import AdminTable from '../../components/admin/AdminTable';
import AdminFormModal from '../../components/admin/AdminFormModal';
import { useData } from '../../context/DataContext';

const AdminArticles = () => {
  const { collections, addItem, updateItem } = useData();
  const [modalShow, setModalShow] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const columns = [
    { key: 'title', label: 'Article Title' },
    { key: 'category', label: 'Category' },
    { key: 'author', label: 'Author' },
    { key: 'date', label: 'Published Date' },
    { key: 'readTime', label: 'Read Time' }
  ];

  const fields = [
    { key: 'title', label: 'Article Title', required: true, col: 'col-12' },
    { key: 'category', label: 'Category', required: true, col: 'col-md-6' },
    { key: 'author', label: 'Author Name', required: true, col: 'col-md-6' },
    { key: 'readTime', label: 'Read Time (e.g. 5 min read)', required: true, col: 'col-md-6' },
    { key: 'image', label: 'Cover Image URL', col: 'col-md-6' },
    { key: 'excerpt', label: 'Short Excerpt', type: 'textarea', required: true, col: 'col-12' },
    { key: 'content', label: 'Full Body Content', type: 'textarea', required: true, col: 'col-12' }
  ];

  const handleAdd = () => {
    setEditingArticle(null);
    setModalShow(true);
  };

  const handleEdit = (item) => {
    setEditingArticle(item);
    setModalShow(true);
  };

  const handleSave = (formData) => {
    if (editingArticle) {
      updateItem('articles', editingArticle.id, formData);
    } else {
      addItem('articles', { ...formData, date: new Date().toISOString().split('T')[0], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600' });
    }
    setModalShow(false);
  };

  return (
    <div>
      <PageHeader title="Articles & Previews CMS" subtitle="Publish match previews, strategy guides, and betting education articles" badgeText="ARTICLES CMS" />
      <AdminTable
        collectionKey="articles"
        title="Published Articles"
        columns={columns}
        data={collections.articles || []}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
      <AdminFormModal
        show={modalShow}
        title={editingArticle ? "Edit Article" : "Publish New Article"}
        fields={fields}
        initialValues={editingArticle}
        onSave={handleSave}
        onClose={() => setModalShow(false)}
      />
    </div>
  );
};

export default AdminArticles;
