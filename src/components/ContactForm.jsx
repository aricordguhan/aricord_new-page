import { useEffect, useRef, useState } from 'react';

// Posts to our Node/Nodemailer API (server.js); SMTP secrets stay server-side in .env
const CONTACT_API = '/api/contact';
const CONTACT_INBOX = 'hello@aricord.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOAST_MS = 5000;

export default function ContactForm() {
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'sending' | 'success' | 'error', text }
  const toastTimer = useRef();

  const showToast = (type, text) => {
    clearTimeout(toastTimer.current);
    setToast({ type, text });
    // Sending stays up until the request settles; results auto-dismiss
    if (type !== 'sending') toastTimer.current = setTimeout(() => setToast(null), TOAST_MS);
  };

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    if (!name || !email || !message) {
      setNote('Please fill in every field.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setNote('Please enter a valid email address.');
      return;
    }

    setSending(true);
    setNote('Sending…');
    showToast('sending', 'Sending your message…');

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, website: data.website }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.success) {
        const err = new Error(body.message || 'Send failed');
        err.userMessage = res.status >= 400 && res.status < 500 ? body.message : '';
        throw err;
      }

      form.reset();
      setNote("Thanks — your message has been sent. We'll be in touch shortly.");
      showToast('success', 'Message submitted successfully.');
    } catch (err) {
      const msg = err.userMessage || `Sorry, we couldn't send your message. Please email us at ${CONTACT_INBOX}.`;
      setNote(msg);
      showToast('error', msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" id="contact-form" noValidate onSubmit={onSubmit}>
      {/* Honeypot: real visitors never fill this in */}
      <input
        type="text"
        name="website"
        id="cf-website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <label>
        Name
        <input type="text" name="name" id="cf-name" required autoComplete="name" />
      </label>
      <label>
        Work email
        <input type="email" name="email" id="cf-email" required autoComplete="email" />
      </label>
      <label>
        What's the situation?
        <textarea name="message" id="cf-message" rows={4} required />
      </label>
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>
      <p className="form-note" id="cf-note" role="status">
        {note}
      </p>
      {toast && (
        <div className={`toast toast-${toast.type}`} role={toast.type === 'error' ? 'alert' : 'status'}>
          {toast.type === 'sending' ? (
            <span className="toast-spinner" aria-hidden="true" />
          ) : (
            <span className="toast-icon" aria-hidden="true">{toast.type === 'success' ? '✓' : '!'}</span>
          )}
          <span className="toast-text">{toast.text}</span>
          {toast.type !== 'sending' && (
            <button type="button" className="toast-close" aria-label="Dismiss" onClick={() => setToast(null)}>
              ×
            </button>
          )}
        </div>
      )}
    </form>
  );
}
