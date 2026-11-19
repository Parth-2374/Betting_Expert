import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const AdminTable = ({
  collectionKey,
  columns = [],
  data = [],
  title = "Management Table",
  onAdd,
  onEdit,
  onView
}) => {
  const { openDeleteModal } = useData();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredData = data.filter(item => {
    const searchMatch = Object.values(item).some(
      val => typeof val === 'string' && val.toLowerCase().includes(search.toLowerCase())
    );
    const statusMatch = statusFilter === 'all' || (item.status && item.status.toLowerCase() === statusFilter.toLowerCase());
    return searchMatch && statusMatch;
  });

  const renderBadge = (status) => {
    if (!status) return null;
    const sLower = status.toLowerCase();
    let bgClass = 'bg-secondary';

    if (['active', 'published', 'won'].includes(sLower)) bgClass = 'bg-success text-dark fw-bold';
    else if (['pending', 'trial', 'draft'].includes(sLower)) bgClass = 'bg-warning text-dark fw-bold';
    else if (['inactive', 'lost'].includes(sLower)) bgClass = 'bg-danger text-white fw-bold';

    return <span className={`badge ${bgClass}`}>{status}</span>;
  };

  return (
    <div className="be-card">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold text-white mb-0">{title}</h4>
          <small className="text-muted">Total records: {filteredData.length}</small>
        </div>

        {onAdd && (
          <button className="btn-primary-custom" onClick={onAdd}>
            <i className="fa-solid fa-plus me-1"></i> Add New Item
          </button>
        )}
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <div className="position-relative">
            <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary ps-5"
              placeholder="Search records..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4">
          <select
            className="form-select bg-dark text-white border-secondary"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="active">Active / Published / Won</option>
            <option value="pending">Pending / Trial / Draft</option>
            <option value="inactive">Inactive / Lost</option>
          </select>
        </div>
      </div>

      <div className="be-table-container">
        <table className="be-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <tr key={item.id || idx}>
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.key === 'status' ? (
                        renderBadge(item[col.key])
                      ) : col.render ? (
                        col.render(item[col.key], item)
                      ) : (
                        item[col.key] || '—'
                      )}
                    </td>
                  ))}
                  <td className="text-end">
                    <div className="d-flex justify-content-end gap-1">
                      {onView && (
                        <button
                          className="btn btn-sm btn-outline-info"
                          onClick={() => onView(item)}
                          title="View Details"
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                      )}
                      {onEdit && (
                        <button
                          className="btn btn-sm btn-outline-warning"
                          onClick={() => onEdit(item)}
                          title="Edit Item"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      )}
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => openDeleteModal(collectionKey, item.id, item.name || item.title || item.match || item.username || item.id)}
                        title="Delete Item"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-4 text-muted">
                  No records matching criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
