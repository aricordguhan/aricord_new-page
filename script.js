// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal on scroll — fails open: if anything here goes wrong (missing
// selector, no IntersectionObserver support, a thrown error), content is
// force-shown after a short delay rather than staying permanently hidden.
const revealTargets = document.querySelectorAll(
  '.section-head, .offer-card, .team-card, .accel-card, .industry-card, .insight-stub, .ledger-card, .news-card, .news-lead, .news-row, .topic-tile'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealNow = () => revealTargets.forEach((el) => el.classList.add('in-view'));
window.setTimeout(revealNow, 1200);

try {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealNow();
  }
} catch (err) {
  revealNow();
}

// Contact form -> mailto (no backend on a static local site)
const form = document.getElementById('contact-form');
const note = document.getElementById('cf-note');

if (form && note) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      note.textContent = 'Please fill in every field.';
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@aricord.com?subject=${subject}&body=${body}`;
    note.textContent = 'Opening your email client…';
  });
}

// Terms modal
const termsBtn = document.getElementById('terms-btn');
const termsModal = document.getElementById('terms-modal');
const termsClose = document.getElementById('terms-close');

if (termsBtn && termsModal && termsClose) {
  termsBtn.addEventListener('click', () => {
    termsModal.hidden = false;
    termsClose.focus();
  });
  termsClose.addEventListener('click', () => { termsModal.hidden = true; termsBtn.focus(); });
  termsModal.addEventListener('click', (e) => { if (e.target === termsModal) termsModal.hidden = true; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !termsModal.hidden) { termsModal.hidden = true; termsBtn.focus(); }
  });
}

// Tabs (Blog / News on the homepage, Feature / Blog / News / Press on the News Center —
// each .tabs container is wired up independently so a page can hold more than one)
document.querySelectorAll('.tabs').forEach((tabsEl) => {
  const tabButtons = tabsEl.querySelectorAll('.tab-btn');
  const tabPanels = {};
  tabsEl.querySelectorAll('.tab-panel').forEach((panel) => {
    tabPanels[panel.dataset.tabPanel || panel.id.replace('panel-', '')] = panel;
  });

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
        b.tabIndex = -1;
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      btn.tabIndex = 0;

      Object.values(tabPanels).forEach((panel) => { panel.hidden = true; });
      const target = tabPanels[btn.dataset.tab];
      if (target) target.hidden = false;
    });
  });
});

// Read more / less toggle on blog & news cards
document.querySelectorAll('.read-more').forEach((btn) => {
  btn.addEventListener('click', () => {
    const excerpt = btn.previousElementSibling;
    const expanded = excerpt.classList.toggle('is-expanded');
    btn.textContent = expanded ? 'Show less' : 'Read more';
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// News Center: horizontal-scrolling category rows
document.querySelectorAll('.news-row').forEach((row) => {
  const track = row.querySelector('.news-row-track');
  const [prevBtn, nextBtn] = row.querySelectorAll('.row-arrow');
  if (!track || !prevBtn || !nextBtn) return;

  const updateArrows = () => {
    const max = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 4;
    nextBtn.disabled = track.scrollLeft >= max - 4;
  };

  prevBtn.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' }));
  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
});
