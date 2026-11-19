import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { mockStats } from '../../data/stats';

const FootballStatistics = () => {
  const topScorers = [
    { rank: 1, name: "Erling Haaland", team: "Man City", goals: 24, matches: 26 },
    { rank: 2, name: "Bukayo Saka", team: "Arsenal", goals: 18, matches: 27 },
    { rank: 3, name: "Cole Palmer", team: "Chelsea", goals: 16, matches: 25 },
    { rank: 4, name: "Mohamed Salah", team: "Liverpool", goals: 15, matches: 24 }
  ];

  return (
    <div>
      <PageHeader
        title="Football Analytics & Deep Stats"
        subtitle="Expected Goals (xG), League Tables, Top Scorers & Defensive Metrics"
        badgeText="ADVANCED STATS"
      />

      <div className="row g-4 mb-4">
        <div className="col-lg-8">
          <SectionHeader title="Premier League Table" icon="fa-table" />
          <div className="be-table-container">
            <table className="be-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Club</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GD</th>
                  <th>Pts</th>
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
                    <td className="text-success">{t.gd}</td>
                    <td className="fw-extrabold text-white">{t.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-4">
          <SectionHeader title="Golden Boot Leaders" icon="fa-futbol" />
          <div className="be-card">
            {topScorers.map(s => (
              <div key={s.rank} className="d-flex justify-content-between align-items-center p-2 border-bottom border-secondary last-border-0">
                <div>
                  <div className="fw-bold text-white">#{s.rank} {s.name}</div>
                  <small className="text-muted">{s.team} • {s.matches} apps</small>
                </div>
                <span className="badge bg-success text-dark fw-extrabold fs-6">{s.goals} Goals</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballStatistics;
