import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import TipTable from '../../components/TipTable/TipTable';
import { useAuth } from '../../context/AuthContext';
import { mockTips } from '../../data/tips';

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || '');

  if (!isAuthenticated) {
    return (
      <div className="text-center py-5">
        <h4 className="text-white fw-bold mb-3">Please log in to view your profile</h4>
        <button className="btn-primary-custom" onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  }

  const savedTipsList = mockTips.filter(t => user?.savedTips?.includes(t.id));

  return (
    <div>
      <PageHeader title="User Profile" subtitle="Manage your account preferences, saved tips, and store points balance" badgeText="USER ACCOUNT" />

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="be-card text-center mb-4">
            <img src={user.avatar} alt={user.username} className="rounded-circle border border-3 border-success mb-3" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
            <h4 className="fw-bold text-white mb-1">{user.username}</h4>
            <p className="small text-muted mb-3">{user.email}</p>

            <div className="p-3 bg-dark rounded border border-secondary mb-3 text-start extra-small text-muted">
              <div className="d-flex justify-content-between mb-1">
                <span>Member Since:</span>
                <strong className="text-white">{user.joinDate}</strong>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span>BE Points:</span>
                <strong className="text-warning fw-bold">{user.points} PTS</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Saved Tips:</span>
                <strong className="text-success">{user.savedTips?.length || 0}</strong>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-outline-light w-50" onClick={() => setEditing(!editing)}>
                {editing ? 'Cancel' : 'Edit Profile'}
              </button>
              <button className="btn btn-sm btn-outline-danger w-50" onClick={logout}>
                Log Out
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          {editing && (
            <div className="be-card mb-4 border-success">
              <h5 className="fw-bold text-white mb-3">Edit Profile Information</h5>
              <form onSubmit={(e) => { e.preventDefault(); setEditing(false); alert('Profile updated successfully!'); }}>
                <div className="mb-3">
                  <label className="form-label text-white small fw-bold">Username</label>
                  <input type="text" className="form-control bg-dark text-white border-secondary" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button type="submit" className="btn-primary-custom btn-sm">Save Changes</button>
              </form>
            </div>
          )}

          <div className="be-card mb-4">
            <h5 className="fw-bold text-white mb-3"><i className="fa-solid fa-bookmark text-success me-2"></i>Saved Tips</h5>
            {savedTipsList.length > 0 ? (
              <TipTable tips={savedTipsList} />
            ) : (
              <p className="text-muted small mb-0">No saved tips yet. Browse predictions and click "Save Tip" to add them here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
