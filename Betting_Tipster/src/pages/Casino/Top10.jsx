import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockCasino } from '../../data/casino';

const Top10 = () => {
  return (
    <div>
      <PageHeader
        title="Top 10 Rated Online Casinos"
        subtitle="Audited and ranked by payout speed, game diversity, and user trust"
        badgeText="RANKINGS"
      />
      <div className="be-table-container">
        <table className="be-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Casino</th>
              <th>Rating</th>
              <th>Welcome Bonus</th>
              <th>Games</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockCasino.featuredCasinos.map((c, idx) => (
              <tr key={c.id}>
                <td className="fw-bold text-success">#{idx + 1}</td>
                <td className="fw-bold text-white">{c.name}</td>
                <td><i className="fa-solid fa-star text-warning me-1"></i>{c.rating}</td>
                <td className="text-success fw-bold">{c.bonus}</td>
                <td>{c.gamesCount}</td>
                <td><button className="btn btn-sm btn-success text-dark fw-bold">Visit Casino</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Top10;
