import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockArticles } from '../../data/articles';

const PreviewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles.find(a => a.id === id) || mockArticles[0];

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Previews
      </button>

      <PageHeader
        title={article.title}
        subtitle={`By ${article.author} • ${article.date} • ${article.readTime}`}
        badgeText={article.category}
      />

      <div className="be-card p-4 mb-4">
        <img src={article.image} alt={article.title} className="w-100 rounded mb-4" style={{ maxHeight: '380px', objectFit: 'cover' }} />
        <div className="text-white lead mb-4 font-italic border-start border-success border-4 ps-3">
          "{article.excerpt}"
        </div>
        <div className="text-muted leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default PreviewDetail;
