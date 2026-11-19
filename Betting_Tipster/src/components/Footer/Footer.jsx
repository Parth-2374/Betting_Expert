import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="be-footer">
      <div className="container-fluid">
        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="logo-icon-box" style={{ width: '32px', height: '32px', fontSize: '16px' }}>
                <i className="fa-solid fa-trophy"></i>
              </div>
              <span className="fw-extrabold fs-5">
                <span className="bet-white">Betting</span>
                <span className="exp-green ms-1">Expert</span>
              </span>
            </div>
            <p className="small text-muted mb-3" style={{ maxWidth: '320px' }}>
              BettingExpert is the premier global social network for sports betting tips, expert statistical analysis, bookmaker comparisons, and handicap prediction models.
            </p>
            <div className="d-flex gap-3 text-muted">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-link" aria-label="Twitter"><i className="fa-brands fa-x-twitter fs-5"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link" aria-label="Facebook"><i className="fa-brands fa-facebook fs-5"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-link" aria-label="YouTube"><i className="fa-brands fa-youtube fs-5"></i></a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer" className="footer-link" aria-label="Telegram"><i className="fa-brands fa-telegram fs-5"></i></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">Sports Tips</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/football" className="footer-link">Football Tips</Link></li>
              <li><Link to="/tennis" className="footer-link">Tennis Predictions</Link></li>
              <li><Link to="/basketball" className="footer-link">NBA Handicaps</Link></li>
              <li><Link to="/racing" className="footer-link">Horse Racing Picks</Link></li>
              <li><Link to="/hot-tips" className="footer-link">Hot High Odds</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">Casino & Gaming</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/casino" className="footer-link">Best Online Casinos</Link></li>
              <li><Link to="/casino/slots" className="footer-link">High RTP Slots</Link></li>
              <li><Link to="/poker" className="footer-link">Poker Rooms</Link></li>
              <li><Link to="/bingo" className="footer-link">Bingo Halls</Link></li>
              <li><Link to="/bonus-codes" className="footer-link">Betting Promo Codes</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Responsible Gambling</h6>
            <div className="footer-responsible-box mb-2">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-danger px-2 py-1 fw-bold fs-6">18+</span>
                <span className="fw-bold small">Gamble Responsibly</span>
              </div>
              <p className="small text-muted mb-0">
                Gambling involves risk. Please gamble responsibly and only bet what you can afford to lose. For help, visit BeGambleAware.org or call national helplines.
              </p>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
          <div>&copy; {new Date().getFullYear()} BettingExpert. All rights reserved.</div>
          <div className="d-flex gap-3">
            <Link to="/previews" className="footer-link">Privacy Policy</Link>
            <Link to="/previews" className="footer-link">Terms of Service</Link>
            <Link to="/blog" className="footer-link">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
