import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks/motion';
import { intro } from '../intro';

const TAGLINE = 'Where complexity gets clarity.';

const AXES = [
  { x2: 300, y2: 110 },
  { x2: 490, y2: 300 },
  { x2: 300, y2: 490 },
  { x2: 110, y2: 300 },
];

const LABELS = [
  { text: 'FINANCE', x: 300, y: 88, anchor: 'middle' },
  { text: 'TECHNOLOGY', x: 505, y: 311, anchor: 'start' },
  { text: 'SAP', x: 300, y: 535, anchor: 'middle' },
  { text: 'REGULATION', x: 95, y: 311, anchor: 'end' },
];

const SPARKS = [
  { path: '#pTop', begin: '2s' },
  { path: '#pRight', begin: '2.7s' },
  { path: '#pBottom', begin: '3.4s' },
  { path: '#pLeft', begin: '4.1s' },
];

// Hero visual: Finance, Regulation, Technology and SAP converge on one point.
// The tagline types once the axes have drawn; hovering an axis or label lights up that pillar.
export default function PillarsVisual() {
  const [hot, setHot] = useState(null);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(TAGLINE);
      return undefined;
    }
    let timer;
    let i = 0;
    const tick = () => {
      setTyped(TAGLINE.slice(0, i));
      if (i < TAGLINE.length) { i += 1; timer = setTimeout(tick, 70); }
    };
    // Wait for the intro overlay, plus time for the axes and labels to appear
    timer = setTimeout(tick, (intro.pending ? 4500 : 400) + 1800);
    return () => clearTimeout(timer);
  }, []);

  const hover = (i) => ({
    onMouseEnter: () => setHot(i),
    onMouseLeave: () => setHot(null),
  });
  const hotClass = (i) => (hot === i ? ' is-hot' : '');

  return (
    <figure className="hero-visual">
      <div className="pillars">
        <svg viewBox="0 0 600 600" role="img" aria-label="Finance, Regulation, Technology and SAP meet at one point">
          <defs>
            <filter id="pillars-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id="pillars-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,.12)" />
            </pattern>
            <radialGradient id="pillars-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <mask id="pillars-mask">
              <rect width="600" height="600" fill="url(#pillars-fade)" />
            </mask>
            <path id="pTop" d="M300 110 L300 300" />
            <path id="pRight" d="M490 300 L300 300" />
            <path id="pBottom" d="M300 490 L300 300" />
            <path id="pLeft" d="M110 300 L300 300" />
          </defs>

          <g className="grid-dots" mask="url(#pillars-mask)">
            <rect x="-24" y="-24" width="648" height="648" fill="url(#pillars-dots)" />
          </g>

          {AXES.map(({ x2, y2 }, i) => (
            <line key={i} className={`axis a${i + 1}${hotClass(i)}`} x1="300" y1="300" x2={x2} y2={y2} {...hover(i)} />
          ))}

          {SPARKS.map(({ path, begin }) => (
            <circle key={path} className="spark" r="3.5">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin={begin}>
                <mpath href={path} />
              </animateMotion>
            </circle>
          ))}

          <circle className="ring" cx="300" cy="300" r="14" />
          <circle className="ring r2" cx="300" cy="300" r="14" />
          <circle className="ring r3" cx="300" cy="300" r="14" />
          <circle className="halo" cx="300" cy="300" r="20" />
          <circle className="core" cx="300" cy="300" r="9" />

          {LABELS.map(({ text, x, y, anchor }, i) => (
            <text key={text} className={`label l${i + 1}${hotClass(i)}`} x={x} y={y} textAnchor={anchor} {...hover(i)}>
              {text}
            </text>
          ))}

          <text className="tagline" x="300" y="585" textAnchor="middle">
            <tspan className="pillars-typed">{typed}</tspan>
            <tspan className="caret">▍</tspan>
          </text>
        </svg>
      </div>
    </figure>
  );
}
