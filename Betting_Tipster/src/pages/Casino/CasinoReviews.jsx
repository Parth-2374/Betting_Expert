import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockCasino } from '../../data/casino';

const CasinoReviews = () => {
  return (
    <div>
      <PageHeader
        title="Comprehensive Casino Reviews"
        subtitle="In-depth evaluation of software providers, security, customer service, and withdrawal speed"
        badgeText="REVIEWS"
      />
      <div className="d-flex flex-column gap-4">
        {mockCasino.featuredCasinos.map(c => (
          <div key={c.id} className="be-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold text-white mb-0">{c.name}</h4>
              <span className="badge bg-warning text-dark fw-bold fs-6"><i className="fa-solid fa-star me-1"></i>{c.rating} / 5</span>
            </div>
            <p className="text-muted small mb-3">Bonus: <strong className="text-success">{c.bonus}</strong></p>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-3 bg-dark rounded border border-secondary">
                  <strong className="text-success extra-small d-block mb-1">PROS</strong>
                  <ul className="list-unstyled extra-small text-muted mb-0">
                    {c.pros?.map((p, i) => <li key={i}><i className="fa-solid fa-check text-success me-1"></i>{p}</li>)}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-dark rounded border border-secondary">
                  <strong className="text-danger extra-small d-block mb-1">CONS</strong>
                  <ul className="list-unstyled extra-small text-muted mb-0">
                    {c.cons?.map((con, i) => <li key={i}><i className="fa-solid fa-xmark text-danger me-1"></i>{con}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoReviews;
