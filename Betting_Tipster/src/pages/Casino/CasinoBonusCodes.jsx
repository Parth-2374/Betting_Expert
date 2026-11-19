import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const CasinoBonusCodes = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const bonuses = [
    { casino: "Betway Casino", bonus: "100% Match up to £50 + 50 Free Spins", code: "BETWAY50", terms: "35x Wagering" },
    { casino: "Unibet Casino", bonus: "Deposit £10 Get £40 Bonus", code: "UNIBONUS", terms: "25x Wagering" }
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div>
      <PageHeader
        title="Casino Bonus & Promo Codes"
        subtitle="Exclusive deposit match offers and free spins promo codes"
        badgeText="PROMO CODES"
      />
      <div className="be-table-container">
        <table className="be-table">
          <thead>
            <tr>
              <th>Casino</th>
              <th>Bonus</th>
              <th>Code</th>
              <th>Terms</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bonuses.map((b, i) => (
              <tr key={i}>
                <td className="fw-bold text-white">{b.casino}</td>
                <td className="text-success fw-bold">{b.bonus}</td>
                <td><span className="badge bg-dark border border-secondary text-warning">{b.code}</span></td>
                <td><small className="text-muted">{b.terms}</small></td>
                <td>
                  <button className="btn btn-sm btn-outline-success" onClick={() => handleCopy(b.code)}>
                    {copiedCode === b.code ? 'Copied!' : 'Copy Code'}
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

export default CasinoBonusCodes;
