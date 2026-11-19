import React from 'react';
import { useNavigate } from 'react-router-dom';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SportCard from '../../components/SportCard/SportCard';
import TipTable from '../../components/TipTable/TipTable';
import TipsterCard from '../../components/TipsterCard/TipsterCard';
import MatchCard from '../../components/MatchCard/MatchCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import StatsCard from '../../components/StatsCard/StatsCard';

import { mockTips } from '../../data/tips';
import { mockTipsters } from '../../data/tipsters';
import { mockMatches } from '../../data/matches';
import { mockSports } from '../../data/sports';

const Home = () => {
  const navigate = useNavigate();

  const hotTips = mockTips.filter((tip) => tip.isHot);
  const latestTips = mockTips;
  const topTipsters = mockTipsters.slice(0, 3);
  const upcomingMatches = mockMatches.slice(0, 2);

  return (
    <div
      className="home-page"
      style={{
        width: '100%',
        color: 'var(--text-main)',
      }}
    >

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="home-hero be-card mb-4"
        style={{
          background:
            'linear-gradient(135deg, var(--accent-green-light), var(--bg-card))',
          border: '1px solid var(--border-color)',
        }}
      >

        <div className="row align-items-center g-4">

          {/* HERO CONTENT */}
          <div className="col-lg-7">

            <span className="home-hero-badge">
              WELCOME TO BETTINGEXPERT
            </span>

            <h1
              className="home-hero-title"
              style={{
                color: 'var(--text-main)',
              }}
            >
              Expert Tips for{' '}

              <span
                style={{
                  color: 'var(--accent-green)',
                }}
              >
                Smart Bettors
              </span>
            </h1>

            <p
              className="home-hero-description"
              style={{
                color: 'var(--text-muted)',
              }}
            >
              Find verified betting tips, mathematical probability
              models, and expert tipster predictions to maximize your
              sports betting profits.
            </p>

            <div className="home-hero-buttons">

              {/* EXPLORE TIPS */}
              <button
                type="button"
                className="btn-primary-custom btn-lg"
                onClick={() => navigate('/tips')}
              >
                <i className="fa-solid fa-fire me-2"></i>
                Explore Tips
              </button>

              {/* VIEW TIPSTERS */}
              <button
                type="button"
                className="btn-outline-custom btn-lg"
                onClick={() => navigate('/tipsters')}
              >
                <i className="fa-solid fa-users me-2"></i>
                View Tipsters
              </button>

            </div>

          </div>

          {/* =================================================
              FEATURED FIXTURE
          ================================================== */}

          <div className="col-lg-5">

            <div
              className="featured-fixture"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >

              {/* TOP */}
              <div className="featured-fixture-top">

                <span className="featured-fixture-badge">
                  FEATURED FIXTURE
                </span>

                <span
                  className="featured-fixture-time"
                  style={{
                    color: 'var(--text-muted)',
                  }}
                >
                  TODAY 17:30
                </span>

              </div>

              {/* TEAMS */}
              <div className="featured-teams">

                {/* ARSENAL */}
                <div className="featured-team">

                  <div
                    className="featured-team-name"
                    style={{
                      color: 'var(--text-main)',
                    }}
                  >
                    Arsenal
                  </div>

                  <div
                    className="featured-team-odds"
                    style={{
                      color: 'var(--accent-green)',
                    }}
                  >
                    1.85 Odds
                  </div>

                </div>

                {/* VS */}
                <div
                  className="featured-vs"
                  style={{
                    color: 'var(--text-muted)',
                  }}
                >
                  VS
                </div>

                {/* CHELSEA */}
                <div className="featured-team">

                  <div
                    className="featured-team-name"
                    style={{
                      color: 'var(--text-main)',
                    }}
                  >
                    Chelsea
                  </div>

                  <div
                    className="featured-team-odds"
                    style={{
                      color: 'var(--text-muted)',
                    }}
                  >
                    4.20 Odds
                  </div>

                </div>

              </div>

              {/* CONFIDENCE TIP */}
              <div
                className="featured-tip"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                }}
              >

                <i
                  className="fa-solid fa-circle-info"
                  style={{
                    color: 'var(--accent-green)',
                  }}
                ></i>

                <span>
                  92% Confidence Tip:{' '}

                  <strong
                    style={{
                      color: 'var(--text-main)',
                    }}
                  >
                    Arsenal Win &amp; Over 2.5
                  </strong>
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          POPULAR SPORTS
      ====================================================== */}

      <section className="home-section mb-4">

        <SectionHeader
          title="Popular Sports"
          subtitle="Browse active predictions across top global sports"
          icon="fa-trophy"
        />

        <div className="grid-4">

          {mockSports.map((sport) => (
            <SportCard
              key={sport.id}
              sport={sport}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="row g-4">

        {/* ===================================================
            LEFT COLUMN
        ==================================================== */}

        <div className="col-lg-12">

          {/* HOT TIPS */}

          <section className="home-section mb-4">

            <SectionHeader
              title="Hot High-Confidence Tips"
              subtitle="Verified picks with 85%+ probability confidence"
              icon="fa-fire"
              actionText="View All Hot Tips"
              onAction={() => navigate('/hot-tips')}
            />

            <div
              className="home-table-wrapper"
              style={{
                color: 'var(--text-main)',
                background: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
              }}
            >
              <TipTable tips={hotTips} />
            </div>

          </section>


          {/* =================================================
              TOP TIPSTERS
          ================================================== */}

          <section className="home-section mb-4">

            <SectionHeader
              title="Top Ranked Tipsters"
              subtitle="Consistently profitable handicappers this month"
              icon="fa-award"
              actionText="View All Tipsters"
              onAction={() => navigate('/tipsters')}
            />

            <div className="grid-3">

              {topTipsters.map((tipster) => (
                <TipsterCard
                  key={tipster.id}
                  tipster={tipster}
                />
              ))}

            </div>

          </section>

          {/* =====================================================
          LATEST COMMUNITY TIPS FULL WIDTH
      ===================================================== */}

          <section className="latest-community-section ">

            <SectionHeader
              title="Latest Community Tips"
              subtitle="Recent additions from verified community analysts"
              icon="fa-clock-rotate-left"
              actionText="View All Tips"
              onAction={() => navigate('/tips')}
            />

            <div className="latest-community-table ">

              <TipTable
                tips={latestTips}
              />

            </div>

          </section>
        </div>


        {/* ===================================================
            RIGHT COLUMN
        ==================================================== */}

        <div className="col-lg-12 ">

          {/* =================================================
              PLATFORM STATS
          ================================================== */}

          <section className="home-section mb-4">

            <SectionHeader
              title="Platform Stats"
              icon="fa-chart-pie"
            />

            <div className="d-flex flex-column gap-3">

              <StatsCard
                label="Monthly Profit"
                value="+1,840 Units"
                subtext="Combined tipster yield +15.2%"
                icon="fa-sack-dollar"
                color="success"
              />

              <StatsCard
                label="Win Rate"
                value="67.6%"
                subtext="1,420 Wins out of 2,100 Tips"
                icon="fa-bullseye"
                color="info"
              />

            </div>

          </section>


          {/* =================================================
              UPCOMING FIXTURES
          ================================================== */}

          <section className="home-section mb-4">

            <SectionHeader
              title="Upcoming Fixtures"
              icon="fa-calendar-days"
            />

            <div className="d-flex flex-column gap-3">

              {upcomingMatches.map((match) => (
                <MatchCard
                  key={match.id}
                  match={match}
                />
              ))}

            </div>

          </section>


          {/* =================================================
              COMMUNITY REVIEWS
          ================================================== */}

          <section className="home-section mb-4">

            <SectionHeader
              title="Community Reviews"
              icon="fa-star"
            />

            <TestimonialCard
              name="Marcus Vance"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
              role="Pro Bettor"
              rating={5}
              comment="BettingExpert transformed my betting approach. The xG models and tipster yields are top quality!"
            />

          </section>

        </div>

      </div>

    </div>
  );
};

export default Home;