import { Link } from 'react-router-dom';
import NewsRow from '../components/NewsRow';

export default function News() {
  return (
    <>
      {/* NEWS HERO (slim page header) */}
      <section className="news-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> News
          </p>
          <p className="eyebrow">News Center</p>
          <h1>What's happening at Aricord.</h1>
          <p className="news-hero-sub">
            Updates from our SAP finance transformation practice, every time we have something worth saying. Sample
            entries below until we publish the real thing.
          </p>
        </div>
      </section>
      {/* LEAD STORY — full-width image, headline below (news.sap.com pattern) */}
      <section className="section" id="featured">
        <div className="wrap">
          <article className="news-lead">
            <Link
              className="news-lead-media news-media-1"
              to="/blog-ai-agents-sap-btp"
              aria-label="Read: From static reports to conversational insight"
            >
              <img
                className="news-media-photo"
                src="/assets/news/ai-agentic.jpg"
                alt="Abstract network of connected nodes forming a brain shape, representing AI agents on SAP BTP"
                loading="lazy"
              />
            </Link>
            <div className="news-lead-body">
              <span className="tag tag-dark">Blog · SAP BTP &amp; AI</span>
              <h2>
                <Link to="/blog-ai-agents-sap-btp">
                  From static reports to conversational insight: using AI agents on SAP BTP
                </Link>
              </h2>
              <p className="insight-excerpt">
                Business users shouldn't wait a day for a BW analyst to explain why a project's margin slipped. We built
                a project revenue assistant on SAP BTP that answers plan-vs-actual questions in natural language — with
                data left in SAP ECC and BW, SAP's own role-based authorizations, and every answer logged to SAP HANA
                for audit.
              </p>
              <p className="news-byline">Aricord Consulting · 12 August 2026</p>
              <Link className="insight-link" to="/blog-ai-agents-sap-btp">
                Read the full post →
              </Link>
            </div>
          </article>
          <div className="news-grid-secondary">
            <a
              className="news-card reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-2" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/partner-handshake.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">News</span>
                <h3>Aricord named a recommended partner for Central Finance migrations</h3>
                <p className="news-byline">Aricord Editorial Team · August 2026</p>
              </div>
            </a>{' '}
            <a
              className="news-card reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-3" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/golive-clock.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Feature</span>
                <h3>What actually slows down a Central Finance go-live</h3>
                <p className="news-byline">Aricord Editorial Team · July 2026</p>
              </div>
            </a>{' '}
            <a
              className="news-card reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-2" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/reconciliation.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>Reconciliation checkpoints worth building in early</h3>
                <p className="news-byline">Aricord Editorial Team · June 2026</p>
              </div>
            </a>{' '}
            <a className="news-card reveal" href="https://news.sap.com/" target="_blank" rel="noopener">
              <div className="news-card-media news-media-3" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/announcement.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">News</span>
                <h3>Aricord placeholder announcement</h3>
                <p className="news-byline">Aricord Editorial Team · April 2026</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* CATEGORY ROWS (horizontal scroll) */}
      <section className="section section-alt" id="all-news">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Browse by type</p>
            <h2>Every update, in one place.</h2>
          </div>
          <NewsRow title="Feature">
            <a
              className="news-card"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-1" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/golive-clock.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Feature</span>
                <h3>What actually slows down a Central Finance go-live</h3>
                <p className="news-byline">Aricord Editorial Team · July 2026</p>
              </div>
            </a>{' '}
            <a
              className="news-card"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-3" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/fpsl-planner.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Feature</span>
                <h3>Inside a 12-week FPSL implementation</h3>
                <p className="news-byline">Aricord Editorial Team · June 2026</p>
              </div>
            </a>{' '}
            <a className="news-card" href="https://news.sap.com/topics/erp/" target="_blank" rel="noopener">
              <div className="news-card-media news-media-2" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/cutover-review.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Feature</span>
                <h3>Why cutover playbooks age badly — and how to keep one current</h3>
                <p className="news-byline">Aricord Editorial Team · March 2026</p>
              </div>
            </a>
          </NewsRow>
          <NewsRow title="Blog">
            <Link className="news-card" to="/blog-ai-agents-sap-btp">
              <div className="news-card-media news-media-1" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/ai-agentic.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>From static reports to conversational insight: AI agents on SAP BTP</h3>
                <p className="news-byline">Aricord Consulting · August 2026</p>
              </div>
            </Link>{' '}
            <Link className="news-card" to="/blog-banking-subledger">
              <div className="news-card-media news-media-6" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/topic-banking.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>The banking subledger imperative: navigating regulatory change</h3>
                <p className="news-byline">Rishab Bucha · January 2026</p>
              </div>
            </Link>{' '}
            <Link className="news-card" to="/blog-joule-s4hana-tip">
              <div className="news-card-media news-media-3" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/btp-cloud.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>Quick tip: Joule for S/4HANA Public Cloud</h3>
                <p className="news-byline">Rishab Bucha · December 2025</p>
              </div>
            </Link>{' '}
            <a
              className="news-card"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-2" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/reconciliation.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>Reconciliation checkpoints worth building in early</h3>
                <p className="news-byline">Aricord Editorial Team · June 2026</p>
              </div>
            </a>{' '}
            <a
              className="news-card"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-4" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/subledger-fork.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>Subledger vs. classic GL: how to decide</h3>
                <p className="news-byline">Aricord Editorial Team · May 2026</p>
              </div>
            </a>{' '}
            <a
              className="news-card"
              href="https://news.sap.com/topics/business-technology-platform/"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-1" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/btp-cloud.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>BTP for finance teams: where to start</h3>
                <p className="news-byline">Aricord Editorial Team · May 2026</p>
              </div>
            </a>{' '}
            <a className="news-card" href="https://news.sap.com/topics/erp/" target="_blank" rel="noopener">
              <div className="news-card-media news-media-3" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/data-migration.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">Blog</span>
                <h3>Master data migration: the checks worth automating first</h3>
                <p className="news-byline">Aricord Editorial Team · April 2026</p>
              </div>
            </a>
          </NewsRow>
          <NewsRow title="News">
            <a
              className="news-card"
              href="https://www.linkedin.com/posts/aricordconsultinglimited_aricord-sapinsidetrack-sapcommunity-activity-7510329681825603584-tfJQ"
              target="_blank"
              rel="noopener"
            >
              <div className="news-card-media news-media-4" aria-hidden="true">
                <img
                  className="news-media-photo"
                  src="/assets/news/sit-blr-team.jpg"
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: 'center 55%' }}
                />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">News · Event</span>
                <h3>Team Aricord at SAP Inside Track Bengaluru</h3>
                <p className="news-card-excerpt">
                  A day of learning and connecting with the SAP community — SAP Business AI and AI agents, Joule, SAP
                  BTP, Business Data Cloud and Clean Core.
                </p>
                <p className="news-byline">Aricord Consulting · September 2026</p>
              </div>
            </a>{' '}
            <a className="news-card" href="https://news.sap.com/" target="_blank" rel="noopener">
              <div className="news-card-media news-media-3" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/announcement.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">News</span>
                <h3>Aricord placeholder announcement</h3>
                <p className="news-byline">Aricord Editorial Team · April 2026</p>
              </div>
            </a>{' '}
            <a className="news-card" href="https://news.sap.com/" target="_blank" rel="noopener">
              <div className="news-card-media news-media-2" aria-hidden="true">
                <img className="news-media-photo" src="/assets/news/ecosystem-map.jpg" alt="" loading="lazy" />
              </div>
              <div className="news-card-body">
                <span className="tag tag-dark">News</span>
                <h3>SAP ecosystem update — placeholder</h3>
                <p className="news-byline">Aricord Editorial Team · April 2026</p>
              </div>
            </a>
          </NewsRow>
        </div>
      </section>
      {/* TOPICS — colored tile grid (news.sap.com taxonomy pattern) */}
      <section className="section" id="topics">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Browse by topic</p>
            <h2>Find coverage on the area you care about.</h2>
          </div>
          <div className="topic-tile-grid">
            <a
              className="topic-tile news-media-1 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-s4finance.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">S/4HANA Finance</span>
            </a>{' '}
            <a
              className="topic-tile news-media-2 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-cfin.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Central Finance</span>
            </a>{' '}
            <a
              className="topic-tile news-media-3 reveal"
              href="https://news.sap.com/topics/business-technology-platform/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/btp-cloud.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">SAP BTP</span>
            </a>{' '}
            <a
              className="topic-tile news-media-4 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-fpsl.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">FPSL</span>
            </a>{' '}
            <a
              className="topic-tile news-media-5 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-rar.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">RAR</span>
            </a>{' '}
            <a
              className="topic-tile news-media-6 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-refx.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">RE-FX</span>
            </a>{' '}
            <a
              className="topic-tile news-media-3 reveal"
              href="https://news.sap.com/topics/erp/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/data-migration.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Data Migration</span>
            </a>{' '}
            <a
              className="topic-tile news-media-1 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-regreport.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Regulatory Reporting</span>
            </a>{' '}
            <a
              className="topic-tile news-media-5 reveal"
              href="https://news.sap.com/topics/financial-management/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-perfmgmt.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Performance Mgmt</span>
            </a>{' '}
            <a
              className="topic-tile news-media-2 reveal"
              href="https://news.sap.com/topics/industries/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-insurance.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Insurance</span>
            </a>{' '}
            <a
              className="topic-tile news-media-6 reveal"
              href="https://news.sap.com/topics/industries/"
              target="_blank"
              rel="noopener"
            >
              <img className="news-media-photo" src="/assets/news/topic-banking.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Banking</span>
            </a>{' '}
            <Link className="topic-tile news-media-4 reveal" to="/careers">
              <img className="news-media-photo" src="/assets/news/team-news.jpg" alt="" loading="lazy" />
              <span className="topic-tile-label">Careers</span>
            </Link>
          </div>
        </div>
      </section>
      {/* SUBSCRIBE / FOLLOW */}
      <section className="section section-dark" id="follow">
        <div className="wrap careers-grid">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2>We publish live updates on LinkedIn first.</h2>
            <p>
              This News Center is refreshed periodically. For the fastest updates on engagements, hires and SAP
              ecosystem moves, follow us on LinkedIn.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/company/aricordconsultinglimited/"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            Follow on LinkedIn ↗
          </a>
        </div>
      </section>
    </>
  );
}
