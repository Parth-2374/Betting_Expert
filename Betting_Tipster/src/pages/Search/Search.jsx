import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import EmptyState from '../../components/EmptyState/EmptyState';
import { mockTips } from '../../data/tips';
import { mockMatches } from '../../data/matches';
import { mockTipsters } from '../../data/tipsters';
import { mockArticles } from '../../data/articles';
import { mockBookmakers } from '../../data/bookmakers';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  const qLower = query.toLowerCase().trim();

  const filteredTips = qLower
    ? mockTips.filter(t => t.match.toLowerCase().includes(qLower) || t.selection.toLowerCase().includes(qLower) || t.competition.toLowerCase().includes(qLower))
    : [];

  const filteredMatches = qLower
    ? mockMatches.filter(m => m.homeTeam.toLowerCase().includes(qLower) || m.awayTeam.toLowerCase().includes(qLower) || m.competition.toLowerCase().includes(qLower))
    : [];

  const filteredTipsters = qLower
    ? mockTipsters.filter(t => t.name.toLowerCase().includes(qLower) || t.specialty.toLowerCase().includes(qLower))
    : [];

  const filteredArticles = qLower
    ? mockArticles.filter(a => a.title.toLowerCase().includes(qLower) || a.category.toLowerCase().includes(qLower) || a.excerpt.toLowerCase().includes(qLower))
    : [];

  const filteredBookmakers = qLower
    ? mockBookmakers.filter(b => b.name.toLowerCase().includes(qLower) || b.bonus.toLowerCase().includes(qLower))
    : [];

  const totalResults = filteredTips.length + filteredMatches.length + filteredTipsters.length + filteredArticles.length + filteredBookmakers.length;

  return (
    <div>
      <PageHeader
        title="Search BettingExpert"
        subtitle="Search expert tips, matches, top tipsters, articles, and bookmakers"
        badgeText="SEARCH ENGINE"
      />

      <div className="be-card mb-4">
        <form onSubmit={handleSearchSubmit} className="d-flex gap-2">
          <div className="position-relative flex-grow-1">
            <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            <input
              type="text"
              className="form-control form-control-lg bg-dark text-white border-secondary ps-5"
              placeholder="Search tips, matches, tipsters, articles, bookmakers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <button type="submit" className="btn-primary-custom px-4">
            Search
          </button>
        </form>
      </div>

      {qLower && (
        <p className="text-muted small mb-4">
          Showing search results for <strong className="text-white">"{query}"</strong> ({totalResults} matches found)
        </p>
      )}

      {!qLower && (
        <div className="be-card text-center py-5">
          <i className="fa-solid fa-magnifying-glass fs-1 text-success mb-3"></i>
          <h4 className="fw-bold text-white mb-2">Type a query to search across all sports data</h4>
          <p className="text-muted small mb-0">Try searching for "Arsenal", "Alcaraz", "Bet365", "ProBettor99", or "Premier League"</p>
        </div>
      )}

      {qLower && totalResults === 0 && (
        <EmptyState
          title="No Matching Results Found"
          message={`We couldn't find any tips, matches, tipsters, or articles matching "${query}".`}
          icon="fa-magnifying-glass"
          actionText="Clear Search"
          onAction={() => { setQuery(''); setSearchParams({}); }}
        />
      )}

      {/* Tips Results */}
      {filteredTips.length > 0 && (
        <div className="mb-4">
          <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
            <i className="fa-solid fa-clipboard-list text-success"></i> Tips ({filteredTips.length})
          </h4>
          <div className="be-table-container">
            <table className="be-table">
              <thead>
                <tr>
                  <th>Match</th>
                  <th>Tipster</th>
                  <th>Selection</th>
                  <th>Odds</th>
                </tr>
              </thead>
              <tbody>
                {filteredTips.map(tip => (
                  <tr key={tip.id} onClick={() => navigate(`/tips/${tip.id}`)}>
                    <td className="fw-bold text-white">{tip.match}</td>
                    <td>{tip.tipsterName}</td>
                    <td><span className="badge bg-secondary text-white">{tip.selection}</span></td>
                    <td className="fw-bold text-success">{tip.odds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Matches Results */}
      {filteredMatches.length > 0 && (
        <div className="mb-4">
          <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
            <i className="fa-solid fa-futbol text-success"></i> Matches ({filteredMatches.length})
          </h4>
          <div className="grid-2">
            {filteredMatches.map(match => (
              <div key={match.id} className="be-card cursor-pointer" onClick={() => navigate(`/${match.sport || 'football'}/${match.id}`)}>
                <div className="d-flex justify-content-between text-muted small mb-2">
                  <span>{match.competition}</span>
                  <span>{match.date} {match.time}</span>
                </div>
                <div className="fw-bold text-white fs-5">{match.homeTeam} vs {match.awayTeam}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tipsters Results */}
      {filteredTipsters.length > 0 && (
        <div className="mb-4">
          <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
            <i className="fa-solid fa-user-tie text-success"></i> Tipsters ({filteredTipsters.length})
          </h4>
          <div className="grid-3">
            {filteredTipsters.map(t => (
              <div key={t.id} className="be-card d-flex align-items-center gap-3 cursor-pointer" onClick={() => navigate(`/tipsters/${t.id}`)}>
                <img src={t.avatar} alt={t.name} className="rounded-circle" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                <div>
                  <div className="fw-bold text-white">{t.name}</div>
                  <div className="small text-success">{t.profit} profit ({t.yieldVal} Yield)</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Articles Results */}
      {filteredArticles.length > 0 && (
        <div className="mb-4">
          <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
            <i className="fa-solid fa-newspaper text-success"></i> Previews & Articles ({filteredArticles.length})
          </h4>
          <div className="grid-2">
            {filteredArticles.map(a => (
              <div key={a.id} className="be-card cursor-pointer" onClick={() => navigate(`/blog/${a.id}`)}>
                <span className="badge-custom badge-green mb-2">{a.category}</span>
                <h5 className="fw-bold text-white mb-1">{a.title}</h5>
                <p className="extra-small text-muted mb-0">{a.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bookmakers Results */}
      {filteredBookmakers.length > 0 && (
        <div className="mb-4">
          <h4 className="fw-bold text-white mb-3 d-flex align-items-center gap-2">
            <i className="fa-solid fa-building text-success"></i> Bookmakers ({filteredBookmakers.length})
          </h4>
          <div className="grid-2">
            {filteredBookmakers.map(b => (
              <div key={b.id} className="be-card d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="fw-bold text-white mb-1">{b.name}</h5>
                  <div className="small text-success">{b.bonus}</div>
                </div>
                <Link to="/bookmakers" className="btn btn-sm btn-outline-success">View Bookmakers</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
