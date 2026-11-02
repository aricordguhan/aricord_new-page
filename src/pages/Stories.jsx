import { Link } from 'react-router-dom';
import CountUp from '../components/CountUp';
import { StoryCard, StoryList } from '../components/StoryList';

export default function Stories() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Client Stories
          </p>
          <h1>Client Stories</h1>
          <p className="page-hero-sub">How we've helped finance teams stabilise, simplify and transform with SAP.</p>
        </div>
      </section>
      {/* IMPACT BAND */}
      <section className="section section-dark stories-impact" aria-label="Results at a glance">
        <div className="wrap">
          <ul className="impact-grid">
            <li>
              <strong>
                <CountUp target={50} />%
              </strong>
              <span>faster month-end close for a Fortune 500 auto financer</span>
            </li>
            <li>
              <strong>
                <CountUp target={40} />%
              </strong>
              <span>reduction in reporting times after a chart of accounts redesign</span>
            </li>
            <li>
              <strong>
                <CountUp target={40} />%
              </strong>
              <span>improvement in margin accuracy for a large manufacturer</span>
            </li>
            <li>
              <strong>
                <CountUp target={50} />%
              </strong>
              <span>fewer onboarding support tickets for a SaaS provider</span>
            </li>
          </ul>
        </div>
      </section>
      {/* CLIENT STORIES */}
      <section className="section section-alt" id="stories">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Selected engagements</p>
            <h2>Real problems. Measurable outcomes.</h2>
            <p className="section-sub">
              A selection of engagements across S/4HANA Finance, subledger and regulatory solutions, and SAP BTP. Client
              names are withheld for confidentiality.
            </p>
          </div>
          <StoryList>
            <StoryCard
              id="story-1"
              areas={['s4']}
              tag="S/4HANA · CO"
              sector="Manufacturing"
              title="SAP S/4HANA transformation success: enhancing manufacturing efficiency at scale"
              summary="A large manufacturer was facing stability issues after its SAP S/4HANA migration. We helped strengthen operations across Make-To-Order, Make-To-Stock, Engineer-To-Order and margin reporting."
              metrics={[
                { count: 30, suffix: '%', label: 'reduction in process cycle time', bar: 30 },
                { count: 40, suffix: '%', label: 'improvement in margin accuracy', bar: 40 },
              ]}
            >
              <div className="story-steps">
                <div className="story-step">
                  <p className="story-step-label">Challenge</p>
                  <p>
                    The client struggled to integrate diverse manufacturing processes with SAP S/4HANA. Inefficiencies
                    in MTO, MTS and ETO, and inaccurate margin reporting, caused operational delays and financial
                    inaccuracies.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Our solution</p>
                  <p>
                    We deployed a specialist team to stabilise the migration, built tailored solutions for MTO, MTS and
                    ETO processes, and implemented advanced analytics for precise margin reporting.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Outcomes</p>
                  <ul className="story-outcomes">
                    <li>Long-pending SAP Controlling issues resolved, restoring confidence in financial figures</li>
                    <li>30% reduction in process cycle time</li>
                    <li>40% improvement in margin accuracy</li>
                    <li>Better decisions through real-time analytics</li>
                    <li>A stable SAP S/4HANA environment</li>
                  </ul>
                </div>
              </div>
              <p className="story-closing">
                The client reported significant operational improvements and high satisfaction, with a robust foundation
                for future scalability.
              </p>
            </StoryCard>

            <StoryCard
              id="story-2"
              areas={['s4']}
              tag="S/4HANA · FI"
              sector="Multinational corporation"
              title="Transforming finance: a journey to stronger financial controls and efficiency"
              summary="We partnered with a multinational corporation moving to SAP S/4HANA, with a comprehensive redesign of its chart of accounts and controls built in from the start."
              metrics={[
                { count: 40, suffix: '%', label: 'reduction in reporting times', bar: 40 },
                { count: 3, suffix: ' months', label: 'end-to-end transformation' },
              ]}
            >
              <div className="story-steps">
                <div className="story-step">
                  <p className="story-step-label">Challenge</p>
                  <p>
                    An outdated, over-complicated chart of accounts led to inefficient transaction processing, reporting
                    delays and compliance risk.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Our solution</p>
                  <p>
                    After a detailed analysis of the client's financial structure, we designed a streamlined chart of
                    accounts integrated with SAP S/4HANA, backed by control mechanisms for accuracy, compliance and
                    real-time reporting.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Outcomes</p>
                  <ul className="story-outcomes">
                    <li>40% reduction in reporting times</li>
                    <li>Improved transactional accuracy</li>
                    <li>Significantly lower compliance risk</li>
                    <li>Higher satisfaction among finance teams and external stakeholders</li>
                  </ul>
                </div>
              </div>
            </StoryCard>

            <StoryCard
              id="story-3"
              areas={['subledger']}
              tag="SAP RAR"
              sector="Global consulting firm"
              title="IFRS 16 migration success: empowering a consulting giant with SAP RAR"
              summary="We implemented SAP Revenue Accounting and Reporting for a leading global consulting firm, moving its lease accounting onto an integrated, compliant platform."
              metrics={[
                { count: 9, suffix: ' months', label: 'delivered within the projected timeline' },
                { text: 'Full', label: 'compliance with IFRS 15 standards' },
              ]}
            >
              <div className="story-steps">
                <div className="story-step">
                  <p className="story-step-label">Challenge</p>
                  <p>
                    Extensive lease portfolios across many countries, each with different accounting rules. Without
                    integrated systems, manual data entry drove errors and compliance risk.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Our solution</p>
                  <p>
                    We analysed existing lease management processes, then designed and implemented a tailored SAP RAR
                    solution that automates lease data collection, calculation and reporting, fully integrated with SAP
                    S/4HANA.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Outcomes</p>
                  <ul className="story-outcomes">
                    <li>Completed within the projected 9-month timeframe</li>
                    <li>Significant reduction in manual workload</li>
                    <li>Increased reporting accuracy and transparency</li>
                    <li>Full compliance with IFRS 15 standards</li>
                    <li>Stronger data integrity and financial control</li>
                  </ul>
                </div>
              </div>
            </StoryCard>

            <StoryCard
              id="story-4"
              areas={['subledger', 's4', 'btp']}
              tag="FPSL · BTP"
              sector="Auto finance · Fortune 500"
              title="A Fortune 500 auto financer's journey to financial transformation with SAP S/4HANA"
              summary="An auto financing company was held back by a legacy subledger: inefficient processes, no real-time data and regulatory reporting gaps. We delivered a modern subledger on SAP S/4HANA, FPSL and BTP."
              metrics={[
                { count: 50, suffix: '%', label: 'reduction in month-end closing times', bar: 50 },
                { count: 30, suffix: '%', label: 'reduction in audit times', bar: 30 },
              ]}
            >
              <div className="story-steps">
                <div className="story-step">
                  <p className="story-step-label">Challenge</p>
                  <p>
                    Outdated legacy systems were limiting operational efficiency and regulatory reporting. The firm
                    needed a modern solution to streamline processes, ensure compliance and support better decisions.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Our solution</p>
                  <ul className="story-outcomes">
                    <li>
                      <b>Planning &amp; assessment</b> of current financial processes and requirements
                    </li>
                    <li>
                      <b>Custom implementation</b> of SAP S/4HANA and SAP FPSL for auto financing and regulatory needs
                    </li>
                    <li>
                      <b>Data migration &amp; validation</b> from legacy systems
                    </li>
                    <li>
                      <b>Training &amp; support</b> for the client's team
                    </li>
                  </ul>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Outcomes</p>
                  <ul className="story-outcomes">
                    <li>50% reduction in month-end closing times</li>
                    <li>Real-time regulatory reporting</li>
                    <li>30% reduction in audit times</li>
                  </ul>
                </div>
              </div>
            </StoryCard>

            <StoryCard
              id="story-5"
              areas={['btp']}
              tag="BTP · AI"
              sector="SaaS provider"
              title="Streamlining customer onboarding for a leading SaaS solution provider"
              summary="Complex ERP integrations were slowing down onboarding for new customers. We used SAP S/4HANA and SAP BTP to automate integration, adding conversational AI and machine learning to guide users and head off issues."
              metrics={[
                { count: 40, suffix: '%', label: 'faster onboarding — 5 weeks down to 3', bar: 40 },
                { count: 20, suffix: '%', label: 'increase in annual revenue', bar: 20 },
              ]}
            >
              <div className="story-steps">
                <div className="story-step">
                  <p className="story-step-label">Challenge</p>
                  <p>
                    Long implementation times were hurting customer satisfaction. Integrating with each new customer's
                    ERP system was complex and time-consuming.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Our solution</p>
                  <p>
                    We automated ERP integration to cut manual intervention, introduced conversational AI to guide users
                    through onboarding, and applied machine learning to predict and resolve integration issues.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Outcomes</p>
                  <ul className="story-outcomes">
                    <li>40% reduction in onboarding time (5 weeks to 3)</li>
                    <li>30% increase in customer satisfaction</li>
                    <li>50% fewer onboarding support tickets</li>
                    <li>20% increase in annual revenue</li>
                  </ul>
                </div>
              </div>
            </StoryCard>

            <StoryCard
              id="story-6"
              areas={['s4']}
              tag="S/4HANA · ADVISORY"
              sector="Publishing"
              title="Transformation journey for a leading publishing client to SAP S/4HANA"
              summary="A prominent publisher needed to modernise legacy systems to meet real-time reporting and evolving regulatory requirements. We shaped the case for moving to SAP S/4HANA."
              metrics={[{ text: 'Approved', label: 'business case for S/4HANA successfully presented' }]}
            >
              <div className="story-steps">
                <div className="story-step">
                  <p className="story-step-label">Challenge</p>
                  <p>
                    Outdated systems limited efficiency and agility, while real-time financial reporting needs and
                    changing regulation made an upgrade essential.
                  </p>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Our solution</p>
                  <ul className="story-outcomes">
                    <li>Detailed assessment of existing systems and processes</li>
                    <li>Value drivers and business case for the S/4HANA migration</li>
                  </ul>
                </div>
                <div className="story-step">
                  <p className="story-step-label">Outcomes</p>
                  <p>
                    The business case was successfully presented. The client praised our understanding of their
                    processes and of S/4HANA's capabilities.
                  </p>
                </div>
              </div>
            </StoryCard>
          </StoryList>
        </div>
      </section>
      {/* FEATURED QUOTE */}
      <section className="section stories-quote-section">
        <div className="wrap">
          <figure className="stories-quote">
            <span className="stories-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>
                The partnership with Aricord Consulting has been transformative for our business. Their innovative
                approach to streamlining customer onboarding improved operational efficiency and elevated the customer
                experience. Their SAP expertise and dedication to our success were evident throughout.
              </p>
            </blockquote>
            <figcaption>Leading SaaS solution provider</figcaption>
          </figure>
        </div>
      </section>
      {/* INDUSTRIES + CTA */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>Industries we work in.</h2>
          </div>
          <div className="industry-grid">
            <div className="industry-card">
              <h3>Financial services</h3>
              <p>
                Subledger, regulatory reporting and finance transformation (FPSL, RAR) for insurers, banks and auto
                financers.
              </p>
            </div>
            <div className="industry-card">
              <h3>Manufacturing</h3>
              <p>
                S/4HANA stabilisation, Controlling and margin reporting across make-to-order, make-to-stock and
                engineer-to-order.
              </p>
            </div>
            <div className="industry-card">
              <h3>Technology, services &amp; media</h3>
              <p>
                BTP integration, onboarding automation and S/4HANA business cases for SaaS, consulting and publishing
                clients.
              </p>
            </div>
          </div>
          <p className="stories-note">
            Want detail on a specific engagement? <Link to="/contact">Get in touch</Link> and we'll walk you through
            relevant work.
          </p>
        </div>
      </section>
    </>
  );
}
