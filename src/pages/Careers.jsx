import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Careers
          </p>
          <h1>Careers</h1>
          <p className="page-hero-sub">Join a small, senior SAP finance team.</p>
        </div>
      </section>
      {/* CAREERS */}
      <section className="section" id="careers">
        <div className="wrap">
          <div className="careers-banner">
            <div className="careers-banner-copy">
              <p className="eyebrow careers-eyebrow">Careers</p>
              <h2>Bring your expertise. Make an impact.</h2>
              <p>
                Join a team working on complex SAP finance transformations where experience, ideas and ownership matter.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary careers-banner-btn">
              Explore opportunities <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
