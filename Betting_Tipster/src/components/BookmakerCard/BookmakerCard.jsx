import React, { useState } from 'react';

const BookmakerCard = ({ bookmaker }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (bookmaker.code) {
      navigator.clipboard.writeText(bookmaker.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="be-card h-100 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img src={bookmaker.logo} alt={bookmaker.name} style={{ height: '36px', maxWidth: '140px', objectFit: 'contain' }} />
          <div className="d-flex align-items-center gap-1 bg-dark px-2 py-1 rounded border border-secondary">
            <i className="fa-solid fa-star text-warning small"></i>
            <span className="fw-bold text-white small">{bookmaker.rating}</span>
          </div>
        </div>

        <h5 className="fw-bold text-white mb-2">{bookmaker.name}</h5>

        <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3">
          <div className="extra-small text-success fw-bold mb-1">WELCOME BONUS</div>
          <div className="fw-extrabold text-success small fw-bold">{bookmaker.bonus}</div>
          {bookmaker.code && (
            <div className="mt-2 d-flex justify-content-between align-items-center bg-dark p-2 rounded">
              <span className="extra-small text-muted">CODE: <strong className="text-white">{bookmaker.code}</strong></span>
              <button
                type="button"
                className="btn btn-sm btn-outline-success py-0 px-2 extra-small"
                onClick={handleCopyCode}
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          )}
        </div>

        {bookmaker.pros && bookmaker.pros.length > 0 && (
          <div className="mb-3">
            <div className="extra-small fw-bold text-muted mb-1">KEY HIGHLIGHTS</div>
            <ul className="list-unstyled extra-small mb-0">
              {bookmaker.pros.map((pro, idx) => (
                <li key={idx} className="mb-1 text-muted d-flex align-items-start gap-1">
                  <i className="fa-solid fa-check text-success mt-1"></i>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-3 border-top border-secondary d-flex gap-2">
        <a
          href={bookmaker.visitUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="btn btn-success text-dark fw-bold w-100 text-center"
        >
          Claim Bonus <i className="fa-solid fa-arrow-up-right-from-square ms-1" style={{ fontSize: '11px' }}></i>
        </a>
      </div>
    </div>
  );
};

export default BookmakerCard;
