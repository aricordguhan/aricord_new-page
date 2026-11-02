import { Link } from 'react-router-dom';

export default function Offerings() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Offerings
          </p>
          <h1>Offerings</h1>
          <p className="page-hero-sub">Specialist SAP services across the finance journey.</p>
        </div>
      </section>
      {/* OFFERINGS */}
      <section className="section section-alt" id="offerings">
        <div className="wrap">
          <div className="section-head">
            <h2>SAP expertise across the finance journey.</h2>
            <p className="section-sub">
              From transformation and migration to implementation and ongoing support, we bring specialist SAP expertise
              to the areas where finance needs it most.
            </p>
          </div>
          <div className="offer-grid offer-grid-detailed">
            <article className="offer-card">
              <span className="tag tag-dark">S/4 · CFIN</span>
              <h3>S/4HANA Finance &amp; Central Finance</h3>
              <p>
                Finance transformation, Central Finance, implementation and optimisation — supported by proven
                accelerators and hands-on delivery experience. We help finance teams simplify their landscape, harmonise
                reporting and build a single source of truth across group and entity level.
              </p>
              <p className="offer-list-label">What we deliver</p>
              <ul className="offer-list">
                <li>Finance transformation roadmaps and S/4HANA readiness assessments</li>
                <li>Central Finance design, replication and harmonisation</li>
                <li>Universal Journal, New Asset Accounting and Group Reporting</li>
                <li>Greenfield, brownfield and selective data transition approaches</li>
                <li>Post-implementation reviews and finance process optimisation</li>
              </ul>
            </article>
            <article className="offer-card">
              <span className="tag tag-dark">FPSL · RAR · RE-FX</span>
              <h3>SAP Subledger &amp; Regulatory Solutions</h3>
              <p>
                Specialist expertise across FPSL, FSDP, RAR and RE-FX, with deep experience in complex insurance and
                banking environments. We turn demanding accounting standards into robust, auditable SAP solutions.
              </p>
              <p className="offer-list-label">What we deliver</p>
              <ul className="offer-list">
                <li>IFRS 17 and IFRS 9 subledger design and implementation with FPSL</li>
                <li>Financial Services Data Platform (FSDP) integration and data modelling</li>
                <li>IFRS 15 revenue recognition with SAP RAR</li>
                <li>IFRS 16 lease accounting and real estate management with RE-FX</li>
                <li>Regulatory reporting, reconciliation and audit-trail design</li>
              </ul>
            </article>
            {/* <article class="offer-card">
          <span class="tag tag-dark">S/4HANA</span>
          <h3>S/4HANA</h3>
          <p>Deep knowledge of the S/4HANA solution, with consulting and advisory services covering Finance and other support functions.</p>
        </article> */}
            <article className="offer-card">
              <span className="tag tag-dark">BTP</span>
              <h3>SAP BTP</h3>
              <p>
                Applications, integrations and extensions built on SAP BTP — helping organisations modernise while
                keeping the SAP core clean. Our clean-core approach keeps your system upgrade-ready.
              </p>
              <p className="offer-list-label">What we deliver</p>
              <ul className="offer-list">
                <li>Side-by-side extensions with CAP and SAP Build</li>
                <li>SAP Fiori and UI5 applications tailored to finance users</li>
                <li>Integration Suite interfaces between SAP and third-party systems</li>
                <li>Workflow automation and process orchestration</li>
                <li>Analytics and AI-assisted finance use cases on BTP</li>
              </ul>
            </article>
            <article className="offer-card">
              <span className="tag tag-dark">DATA · MIGRATION</span>
              <h3>Data Migration &amp; Reconciliation</h3>
              <p>
                End-to-end migration of master and transactional data, with mapping, validation and reconciliation built
                into the delivery. We make sure balances tie out and the business can trust its numbers from day one.
              </p>
              <p className="offer-list-label">What we deliver</p>
              <ul className="offer-list">
                <li>Data migration strategy, scoping and cutover planning</li>
                <li>Source-to-target mapping, cleansing and enrichment</li>
                <li>Load execution using SAP Migration Cockpit and our accelerators</li>
                <li>Automated validation and financial reconciliation</li>
                <li>Mock loads, dress rehearsals and go-live sign-off support</li>
              </ul>
            </article>
            <article className="offer-card">
              <span className="tag tag-dark">AMS · SUPPORT</span>
              <h3>Application Management &amp; Optimisation</h3>
              <p>
                Post-go-live support, continuous improvement and specialist SAP Finance expertise to keep critical
                processes running effectively, with flexible engagement models that scale with your needs.
              </p>
              <p className="offer-list-label">What we deliver</p>
              <ul className="offer-list">
                <li>Incident, problem and change management under agreed SLAs</li>
                <li>Period-end and year-end close support</li>
                <li>Continuous improvement backlog and enhancement delivery</li>
                <li>Release, upgrade and regression testing support</li>
                <li>Knowledge transfer and key-user enablement</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
