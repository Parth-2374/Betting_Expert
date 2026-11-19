import React, { useMemo, useState } from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import FilterBar from '../../components/FilterBar/FilterBar';
import TipTable from '../../components/TipTable/TipTable';
import Pagination from '../../components/Pagination/Pagination';
import EmptyState from '../../components/EmptyState/EmptyState';

import { mockTips } from '../../data/tips';

const Tips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sportFilter, setSportFilter] = useState('all');
  const [sortFilter, setSortFilter] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  /* =====================================================
     FILTER + SORT
  ===================================================== */

  const filteredTips = useMemo(() => {
    let result = mockTips.filter((tip) => {

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        (tip.match || '').toLowerCase().includes(search) ||
        (tip.selection || '').toLowerCase().includes(search) ||
        (tip.tipsterName || '').toLowerCase().includes(search);

      const matchesSport =
        sportFilter === 'all' ||
        tip.sport === sportFilter;

      return matchesSearch && matchesSport;
    });


    /* SORT */

    if (sortFilter === 'odds-high') {
      result = [...result].sort(
        (a, b) => Number(b.odds || 0) - Number(a.odds || 0)
      );
    }

    else if (sortFilter === 'confidence') {
      result = [...result].sort(
        (a, b) =>
          Number(b.confidence || 0) -
          Number(a.confidence || 0)
      );
    }

    else if (sortFilter === 'stake') {
      result = [...result].sort(
        (a, b) =>
          Number(b.stake || 0) -
          Number(a.stake || 0)
      );
    }

    else if (sortFilter === 'newest') {
      result = [...result].reverse();
    }

    return result;

  }, [
    searchTerm,
    sportFilter,
    sortFilter
  ]);


  /* =====================================================
     RESET FILTERS
  ===================================================== */

  const resetFilters = () => {
    setSearchTerm('');
    setSportFilter('all');
    setSortFilter('newest');
    setCurrentPage(1);
  };


  /* =====================================================
     FILTER CHANGE HANDLERS
  ===================================================== */

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSportChange = (value) => {
    setSportFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortFilter(value);
    setCurrentPage(1);
  };


  return (
    <div className="tips-page">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <PageHeader
        title="Sports Betting Tips"
        subtitle="Explore expert predictions, odds, and handicap analysis across all major sports"
        badgeText="COMMUNITY TIPS"
      />


      {/* =================================================
          FILTER BAR
      ================================================= */}

      <div className="tips-filter-wrapper">

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}

          sportFilter={sportFilter}
          onSportChange={handleSportChange}

          sortFilter={sortFilter}
          onSortChange={handleSortChange}

          placeholder="Filter tips by team, selection, or tipster..."
        />

      </div>


      {/* =================================================
          RESULTS COUNT
      ================================================= */}

      <div className="tips-results-header">

        <div className="tips-results-count">
          <i className="fa-solid fa-list-check me-2"></i>

          Showing{' '}
          <strong>
            {filteredTips.length}
          </strong>{' '}
          {filteredTips.length === 1 ? 'tip' : 'tips'}
        </div>

        {(searchTerm ||
          sportFilter !== 'all' ||
          sortFilter !== 'newest') && (

          <button
            type="button"
            className="tips-reset-btn"
            onClick={resetFilters}
          >
            <i className="fa-solid fa-rotate-left me-1"></i>
            Reset Filters
          </button>

        )}

      </div>


      {/* =================================================
          TIPS TABLE
      ================================================= */}

      {filteredTips.length > 0 ? (

        <>

          <div className="tips-table-full">

            <TipTable
              tips={filteredTips}
            />

          </div>


          {/* =================================================
              PAGINATION
          ================================================= */}

          <div className="tips-pagination">

            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />

          </div>

        </>

      ) : (

        /* =================================================
           EMPTY STATE
        ================================================= */

        <div className="tips-empty-state">

          <EmptyState
            title="No Tips Found"
            message="No active tips match your search criteria. Try clearing filters or changing search keywords."
            actionText="Reset Filters"
            onAction={resetFilters}
          />

        </div>

      )}

    </div>
  );
};

export default Tips;