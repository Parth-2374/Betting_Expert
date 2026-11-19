import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockPoker } from '../../data/poker';

const PokerRooms = () => {
  return (
    <div>
      <PageHeader
        title="Audited Online Poker Rooms"
        subtitle="Compare traffic volume, rakeback systems, and soft player pools"
        badgeText="ROOMS"
      />
      <div className="be-table-container">
        <table className="be-table">
          <thead>
            <tr>
              <th>Room</th>
              <th>Rating</th>
              <th>Welcome Bonus</th>
              <th>Rakeback</th>
              <th>Key Tournaments</th>
            </tr>
          </thead>
          <tbody>
            {mockPoker.rooms.map(r => (
              <tr key={r.id}>
                <td className="fw-bold text-white">{r.name}</td>
                <td><i className="fa-solid fa-star text-warning me-1"></i>{r.rating}</td>
                <td className="text-success fw-bold">{r.bonus}</td>
                <td>{r.rakeback}</td>
                <td><small className="text-muted">{r.tournaments}</small></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokerRooms;
