import React from 'react';

const FilterBar = ({
  searchTerm = "",
  onSearchChange,
  sportFilter = "all",
  onSportChange,
  sortFilter = "newest",
  onSortChange,
  placeholder = "Filter list..."
}) => {
  return (
    <div className="be-card mb-4">
      <div className="row g-3 align-items-center">
        <div className="col-md-5">
          <div className="position-relative">
            <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary ps-5"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {onSportChange && (
          <div className="col-6 col-md-3">
            <select
              className="form-select bg-dark text-white border-secondary"
              value={sportFilter}
              onChange={(e) => onSportChange(e.target.value)}
            >
              <option value="all">All Sports</option>
              <option value="football">Football</option>
              <option value="tennis">Tennis</option>
              <option value="basketball">Basketball</option>
              <option value="racing">Racing</option>
            </select>
          </div>
        )}

        {onSortChange && (
          <div className="col-6 col-md-4">
            <select
              className="form-select bg-dark text-white border-secondary"
              value={sortFilter}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="newest">Sort by: Newest</option>
              <option value="odds-high">Odds: High to Low</option>
              <option value="confidence">Confidence: Highest</option>
              <option value="stake">Stake: High to Low</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
