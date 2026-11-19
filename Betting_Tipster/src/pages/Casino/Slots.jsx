import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockCasino } from '../../data/casino';

const Slots = () => {
  return (
    <div>
      <PageHeader
        title="High RTP Online Slots"
        subtitle="Audited Return-To-Player (RTP) statistics, progressive jackpots, and max win multipliers"
        badgeText="SLOTS HUB"
      />
      <div className="grid-3">
        {mockCasino.slots.map(s => (
          <div key={s.id} className="be-card text-center">
            <img src={s.image} alt={s.title} className="w-100 rounded mb-3" style={{ height: '160px', objectFit: 'cover' }} />
            <h5 className="fw-bold text-white mb-1">{s.title}</h5>
            <small className="text-muted d-block mb-3">{s.provider}</small>
            <div className="row g-2 text-center bg-dark p-2 rounded border border-secondary extra-small">
              <div className="col-4">
                <div className="text-muted">RTP</div>
                <div className="fw-bold text-success">{s.rtp}</div>
              </div>
              <div className="col-4">
                <div className="text-muted">Volatility</div>
                <div className="fw-bold text-warning">{s.volatility}</div>
              </div>
              <div className="col-4">
                <div className="text-muted">Max Win</div>
                <div className="fw-bold text-white">{s.maxWin}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slots;
