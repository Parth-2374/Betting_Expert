import React from 'react';
import { useNavigate } from 'react-router-dom';

const SportCard = ({ sport }) => {
  const navigate = useNavigate();

  return (
    <div
      className="sport-card cursor-pointer"
      onClick={() => navigate(`/${sport.id}`)}
      style={{
        '--sport-color': sport.color || '#20d85a',
      }}
    >
      {/* LEFT SIDE */}
      <div className="sport-card-left">

        <div className="sport-icon">
          <i className={`fa-solid ${sport.icon}`}></i>
        </div>

        <div className="sport-info">
          <h5>{sport.name}</h5>

          <span>
            {sport.tipsCount} Active Tips
          </span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="sport-card-right">

        <span className="sport-matches">
          <strong>{sport.activeMatches}</strong>
          <small>Matches</small>
        </span>

        <div className="sport-explore">
          Explore
          <i className="fa-solid fa-arrow-right"></i>
        </div>

      </div>

    </div>
  );
};

export default SportCard;