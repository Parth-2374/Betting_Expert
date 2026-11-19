import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockBonusCodes } from '../../data/bonusCodes';

const BonusCodes = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      <PageHeader
        title="Exclusive Betting Bonus & Promo Codes"
        subtitle="Claim free bets, deposit match offers, and promo codes from top sportsbooks"
        badgeText="EXCLUSIVE OFFERS"
      />

      <div className="be-table-container mb-4">
        <table className="be-table">
          <thead>
            <tr>
              <th>Bookmaker</th>
              <th>Bonus Offer</th>
              <th>Sign-Up Details</th>
              <th>Promo Code</th>
              <th>Conditions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockBonusCodes.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.logo} alt={item.bookmaker} style={{ height: '28px', objectFit: 'contain' }} />
                  <div className="fw-bold text-white mt-1">{item.bookmaker}</div>
                </td>
                <td>
                  <span className="fw-extrabold text-success fs-6">{item.bonus}</span>
                </td>
                <td>
                  <span className="small text-muted">{item.signupOffer}</span>
                </td>
                <td>
                  <span className="badge bg-dark border border-secondary text-warning fw-mono fs-6 px-3 py-2">
                    {item.code}
                  </span>
                </td>
                <td>
                  <small className="extra-small text-muted">{item.conditions}</small>
                </td>
                <td>
                  <div className="d-flex flex-column gap-2">
                    <button
                      type="button"
                      className={`btn btn-sm ${copiedId === item.id ? 'btn-success text-dark fw-bold' : 'btn-outline-success'}`}
                      onClick={() => handleCopy(item.id, item.code)}
                    >
                      <i className={`fa-solid ${copiedId === item.id ? 'fa-check' : 'fa-copy'} me-1`}></i>
                      {copiedId === item.id ? 'Copied!' : 'Copy Code'}
                    </button>

                    <a
                      href={item.claimUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-success text-dark fw-bold text-center"
                    >
                      Claim Bonus
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BonusCodes;
