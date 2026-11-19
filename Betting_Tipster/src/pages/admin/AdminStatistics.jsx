import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import StatsCard from '../../components/StatsCard/StatsCard';

const AdminStatistics = () => {
  return (
    <div>
      <PageHeader title="Platform Analytics & Revenue" subtitle="Global traffic metrics, tipster yield history, and conversion reports" badgeText="ANALYTICS" />
      <div className="grid-4 mb-4">
        <StatsCard label="Monthly Revenue" value="$42,850" subtext="Affiliate commissions" icon="fa-sack-dollar" color="success" />
        <StatsCard label="Conversion Rate" value="4.8%" subtext="Click-through to bookies" icon="fa-chart-line" color="info" />
        <StatsCard label="Active Subscriptions" value="1,240" subtext="Premium tipster passes" icon="fa-user-check" color="warning" />
        <StatsCard label="Avg Tip Yield" value="+15.2%" subtext="Calculated on 2,100 tips" icon="fa-bullseye" color="success" />
      </div>
    </div>
  );
};

export default AdminStatistics;
