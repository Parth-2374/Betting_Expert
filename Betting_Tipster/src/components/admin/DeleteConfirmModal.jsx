import React from 'react';
import { useData } from '../../context/DataContext';

const DeleteConfirmModal = () => {
  const { deleteModal, confirmDelete, cancelDelete } = useData();

  if (!deleteModal?.show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white border-danger shadow-lg">
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold text-danger">
              <i className="fa-solid fa-triangle-exclamation me-2"></i> Confirm Deletion
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={cancelDelete}></button>
          </div>
          <div className="modal-body py-4">
            <p className="mb-1">Are you sure you want to delete <strong>"{deleteModal.itemTitle}"</strong>?</p>
            <small className="text-muted">This action cannot be undone.</small>
          </div>
          <div className="modal-footer border-secondary">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={cancelDelete}>
              Cancel
            </button>
            <button type="button" className="btn btn-sm btn-danger fw-bold px-3" onClick={confirmDelete}>
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
