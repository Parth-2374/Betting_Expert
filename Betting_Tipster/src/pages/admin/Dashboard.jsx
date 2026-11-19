import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import StatsCard from '../../components/StatsCard/StatsCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useData } from '../../context/DataContext';

const Dashboard = () => {
  const { collections } = useData();

  const totalUsers = collections.users?.length || 0;
  const totalTips = collections.tips?.length || 0;
  const activeTipsters = collections.tipsters?.length || 0;
  const totalMatches = collections.matches?.length || 0;
  const publishedArticles = collections.articles?.length || 0;
  const activeBookmakers = collections.bookmakers?.length || 0;

  return (
    <div>
      <PageHeader
        title="Admin Control Center"
        subtitle="Overview of platform users, active predictions, fixtures, and revenue metrics"
        badgeText="SYSTEM OVERVIEW"
      />

      <div className="grid-3 mb-4">
        <StatsCard label="Total Users" value={totalUsers} subtext="Registered accounts" icon="fa-users" color="success" />
        <StatsCard label="Active Tips" value={totalTips} subtext="Published predictions" icon="fa-clipboard-list" color="info" />
        <StatsCard label="Verified Tipsters" value={activeTipsters} subtext="Audit status: Active" icon="fa-user-tie" color="warning" />
        <StatsCard label="Upcoming Matches" value={totalMatches} subtext="Scheduled fixtures" icon="fa-futbol" color="success" />
        <StatsCard label="Articles & Previews" value={publishedArticles} subtext="Published content" icon="fa-newspaper" color="info" />
        <StatsCard label="Active Bookmakers" value={activeBookmakers} subtext="Affiliate partners" icon="fa-building" color="warning" />
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <SectionHeader title="Recent Tips" icon="fa-clipboard-check" />
          <div className="be-table-container">
            <table className="be-table">
              <thead>
                <tr>
                  <th>Match</th>
                  <th>Tipster</th>
                  <th>Odds</th>
                </tr>
              </thead>
              <tbody>
                {collections.tips?.slice(0, 4).map(t => (
                  <tr key={t.id}>
                    <td className="fw-bold text-white">{t.match}</td>
                    <td>{t.tipsterName}</td>
                    <td className="fw-bold text-success">{t.odds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-lg-6">
          <SectionHeader title="Registered Users" icon="fa-users" />
          <div className="be-table-container">
            <table className="be-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {collections.users?.slice(0, 4).map(u => (
                  <tr key={u.id}>
                    <td className="fw-bold text-white">{u.name}</td>
                    <td><span className="badge bg-secondary">{u.role}</span></td>
                    <td><span className="badge bg-success text-dark">{u.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
