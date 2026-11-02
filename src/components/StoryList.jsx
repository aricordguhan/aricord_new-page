import { createContext, useContext, useEffect, useState } from 'react';
import CountUp from './CountUp';
import { useInView } from '../hooks/motion';

const FILTERS = [
  { id: 'all', label: 'All stories' },
  { id: 's4', label: 'S/4HANA Finance' },
  { id: 'subledger', label: 'Subledger & RAR' },
  { id: 'btp', label: 'SAP BTP' },
];

const FilterContext = createContext('all');

// Client stories: filter chips above a list of expandable story cards
export function StoryList({ children }) {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <div className="story-filters" role="group" aria-label="Filter stories">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`story-filter${filter === id ? ' is-active' : ''}`}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="story-list js-stories" id="story-list">
        <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
      </div>
    </>
  );
}

// metrics: [{ count, suffix, text, label, bar }] — `count` animates, `text` is static,
// `bar` (0–100) draws a metric bar once the card is in view.
export function StoryCard({ id, areas, tag, sector, title, summary, metrics, children }) {
  const filter = useContext(FilterContext);
  const match = filter === 'all' || areas.includes(filter);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(!match);
  const [fadedOut, setFadedOut] = useState(!match);
  const [revealRef, revealed] = useInView({ threshold: 0.12, fallbackMs: 1200 });
  const [barsRef, barsOn] = useInView({ threshold: 0.35 });

  // Fade non-matching cards out, then take them out of the layout
  useEffect(() => {
    if (match) {
      setHidden(false);
      let frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => setFadedOut(false));
      });
      return () => cancelAnimationFrame(frame);
    }
    setFadedOut(true);
    const timer = setTimeout(() => setHidden(true), 300);
    return () => clearTimeout(timer);
  }, [match]);

  const setRefs = (el) => {
    revealRef.current = el;
    barsRef.current = el;
  };

  const className = [
    'story-card reveal',
    revealed && 'in-view',
    barsOn && 'bars-on',
    open && 'is-open',
    fadedOut && 'is-filtered-out',
  ].filter(Boolean).join(' ');

  return (
    <article className={className} ref={setRefs} hidden={hidden}>
      <div className="story-main">
        <div className="story-meta">
          <span className="tag tag-dark">{tag}</span>
          <span className="story-sector">{sector}</span>
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <ul className="story-metrics">
        {metrics.map((m) => (
          <li key={m.label} style={m.bar ? { '--v': String(m.bar) } : undefined}>
            <strong>
              {m.count !== undefined ? <CountUp target={m.count} /> : m.text}
              {m.suffix}
            </strong>
            <span>{m.label}</span>
            {m.bar && <i className="metric-bar" />}
          </li>
        ))}
      </ul>
      <button type="button" className="story-toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {open ? 'Hide the full story ' : 'Read the full story '}
        <span className="story-toggle-icon" aria-hidden="true" />
      </button>
      <div className="story-body" id={id}>
        <div className="story-body-inner">{children}</div>
      </div>
    </article>
  );
}
