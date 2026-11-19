import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useData } from '../../context/DataContext';

const AdminSettings = () => {
  const { showToast } = useData();
  const [siteName, setSiteName] = useState('BettingExpert');
  const [tagline, setTagline] = useState('Tipsters At Your Service');
  const [currency, setCurrency] = useState('USD');

  const handleSave = (e) => {
    e.preventDefault();
    showToast('Platform settings updated successfully!', 'success');
  };

  return (
    <div>
      <PageHeader title="Platform Global Settings" subtitle="Configure platform branding, default currency, and API connections" badgeText="SETTINGS" />
      <div className="be-card p-4 border-success" style={{ maxWidth: '640px' }}>
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label className="form-label text-white small fw-bold">Platform Name</label>
            <input type="text" className="form-control bg-dark text-white border-secondary" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label text-white small fw-bold">Platform Tagline</label>
            <input type="text" className="form-control bg-dark text-white border-secondary" value={tagline} onChange={(e) => setTagline(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="form-label text-white small fw-bold">Default Currency</label>
            <select className="form-select bg-dark text-white border-secondary" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
          <button type="submit" className="btn-primary-custom px-4">Save Platform Settings</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;
