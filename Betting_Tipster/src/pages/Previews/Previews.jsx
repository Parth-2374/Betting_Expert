import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { mockArticles } from '../../data/articles';

const Previews = () => {
  return (
    <div>
      <PageHeader
        title="Match & Race Previews"
        subtitle="Expert tactical breakdowns, statistical previews, and betting insights"
        badgeText="PREVIEWS"
      />

      <div className="grid-3">
        {mockArticles.map(article => (
          <ArticleCard key={article.id} article={article} basePath="/previews" />
        ))}
      </div>
    </div>
  );
};

export default Previews;
