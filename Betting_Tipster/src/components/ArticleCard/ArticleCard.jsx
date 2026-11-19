import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ article, basePath = "/blog" }) => {
  const navigate = useNavigate();

  return (
    <div className="be-card h-100 d-flex flex-column justify-content-between cursor-pointer" onClick={() => navigate(`${basePath}/${article.id}`)}>
      <div>
        <div className="position-relative mb-3 rounded overflow-hidden" style={{ height: '160px' }}>
          <img
            src={article.image}
            alt={article.title}
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          <span className="position-absolute top-0 start-0 m-2 badge-custom badge-green">
            {article.category}
          </span>
        </div>

        <div className="d-flex align-items-center gap-2 extra-small text-muted mb-2">
          <span><i className="fa-solid fa-calendar me-1"></i>{article.date}</span>
          <span>•</span>
          <span><i className="fa-solid fa-clock me-1"></i>{article.readTime}</span>
        </div>

        <h5 className="fw-bold text-white mb-2 line-clamp-2">{article.title}</h5>
        <p className="small text-muted line-clamp-3 mb-3">{article.excerpt}</p>
      </div>

      <div className="pt-2 border-top border-secondary d-flex justify-content-between align-items-center extra-small">
        <span className="text-muted">By {article.author}</span>
        <span className="text-success fw-bold">Read Article <i className="fa-solid fa-arrow-right ms-1"></i></span>
      </div>
    </div>
  );
};

export default ArticleCard;
