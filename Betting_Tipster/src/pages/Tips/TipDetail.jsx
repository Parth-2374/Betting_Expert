import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import TipCard from '../../components/TipCard/TipCard';
import { mockTips } from '../../data/tips';
import { useAuth } from '../../context/AuthContext';

const TipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, toggleSaveTip, toggleFollowTipster } = useAuth();
  const tip = mockTips.find((t) => t.id === id) || mockTips[0];

  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState(tip.comments || []);

  const isSaved = user?.savedTips?.includes(tip.id);
  const isFollowed = user?.followedTipsters?.includes(tip.tipsterId);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      author: user?.username || 'You',
      avatar: user?.avatar || 'https://i.pravatar.cc/150?u=99',
      text: commentText.trim(),
      time: 'Just now'
    };

    setCommentsList([newComment, ...commentsList]);
    setCommentText('');
  };

  const relatedTips = mockTips.filter(t => t.id !== tip.id).slice(0, 2);

  return (
    <div>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left me-1"></i> Back to Tips
      </button>

      <PageHeader
        title={tip.match}
        subtitle={`${tip.competition} • ${tip.date} at ${tip.time}`}
        badgeText={tip.sport.toUpperCase()}
      >
        <button
          className={`btn btn-sm ${isSaved ? 'btn-success text-dark' : 'btn-outline-secondary text-white'}`}
          onClick={() => toggleSaveTip(tip.id)}
        >
          <i className="fa-solid fa-bookmark me-1"></i> {isSaved ? 'Saved' : 'Save Tip'}
        </button>
      </PageHeader>

      <div className="row g-4">
        <div className="col-lg-8">
          {/* Main Tip Box */}
          <div className="be-card mb-4 border-success">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-danger text-white fw-bold px-3 py-2 fs-6">
                {tip.confidence}% Confidence Rating
              </span>
              <span className="badge-custom badge-green">{tip.status}</span>
            </div>

            <div className="p-4 bg-dark rounded border border-secondary mb-4 text-center">
              <div className="small text-muted mb-1">RECOMMENDED SELECTION</div>
              <div className="display-6 fw-extrabold text-success mb-2">{tip.selection}</div>
              <div className="d-flex justify-content-center align-items-center gap-4 text-white">
                <div>Odds: <strong className="text-success fs-5">{tip.odds.toFixed(2)}</strong></div>
                <div>Stake: <strong className="text-white fs-5">{tip.stake}/10</strong></div>
                <div>Bookmaker: <strong className="text-warning fs-5">{tip.bookmaker}</strong></div>
              </div>
            </div>

            <h5 className="fw-bold text-white mb-2">Tipster Analysis</h5>
            <p className="text-muted leading-relaxed mb-4" style={{ whiteSpace: 'pre-line' }}>
              {tip.analysis}
            </p>

            {/* Head-to-Head Section */}
            {tip.h2h && (
              <div className="p-3 bg-dark-subtle rounded border border-secondary mb-3 ">
                <h6 className="fw-bold text-white mb-2"><i className="fa-solid fa-chart-bar text-success me-2 text-black"></i><span className='text-success'>Head-to-Head & Stats</span></h6>
                <div className="row text-center extra-small  g-2 text-black">
                  <div className="col-4">Wins: <strong className="text-success">{tip.h2h.arsenalWins || tip.h2h.realWins || 6}</strong></div>
                  <div className="col-4">Draws: <strong className="text-success">{tip.h2h.draws || 0}</strong></div>
                  <div className="col-4">Opponent Wins: <strong className="text-success">{tip.h2h.chelseaWins || tip.h2h.barcaWins || 5}</strong></div>
                </div>
                {tip.h2h.lastMatch && (
                  <div className="extra-small text-black text-center mt-2 border-top border-secondary pt-2">
                    Last Meeting: <strong className="text-success">{tip.h2h.lastMatch}</strong>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div className="be-card">
            <h5 className="fw-bold text-white mb-3"><i className="fa-solid fa-comments text-success me-2"></i>Discussion & Comments ({commentsList.length})</h5>

            <form onSubmit={handleAddComment} className="mb-4">
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Share your thoughts on this prediction..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button type="submit" className="btn-primary-custom px-4">Post</button>
              </div>
            </form>

            <div className="d-flex flex-column gap-3">
              {commentsList.map(c => (
                <div key={c.id} className="p-3 bg-dark rounded border border-secondary d-flex gap-3">
                  <img src={c.avatar} alt={c.author} className="rounded-circle" style={{ width: '36px', height: '36px', objectFit: 'cover' }} />
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <strong className="text-white small">{c.author}</strong>
                      <span className="extra-small text-muted">{c.time}</span>
                    </div>
                    <p className="small text-muted mb-0">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="col-lg-4">
          <div className="be-card mb-4 text-center">
            <img src={tip.tipsterAvatar} alt={tip.tipsterName} className="rounded-circle mb-2 border border-2 border-success" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <h5 className="fw-bold text-white mb-1">{tip.tipsterName}</h5>
            <div className="small text-success mb-3">{tip.tipsterYield} Yield • {tip.tipsterProfit} Profit</div>

            <button
              className={`btn btn-sm w-100 fw-bold ${isFollowed ? 'btn-outline-secondary' : 'btn-success text-dark'}`}
              onClick={() => toggleFollowTipster(tip.tipsterId)}
            >
              {isFollowed ? 'Following Tipster' : '+ Follow Tipster'}
            </button>
            <Link to={`/tipsters/${tip.tipsterId}`} className="btn btn-sm btn-outline-light w-100 fw-bold mt-2">
              View Tipster Profile
            </Link>
          </div>

          <div>
            <h6 className="fw-bold text-white mb-3">Related Predictions</h6>
            <div className="d-flex flex-column gap-3">
              {relatedTips.map(rt => (
                <TipCard key={rt.id} tip={rt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetail;
