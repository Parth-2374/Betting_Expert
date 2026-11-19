import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockCasino } from '../../data/casino';

const HighRollers = () => {
  return (
    <div>
      <PageHeader
        title="High Roller & VIP Casinos"
        subtitle="Exclusive VIP Salon Prive tables, unlimited withdrawal caps, and personal account managers"
        badgeText="VIP CASINO"
      />
      <div className="grid-2">
        {mockCasino.highRollers.map((hr, idx) => (
          <div key={idx} className="be-card border-gold" style={{ borderLeft: '4px solid #F1C40F' }}>
            <span className="badge-custom badge-gold mb-2">VIP PLATINUM</span>
            <h4 className="fw-bold text-white mb-2">{hr.title}</h4>
            <p className="text-muted small mb-3">{hr.perk}</p>
            <div className="extra-small text-warning fw-bold">Requirements: {hr.minStake || hr.minDeposit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighRollers;
