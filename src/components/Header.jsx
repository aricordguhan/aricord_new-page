import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Wordmark from './Wordmark';
import { NAV_LINKS } from '../routes';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header" id="site-header">
      <div className="wrap header-inner">
        <Wordmark aria-label="Aricord home" />

        <nav className={`primary-nav${open ? ' open' : ''}`} id="primary-nav" aria-label="Primary">
          {NAV_LINKS.map(({ to, label, cta }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => {
                // Blog posts live under the News Center
                const active = isActive || (to === '/news' && pathname.startsWith('/blog-'));
                return [cta && 'nav-cta', active && 'is-active'].filter(Boolean).join(' ') || undefined;
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
