import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import TipCard from '../../components/TipCard/TipCard';
import { mockTips } from '../../data/tips';

const HotTips = () => {
  const hotTips = mockTips.filter(t => t.isHot);

  return (
    <div>
      <PageHeader
        title="Hot Predictions & Value Tips"
        subtitle="High-confidence predictions with 85%+ algorithm rating"
        badgeText="HIGH VALUE"
      />

      <div className="grid-2">
        {hotTips.map(tip => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default HotTips;
