import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const PokerGuide = () => {
  return (
    <div>
      <PageHeader
        title="Texas Hold'em & Omaha Poker Guide"
        subtitle="Master hand rankings, position dynamics, and pot odds mathematics"
        badgeText="POKER GUIDE"
      />
      <div className="be-card p-4 text-muted leading-relaxed">
        <h5 className="fw-bold text-white mb-2">1. Understanding Position</h5>
        <p className="mb-4">Position is the single most important tactical advantage in poker. Acting last allows you to see how your opponents react before making your decision.</p>

        <h5 className="fw-bold text-white mb-2">2. Pot Odds & Equity</h5>
        <p className="mb-0">Compare the cost of calling a bet against the total size of the pot to calculate whether drawing to a straight or flush carries positive expected value (+EV).</p>
      </div>
    </div>
  );
};

export default PokerGuide;
