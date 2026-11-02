import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../hooks/motion';
import { intro } from '../intro';

// Hero eyebrow: the prefix stays fixed, the phrases after it type, pause, delete and cycle
export default function TypedEyebrow({ prefix, phrases, initial }) {
  const [animate] = useState(() => !prefersReducedMotion());
  const [text, setText] = useState(animate ? '' : initial);

  useEffect(() => {
    if (!animate) return undefined;
    let timer;
    let p = 0;
    let i = 0;
    let deleting = false;

    const tick = () => {
      const phrase = phrases[p];
      if (!deleting) {
        i += 1;
        setText(phrase.slice(0, i));
        if (i === phrase.length) { deleting = true; timer = setTimeout(tick, 1800); return; }
        timer = setTimeout(tick, 80);
      } else {
        i -= 1;
        setText(phrase.slice(0, i));
        if (i === 0) { deleting = false; p = (p + 1) % phrases.length; timer = setTimeout(tick, 400); return; }
        timer = setTimeout(tick, 40);
      }
    };
    // Start once the intro overlay has cleared (if it is playing)
    timer = setTimeout(tick, intro.pending ? 5800 : 400);
    return () => clearTimeout(timer);
  }, [animate, phrases]);

  return (
    <p className="eyebrow">
      {prefix}
      <span className="eyebrow-typed">{text}</span>
      <span className="eyebrow-cursor" aria-hidden="true"></span>
    </p>
  );
}
