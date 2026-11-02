require('dotenv').config();

const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');

const {
  PORT = 3000,
  SMTP_HOST,
  SMTP_PORT = 587,
  SMTP_SECURE = 'false',
  SMTP_AUTH = 'oauth2',
  SMTP_USER,
  SMTP_PASS,
  MS_TENANT_ID,
  MS_CLIENT_ID,
  MS_CLIENT_SECRET,
  CONTACT_TO,
  ALLOWED_ORIGIN,
} = process.env;

const useOAuth = SMTP_AUTH === 'oauth2';
const required = ['SMTP_HOST', 'SMTP_USER', 'CONTACT_TO']
  .concat(useOAuth ? ['MS_TENANT_ID', 'MS_CLIENT_ID', 'MS_CLIENT_SECRET'] : ['SMTP_PASS']);
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`Missing environment variables: ${missing.join(', ')}. See .env.example.`);
  process.exit(1);
}

// Microsoft 365 app-only token (client credentials) for SMTP XOAUTH2.
// Cached in memory and refreshed 5 minutes before it expires.
const TOKEN_REFRESH_MARGIN_MS = 5 * 60 * 1000;
let cachedToken = null; // { accessToken, expiresAt }
let pendingToken = null;

async function requestMicrosoftToken() {
  let res;
  try {
    res = await fetch(`https://login.microsoftonline.com/${MS_TENANT_ID}/oauth2/v2.0/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: MS_CLIENT_ID,
        client_secret: MS_CLIENT_SECRET,
        scope: 'https://outlook.office365.com/.default',
        grant_type: 'client_credentials',
      }),
    });
  } catch (err) {
    throw new Error(`Microsoft token request failed: ${err.message}`);
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    const reason = data.error_description || data.error || `HTTP ${res.status}`;
    throw new Error(`Microsoft token request failed: ${reason}`);
  }
  return { accessToken: data.access_token, expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000 };
}

async function getMicrosoftToken() {
  if (cachedToken && cachedToken.expiresAt - TOKEN_REFRESH_MARGIN_MS > Date.now()) return cachedToken;
  // Share one in-flight request between simultaneous submissions
  if (!pendingToken) {
    pendingToken = requestMicrosoftToken()
      .then((token) => (cachedToken = token))
      .finally(() => { pendingToken = null; });
  }
  return pendingToken;
}

const smtpOptions = {
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === 'true',
  requireTLS: SMTP_SECURE !== 'true',
};

// A transporter that already holds a valid access token, so Nodemailer never tries to renew it itself
async function createTransporter() {
  if (!useOAuth) {
    return nodemailer.createTransport({ ...smtpOptions, auth: { user: SMTP_USER, pass: SMTP_PASS } });
  }
  const { accessToken, expiresAt } = await getMicrosoftToken();
  return nodemailer.createTransport({
    ...smtpOptions,
    auth: { type: 'OAuth2', user: SMTP_USER, accessToken, expires: expiresAt },
  });
}

createTransporter()
  .then((transporter) => transporter.verify())
  .then(() => console.log('SMTP connection ready'))
  .catch((err) => console.error('SMTP connection failed:', err.message));

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(express.json({ limit: '20kb' }));

// Only needed when the static site is served from a different origin
if (ALLOWED_ORIGIN) {
  app.use('/api', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });
}

// Basic in-memory rate limit: 5 submissions per IP per 15 minutes
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(ip);
  }
}, WINDOW_MS).unref();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', message = '', website = '' } = req.body || {};

  // Honeypot: real visitors never fill the hidden "website" field
  if (website) return res.json({ success: true });

  const cleanName = String(name).trim().replace(/[\r\n]+/g, ' ');
  const cleanEmail = String(email).trim();
  const cleanMessage = String(message).trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ success: false, message: 'Please fill in every field.' });
  }
  if (!EMAIL_RE.test(cleanEmail)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }
  if (cleanName.length > 100 || cleanEmail.length > 200 || cleanMessage.length > 5000) {
    return res.status(400).json({ success: false, message: 'Your message is too long.' });
  }
  if (rateLimited(req.ip)) {
    return res.status(429).json({ success: false, message: 'Too many messages. Please try again later.' });
  }

  try {
    const transporter = await createTransporter();
    await transporter.sendMail({
      from: `"Aricord Website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${cleanName.replace(/"/g, '')}" <${cleanEmail}>`,
      subject: `Website enquiry from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    // A rejected login may mean the cached token was revoked; fetch a fresh one next time
    if (err.code === 'EAUTH') cachedToken = null;
    console.error('Failed to send contact email:', err.message);
    res.status(500).json({ success: false, message: 'Could not send your message right now.' });
  }
});

// The React app, built by `npm run build` into dist/
const DIST = path.join(__dirname, 'dist');
const INDEX = path.join(DIST, 'index.html');

// Old static-site URLs (about.html, index.html) permanently redirect to the React routes
app.get(/^\/([a-z0-9-]+)\.html$/i, (req, res) => {
  const page = req.params[0].toLowerCase();
  const query = req.originalUrl.slice(req.path.length);
  res.redirect(301, (page === 'index' ? '/' : `/${page}`) + query);
});

app.use(express.static(DIST, { index: false }));

// Every other GET is a client-side route: serve the app shell and let React Router render it
app.get('*', (req, res) => res.sendFile(INDEX));

app.listen(PORT, () => console.log(`Aricord site running on http://localhost:${PORT}`));
