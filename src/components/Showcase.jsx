import { useEffect, useRef, useState } from 'react';
import { animateCount, prefersReducedMotion, useInView } from '../hooks/motion';

const STORIES = [
  {
    sector: 'Auto finance · Fortune 500',
    tab: 'Subledger transformation',
    value: 50,
    metric: 'faster month-end close',
    tags: ['S/4HANA', 'FPSL', 'BTP'],
    title: "A Fortune 500 auto financer's move to a modern subledger",
    challenge: 'Legacy subledger with no real-time data and regulatory reporting gaps.',
    solution: 'SAP S/4HANA and FPSL tailored to auto finance, with secure data migration and team training.',
    result: '50% shorter month-end close and 30% shorter audits through real-time reporting.',
  },
  {
    sector: 'Manufacturing',
    tab: 'S/4HANA stabilisation',
    value: 40,
    metric: 'better margin accuracy',
    tags: ['S/4HANA', 'CONTROLLING'],
    title: 'Stabilising S/4HANA for a large manufacturer',
    challenge: 'Post-migration instability across MTO, MTS and ETO, with unreliable margin reporting.',
    solution: 'A specialist team, tailored process fixes and advanced analytics for margin reporting.',
    result: '30% shorter process cycle time and restored confidence in the numbers.',
  },
  {
    sector: 'Multinational corporation',
    tab: 'Chart of accounts redesign',
    value: 40,
    metric: 'faster reporting',
    tags: ['S/4HANA', 'FINANCE'],
    title: 'Stronger financial controls for a multinational',
    challenge: 'An over-complicated chart of accounts slowing reporting and raising compliance risk.',
    solution: 'A streamlined chart of accounts on S/4HANA with controls built in.',
    result: 'Delivered in 3 months, with better accuracy and lower compliance risk.',
  },
  {
    sector: 'SaaS provider',
    tab: 'Onboarding automation on BTP',
    value: 40,
    metric: 'faster onboarding',
    tags: ['BTP', 'AI', 'S/4HANA'],
    title: 'Faster customer onboarding for a SaaS provider',
    challenge: 'Complex ERP integrations stretching onboarding to five weeks.',
    solution: 'Automated integration on SAP BTP, with conversational AI and machine learning.',
    result: 'Onboarding cut from 5 weeks to 3, with 50% fewer support tickets.',
  },
];

const KEYS = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

// Home: client stories showcase. Click or arrow-key between stories; the active
// story's ring draws and its number counts up. First draw waits until in view.
export default function Showcase() {
  const [rootRef, inView] = useInView({ threshold: 0.35 });
  const [active, setActive] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const [count, setCount] = useState(STORIES[0].value);
  const tabRefs = useRef([]);
  const focusNext = useRef(false);

  // Each time the active story changes (and once first in view), restart the ring and count
  useEffect(() => {
    if (!inView) return undefined;
    if (focusNext.current) {
      tabRefs.current[active]?.focus();
      focusNext.current = false;
    }
    setDrawn(false);
    if (!prefersReducedMotion()) setCount(0);
    let stopCount;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        setDrawn(true);
        const target = STORIES[active].value;
        if (prefersReducedMotion()) setCount(target);
        else stopCount = animateCount(target, 1000, setCount);
      });
    });
    return () => {
      cancelAnimationFrame(frame);
      if (stopCount) stopCount();
    };
  }, [active, inView]);

  const show = (i, focus) => {
    focusNext.current = Boolean(focus);
    setActive((i + STORIES.length) % STORIES.length);
  };

  const onKeyDown = (e) => {
    if (e.key in KEYS) { e.preventDefault(); show(active + KEYS[e.key], true); }
    else if (e.key === 'Home') { e.preventDefault(); show(0, true); }
    else if (e.key === 'End') { e.preventDefault(); show(STORIES.length - 1, true); }
  };

  return (
    <div className="showcase js-showcase" id="showcase" ref={rootRef}>
      <div className="showcase-tabs" role="tablist" aria-label="Client stories">
        {STORIES.map((s, i) => (
          <button
            key={s.tab}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            className={`showcase-tab${i === active ? ' is-active' : ''}`}
            role="tab"
            id={`sc-tab-${i + 1}`}
            aria-controls={`sc-panel-${i + 1}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => show(i)}
            onKeyDown={onKeyDown}
          >
            <span className="showcase-tab-sector">{s.sector}</span>
            <span className="showcase-tab-title">{s.tab}</span>
            <i className="showcase-tab-progress" aria-hidden="true"></i>
          </button>
        ))}
      </div>

      <div className="showcase-panels">
        {STORIES.map((s, i) => {
          const on = i === active;
          return (
            <article
              key={s.tab}
              className={`showcase-panel${on ? ' is-active' : ''}${on && drawn ? ' is-drawn' : ''}`}
              role="tabpanel"
              id={`sc-panel-${i + 1}`}
              aria-labelledby={`sc-tab-${i + 1}`}
              style={{ '--v': String(s.value) }}
            >
              <div className="showcase-ring">
                <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
                  <circle className="ring-track" cx="60" cy="60" r="54" />
                  <circle className="ring-fill" cx="60" cy="60" r="54" />
                </svg>
                <div className="showcase-ring-value">
                  <strong>
                    <span className="sc-count">{on ? count : s.value}</span>%
                  </strong>
                  <span>{s.metric}</span>
                </div>
              </div>
              <div className="showcase-copy">
                <p className="showcase-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </p>
                <h3>{s.title}</h3>
                <ol className="showcase-flow">
                  <li><b>Challenge</b>{s.challenge}</li>
                  <li><b>Solution</b>{s.solution}</li>
                  <li><b>Result</b>{s.result}</li>
                </ol>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
