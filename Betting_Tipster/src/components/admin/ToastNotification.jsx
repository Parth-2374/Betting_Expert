import React from 'react';
import { useData } from '../../context/DataContext';

const ToastNotification = () => {
  const { toast } = useData();

  if (!toast?.show) return null;

  return (
    <div className="toast-container-custom">
      <div className={`toast show align-items-center text-white bg-${toast.type === 'danger' ? 'danger' : toast.type === 'info' ? 'info text-dark' : 'success text-dark'} border-0 shadow-lg`} role="alert">
        <div className="d-flex">
          <div className="toast-body fw-bold">
            <i className={`fa-solid ${toast.type === 'danger' ? 'fa-circle-xmark' : toast.type === 'info' ? 'fa-circle-info' : 'fa-circle-check'} me-2`}></i>
            {toast.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;
