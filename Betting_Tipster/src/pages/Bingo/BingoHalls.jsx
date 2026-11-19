import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockBingo } from '../../data/bingo';

const BingoHalls = () => {
  return (
    <div>
      <PageHeader
        title="Top Rated Online Bingo Halls"
        subtitle="Licensed bingo platforms with active chat rooms & daily free bingo games"
        badgeText="BINGO ROOMS"
      />
      <div className="grid-2">
        {mockBingo.halls.map(h => (
          <div key={h.id} className="be-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold text-white mb-0">{h.name}</h4>
              <span className="badge bg-warning text-dark fw-bold"><i className="fa-solid fa-star me-1"></i>{h.rating}</span>
            </div>
            <p className="text-success fw-bold mb-2">{h.bonus}</p>
            <p className="text-muted small mb-0">{h.community}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoHalls;
