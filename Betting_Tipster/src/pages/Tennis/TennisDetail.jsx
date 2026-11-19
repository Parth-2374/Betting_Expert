import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockMatches } from '../../data/matches';

const TennisDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = mockMatches.find(m => m.id === id) || mockMatches[2];

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Tennis
      </button>

      <PageHeader
        title={`${match.homeTeam} vs ${match.awayTeam}`}
        subtitle={`${match.competition} • ${match.venue} • ${match.date}`}
        badgeText="TENNIS MATCHUP"
      />

      <div className="be-card mb-4 text-center p-4">
        <div className="d-flex justify-content-around align-items-center mb-4">
          <div>
            <h3 className="fw-bold text-white mb-1">{match.homeTeam}</h3>
            <span className="badge bg-success">Player 1</span>
          </div>
          <div className="h2 text-muted fw-bold">VS</div>
          <div>
            <h3 className="fw-bold text-white mb-1">{match.awayTeam}</h3>
            <span className="badge bg-info text-dark">Player 2</span>
          </div>
        </div>

        <div className="row text-center g-3 bg-dark p-3 rounded border border-secondary">
          <div className="col-6">
            <div className="extra-small text-muted">{match.homeTeam} Win Odds</div>
            <div className="fw-extrabold text-success fs-4">{match.odds?.home}</div>
          </div>
          <div className="col-6">
            <div className="extra-small text-muted">{match.awayTeam} Win Odds</div>
            <div className="fw-extrabold text-success fs-4">{match.odds?.away}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TennisDetail;
