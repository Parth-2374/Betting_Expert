import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const TipsterCard = ({ tipster }) => {
  const navigate = useNavigate();
  const { user, toggleFollowTipster } = useAuth();
  const isFollowed = user?.followedTipsters?.includes(tipster.id);

  const handleFollow = (e) => {
    e.stopPropagation();
    toggleFollowTipster(tipster.id);
  };

  return (
    <div className="be-card text-center" onClick={() => navigate(`/tipsters/${tipster.id}`)}>
      <div className="position-relative d-inline-block mb-3">
        <img
          src={tipster.avatar}
          alt={tipster.name}
          className="rounded-circle border border-2 border-success"
          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
        />
        <span className="position-absolute bottom-0 end-0 badge bg-dark border border-secondary text-success extra-small fw-bold">
          #{tipster.rank || 1}
        </span>
      </div>

      <h5 className="fw-bold text-white mb-1 ">{tipster.name}</h5>
      <p className="extra-small text-muted mb-3">{tipster.specialty}</p>

      <div className="row g-2 mb-3 bg-dark-subtle p-2 rounded border border-secondary">
        <div className="col-4">
          <div className="extra-small text-success fw-bold">Profit</div>
          <div className="fw-extrabold text-success small">{tipster.profit}</div>
        </div>
        <div className="col-4">
          <div className="extra-small text-success fw-bold">Yield</div>
          <div className="fw-bold text-success small">{tipster.yieldVal}</div>
        </div>
        <div className="col-4">
          <div className="extra-small text-success  fw-bold">Win Rate</div>
          <div className="fw-bold text-success small">{tipster.winRate}</div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 text-muted extra-small">
        <span><i className="fa-solid fa-clipboard-check me-1 text-success"></i>{tipster.tipsCount} Tips</span>
        <span><i className="fa-solid fa-star text-warning me-1"></i>{tipster.rating} / 5</span>
      </div>

      <div className="d-flex gap-2">
        <button
          type="button"
          className={`btn btn-sm w-50 fw-bold ${isFollowed ? 'btn-outline-secondary text-muted' : 'btn-success text-dark'}`}
          onClick={handleFollow}
        >
          {isFollowed ? 'Following' : '+ Follow'}
        </button>

        <button
          type="button"
          className="btn btn-sm btn-outline-light w-50 fw-bold"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/tipsters/${tipster.id}`);
          }}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default TipsterCard;
