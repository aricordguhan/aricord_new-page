import { Link } from 'react-router-dom';

export default function Accelerators() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Accelerators
          </p>
          <h1>Accelerators</h1>
          <p className="page-hero-sub">Reusable frameworks that shorten the slow parts of a transformation.</p>
        </div>
      </section>
      {/* ACCELERATORS */}
      <section className="section section-dark" id="accelerators">
        <div className="wrap">
          <div className="section-head">
            <h2>Built to shorten the slow parts of a finance transformation.</h2>
            <p className="section-sub">
              We help clients accelerate their finance transformation journey with reusable frameworks across three
              phases.
            </p>
          </div>
          <div className="accel-grid">
            <div className="accel-card">
              <span className="accel-num">01</span>
              <h3>Blueprinting</h3>
              <p>
                Pre-built process frameworks and design patterns for finance and regulatory reporting, so design
                workshops start from a working draft, not a blank page.
              </p>
            </div>
            <div className="accel-card">
              <span className="accel-num">02</span>
              <h3>Data migration &amp; reconciliation</h3>
              <p>
                Structured approaches to master and transaction data migration, with reconciliation built in from the
                first mock load.
              </p>
            </div>
            <div className="accel-card">
              <span className="accel-num">03</span>
              <h3>Testing &amp; cutover</h3>
              <p>
                Reusable test scripts and cutover playbooks for finance processes, aimed at a stable close in the first
                period after go&#8209;live.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
