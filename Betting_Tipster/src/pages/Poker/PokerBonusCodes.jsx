import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockPoker } from '../../data/poker';

const PokerBonusCodes = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div>
      <PageHeader
        title="Poker Room Promo Codes"
        subtitle="Exclusive bonus codes for tournament tickets and cash match bonuses"
        badgeText="POKER CODES"
      />
      <div className="be-table-container">
        <table className="be-table">
          <thead>
            <tr>
              <th>Room</th>
              <th>Bonus Offer</th>
              <th>Promo Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockPoker.bonusCodes.map((bc, i) => (
              <tr key={i}>
                <td className="fw-bold text-white">{bc.room}</td>
                <td className="text-success fw-bold">{bc.offer}</td>
                <td><span className="badge bg-dark border border-secondary text-warning">{bc.code}</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-success" onClick={() => handleCopy(bc.code)}>
                    {copiedCode === bc.code ? 'Copied!' : 'Copy Code'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokerBonusCodes;
