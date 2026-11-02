import { useEffect, useRef } from 'react';

export default function TermsModal({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className="modal"
      id="terms-modal"
      hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="terms-title">
        <button type="button" className="modal-close" id="terms-close" aria-label="Close" ref={closeRef} onClick={onClose}>
          ×
        </button>
        <h3 id="terms-title">Terms &amp; Conditions</h3>
        <p>
          Placeholder for the firm's actual terms. Replace this copy with your reviewed legal text before publishing
          live.
        </p>
      </div>
    </div>
  );
}
