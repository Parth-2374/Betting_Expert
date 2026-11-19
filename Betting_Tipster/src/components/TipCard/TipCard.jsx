import React from 'react';
import { useNavigate } from 'react-router-dom';

const TipCard = ({ tip }) => {
  const navigate = useNavigate();

  return (
    <div className="be-card cursor-pointer" onClick={() => navigate(`/tips/${tip.id}`)}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="badge-custom badge-green">{tip.competition}</span>
        <span className="badge bg-danger text-white fw-bold px-2 py-1 " style={{ fontSize: '11px' }}>
          {tip.confidence}% Confidence
        </span>
      </div>

      <h5 className="fw-bold text-white mb-2">{tip.match}</h5>

      <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3 ">
        <div className="small  mb-1 text-black fw-bold" >Pick / Selection</div>
        <div className="fw-extrabold text-success fs-5">{tip.selection}</div>
      </div>

      <div className="row text-center g-2 mb-3">
        <div className="col-4">
          <div className="p-2 bg-dark rounded border border-secondary">
            <div className="extra-small text-muted fw-bold">Odds</div>
            <div className="fw-bold text-white">{tip.odds.toFixed(2)}</div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 bg-dark rounded border border-secondary">
            <div className="extra-small text-muted fw-bold">Stake</div>
            <div className="fw-bold text-white">{tip.stake}/10</div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-2 bg-dark rounded border border-secondary">
            <div className="extra-small text-muted fw-bold">Bookie</div>
            <div className="fw-bold text-white small">{tip.bookmaker}</div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary">
        <div className="d-flex align-items-center gap-2">
          <img
            src={tip.tipsterAvatar}
            alt={tip.tipsterName}
            style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span className="small text-muted">{tip.tipsterName}</span>
        </div>
        <span className="text-success extra-small fw-bold">View Analysis <i className="fa-solid fa-chevron-right ms-1"></i></span>
      </div>
    </div>
  );
};

export default TipCard;
