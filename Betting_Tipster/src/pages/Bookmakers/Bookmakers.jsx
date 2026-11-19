import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import BookmakerCard from '../../components/BookmakerCard/BookmakerCard';
import { mockBookmakers } from '../../data/bookmakers';

const Bookmakers = () => {
  return (
    <div>
      <PageHeader
        title="Best Sportsbook Reviews & Odds Comparison"
        subtitle="Compare verified online bookmakers, bonus offers, payout speeds, and betting markets"
        badgeText="BOOKMAKER DIRECTORY"
      />

      <div className="mb-5">
        <SectionHeader title="Top Recommended Bookmakers" icon="fa-building" />
        <div className="grid-2">
          {mockBookmakers.map(bookie => (
            <BookmakerCard key={bookie.id} bookmaker={bookie} />
          ))}
        </div>
      </div>

      <div className="be-card mb-4">
        <SectionHeader title="Bookmaker Features Comparison" icon="fa-table-list" />
        <div className="be-table-container">
          <table className="be-table">
            <thead>
              <tr>
                <th>Bookmaker</th>
                <th>Rating</th>
                <th>Welcome Bonus</th>
                <th>Key Features</th>
                <th>Best Odds Market</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockBookmakers.map(b => (
                <tr key={b.id}>
                  <td className="fw-bold text-white">{b.name}</td>
                  <td><i className="fa-solid fa-star text-warning me-1"></i>{b.rating}</td>
                  <td className="text-success fw-bold">{b.bonus}</td>
                  <td><small className="text-muted">{b.features?.join(', ')}</small></td>
                  <td><span className="badge bg-secondary">{b.bestOddsFor}</span></td>
                  <td>
                    <a href={b.visitUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-success text-dark fw-bold">
                      Claim Offer
                    </a>
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

export default Bookmakers;
