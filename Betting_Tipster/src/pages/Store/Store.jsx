import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockProducts } from '../../data/products';
import { useAuth } from '../../context/AuthContext';

const Store = () => {
  const { user, deductPoints } = useAuth();
  const [redeemed, setRedeemed] = useState({});

  const handleRedeem = (prodId, points) => {
    if (redeemed[prodId]) return;
    const success = deductPoints(points);
    if (success) {
      setRedeemed(prev => ({ ...prev, [prodId]: true }));
      alert(`Success! You have redeemed this item for ${points} points.`);
    } else {
      alert(`Insufficient points! You need ${points} points. Current balance: ${user?.points || 0}`);
    }
  };

  return (
    <div>
      <PageHeader
        title="BE Merchandise Store"
        subtitle="Redeem your community activity points for official BettingExpert gear"
        badgeText="COMMUNITY REWARDS"
      >
        <div className="badge bg-dark border border-secondary text-success px-3 py-2 fs-6 fw-bold">
          <i className="fa-solid fa-coins me-1"></i> Balance: {user?.points || 0} PTS
        </div>
      </PageHeader>

      <div className="grid-4">
        {mockProducts.map(prod => (
          <div key={prod.id} className="be-card h-100 d-flex flex-column justify-content-between">
            <div>
              <img src={prod.image} alt={prod.name} className="w-100 rounded mb-3" style={{ height: '160px', objectFit: 'cover' }} />
              <span className="badge-custom badge-green mb-2">{prod.category}</span>
              <h5 className="fw-bold text-white mb-1">{prod.name}</h5>
              <p className="small text-muted mb-3">{prod.description}</p>
            </div>

            <div className="pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
              <span className="fw-extrabold text-warning fs-5">{prod.points} PTS</span>
              <button
                type="button"
                className={`btn btn-sm ${redeemed[prod.id] ? 'btn-outline-success text-success' : 'btn-success text-dark'} fw-bold px-3`}
                onClick={() => handleRedeem(prod.id, prod.points)}
              >
                {redeemed[prod.id] ? 'Redeemed ✓' : 'Redeem Item'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
