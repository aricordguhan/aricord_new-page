import { Link } from 'react-router-dom';
import CountUp from '../components/CountUp';
import PillarsVisual from '../components/PillarsVisual';
import ReadMore from '../components/ReadMore';
import Showcase from '../components/Showcase';
import Tabs from '../components/Tabs';
import TypedEyebrow from '../components/TypedEyebrow';
import { usePlayOnView } from '../hooks/motion';

const EYEBROW_PHRASES = ['SPECIALIST BY DESIGN', 'BUILT ON EXPERIENCE', 'FOCUSED ON OUTCOMES'];

export default function Home() {
  // Accelerators: 1 → arrow → 2 → arrow → 3, and the coverage line drawing across, play once in view
  const [accelRef, accelPlay] = usePlayOnView();
  const [covRef, covPlay] = usePlayOnView();

  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <TypedEyebrow prefix="SAP FINANCE · " phrases={EYEBROW_PHRASES} initial="BUILT ON EXPERIENCE" />
            <h1>Complex finance deserves more than a standard solution.</h1>
            <p className="hero-sub">
              Aricord brings specialist finance and SAP expertise to complex transformation programmes across S/4HANA,
              Central Finance, regulatory solutions, BTP and AI.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Talk to an expert
              </Link>{' '}
              <Link to="/offerings" className="btn btn-ghost">
                See how we work
              </Link>
            </div>
          </div>
          {/* Hero visual: Finance, Regulation, Technology and SAP converge on one point */}
          <PillarsVisual />
          {/* <aside class="ledger-card" aria-label="Firm summary">
        <p class="ledger-title">Statement — Aricord Consulting</p>
        <ul class="ledger-lines">
          <li><span>Team experience</span><strong>150+ yrs combined</strong></li>
          <li><span>Core solution areas</span><strong>05</strong></li>
          <li><span>Registration</span><strong>UK, multi&#8209;region delivery</strong></li>
          <li><span>Focus</span><strong>Finance &amp; regulatory reporting</strong></li>
        </ul>
        <p class="ledger-foot">Balance carried forward — enquire below</p>
      </aside> */}
        </div>
        <div className="module-strip" aria-label="SAP solution areas we work in">
          <div className="module-strip-track">
            <span className="tag">S/4HANA FINANCE</span> <span className="tag">CFIN</span>{' '}
            <span className="tag">SAP BTP</span> <span className="tag">FPSL</span> <span className="tag">FSDP</span>{' '}
            <span className="tag">RAR</span> <span className="tag">RE-FX</span>{' '}
            <span className="tag">DATA MIGRATION</span> <span className="tag">S/4HANA FINANCE</span>{' '}
            <span className="tag">CFIN</span> <span className="tag">SAP BTP</span> <span className="tag">FPSL</span>{' '}
            <span className="tag">FSDP</span> <span className="tag">RAR</span> <span className="tag">RE-FX</span>{' '}
            <span className="tag">DATA MIGRATION</span>
          </div>
        </div>
      </section>
      {/* HOME: ABOUT TEASER (links to about.html) */}
      <section className="section home-about">
        <div className="wrap home-about-grid">
          <div>
            <p className="eyebrow">About Aricord</p>
            <h2>Deep expertise. A clear focus.</h2>
            <p>
              Aricord is built around a simple idea: the best results come from people who truly understand the problem.
              Our team brings together deep experience in finance, accounting, regulation and SAP, helping organisations
              navigate complex transformation with greater clarity and confidence.
            </p>
            <p>
              We keep things practical, stay close to our clients, and focus on solutions that work in the real world,
              not just on paper.
            </p>
            <Link to="/about" className="insight-link">
              More about us →
            </Link>
          </div>
          <ul className="home-stats" aria-label="Aricord at a glance">
            <li>
              <strong>
                <CountUp target={150} />+
              </strong>
              <span>years of industry experience across our team</span>
            </li>
            <li>
              <strong>End to end</strong>
              <span>from shaping the solution to go-live</span>
            </li>
            <li>
              <strong>SAP</strong>
              <span>build partner a UK-registered entity operating across various regions</span>
            </li>
            <li>
              <strong>Specialist</strong>
              <span>finance, regulation &amp; SAP knowledge</span>
            </li>
          </ul>
        </div>
      </section>
      {/* HOME OVERVIEW: summary strip, offerings list and route cards, each linking to its own page */}
      <section className="section section-alt home-overview">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our Offerings</p>
            <h2>SAP expertise across the finance journey.</h2>
            <p className="section-sub">
              Our firm offers upgrade, migration, implementation, testing, AMS, integration services &amp; facilitation
              for finance, with SAP as the technology platform.
            </p>
          </div>
          <div className="offer-grid home-offer-grid">
            <Link className="offer-card" to="/offerings">
              <span className="tag tag-dark">S/4 · CFIN</span>
              <h3>S/4HANA Finance &amp; CFIN</h3>
              <p>
                Deep finance expertise and proven accelerators to help organisations move to S/4HANA Central Finance,
                through to post go-live stabilisation.
              </p>
            </Link>{' '}
            <Link className="offer-card" to="/offerings">
              <span className="tag tag-dark">FPSL · RAR · RE-FX</span>
              <h3>SAP Subledger</h3>
              <p>
                Consulting on SAP subledger solutions including FPSL, FSDP, RAR and RE-FX, and industry solutions for
                Insurance &amp; Banking.
              </p>
            </Link>{' '}
            <Link className="offer-card" to="/offerings">
              <span className="tag tag-dark">S/4HANA</span>
              <h3>S/4HANA</h3>
              <p>Consulting and advisory services on Finance and other support functions on S/4HANA.</p>
            </Link>{' '}
            <Link className="offer-card" to="/offerings">
              <span className="tag tag-dark">BTP</span>
              <h3>SAP BTP</h3>
              <p>As an SAP build partner, we develop on SAP BTP, including integration, workflow and iRPA solutions.</p>
            </Link>{' '}
            <Link className="offer-card" to="/offerings">
              <span className="tag tag-dark">DATA · MIGRATION</span>
              <h3>Data Migration</h3>
              <p>Master and transaction data migration, with full reconciliation.</p>
            </Link>
          </div>
          <p className="home-offer-more">
            <Link to="/offerings" className="insight-link">
              View all offerings →
            </Link>
          </p>
          <div className="home-route-grid">
            <Link className="home-route-card" to="/accelerators">
              <h3>Accelerators</h3>
              <p>We help clients speed up their finance transformation journey with our reusable accelerators.</p>
              <span className="home-route-link">Read more →</span>
            </Link>{' '}
            <Link className="home-route-card" to="/coverage">
              <h3>SAP solution coverage</h3>
              <p>
                Coverage across key SAP solution areas, including the process &amp; controls framework that
                implementation success depends on.
              </p>
              <span className="home-route-link">Read more →</span>
            </Link>{' '}
            <Link className="home-route-card" to="/stories">
              <h3>Industry &amp; regulatory coverage</h3>
              <p>
                Our solution team has deep industry and regulatory compliance experience, using SAP as the platform.
              </p>
              <span className="home-route-link">Read more →</span>
            </Link>
          </div>
        </div>
      </section>
      {/* HOME: ACCELERATORS TEASER (links to accelerators.html) */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head home-head-row">
            <div>
              <p className="eyebrow">Accelerators</p>
              <h2>Built to shorten the slow parts of a finance transformation.</h2>
            </div>
            <Link to="/accelerators" className="btn btn-ghost">
              Explore accelerators
            </Link>
          </div>
          <div className={`home-accel-points${accelPlay}`} id="home-accel-points" ref={accelRef}>
            <div className="home-accel-point">
              <h3>Blueprinting</h3>
            </div>
            <span className="home-accel-arrow" aria-hidden="true">
              <svg viewBox="0 0 120 24" focusable="false">
                <path className="arrow-line" d="M2 12 H112" />
                <path className="arrow-head" d="M104 4 L114 12 L104 20" />
              </svg>
            </span>
            <div className="home-accel-point">
              <h3>Data migration &amp; reconciliation</h3>
            </div>
            <span className="home-accel-arrow" aria-hidden="true">
              <svg viewBox="0 0 120 24" focusable="false">
                <path className="arrow-line" d="M2 12 H112" />
                <path className="arrow-head" d="M104 4 L114 12 L104 20" />
              </svg>
            </span>
            <div className="home-accel-point">
              <h3>Testing &amp; cutover</h3>
            </div>
          </div>
        </div>
      </section>
      {/* HOME: COVERAGE (links to coverage.html) — industries now live in the client stories showcase below */}
      <section className="section">
        <div className="wrap">
          <div className="section-head home-head-row">
            <div>
              <p className="eyebrow">SAP Solution Coverage</p>
              <h2>Coverage across the areas that make a programme land.</h2>
            </div>
            <Link to="/coverage" className="btn btn-ghost">
              See full coverage
            </Link>
          </div>
          {/* Simple coverage row: items fade in one by one along a line that draws across */}
          <ol className={`cov-steps${covPlay}`} id="cov-steps" ref={covRef}>
            <li>
              <span className="cov-step-dot" />
              <span className="cov-num">01</span>
              <h3>Finance &amp; regulatory reporting</h3>
            </li>
            <li>
              <span className="cov-step-dot" />
              <span className="cov-num">02</span>
              <h3>Process &amp; controls framework</h3>
            </li>
            <li>
              <span className="cov-step-dot" />
              <span className="cov-num">03</span>
              <h3>Performance management</h3>
            </li>
            <li>
              <span className="cov-step-dot" />
              <span className="cov-num">04</span>
              <h3>Customer experience</h3>
            </li>
            <li>
              <span className="cov-step-dot" />
              <span className="cov-num">05</span>
              <h3>Industry &amp; regulatory compliance</h3>
            </li>
          </ol>
        </div>
      </section>
      {/* HOME: LEADERSHIP STRIP (links to about.html#team) */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head home-head-row">
            <div>
              <p className="eyebrow">Our Team</p>
              <h2>The people behind the work.</h2>
            </div>
            <Link to="/about#team" className="btn btn-ghost">
              Meet the team
            </Link>
          </div>
          <ul className="home-team">
            <li>
              <Link to="/about#team">
                <img src="/assets/team/rishab-bucha.png" alt="" loading="lazy" />
                <span className="team-name">Rishab Bucha</span>
                <span className="team-role">Founder &amp; Managing Director</span>
              </Link>
            </li>
            <li>
              <Link to="/about#team">
                <img src="/assets/team/manjula-pasala.png" alt="" loading="lazy" />
                <span className="team-name">Manjula Pasala</span>
                <span className="team-role">Business Development &amp; Partnerships</span>
              </Link>
            </li>
            <li>
              <Link to="/about#team">
                <img src="/assets/team/kalai-vani.png" alt="" loading="lazy" />
                <span className="team-name">Kalai Vani</span>
                <span className="team-role">SAP Finance &amp; Operations Lead</span>
              </Link>
            </li>
            <li>
              <Link to="/about#team">
                <img src="/assets/team/agilan-s.png" alt="" loading="lazy" />
                <span className="team-name">Agilan S</span>
                <span className="team-role">SAP Solution Lead</span>
              </Link>
            </li>
            <li>
              <Link to="/about#team">
                <img src="/assets/team/vignesh-k.jpg" alt="" loading="lazy" />
                <span className="team-name">Vignesh K</span>
                <span className="team-role">SAP Delivery Lead</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* HOME: CLIENT STORIES SHOWCASE (links to stories.html) */}
      <section className="section section-dark home-stories" aria-labelledby="home-stories-title">
        <div className="wrap">
          <div className="section-head home-head-row">
            <div>
              <p className="eyebrow">Client Stories</p>
              <h2 id="home-stories-title">Real problems. Measurable outcomes.</h2>
            </div>
            <Link to="/stories" className="btn btn-ghost">
              All client stories
            </Link>
          </div>
          <Showcase />
          <div className="home-stories-industries">
            <p className="home-stories-industries-label">Industries we work in</p>
            <div className="home-stories-industry-grid">
              <Link className="home-stories-industry" to="/stories">
                <h3>Financial services</h3>
                <p>Subledger and regulatory reporting (FPSL, RAR) for insurers, banks and auto financers.</p>
              </Link>{' '}
              <Link className="home-stories-industry" to="/stories">
                <h3>Manufacturing</h3>
                <p>S/4HANA stabilisation, Controlling and margin reporting across MTO, MTS and ETO.</p>
              </Link>{' '}
              <Link className="home-stories-industry" to="/stories">
                <h3>Technology, services &amp; media</h3>
                <p>BTP integration, onboarding automation and S/4HANA business cases.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* INSIGHTS: BLOG / NEWS TABS */}
      <section className="section" id="insights">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">News &amp; Insights</p>
            <h2>Notes on SAP finance transformation.</h2>
            <p className="section-sub">
              Sample entries below replace with real posts before publishing. Until then, our live updates run on
              LinkedIn.
            </p>
          </div>
          <Tabs
            id="insights-tabs"
            label="Insights category"
            tabs={[
              {
                id: 'blog',
                label: 'Blog',
                content: (
                  <div className="insight-grid">
                    <article className="insight-card">
                      <span className="tag tag-dark">Blog · SAP BTP &amp; AI</span>
                      <h3>
                        <Link to="/blog-ai-agents-sap-btp">
                          From static reports to conversational insight: AI agents on SAP BTP
                        </Link>
                      </h3>
                      <p className="insight-excerpt">
                        How we built a project revenue assistant that answers "actual vs. plan — and why?" in seconds,
                        straight from SAP ECC and BW data, with SAP's own authorizations and a full HANA audit trail.
                      </p>
                      <Link className="insight-link" to="/blog-ai-agents-sap-btp">
                        Read the full post →
                      </Link>
                    </article>
                    <article className="insight-card">
                      <span className="tag tag-dark">Blog · Banking &amp; Regulatory</span>
                      <h3>
                        <Link to="/blog-banking-subledger">
                          The banking subledger imperative: navigating regulatory change
                        </Link>
                      </h3>
                      <p className="insight-excerpt">
                        IFRS 18, BCBS 239, IFRS 9 and IFRS 17 are pushing banks beyond what the GL can do. We compare
                        SAP FPSL, Aptitude, Oracle and data lakes — and make the case for SAP PAPM ARE on BTP.
                      </p>
                      <Link className="insight-link" to="/blog-banking-subledger">
                        Read the full post →
                      </Link>
                    </article>
                    <article className="insight-card">
                      <span className="tag tag-dark">Blog · Quick Tip</span>
                      <h3>
                        <Link to="/blog-joule-s4hana-tip">Quick tip: Joule for S/4HANA Public Cloud</Link>
                      </h3>
                      <p className="insight-excerpt">
                        Joule not answering? Make sure your business roles are "Exposed to BTP" — it's off by default —
                        then run the identity provisioning job in BTP.
                      </p>
                      <Link className="insight-link" to="/blog-joule-s4hana-tip">
                        Read the full post →
                      </Link>
                    </article>
                    <article className="insight-card">
                      <span className="tag tag-dark">Blog · Sample</span>
                      <h3>What actually slows down a Central Finance go-live</h3>
                      <ReadMore more="Getting finance and functional teams aligned on mapping rules before realization starts is usually the highest-leverage fix.">
                        Most CFIN delays trace back to source-system mapping decisions made too late, not the technical
                        build itself.
                      </ReadMore>
                    </article>
                  </div>
                ),
              },
              {
                id: 'news',
                label: 'News',
                content: (
                  <div className="insight-grid">
                    {/* <article class="insight-card">
              <span class="tag tag-dark">News · Sample</span>
              <h3>Aricord placeholder announcement</h3>
              <p class="insight-excerpt">Replace this card with a real update — a new engagement, an SAP partnership milestone, or a team announcement.</p>
              <button class="read-more" type="button">Read more</button>
            </article>
            <article class="insight-card">
              <span class="tag tag-dark">News · Sample</span>
              <h3>SAP ecosystem update — placeholder</h3>
              <p class="insight-excerpt">Use this slot for genuine SAP ecosystem news relevant to your clients, sourced and dated when you publish.</p>
              <button class="read-more" type="button">Read more</button>
            </article> */}
                    <article className="insight-card">
                      <span className="tag tag-dark">Event · Sep 2026</span>
                      <h3>
                        <a
                          href="https://www.linkedin.com/posts/aricordconsultinglimited_aricord-sapinsidetrack-sapcommunity-activity-7510329681825603584-tfJQ"
                          target="_blank"
                          rel="noopener"
                        >
                          Team Aricord at SAP Inside Track Bengaluru
                        </a>
                      </h3>
                      <p className="insight-excerpt">
                        A day of learning and connecting with the SAP community — SAP Business AI and AI agents, Joule,
                        SAP BTP, Business Data Cloud and Clean Core.
                      </p>
                      <a
                        className="insight-link"
                        href="https://www.linkedin.com/posts/aricordconsultinglimited_aricord-sapinsidetrack-sapcommunity-activity-7510329681825603584-tfJQ"
                        target="_blank"
                        rel="noopener"
                      >
                        See the post on LinkedIn ↗
                      </a>
                    </article>
                  </div>
                ),
              },
            ]}
          />
          <div className="insight-links">
            <Link className="insight-link" to="/news">
              Visit the full News Center →
            </Link>{' '}
            <a
              className="insight-link"
              href="https://www.linkedin.com/company/aricordconsultinglimited/"
              target="_blank"
              rel="noopener"
            >
              Follow our live updates on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
      {/* HOME: CAREERS + CONTACT CTA (links to careers.html and contact.html) */}
      <section className="section section-dark home-cta">
        <div className="wrap home-cta-grid">
          <Link className="home-cta-card" to="/contact">
            <p className="eyebrow">Contact</p>
            <h2>Tell us where your programme stands.</h2>
            <p>A short note is enough: team size, SAP landscape, and what's not working yet.</p>
            <span className="btn btn-primary">Talk to an expert</span>
          </Link>{' '}
          <Link className="home-cta-card" to="/careers">
            <p className="eyebrow">Careers</p>
            <h2>We grow deliberately, not fast.</h2>
            <p>
              A small, senior team by design. If SAP finance transformation is your thing (implementation, AMS or data
              migration), we'd like to hear from you.
            </p>
            <span className="btn btn-ghost">View careers</span>
          </Link>
        </div>
      </section>
    </>
  );
}
