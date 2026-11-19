import React, { useState, useEffect } from 'react';

const AdminFormModal = ({
  show,
  title,
  fields = [],
  initialValues = {},
  onSave,
  onClose
}) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues, show]);

  if (!show) return null;

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white border-secondary shadow-lg">
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold text-success">{title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body py-4">
              <div className="row g-3">
                {fields.map(field => (
                  <div key={field.key} className={field.col || 'col-12'}>
                    <label className="form-label text-white small fw-bold">{field.label}</label>
                    {field.type === 'select' ? (
                      <select
                        className="form-select bg-dark text-white border-secondary"
                        value={formData[field.key] || ''}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        required={field.required}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        className="form-control bg-dark text-white border-secondary"
                        rows="3"
                        value={formData[field.key] || ''}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type || 'text'}
                        className="form-control bg-dark text-white border-secondary"
                        value={formData[field.key] || ''}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary-custom btn-sm px-4">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminFormModal;
