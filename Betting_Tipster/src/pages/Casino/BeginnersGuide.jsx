import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const BeginnersGuide = () => {
  return (
    <div>
      <PageHeader
        title="Casino Beginner's Guide"
        subtitle="Step-by-step introduction to online casino games, wagering requirements, and bankroll safety"
        badgeText="CASINO GUIDE"
      />
      <div className="be-card p-4 text-muted leading-relaxed">
        <h5 className="fw-bold text-white mb-3">1. Choosing a Licensed Casino</h5>
        <p className="mb-4">Always verify that an online casino holds valid licensing from reputable authorities like the UKGC or MGA.</p>

        <h5 className="fw-bold text-white mb-3">2. Understanding Wagering Requirements</h5>
        <p className="mb-4">Wagering requirements (e.g., 35x) specify how many times bonus money must be played through before withdrawing winnings.</p>

        <h5 className="fw-bold text-white mb-3">3. Managing Your Bankroll</h5>
        <p className="mb-0">Set strict daily or weekly deposit limits and never chase losses.</p>
      </div>
    </div>
  );
};

export default BeginnersGuide;
