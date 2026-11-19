import React from 'react';
import { useNavigate } from 'react-router-dom';

const TipTable = ({ tips = [] }) => {
  const navigate = useNavigate();

  const handleRowClick = (tipId) => {
    navigate(`/tips/${tipId}`);
  };

  if (!tips.length) {
    return (
      <div className="p-4 text-center text-muted border border-secondary rounded">
        No active tips match your criteria.
      </div>
    );
  }

  return (
    <div className="be-table-container ">
      <table className="be-table">
        <thead>
          <tr>
            <th>Match</th>
            <th>Tipster</th>
            <th>Selection</th>
            <th>Odds</th>
            <th>Stake</th>
            <th>Bookmaker</th>
          </tr>
        </thead>
        <tbody>
          {tips.map((tip) => (
            <tr key={tip.id} onClick={() => handleRowClick(tip.id)}>
              <td>
                <div className="fw-bold text-white">{tip.match}</div>
                <small className="text-muted" style={{ fontSize: '11px' }}>
                  {tip.competition} • {tip.date} {tip.time}
                </small>
              </td>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={tip.tipsterAvatar}
                    alt={tip.tipsterName}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div className="fw-bold text-white small">{tip.tipsterName}</div>
                    <small className="text-success extra-small">{tip.tipsterYield} Yield</small>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge bg-secondary text-white fw-medium px-2 py-1">
                  {tip.selection}
                </span>
              </td>
              <td>
                <span className="fw-extrabold text-success fs-6">{tip.odds.toFixed(2)}</span>
              </td>
              <td>
                <span className="text-muted fw-bold">{tip.stake}/10</span>
              </td>
              <td>
                <span className="badge bg-dark border border-secondary text-white">
                  {tip.bookmaker}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TipTable;
