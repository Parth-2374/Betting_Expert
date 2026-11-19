import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialCollections, mockApiService } from '../services/mockApi';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [collections, setCollections] = useState(initialCollections);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    collectionKey: '',
    id: null,
    itemTitle: ''
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const addItem = (key, item) => {
    const newItem = {
      ...item,
      id: item.id || `${key.slice(0, 3)}-${Date.now()}`
    };
    setCollections(prev => {
      const updated = [newItem, ...(prev[key] || [])];
      mockApiService.persistCollection(key, updated);
      return { ...prev, [key]: updated };
    });
    showToast(`Successfully created new ${key.slice(0, -1)}!`, 'success');
  };

  const updateItem = (key, id, updatedFields) => {
    setCollections(prev => {
      const list = prev[key] || [];
      const updated = list.map(item => (item.id === id ? { ...item, ...updatedFields } : item));
      mockApiService.persistCollection(key, updated);
      return { ...prev, [key]: updated };
    });
    showToast(`Successfully updated ${key.slice(0, -1)}!`, 'success');
  };

  const deleteItem = (key, id) => {
    setCollections(prev => {
      const list = prev[key] || [];
      const updated = list.filter(item => item.id !== id);
      mockApiService.persistCollection(key, updated);
      return { ...prev, [key]: updated };
    });
    showToast(`Item removed from ${key}.`, 'info');
  };

  const openDeleteModal = (collectionKey, id, itemTitle) => {
    setDeleteModal({
      show: true,
      collectionKey,
      id,
      itemTitle: itemTitle || 'this item'
    });
  };

  const confirmDelete = () => {
    if (deleteModal.collectionKey && deleteModal.id) {
      deleteItem(deleteModal.collectionKey, deleteModal.id);
    }
    setDeleteModal({ show: false, collectionKey: '', id: null, itemTitle: '' });
  };

  const cancelDelete = () => {
    setDeleteModal({ show: false, collectionKey: '', id: null, itemTitle: '' });
  };

  return (
    <DataContext.Provider
      value={{
        collections,
        addItem,
        updateItem,
        deleteItem,
        openDeleteModal,
        confirmDelete,
        cancelDelete,
        deleteModal,
        toast,
        showToast
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
