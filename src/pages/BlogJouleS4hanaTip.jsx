import { Link } from 'react-router-dom';

export default function BlogJouleS4hanaTip() {
  return (
    <>
      {/* BLOG POST HERO */}
      <section className="news-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/news">News</Link> <span>/</span> Blog
          </p>
          <p className="eyebrow">Blog · Quick Tip</p>
          <h1>Quick tip: Joule for S/4HANA Public Cloud</h1>
          <p className="news-hero-sub">Joule not answering — or not responding at all? Check your roles first.</p>
        </div>
      </section>
      {/* BLOG POST BODY */}
      <section className="section">
        <div className="wrap">
          <article className="post">
            <figure className="post-media news-lead-media news-media-3">
              <img
                className="news-media-photo"
                src="/assets/news/btp-cloud.jpg"
                alt="Cloud imagery, representing SAP S/4HANA Public Cloud and SAP BTP"
              />
            </figure>
            <p className="news-byline">Rishab Bucha, Aricord Consulting · 19 December 2025 · 2 min read</p>
            <aside className="post-keypoints" aria-label="Key takeaways">
              <h2>The short version</h2>
              <ul>
                <li>
                  If Joule is silent or unhelpful, the cause is often <strong>role setup</strong>, not Joule itself.
                </li>
                <li>
                  In <strong>Maintain Business Roles</strong>, tick <strong>"Exposed to BTP"</strong> — it is usually{' '}
                  <strong>not ticked by default</strong>.
                </li>
                <li>
                  Run the <strong>identity provisioning job</strong> in your BTP instance, then confirm the roles appear
                  in <strong>SAP Build Work Zone</strong>.
                </li>
              </ul>
            </aside>
            <p>
              You've got a public cloud instance, set up BTP, activated the services — and yet Joule sometimes doesn't
              provide the answer, or doesn't even respond.
            </p>
            <p>
              How rude! If this is happening to you, work through the steps below to check your roles are set up
              correctly.
            </p>
            <h2>Four checks to get Joule talking</h2>
            <ol className="post-steps">
              <li>
                <h3>Test with key navigation</h3>
                <p>
                  Open Joule and ask it to navigate to a key app. If the Joule instance comes up with the navigation,
                  the connection is working — this is always a good first test.
                </p>
              </li>
              <li>
                <h3>Open Maintain Business Roles</h3>
                <p>
                  In S/4HANA Public Cloud, go to the <strong>Maintain Business Roles</strong> app and open the business
                  roles your users are assigned.
                </p>
              </li>
              <li>
                <h3>Tick "Exposed to BTP"</h3>
                <p>
                  For each relevant role, make sure <strong>Exposed to BTP</strong> is checked. This is generally{' '}
                  <strong>not checked by default</strong> — and without it, Joule can't see what the user is allowed to
                  do.
                </p>
              </li>
              <li>
                <h3>Run the identity provisioning job</h3>
                <p>
                  Go to your <strong>SAP BTP</strong> instance and run the identity access (Identity Provisioning) job
                  to update the role details. Then confirm the roles show up in Identity Provisioning and in your{' '}
                  <strong>SAP Build Work Zone</strong>.
                </p>
              </li>
            </ol>
            <blockquote className="post-quote">
              Joule is not being rude — maybe it just doesn't know the role you are playing.
            </blockquote>
            <div className="post-cta">
              <p>
                Aricord Consulting helps teams get SAP S/4HANA Public Cloud, SAP BTP and Joule working together. Stuck
                on a setup issue? We're happy to help.
              </p>
              <div className="post-cta-actions">
                <Link className="btn btn-primary" to="/contact">
                  Talk to us
                </Link>{' '}
                <a
                  className="insight-link"
                  href="https://www.linkedin.com/pulse/quick-tip-joule-s4hana-public-cloud-aricordconsultinglimited-mbfhe/"
                  target="_blank"
                  rel="noopener"
                >
                  See the original (with screenshots) on LinkedIn ↗
                </a>
              </div>
            </div>
            <p className="post-back">
              <Link className="insight-link" to="/news">
                ← Back to the News Center
              </Link>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
