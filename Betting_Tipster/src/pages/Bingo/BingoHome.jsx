import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { mockBingo } from '../../data/bingo';

const BingoHome = () => {
  return (
    <div>
      <PageHeader
        title="Online Bingo Halls & Bonuses"
        subtitle="Compare 90-ball and 75-ball bingo rooms, jackpot schedules, and chat games"
        badgeText="BINGO HUB"
      />

      <div className="d-flex flex-wrap gap-2 mb-4 p-2 bg-dark rounded border border-secondary">
        <Link to="/bingo/getting-started" className="btn btn-sm btn-outline-success">Getting Started</Link>
        <Link to="/bingo/rules" className="btn btn-sm btn-outline-success">Bingo Rules</Link>
        <Link to="/bingo/strategy" className="btn btn-sm btn-outline-success">Strategy</Link>
        <Link to="/bingo/halls" className="btn btn-sm btn-outline-success">Bingo Halls</Link>
        <Link to="/bingo/faq" className="btn btn-sm btn-outline-success">Bingo FAQ</Link>
      </div>

      <div className="mb-4">
        <SectionHeader title="Featured Bingo Halls" icon="fa-circle-dot" />
        <div className="grid-2">
          {mockBingo.halls.map(hall => (
            <div key={hall.id} className="be-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src={hall.logo} alt={hall.name} style={{ height: '36px', objectFit: 'contain' }} />
                <span className="badge bg-warning text-dark fw-bold px-2 py-1"><i className="fa-solid fa-star me-1"></i>{hall.rating}</span>
              </div>
              <h5 className="fw-bold text-white mb-2">{hall.name}</h5>
              <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3">
                <small className="text-success fw-bold extra-small d-block">WELCOME BONUS</small>
                <strong className="text-success fs-5">{hall.bonus}</strong>
              </div>
              <div className="extra-small text-muted mb-3">
                Tickets: <strong className="text-white">{hall.ticketPrices}</strong> | Jackpot: <strong className="text-white">{hall.jackpot}</strong>
              </div>
              <Link to="/bingo/halls" className="btn btn-success text-dark fw-bold w-100 text-center">
                Explore Bingo Room
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BingoHome;
