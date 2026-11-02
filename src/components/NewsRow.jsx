import { useCallback, useEffect, useRef, useState } from 'react';

// News Center: a titled, horizontally scrolling row of cards with prev/next arrows
export default function NewsRow({ title, children }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  const scroll = (dir) => {
    const track = trackRef.current;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="news-row">
      <div className="news-row-head">
        <h3>{title}</h3>
        <div className="news-row-nav">
          <button className="row-arrow" aria-label={`Scroll ${title} row left`} disabled={atStart} onClick={() => scroll(-1)}>
            ‹
          </button>
          <button className="row-arrow" aria-label={`Scroll ${title} row right`} disabled={atEnd} onClick={() => scroll(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="news-row-track" ref={trackRef} onScroll={updateArrows}>
        {children}
      </div>
    </div>
  );
}
