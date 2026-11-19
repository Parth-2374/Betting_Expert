import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import TipsterCard from '../../components/TipsterCard/TipsterCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import { mockTipsters } from '../../data/tipsters';

const Tipsters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeTab, setTypeTab] = useState('all');

  const filteredTipsters = mockTipsters.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeTab === 'all' || t.type.toLowerCase() === typeTab.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <PageHeader
        title="Top Verified Tipsters"
        subtitle="Follow profitable sports handicappers with audited long-term records"
        badgeText="TIPSTER LEAGUE"
      />

      <div className="d-flex gap-2 mb-4 p-2 bg-dark rounded border border-secondary">
        <button
          className={`btn btn-sm ${typeTab === 'all' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setTypeTab('all')}
        >
          All Tipsters
        </button>
        <button
          className={`btn btn-sm ${typeTab === 'free' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setTypeTab('free')}
        >
          Free Tipsters
        </button>
        <button
          className={`btn btn-sm ${typeTab === 'trial' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setTypeTab('trial')}
        >
          Trial Tipsters
        </button>
        <button
          className={`btn btn-sm ${typeTab === 'premium' ? 'btn-success text-dark fw-bold' : 'btn-outline-secondary text-white'}`}
          onClick={() => setTypeTab('premium')}
        >
          Premium Tipsters
        </button>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search tipsters by name or specialty..."
      />

      <div className="grid-3">
        {filteredTipsters.map(tipster => (
          <TipsterCard key={tipster.id} tipster={tipster} />
        ))}
      </div>
    </div>
  );
};

export default Tipsters;
