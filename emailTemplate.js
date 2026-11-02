// emailTemplate.js
// Builds a clean, branded HTML email (plus a plain-text fallback) for contact form submissions.
// Place this file next to server.js.

// Escape user input so nothing they type can break or inject into the email HTML.
function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildContactEmail({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const subject = `New enquiry from ${name} via aricord.com`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0; padding:0; background-color:#eef2f8; font-family:Segoe UI, Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef2f8;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #dde4ef;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0b2a6b; padding:28px 32px;">
              <p style="margin:0; font-size:13px; letter-spacing:2px; text-transform:uppercase; color:#9fb6e6;">Aricord Consulting</p>
              <h1 style="margin:8px 0 0; font-size:22px; line-height:1.3; color:#ffffff; font-weight:600;">New website enquiry</h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0; font-size:15px; line-height:1.6; color:#3a4658;">
                Someone has submitted the contact form on <strong>aricord.com</strong>. Their details are below.
              </p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:16px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e3e8f0; border-radius:8px;">
                <tr>
                  <td style="padding:14px 16px; width:110px; font-size:13px; color:#6b778a; border-bottom:1px solid #e3e8f0;">Name</td>
                  <td style="padding:14px 16px; font-size:15px; color:#1b2433; font-weight:600; border-bottom:1px solid #e3e8f0;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px; width:110px; font-size:13px; color:#6b778a; border-bottom:1px solid #e3e8f0;">Email</td>
                  <td style="padding:14px 16px; font-size:15px; border-bottom:1px solid #e3e8f0;">
                    <a href="mailto:${safeEmail}" style="color:#1d5bd8; text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px; width:110px; font-size:13px; color:#6b778a;">Received</td>
                  <td style="padding:14px 16px; font-size:15px; color:#1b2433;">${escapeHtml(submittedAt)} IST</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:8px 32px 8px;">
              <p style="margin:0 0 8px; font-size:13px; color:#6b778a;">Message</p>
              <div style="background-color:#f5f8fc; border-left:4px solid #1d5bd8; border-radius:6px; padding:16px 18px; font-size:15px; line-height:1.65; color:#1b2433;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td align="left" style="padding:24px 32px 32px;">
              <a href="mailto:${safeEmail}?subject=${encodeURIComponent('Re: Your enquiry to Aricord')}"
                 style="display:inline-block; background-color:#1d5bd8; color:#ffffff; font-size:15px; font-weight:600; text-decoration:none; padding:12px 24px; border-radius:6px;">
                Reply to ${safeName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f5f8fc; padding:18px 32px; border-top:1px solid #e3e8f0;">
              <p style="margin:0; font-size:12px; line-height:1.5; color:#8a94a6;">
                Sent automatically from the contact form on aricord.com. Replying to this email goes straight to the visitor.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;

  // Plain-text version for email apps that block HTML.
  const text = [
    'New website enquiry (aricord.com)',
    '',
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Received: ${submittedAt} IST`,
    '',
    'Message:',
    message,
  ].join('\n');

  return { subject, html, text };
}

module.exports = { buildContactEmail };
