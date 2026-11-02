import { useState } from 'react';

// Excerpt with a "Read more / Show less" toggle that reveals the `more` text
export default function ReadMore({ children, more }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p className={`insight-excerpt${expanded ? ' is-expanded' : ''}`}>
        {children} <span className="more-text"> {more}</span>
      </p>
      <button className="read-more" type="button" onClick={() => setExpanded((e) => !e)}>
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </>
  );
}
