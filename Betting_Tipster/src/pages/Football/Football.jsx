import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MatchCard from '../../components/MatchCard/MatchCard';
import TipTable from '../../components/TipTable/TipTable';
import { mockMatches } from '../../data/matches';
import { mockTips } from '../../data/tips';

const Football = () => {
  const navigate = useNavigate();
  const footballMatches = mockMatches.filter(m => m.sport === 'football');
  const footballTips = mockTips.filter(t => t.sport === 'football');

  return (
    <div>
      <PageHeader
        title="Football Betting Tips & Fixtures"
        subtitle="Premier League, La Liga, Champions League, Serie A & international match tips"
        badgeText="FOOTBALL HUB"
      />

      <div className="mb-4">
        <SectionHeader title="Featured Football Fixtures" icon="fa-futbol" />
        <div className="grid-2">
          {footballMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <SectionHeader title="Active Football Tips" icon="fa-clipboard-list" />
        <TipTable tips={footballTips} />
      </div>
    </div>
  );
};

export default Football;
