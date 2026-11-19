import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { mockPoker } from '../../data/poker';

const PokerHome = () => {
  return (
    <div>
      <PageHeader
        title="Online Poker Hub"
        subtitle="Compare top online poker rooms, rakeback deals, tournament schedules & strategy guides"
        badgeText="POKER HUB"
      />

      <div className="d-flex flex-wrap gap-2 mb-4 p-2 bg-dark rounded border border-secondary">
        <Link to="/poker/guide" className="btn btn-sm btn-outline-success">Poker Guide</Link>
        <Link to="/poker/tips" className="btn btn-sm btn-outline-success">Strategy Tips</Link>
        <Link to="/poker/rooms" className="btn btn-sm btn-outline-success">Poker Rooms</Link>
        <Link to="/poker/bonus-codes" className="btn btn-sm btn-outline-success">Poker Bonus Codes</Link>
      </div>

      <div className="mb-4">
        <SectionHeader title="Top Online Poker Rooms" icon="fa-diamond" />
        <div className="grid-2">
          {mockPoker.rooms.map(room => (
            <div key={room.id} className="be-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src={room.logo} alt={room.name} style={{ height: '36px', objectFit: 'contain' }} />
                <span className="badge bg-warning text-dark fw-bold px-2 py-1"><i className="fa-solid fa-star me-1"></i>{room.rating}</span>
              </div>
              <h5 className="fw-bold text-white mb-2">{room.name}</h5>
              <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3">
                <small className="text-success fw-bold extra-small d-block">WELCOME OFFER</small>
                <strong className="text-success fs-5">{room.bonus}</strong>
              </div>
              <div className="extra-small text-muted mb-3">
                Rakeback: <strong className="text-white">{room.rakeback}</strong> | Traffic: <strong className="text-white">{room.traffic}</strong>
              </div>
              <Link to="/poker/rooms" className="btn btn-success text-dark fw-bold w-100 text-center">
                View Poker Room Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokerHome;
