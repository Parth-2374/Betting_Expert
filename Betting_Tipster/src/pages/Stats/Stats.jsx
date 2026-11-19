import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import StatsCard from '../../components/StatsCard/StatsCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { mockStats } from '../../data/stats';

const Stats = () => {
  const [activeTab, setActiveTab] = useState('allSports');

  const currentStats = mockStats[activeTab] || mockStats.allSports;

  return (
    <div>
      <PageHeader
        title="Sports Statistics & Analytics"
        subtitle="Comprehensive platform yield performance, win rates, and league tables"
        badgeText="ANALYTICS DASHBOARD"
      />

      {/* Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4 p-2 bg-dark rounded border border-secondary">
        <button
          className={`btn btn-sm ${activeTab === 'allSports' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setActiveTab('allSports')}
        >
          All Sports
        </button>
        <button
          className={`btn btn-sm ${activeTab === 'football' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setActiveTab('football')}
        >
          Football
        </button>
        <button
          className={`btn btn-sm ${activeTab === 'tennis' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setActiveTab('tennis')}
        >
          Tennis
        </button>
        <button
          className={`btn btn-sm ${activeTab === 'basketball' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setActiveTab('basketball')}
        >
          Basketball
        </button>
        <button
          className={`btn btn-sm ${activeTab === 'racing' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setActiveTab('racing')}
        >
          Racing
        </button>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid-4 mb-4">
        <StatsCard label="Net Profit" value={currentStats.profit} subtext="Total verified units" icon="fa-sack-dollar" color="success" />
        <StatsCard label="Yield Percentage" value={currentStats.yieldVal} subtext="Return on investment" icon="fa-chart-line" color="success" />
        <StatsCard label="Win Rate" value={currentStats.winRate} subtext={`${currentStats.wins} W / ${currentStats.losses} L`} icon="fa-bullseye" color="info" />
        <StatsCard label="Total Tips" value={currentStats.totalTips} subtext="Published predictions" icon="fa-clipboard-check" color="warning" />
      </div>

      {/* League Table */}
      <div className="mb-4">
        <SectionHeader title="Premier League Standings" icon="fa-list-ol" />
        <div className="be-table-container">
          <table className="be-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              {mockStats.leagueStandings.map(t => (
                <tr key={t.rank}>
                  <td className="fw-bold text-success">#{t.rank}</td>
                  <td className="fw-bold text-white">{t.team}</td>
                  <td>{t.played}</td>
                  <td>{t.won}</td>
                  <td>{t.drawn}</td>
                  <td>{t.lost}</td>
                  <td>{t.gf}</td>
                  <td>{t.ga}</td>
                  <td className="text-success fw-bold">{t.gd}</td>
                  <td className="fw-extrabold text-white">{t.points}</td>
                  <td>
                    <div className="d-flex gap-1">
                      {t.form.map((f, i) => (
                        <span key={i} className={`badge ${f === 'W' ? 'bg-success' : f === 'D' ? 'bg-warning text-dark' : 'bg-danger'}`}>{f}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stats;
