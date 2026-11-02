import { Link } from 'react-router-dom';

export default function Coverage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Coverage
          </p>
          <h1>Coverage</h1>
          <p className="page-hero-sub">The SAP solution areas we cover end to end.</p>
        </div>
      </section>
      {/* SOLUTION COVERAGE */}
      <section className="section" id="coverage">
        <div className="wrap">
          <div className="section-head home-head-row">
            <div>
              <h2>Coverage across the areas that make a programme land.</h2>
              <p className="section-sub">
                In SAP, we provide coverage across key solution areas — including support for the process &amp; controls
                framework that implementation success depends on.
              </p>
            </div>
            <Link to="/contact" className="btn btn-ghost">
              Ask about your solution area
            </Link>
          </div>
          <ul className="cov-panels">
            <li className="cov-panel is-default" tabIndex={0}>
              <span className="cov-num">01</span>
              <svg className="cov-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
              </svg>
              <div className="cov-text">
                <h3>Finance &amp; regulatory reporting</h3>
                <p>
                  Statutory, management and regulatory reporting built on a single, reconciled source of finance data.
                </p>
              </div>
            </li>
            <li className="cov-panel" tabIndex={0}>
              <span className="cov-num">02</span>
              <svg className="cov-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
              <div className="cov-text">
                <h3>Process &amp; controls framework</h3>
                <p>Designed-in controls and clear processes, the groundwork implementation success depends on.</p>
              </div>
            </li>
            <li className="cov-panel" tabIndex={0}>
              <span className="cov-num">03</span>
              <svg className="cov-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 17a9 9 0 0118 0" />
                <path d="M12 17l4.5-6" />
                <circle cx="12" cy="17" r="1.5" />
              </svg>
              <div className="cov-text">
                <h3>Performance management</h3>
                <p>
                  Planning, margin and performance insight that helps finance steer the business, not just report on it.
                </p>
              </div>
            </li>
            <li className="cov-panel" tabIndex={0}>
              <span className="cov-num">04</span>
              <svg className="cov-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" />
                <path d="M16 4.8a3.5 3.5 0 010 6.4M18.5 14.8c1.7.8 2.7 2.5 3 5.2" />
              </svg>
              <div className="cov-text">
                <h3>Customer experience</h3>
                <p>Smoother onboarding, billing and integration journeys, connected cleanly to SAP.</p>
              </div>
            </li>
            <li className="cov-panel" tabIndex={0}>
              <span className="cov-num">05</span>
              <svg className="cov-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 3v18M7 21h10M4 7h16" />
                <path d="M4 7l-2.5 6a2.5 2.5 0 005 0L4 7zM20 7l-2.5 6a2.5 2.5 0 005 0L20 7z" />
              </svg>
              <div className="cov-text">
                <h3>Industry &amp; regulatory compliance</h3>
                <p>IFRS 9, IFRS 15, IFRS 16 and IFRS 17, plus sector regulation, embedded into how SAP runs.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
