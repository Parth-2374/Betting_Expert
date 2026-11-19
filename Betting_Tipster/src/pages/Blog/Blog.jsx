import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { mockArticles } from '../../data/articles';

const Blog = () => {
  return (
    <div>
      <PageHeader
        title="BettingExpert Blog & Strategy News"
        subtitle="Sports betting education, expected goals analysis, and industry insights"
        badgeText="COMMUNITY BLOG"
      />

      <div className="grid-3">
        {mockArticles.map(article => (
          <ArticleCard key={article.id} article={article} basePath="/blog" />
        ))}
      </div>
    </div>
  );
};

export default Blog;
