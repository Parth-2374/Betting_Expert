import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { mockCasino } from '../../data/casino';

const CasinoHome = () => {
  return (
    <div>
      <PageHeader
        title="Online Casino Hub"
        subtitle="Audited online casinos, high RTP slots, roulette guides, and VIP bonuses"
        badgeText="CASINO DIRECTORY"
      />

      {/* Sub-nav pills */}
      <div className="d-flex flex-wrap gap-2 mb-4 p-2 bg-dark rounded border border-secondary">
        <Link to="/casino/beginners-guide" className="btn btn-sm btn-outline-success">Beginner's Guide</Link>
        <Link to="/casino/top-10" className="btn btn-sm btn-outline-success">Top 10 Casinos</Link>
        <Link to="/casino/reviews" className="btn btn-sm btn-outline-success">Casino Reviews</Link>
        <Link to="/casino/bonus-codes" className="btn btn-sm btn-outline-success">Bonus Codes</Link>
        <Link to="/casino/high-rollers" className="btn btn-sm btn-outline-success">High Rollers VIP</Link>
        <Link to="/casino/slots" className="btn btn-sm btn-outline-success">Slots Hub</Link>
        <Link to="/casino/roulette" className="btn btn-sm btn-outline-success">Roulette Guide</Link>
      </div>

      {/* Featured Casinos */}
      <div className="mb-4">
        <SectionHeader title="Featured Licensed Casinos" icon="fa-dice" />
        <div className="grid-2">
          {mockCasino.featuredCasinos.map(cas => (
            <div key={cas.id} className="be-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src={cas.logo} alt={cas.name} style={{ height: '36px', objectFit: 'contain' }} />
                <span className="badge bg-warning text-dark fw-bold px-2 py-1"><i className="fa-solid fa-star me-1"></i>{cas.rating}</span>
              </div>
              <h5 className="fw-bold text-white mb-2">{cas.name}</h5>
              <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3">
                <small className="text-success fw-bold d-block extra-small ">WELCOME BONUS</small>
                <strong className="text-success fs-5">{cas.bonus}</strong>
              </div>
              <div className="extra-small text-muted mb-3">
                Payout Speed: <strong className="text-white">{cas.payoutSpeed}</strong> | Min Deposit: <strong className="text-white">{cas.minDeposit}</strong>
              </div>
              <Link to="/casino/reviews" className="btn btn-success text-dark fw-bold w-100 text-center">
                Read Casino Review
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Slots preview */}
      <div className="mb-4">
        <SectionHeader title="Popular Slots (High RTP)" icon="fa-gamepad" actionText="View All Slots" onAction={() => {}} />
        <div className="grid-4">
          {mockCasino.slots.map(s => (
            <div key={s.id} className="be-card text-center">
              <img src={s.image} alt={s.title} className="w-100 rounded mb-2" style={{ height: '120px', objectFit: 'cover' }} />
              <h6 className="fw-bold text-white mb-1">{s.title}</h6>
              <small className="text-muted d-block extra-small mb-1">{s.provider}</small>
              <span className="badge bg-success text-dark fw-bold extra-small">{s.rtp} RTP</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoHome;
