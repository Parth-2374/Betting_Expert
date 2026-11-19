import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MatchCard from '../../components/MatchCard/MatchCard';
import TipTable from '../../components/TipTable/TipTable';
import { mockMatches } from '../../data/matches';
import { mockTips } from '../../data/tips';

const Basketball = () => {
  const basketballMatches = mockMatches.filter(m => m.sport === 'basketball');
  const basketballTips = mockTips.filter(t => t.sport === 'basketball');

  return (
    <div>
      <PageHeader
        title="Basketball Betting Tips & Spreads"
        subtitle="NBA, EuroLeague, FIBA spreads, totals, and player props"
        badgeText="BASKETBALL HUB"
      />

      <div className="mb-4">
        <SectionHeader title="NBA & EuroLeague Matches" icon="fa-basketball" />
        <div className="grid-2">
          {basketballMatches.map(m => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <SectionHeader title="Basketball Predictions" icon="fa-clipboard-list" />
        <TipTable tips={basketballTips} />
      </div>
    </div>
  );
};

export default Basketball;
