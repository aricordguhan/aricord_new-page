import { Link } from 'react-router-dom';

export default function Wordmark({ className = 'wordmark', ...props }) {
  return (
    <Link to="/" className={className} {...props}>
      <svg className="wordmark-mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <circle className="mark-halo" cx="50" cy="50" r="48" />
        <circle className="mark-fill" cx="50" cy="50" r="47" />
        <circle className="mark-ring" cx="50" cy="50" r="35" />
        <path className="mark-chevron" d="M34 60 L50 33 L66 60" />
      </svg>
      <span className="wordmark-text">Aricord</span>
    </Link>
  );
}
