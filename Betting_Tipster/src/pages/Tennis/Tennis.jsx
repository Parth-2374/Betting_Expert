import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MatchCard from '../../components/MatchCard/MatchCard';
import TipTable from '../../components/TipTable/TipTable';
import { mockMatches } from '../../data/matches';
import { mockTips } from '../../data/tips';

const Tennis = () => {
  const tennisMatches = mockMatches.filter(m => m.sport === 'tennis');
  const tennisTips = mockTips.filter(t => t.sport === 'tennis');

  return (
    <div>
      <PageHeader
        title="Tennis Betting Tips & Tournaments"
        subtitle="ATP, WTA Grand Slams, Masters 1000 & match odds"
        badgeText="TENNIS HUB"
      />

      <div className="mb-4">
        <SectionHeader title="Tennis Featured Matchups" icon="fa-circle" />
        <div className="grid-2">
          {tennisMatches.map(m => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <SectionHeader title="Tennis Predictions" icon="fa-clipboard-list" />
        <TipTable tips={tennisTips} />
      </div>
    </div>
  );
};

export default Tennis;
