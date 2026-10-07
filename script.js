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
  '.section-head, .offer-card, .team-card, .accel-card, .industry-card, .insight-stub, .ledger-card, .news-card, .news-lead, .news-row, .topic-tile, .story-card, .stories-quote, .home-stories-industry'
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

// Home accelerators: play 1 → arrow → 2 → arrow → 3 once the row scrolls into view.
// Only armed (hidden) when IntersectionObserver exists and motion is allowed.
(() => {
  const row = document.getElementById('home-accel-points');
  if (!row || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  row.classList.add('is-armed');
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      row.classList.add('is-playing');
      io.disconnect();
    },
    { threshold: 0.4 }
  );
  io.observe(row);
})();

// Count-up numbers (e.g. 150+): animate from 0 to data-target when scrolled into view.
// The real number is in the markup, so it still shows without JS or with reduced motion.
(() => {
  const nums = document.querySelectorAll('.count-up[data-target]');
  if (!nums.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const run = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((el) => {
    el.textContent = '0';
    io.observe(el);
  });
})();

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

// Intro: ARICORD types in, then the tagline types centred beneath it; hold, then fade out to reveal the page
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  if (!intro) return;
  const lines = Array.from(intro.querySelectorAll('.arc-type'));
  document.body.classList.add('intro-active');

  const finish = () => {
    intro.classList.add('is-done');
    document.body.classList.remove('intro-active');
    setTimeout(() => intro.remove(), 700);
  };

  if (!lines.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(finish, 1200);
    return;
  }

  const cursor = document.createElement('span');
  cursor.className = 'arc-cursor';
  const speeds = [130, 55]; // ms per letter: heading, tagline

  const typeLine = (n) => {
    if (n >= lines.length) { setTimeout(finish, 1000); return; }
    const el = lines[n];
    const text = el.dataset.text || '';
    const out = document.createTextNode('');
    el.append(out, cursor);
    let i = 0;
    const tick = () => {
      out.textContent = text.slice(0, i);
      if (i < text.length) { i += 1; setTimeout(tick, speeds[n] || 60); }
      else setTimeout(() => typeLine(n + 1), 350);
    };
    tick();
  };
  setTimeout(() => typeLine(0), 600);
});

// Hero pillars visual: type the tagline once the axes have drawn, and light up a pillar on hover
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('.pillars svg');
  if (!svg) return;

  svg.querySelectorAll('[data-i]').forEach((el) => {
    const group = svg.querySelectorAll(`[data-i="${el.dataset.i}"]`);
    el.addEventListener('mouseenter', () => group.forEach((g) => g.classList.add('is-hot')));
    el.addEventListener('mouseleave', () => group.forEach((g) => g.classList.remove('is-hot')));
  });

  const tagline = svg.querySelector('.tagline');
  const typed = tagline && tagline.querySelector('.pillars-typed');
  if (!typed) return;
  const text = tagline.dataset.text || '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { typed.textContent = text; return; }

  let i = 0;
  const tick = () => {
    typed.textContent = text.slice(0, i);
    if (i < text.length) { i += 1; setTimeout(tick, 70); }
  };
  // Wait for the intro overlay, plus time for the axes and labels to appear
  setTimeout(tick, (document.getElementById('intro') ? 4500 : 400) + 1800);
});

// Client stories: expand/collapse, filter chips and metric bars
(() => {
  const list = document.getElementById('story-list');
  if (!list) return;
  const cards = Array.from(list.querySelectorAll('.story-card'));
  list.classList.add('js-stories');
  const filterBar = document.querySelector('.story-filters');
  if (filterBar) filterBar.hidden = false;

  // Expand / collapse the full story
  cards.forEach((card) => {
    const btn = card.querySelector('.story-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      btn.firstChild.textContent = open ? 'Hide the full story ' : 'Read the full story ';
      card.classList.toggle('is-open', open);
    });
  });

  // Filter chips: fade non-matching cards out, then remove them from the layout
  const chips = document.querySelectorAll('.story-filter');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter;
      chips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      cards.forEach((card) => {
        const match = f === 'all' || card.dataset.area.split(' ').includes(f);
        if (match) {
          card.hidden = false;
          requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('is-filtered-out')));
        } else {
          card.classList.add('is-filtered-out');
          setTimeout(() => { if (card.classList.contains('is-filtered-out')) card.hidden = true; }, 300);
        }
      });
    });
  });

  // Metric bars fill when their card scrolls into view
  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => card.classList.add('bars-on'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('bars-on');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );
  cards.forEach((card) => io.observe(card));
})();

// Home: client stories showcase. Click or arrow-key between stories; the active
// story's ring draws and its number counts up. First draw waits until in view.
(() => {
  const root = document.getElementById('showcase');
  if (!root) return;
  const tabs = Array.from(root.querySelectorAll('.showcase-tab'));
  const panels = Array.from(root.querySelectorAll('.showcase-panel'));
  if (!tabs.length || tabs.length !== panels.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js-showcase');
  let current = 0;

  const countUp = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (reduced) { el.textContent = target; return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / 1000, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const show = (i, focus) => {
    current = (i + tabs.length) % tabs.length;
    tabs.forEach((tab, n) => {
      const on = n === current;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[n].classList.toggle('is-active', on);
      panels[n].classList.remove('is-drawn');
    });
    if (focus) tabs[current].focus();
    requestAnimationFrame(() => {
      void panels[current].offsetWidth;
      panels[current].classList.add('is-drawn');
      const num = panels[current].querySelector('.sc-count');
      if (num) countUp(num);
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => show(i));
    tab.addEventListener('keydown', (e) => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (e.key in keys) { e.preventDefault(); show(current + keys[e.key], true); }
      else if (e.key === 'Home') { e.preventDefault(); show(0, true); }
      else if (e.key === 'End') { e.preventDefault(); show(tabs.length - 1, true); }
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      show(current);
    }, { threshold: 0.35 });
    io.observe(root);
  } else {
    show(0);
  }
})();

// Home coverage row: line draws across and the five areas fade in one by one
(() => {
  const row = document.getElementById('cov-steps');
  if (!row || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  row.classList.add('is-armed');
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    row.classList.add('is-playing');
    io.disconnect();
  }, { threshold: 0.4 });
  io.observe(row);
})();

// Hero eyebrow: "SAP FINANCE ·" stays fixed, the phrases after it type, pause, delete and cycle
document.addEventListener('DOMContentLoaded', () => {
  const typed = document.querySelector('.eyebrow-typed');
  if (!typed || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const phrases = (typed.dataset.phrases || '').split('|').filter(Boolean);
  if (!phrases.length) return;

  let p = 0;
  let i = 0;
  let deleting = false;
  typed.textContent = '';

  const tick = () => {
    const text = phrases[p];
    if (!deleting) {
      i += 1;
      typed.textContent = text.slice(0, i);
      if (i === text.length) { deleting = true; setTimeout(tick, 1800); return; }
      setTimeout(tick, 80);
    } else {
      i -= 1;
      typed.textContent = text.slice(0, i);
      if (i === 0) { deleting = false; p = (p + 1) % phrases.length; setTimeout(tick, 400); return; }
      setTimeout(tick, 40);
    }
  };
  // Start once the intro overlay has cleared (if present)
  setTimeout(tick, document.getElementById('intro') ? 5800 : 400);
});
