import { useEffect, useState } from 'react';
import { animateCount, hasObserver, prefersReducedMotion, useInView } from '../hooks/motion';

// A number (e.g. 150+) that counts up from 0 once it scrolls into view.
// Shows the real number when it can't animate.
export default function CountUp({ target }) {
  const [animate] = useState(() => hasObserver() && !prefersReducedMotion());
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [value, setValue] = useState(animate ? 0 : target);

  useEffect(() => {
    if (animate && inView) return animateCount(target, 1600, setValue);
    return undefined;
  }, [animate, inView, target]);

  return (
    <span className="count-up" ref={ref}>
      {value}
    </span>
  );
}
