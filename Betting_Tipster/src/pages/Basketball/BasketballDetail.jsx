import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockMatches } from '../../data/matches';

const BasketballDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = mockMatches.find(m => m.id === id) || mockMatches[3];

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Basketball
      </button>

      <PageHeader
        title={`${match.homeTeam} vs ${match.awayTeam}`}
        subtitle={`${match.competition} • ${match.venue}`}
        badgeText="BASKETBALL GAME"
      />

      <div className="be-card text-center p-4">
        <h3 className="fw-bold text-white mb-2">{match.homeTeam} vs {match.awayTeam}</h3>
        <p className="text-muted">Spread Odds: Home {match.odds?.home} | Away {match.odds?.away}</p>
      </div>
    </div>
  );
};

export default BasketballDetail;
