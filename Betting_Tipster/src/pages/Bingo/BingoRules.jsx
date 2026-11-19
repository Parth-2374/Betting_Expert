import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockBingo } from '../../data/bingo';

const BingoRules = () => {
  return (
    <div>
      <PageHeader
        title="Official Bingo Rules & Game Variations"
        subtitle="90-ball line rules, 75-ball pattern bingo, and speed bingo variations"
        badgeText="RULES"
      />
      <div className="grid-2">
        {mockBingo.rules.map((r, i) => (
          <div key={i} className="be-card">
            <h5 className="fw-bold text-white mb-2">{r.type}</h5>
            <p className="text-muted small mb-0">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoRules;
