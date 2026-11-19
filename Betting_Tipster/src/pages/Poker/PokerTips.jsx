import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockPoker } from '../../data/poker';

const PokerTips = () => {
  return (
    <div>
      <PageHeader
        title="Advanced Strategy Tips"
        subtitle="Pre-flop ranges, bankroll management, and tournament ICM strategy"
        badgeText="STRATEGY"
      />
      <div className="grid-2">
        {mockPoker.tips.map((t, i) => (
          <div key={i} className="be-card">
            <h5 className="fw-bold text-white mb-2">{t.title}</h5>
            <p className="text-muted small mb-0">{t.concept}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokerTips;
