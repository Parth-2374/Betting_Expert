import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import CompetitionCard from '../../components/CompetitionCard/CompetitionCard';
import { mockCompetitions } from '../../data/competitions';

const Competitions = () => {
  return (
    <div>
      <PageHeader
        title="Tipster Competitions & Prize Leagues"
        subtitle="Submit predictions, climb monthly leaderboards, and win real cash prize pools"
        badgeText="PRIZE LEAGUES"
      />

      <div className="grid-2">
        {mockCompetitions.map(comp => (
          <CompetitionCard key={comp.id} competition={comp} />
        ))}
      </div>
    </div>
  );
};

export default Competitions;
