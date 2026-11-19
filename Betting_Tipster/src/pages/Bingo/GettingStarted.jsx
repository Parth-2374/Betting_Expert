import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const GettingStarted = () => {
  return (
    <div>
      <PageHeader
        title="Getting Started with Online Bingo"
        subtitle="Step-by-step beginner guide to purchasing tickets, auto-daubing, and chat room games"
        badgeText="BEGINNER GUIDE"
      />
      <div className="be-card p-4 text-muted leading-relaxed">
        <h5 className="fw-bold text-white mb-2">Step 1: Choose Your Game Type</h5>
        <p className="mb-4">Select between 90-ball (UK favorite) or 75-ball pattern bingo depending on your preference.</p>

        <h5 className="fw-bold text-white mb-2">Step 2: Ticket Purchase</h5>
        <p className="mb-4">Tickets can cost anywhere from 1p to £1. Buying multiple tickets increases winning probability per round.</p>

        <h5 className="fw-bold text-white mb-2">Step 3: Auto-Daubing</h5>
        <p className="mb-0">Modern online bingo software automatically marks numbers on your card as they are called, so you never miss a win!</p>
      </div>
    </div>
  );
};

export default GettingStarted;
