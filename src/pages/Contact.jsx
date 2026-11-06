import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> Contact
          </p>
          <h1>Contact</h1>
          <p className="page-hero-sub">Talk to an SAP finance specialist about your programme.</p>
        </div>
      </section>
      {/* CONTACT */}
      <section className="section section-dark" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-intro">
            <h2>Tell us where your programme stands.</h2>
            <p className="section-sub">
              A short note is enough — team size, SAP landscape, and what's not working yet.
            </p>
            <div className="contact-people">
              <div className="contact-person">
                <p className="team-name">Rishab Bucha — Founder</p>
                <div className="contact-links">
                  <a href="tel:+447774754095" aria-label="Call Rishab Bucha">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>{' '}
                    +44 (0) 7774 754095{' '}
                  </a>{' '}
                  <a href="mailto:Rishab.Bucha@aricord.com" aria-label="Email Rishab Bucha">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>{' '}
                    Rishab.Bucha@aricord.com{' '}
                  </a>
                </div>
              </div>
              {/* <div class="contact-person">
            <p class="team-name">Ajith Pais — Engagement Director</p>
            <a href="tel:+447534014268">+44 (0) 7534 014268</a>
          </div> */}
            </div>
            <div className="social-row">
              <a
                href="https://web.whatsapp.com/send?phone=+447774754095"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>{' '}
              <a
                href="https://www.linkedin.com/company/aricordconsultinglimited/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>{' '}
              <a href="https://twitter.com/Aricord_consltg" target="_blank" rel="noopener" aria-label="X / Twitter">
                X / Twitter
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
