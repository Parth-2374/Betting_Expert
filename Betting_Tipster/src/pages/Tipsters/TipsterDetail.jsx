import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import StatsCard from '../../components/StatsCard/StatsCard';
import TipTable from '../../components/TipTable/TipTable';
import { mockTipsters } from '../../data/tipsters';
import { mockTips } from '../../data/tips';
import { useAuth } from '../../context/AuthContext';

const TipsterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, toggleFollowTipster } = useAuth();

  const tipster = mockTipsters.find(t => t.id === id) || mockTipsters[0];
  const tipsterTips = mockTips.filter(t => t.tipsterId === tipster.id || t.tipsterName === tipster.name);
  const isFollowed = user?.followedTipsters?.includes(tipster.id);

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Tipsters
      </button>

      {/* Hero Banner */}
      <div className="be-card mb-4 p-4 border-success">
        <div className="row align-items-center g-4">
          <div className="col-md-3 text-center">
            <img src={tipster.avatar} alt={tipster.name} className="rounded-circle border border-3 border-success mb-2" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <div className="badge bg-success text-dark fw-bold px-2 py-1">Rank #{tipster.rank || 1}</div>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge-custom badge-green">{tipster.type}</span>
              <h2 className="fw-bold text-white mb-0">{tipster.name}</h2>
            </div>
            <p className="small text-muted mb-2"><i className="fa-solid fa-tag me-1 text-success"></i>{tipster.specialty}</p>
            <p className="small text-muted mb-0">{tipster.bio}</p>
          </div>

          <div className="col-md-3 text-center">
            <div className="h4 text-white fw-bold mb-1">{tipster.followers}</div>
            <div className="extra-small text-muted mb-3">Community Followers</div>
            <button
              className={`btn w-100 fw-bold ${isFollowed ? 'btn-outline-secondary' : 'btn-success text-dark'}`}
              onClick={() => toggleFollowTipster(tipster.id)}
            >
              {isFollowed ? 'Following ✓' : '+ Follow Tipster'}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid-4 mb-4">
        <StatsCard label="Net Profit" value={tipster.profit} subtext="Lifetime units won" icon="fa-sack-dollar" color="success" />
        <StatsCard label="Yield %" value={tipster.yieldVal} subtext="Return on investment" icon="fa-chart-line" color="success" />
        <StatsCard label="Win Rate" value={tipster.winRate} subtext={`${tipster.winningRecord?.won || 140} W / ${tipster.winningRecord?.lost || 50} L`} icon="fa-bullseye" color="info" />
        <StatsCard label="Published Tips" value={tipster.tipsCount} subtext="Audited predictions" icon="fa-clipboard-check" color="warning" />
      </div>

      {/* Monthly Profit Performance */}
      <div className="be-card mb-4">
        <h5 className="fw-bold text-white mb-3"><i className="fa-solid fa-chart-column text-success me-2"></i>Monthly Profit Trend (Units)</h5>
        <div className="d-flex align-items-end justify-content-between gap-2 pt-3" style={{ height: '140px' }}>
          {tipster.monthlyProfit?.map((p, idx) => (
            <div key={idx} className="text-center flex-grow-1">
              <div className="small fw-bold text-success mb-1">{p}</div>
              <div className="bg-success rounded-top mx-auto" style={{ width: '36px', height: `${40 + idx * 12}px` }}></div>
              <div className="extra-small text-muted mt-2">M{idx + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tipster Predictions Table */}
      <div className="mb-4">
        <h5 className="fw-bold text-white mb-3">Recent Tips by {tipster.name}</h5>
        <TipTable tips={tipsterTips.length > 0 ? tipsterTips : mockTips.slice(0, 2)} />
      </div>
    </div>
  );
};

export default TipsterDetail;
