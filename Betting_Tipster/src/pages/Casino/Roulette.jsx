import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockCasino } from '../../data/casino';

const Roulette = () => {
  return (
    <div>
      <PageHeader
        title="Roulette Guides & Betting Strategies"
        subtitle="European vs American tables, Martingale strategy, and house edge calculations"
        badgeText="ROULETTE"
      />
      <div className="grid-2">
        {mockCasino.rouletteGuides.map((rg, i) => (
          <div key={i} className="be-card">
            <h5 className="fw-bold text-white mb-2">{rg.title}</h5>
            <div className="badge bg-secondary mb-3">{rg.odds}</div>
            <p className="text-muted small mb-0"><i className="fa-solid fa-lightbulb text-warning me-2"></i><strong>Tip:</strong> {rg.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roulette;
