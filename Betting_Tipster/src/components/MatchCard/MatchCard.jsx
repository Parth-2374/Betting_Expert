import React from 'react';
import { useNavigate } from 'react-router-dom';

const MatchCard = ({ match }) => {
  const navigate = useNavigate();

  const handleMatchClick = () => {
    navigate(`/${match.sport || 'football'}/${match.id}`);
  };

  return (
    <div className="be-card cursor-pointer" onClick={handleMatchClick}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="badge-custom badge-blue">{match.competition}</span>
        <span className="small text-muted">{match.date} • {match.time}</span>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <div className="d-flex align-items-center gap-2">
          {match.homeLogo && <img src={match.homeLogo} alt={match.homeTeam} style={{ width: '28px', height: '28px' }} />}
          <span className="fw-bold text-white">{match.homeTeam}</span>
        </div>
        <span className="badge bg-secondary px-2">VS</span>
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold text-white">{match.awayTeam}</span>
          {match.awayLogo && <img src={match.awayLogo} alt={match.awayTeam} style={{ width: '28px', height: '28px' }} />}
        </div>
      </div>

      {match.odds && (
        <div className="row text-center g-2 pt-2 border-top border-secondary">
          <div className="col-4">
            <div className="p-2 bg-dark rounded">
              <div className="extra-small text-muted">1 (Home)</div>
              <div className="fw-bold text-success">{match.odds.home}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-2 bg-dark rounded">
              <div className="extra-small text-muted">{match.odds.draw ? 'X (Draw)' : 'Total'}</div>
              <div className="fw-bold text-white">{match.odds.draw || 'O/U'}</div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-2 bg-dark rounded">
              <div className="extra-small text-muted">2 (Away)</div>
              <div className="fw-bold text-success">{match.odds.away}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchCard;
