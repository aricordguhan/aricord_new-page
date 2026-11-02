import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> About
          </p>
          <h1>About</h1>
          <p className="page-hero-sub">Who we are, what drives us, and the team behind Aricord.</p>
        </div>
      </section>
      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="section-head">
            <h2>Deep expertise. A clear focus.</h2>
          </div>
          <div className="about-grid about-grid-solo">
            <div className="about-copy">
              <p>
                Aricord is built around a simple idea: the best results come from people who truly understand the
                problem. Our team brings together deep experience in finance, accounting, regulation and SAP, helping
                organisations navigate complex transformation with greater clarity and confidence.
              </p>
              <p>
                From S/4HANA and Central Finance to regulatory reporting, BTP and AI, we bring the right expertise at
                every stage from shaping the solution through to implementation and go-live. We keep things practical,
                stay close to our clients, and focus on solutions that work in the real world, not just on paper. 150+
                years of combined experience. Specialist knowledge. Results that matter.{' '}
              </p>
              <div className="mission-vision">
                <div>
                  <h3>Mission</h3>
                  <p>
                    To make complex finance transformation simpler by bringing the right expertise, technology and
                    people together.{' '}
                  </p>
                </div>
                <div>
                  <h3>Vision</h3>
                  <p>Make the complex feel remarkably simple.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TEAM */}
      <section className="section section-alt" id="team">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">OUR TEAM</p>
            <h2>Expertise starts with the right people.</h2>
            {/* <p class="section-sub">The "goal" lines below are placeholders for Rishab, Manjula and Kalai — swap in each person's own line before publishing.</p> */}
          </div>
          <ul className="team-grid" aria-label="Leadership team">
            <li className="team-card">
              <div className="team-photo team-photo-1">
                <img className="team-photo-fit" src="assets\\team\\rishab-bucha.png" alt="Rishab Bucha" />
              </div>
              <p className="team-name">Rishab Bucha</p>
              <p className="team-role">Founder &amp; Managing Director</p>
              <ul className="team-tags" aria-label="Skills">
                <li>SAP Finance</li>
                <li>Strategy</li>
                <li>Leadership</li>
              </ul>
              {/* <p class="team-goal">“Scaling Aricord into the go-to boutique for SAP finance transformation.”</p> */}
              <a
                className="team-link"
                href="https://www.linkedin.com/in/rishab-bucha-9b880a14/"
                target="_blank"
                rel="noopener"
              >
                <svg className="team-li-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>{' '}
                View LinkedIn ↗
              </a>
            </li>
            {/* <li class="team-card">
          <div class="team-photo team-photo-2">
            <img src="assets/team/ajith-pais.jpg" alt="Ajith Pais">
          </div>
          <p class="team-name">Ajith Pais</p>
          <p class="team-role">Engagement Director</p>
          <p class="team-goal">“Every client engagement should end in a cleaner close than it started.”</p>
          <a href="https://www.linkedin.com/in/ajith-pais-b746616/" target="_blank" rel="noopener">LinkedIn ↗</a>
        </li> */}
            <li className="team-card">
              <div className="team-photo team-photo-3">
                <img src="assets\\team\\manjula-pasala.png" alt="Manjula Pasala" />
              </div>
              <p className="team-name">Manjula Pasala</p>
              <p className="team-role">Business Development &amp; Partnerships</p>
              <ul className="team-tags" aria-label="Skills">
                <li>Partnerships</li>
                <li>Growth</li>
                <li>Client Success</li>
              </ul>
              {/* <p class="team-goal">“Matching the right SAP finance capability to the right client, early.”</p> */}
              <a className="team-link" href="https://www.linkedin.com/in/manjulapasala/" target="_blank" rel="noopener">
                <svg className="team-li-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>{' '}
                View LinkedIn ↗
              </a>
            </li>
            <li className="team-card">
              <div className="team-photo team-photo-4">
                <img src="assets\\team\\kalai-vani.png" alt="Kalai Vani" />
              </div>
              <p className="team-name">Kalai Vani</p>
              <p className="team-role">SAP Finance &amp; Operations Lead</p>
              <ul className="team-tags" aria-label="Skills">
                <li>SAP FICO</li>
                <li>Finance Ops</li>
                <li>Delivery</li>
              </ul>
              {/* <p class="team-goal">“Keeping India delivery predictable enough that clients stop thinking about time zones.”</p> */}
              <a
                className="team-link"
                href="https://www.linkedin.com/in/kalaivani-elanchezian-b719051a/"
                target="_blank"
                rel="noopener"
              >
                <svg className="team-li-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>{' '}
                View LinkedIn ↗
              </a>
            </li>
            {/* <li class="team-card">
          <div class="team-photo team-photo-5">
            <img src="assets/team/shanthini-j.jpg" alt="Shanthini J">
          </div>
          <p class="team-name">Shanthini J</p>
          <p class="team-role">Aricord team member</p>
          <p class="team-goal">Connect with Shanthini and learn more about her experience on LinkedIn.</p>
          <a href="https://www.linkedin.com/in/shanthini-j-0a351a30b" target="_blank" rel="noopener">LinkedIn ↗</a>
        </li> */}

            {/* <li class="team-card">
          <div class="team-photo team-photo-6">
            <img src="assets/team/dharani-dharan-n.jpg" alt="Dharani Dharan N">
          </div>
          <p class="team-name">Dharani Dharan N</p>
          <p class="team-role">Aricord team member</p>
          <p class="team-goal">Connect with Dharani and learn more about his experience on LinkedIn.</p>
          <a href="https://www.linkedin.com/in/dharani-dharan-n-18j2/" target="_blank" rel="noopener">LinkedIn ↗</a>
        </li> */}
            <li className="team-card">
              <div className="team-photo team-photo-7">
                <img src="assets\\team\\agilan-s.png" alt="Agilan S" />
              </div>
              <p className="team-name">Agilan S</p>
              <p className="team-role">SAP solution lead </p>
              <ul className="team-tags" aria-label="Skills">
                <li>SAP S/4HANA</li>
                <li>Integration</li>
                <li>Delivery</li>
              </ul>
              {/* <p class="team-goal">Connect with Agilan and learn more about his experience on LinkedIn.</p> */}
              <a
                className="team-link"
                href="https://www.linkedin.com/in/agilan-s-149822292/"
                target="_blank"
                rel="noopener"
              >
                <svg className="team-li-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>{' '}
                View LinkedIn ↗
              </a>
            </li>
            <li className="team-card">
              <div className="team-photo team-photo-8">
                <img src="/assets/team/vignesh-k.jpg" alt="Vignesh K" />
              </div>
              <p className="team-name">Vignesh K</p>
              <p className="team-role">SAP Delivery Lead</p>
              <ul className="team-tags" aria-label="Skills">
                <li>SAP S/4HANA</li>
                <li>Finance</li>
                <li>Project Delivery</li>
              </ul>
              {/* <p class="team-goal">Connect with Vignesh and learn more about his experience on LinkedIn.</p> */}
              <a className="team-link" href="https://www.linkedin.com/in/vignesh-k137" target="_blank" rel="noopener">
                <svg className="team-li-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>{' '}
                View LinkedIn ↗
              </a>
            </li>
            {/* <li class="team-card">
          <div class="team-photo team-photo-9">
            <img src="assets/team/suryaprakash-m.jpg" alt="Suryaprakash M">
          </div>
          <p class="team-name">Suryaprakash M</p>
          <p class="team-role">Aricord team member</p>
          <p class="team-goal">Connect with Suryaprakash and learn more about his experience on LinkedIn.</p>
          <a href="https://www.linkedin.com/in/suryaprakashm1" target="_blank" rel="noopener">LinkedIn ↗</a>
        </li> */}

            {/* <li class="team-card">
          <div class="team-photo team-photo-10">
            <img src="assets/team/sarla-baddela.jpg" alt="Sarla Baddela">
          </div>
          <p class="team-name">Sarla Baddela</p>
          <p class="team-role">Aricord team member</p>
          <p class="team-goal">Connect with Sarla and learn more about her experience on LinkedIn.</p>
          <a href="https://www.linkedin.com/in/sarla-baddela-7002b321b/" target="_blank" rel="noopener">LinkedIn ↗</a>
        </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}
