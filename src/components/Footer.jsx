import { Link } from 'react-router-dom';
import Wordmark from './Wordmark';
import { NAV_LINKS } from '../routes';

export default function Footer({ onOpenTerms, termsBtnRef }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Wordmark className="wordmark wordmark-footer" />
          <p className="footer-tagline">SAP finance &amp; regulatory reporting partner.</p>
        </div>

        <nav aria-label="Footer">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-legal">
          <button type="button" className="link-btn" id="terms-btn" ref={termsBtnRef} onClick={onOpenTerms}>
            Terms &amp; Conditions
          </button>
          <p>© {new Date().getFullYear()} Aricord Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
