import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks/motion';
import { intro } from '../intro';

const LINES = ['ARICORD', 'Where complexity gets clarity.'];
const SPEEDS = [130, 55]; // ms per letter: heading, tagline

// ARICORD types in, then the tagline types centred beneath it; hold, then fade
// out to reveal the page.
export default function Intro({ onDone }) {
  const [typed, setTyped] = useState(['', '']);
  const [cursorLine, setCursorLine] = useState(-1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = [];
    const later = (fn, ms) => timers.push(window.setTimeout(fn, ms));
    document.body.classList.add('intro-active');

    const finish = () => {
      setDone(true);
      document.body.classList.remove('intro-active');
      intro.pending = false;
      later(onDone, 700);
    };

    if (prefersReducedMotion()) {
      later(finish, 1200);
    } else {
      const typeLine = (n) => {
        if (n >= LINES.length) { later(finish, 1000); return; }
        setCursorLine(n);
        let i = 0;
        const tick = () => {
          setTyped((prev) => prev.map((t, k) => (k === n ? LINES[n].slice(0, i) : t)));
          if (i < LINES[n].length) { i += 1; later(tick, SPEEDS[n]); }
          else later(() => typeLine(n + 1), 350);
        };
        tick();
      };
      later(() => typeLine(0), 600);
    }

    return () => {
      timers.forEach(window.clearTimeout);
      document.body.classList.remove('intro-active');
    };
  }, [onDone]);

  const line = (n) => (
    <span className="arc-line">
      <span className="arc-ghost">{LINES[n]}</span>
      <span className="arc-type">
        {typed[n]}
        {cursorLine === n && <span className="arc-cursor" />}
      </span>
    </span>
  );

  return (
    <div className={`intro${done ? ' is-done' : ''}`} id="intro" aria-hidden="true">
      <div className="arc-inner">
        <p className="arc-title">{line(0)}</p>
        <p className="arc-tagline">{line(1)}</p>
      </div>
    </div>
  );
}
