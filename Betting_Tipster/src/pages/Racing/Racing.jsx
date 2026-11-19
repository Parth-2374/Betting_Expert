import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import TipTable from '../../components/TipTable/TipTable';
import { mockTips } from '../../data/tips';

const Racing = () => {
  const racingTips = mockTips.filter(t => t.sport === 'racing');

  return (
    <div>
      <PageHeader
        title="Horse Racing Tips & Cards"
        subtitle="Ascot, Cheltenham, Grand National track guides & each-way predictions"
        badgeText="HORSE RACING"
      />

      <div className="mb-4">
        <SectionHeader title="Today's Race Cards" icon="fa-horse" />
        <div className="grid-3 mb-4">
          <div className="be-card border-purple" style={{ borderLeft: '4px solid #9b59b6' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-purple text-white">ASCOT</span>
              <span className="small text-muted">15:30</span>
            </div>
            <h5 className="fw-bold text-white mb-1">Ascot Gold Cup (Group 1)</h5>
            <small className="text-muted">Distance: 2m 4f • Going: Good to Soft</small>
          </div>

          <div className="be-card border-purple" style={{ borderLeft: '4px solid #9b59b6' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-purple text-white">CHELTENHAM</span>
              <span className="small text-muted">16:15</span>
            </div>
            <h5 className="fw-bold text-white mb-1">Champion Hurdle</h5>
            <small className="text-muted">Distance: 2m 0f • Going: Soft</small>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <SectionHeader title="Expert Racing Selections" icon="fa-clipboard-list" />
        <TipTable tips={racingTips} />
      </div>
    </div>
  );
};

export default Racing;
