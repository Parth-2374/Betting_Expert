import React from 'react';

const TestimonialCard = ({ name, avatar, role, rating = 5, comment }) => {
  return (
    <div className="be-card h-100">
      <div className="d-flex align-items-center gap-1 text-warning mb-2" style={{ fontSize: '12px' }}>
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="fa-solid fa-star"></i>
        ))}
      </div>
      <p className="small text-muted fst-italic mb-3">"{comment}"</p>
      <div className="d-flex align-items-center gap-2 pt-2 border-top border-secondary">
        <img src={avatar} alt={name} className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
        <div>
          <div className="fw-bold text-white small">{name}</div>
          <div className="extra-small text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
