import { useEffect, useRef, useState } from 'react';

export const hasObserver = () => typeof window !== 'undefined' && 'IntersectionObserver' in window;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// True once the element has scrolled into view (and stays true). Without
// IntersectionObserver it reports true straight away so nothing stays hidden.
// `fallbackMs` force-reveals after a delay, so content never stays hidden for long.
export function useInView({ threshold = 0.12, fallbackMs } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => !hasObserver());

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setInView(true);
        io.disconnect();
      },
      { threshold }
    );
    io.observe(el);
    const timer = fallbackMs ? window.setTimeout(() => setInView(true), fallbackMs) : undefined;
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [threshold, fallbackMs, inView]);

  return [ref, inView];
}

// Rows that animate in once (home accelerators, coverage steps). Only "armed"
// (hidden) when the animation can actually run; otherwise shown as-is.
export function usePlayOnView(threshold = 0.4) {
  const [armed] = useState(() => hasObserver() && !prefersReducedMotion());
  const [ref, inView] = useInView({ threshold });
  const className = armed ? ` is-armed${inView ? ' is-playing' : ''}` : '';
  return [ref, className];
}

// Animates a number from 0 to `target` with an ease-out curve.
export function animateCount(target, duration, onFrame) {
  let frame;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    onFrame(Math.round(target * (1 - Math.pow(1 - t, 3))));
    if (t < 1) frame = requestAnimationFrame(step);
  };
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

// Reveal on scroll for plain, static markup: tags matching elements inside
// `root` with .reveal and adds .in-view as they appear. Fails open — after a
// short delay everything is force-shown rather than staying hidden.
const REVEAL_SELECTOR =
  '.section-head, .offer-card, .team-card, .accel-card, .industry-card, .insight-stub, .ledger-card, .news-card, .news-lead, .news-row, .topic-tile, .stories-quote, .home-stories-industry';

export function useScrollReveal(rootRef, key) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const targets = root.querySelectorAll(REVEAL_SELECTOR);
    targets.forEach((el) => el.classList.add('reveal'));
    const revealNow = () => targets.forEach((el) => el.classList.add('in-view'));
    const timer = window.setTimeout(revealNow, 1200);

    let io;
    try {
      if (hasObserver()) {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('in-view');
              io.unobserve(entry.target);
            });
          },
          { threshold: 0.12 }
        );
        targets.forEach((el) => io.observe(el));
      } else {
        revealNow();
      }
    } catch {
      revealNow();
    }

    return () => {
      window.clearTimeout(timer);
      if (io) io.disconnect();
    };
  }, [rootRef, key]);
}
