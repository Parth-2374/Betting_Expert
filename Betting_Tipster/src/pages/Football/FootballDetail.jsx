import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockMatches } from '../../data/matches';

const FootballDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = mockMatches.find(m => m.id === id) || mockMatches[0];

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Football
      </button>

      <PageHeader
        title={`${match.homeTeam} vs ${match.awayTeam}`}
        subtitle={`${match.competition} • ${match.venue} • ${match.date} ${match.time}`}
        badgeText="FOOTBALL FIXTURE"
      />

      <div className="be-card mb-4 text-center p-4">
        <div className="d-flex justify-content-around align-items-center mb-4">
          <div>
            <img src={match.homeLogo} alt={match.homeTeam} style={{ width: '64px', height: '64px' }} className="mb-2" />
            <h3 className="fw-bold text-white mb-0">{match.homeTeam}</h3>
            <span className="small text-success fw-bold">Home</span>
          </div>

          <div className="h1 text-muted fw-bold">VS</div>

          <div>
            <img src={match.awayLogo} alt={match.awayTeam} style={{ width: '64px', height: '64px' }} className="mb-2" />
            <h3 className="fw-bold text-white mb-0">{match.awayTeam}</h3>
            <span className="small text-muted fw-bold">Away</span>
          </div>
        </div>

        <div className="row text-center g-3 bg-dark p-3 rounded border border-secondary">
          <div className="col-4">
            <div className="extra-small text-muted">1 (Home Win)</div>
            <div className="fw-extrabold text-success fs-5">{match.odds?.home}</div>
          </div>
          <div className="col-4">
            <div className="extra-small text-muted">X (Draw)</div>
            <div className="fw-bold text-white fs-5">{match.odds?.draw}</div>
          </div>
          <div className="col-4">
            <div className="extra-small text-muted">2 (Away Win)</div>
            <div className="fw-extrabold text-success fs-5">{match.odds?.away}</div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="be-card">
            <h5 className="fw-bold text-white mb-3"><i className="fa-solid fa-chart-line text-success me-2"></i>Recent Form</h5>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-white fw-bold">{match.homeTeam}</span>
              <div className="d-flex gap-1">
                {match.form?.home?.map((f, i) => (
                  <span key={i} className={`badge ${f === 'W' ? 'bg-success' : f === 'D' ? 'bg-warning text-dark' : 'bg-danger'}`}>{f}</span>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-white fw-bold">{match.awayTeam}</span>
              <div className="d-flex gap-1">
                {match.form?.away?.map((f, i) => (
                  <span key={i} className={`badge ${f === 'W' ? 'bg-success' : f === 'D' ? 'bg-warning text-dark' : 'bg-danger'}`}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="be-card">
            <h5 className="fw-bold text-white mb-3"><i className="fa-solid fa-lightbulb text-success me-2"></i>Expert Predictions</h5>
            {match.predictions?.map((p, i) => (
              <div key={i} className="p-3 bg-dark rounded border border-secondary mb-2 d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold text-white">{p.pick}</div>
                  <small className="text-muted">By {p.tipster}</small>
                </div>
                <span className="fw-bold text-success fs-5">{p.odds}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballDetail;
