import React, { useState } from 'react';

const CompetitionCard = ({ competition }) => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(prev => !prev);
  };

  return (
    <div className="be-card h-100 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge-custom badge-gold fs-6">{competition.prizePool} Prize Pool</span>
          <span className="extra-small text-muted"><i className="fa-solid fa-clock me-1"></i>{competition.daysLeft} days left</span>
        </div>

        <h4 className="fw-bold text-white mb-2">{competition.title}</h4>
        <p className="small text-muted mb-3">{competition.description}</p>

        <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3">
          <div className="extra-small  fw-bold mb-2 fw-bold text-success">TOP LEADERBOARD</div>
          {competition.leaderboard && competition.leaderboard.slice(0, 3).map((item) => (
            <div key={item.rank} className="d-flex justify-content-between align-items-center extra-small mb-1 text-success fw-bold">
              <span>#{item.rank} <strong className="text-success ms-1 fw-bold">{item.name}</strong></span>
              <span className="text-success fw-bold">{item.profit} ({item.yieldVal})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-top border-secondary d-flex align-items-center justify-content-between">
        <div className="extra-small text-muted">
          <i className="fa-solid fa-users me-1"></i>{competition.participants} Tipsters
        </div>

        <button
          type="button"
          className={`btn btn-sm ${joined ? 'btn-outline-success text-success' : 'btn-success text-dark'} fw-bold px-3`}
          onClick={handleJoin}
        >
          {joined ? 'Joined ✓' : 'Join Competition'}
        </button>
      </div>
    </div>
  );
};

export default CompetitionCard;
