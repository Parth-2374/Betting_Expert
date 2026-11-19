import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockBingo } from '../../data/bingo';

const BingoStrategy = () => {
  return (
    <div>
      <PageHeader
        title="Bingo Probability & Bankroll Strategies"
        subtitle="Granville's Theory, Tippett Strategy, and optimal room selection"
        badgeText="STRATEGY"
      />
      <div className="grid-2">
        {mockBingo.strategies.map((s, i) => (
          <div key={i} className="be-card">
            <h5 className="fw-bold text-white mb-2">{s.title}</h5>
            <p className="text-muted small mb-0">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoStrategy;
