import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockArticles } from '../../data/articles';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles.find(a => a.id === id) || mockArticles[0];

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Blog
      </button>

      <PageHeader
        title={article.title}
        subtitle={`Written by ${article.author} • ${article.date} • ${article.readTime}`}
        badgeText={article.category}
      />

      <div className="be-card p-4">
        <img src={article.image} alt={article.title} className="w-100 rounded mb-4" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <h4 className="fw-bold text-white mb-3">{article.title}</h4>
        <div className="text-muted leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
