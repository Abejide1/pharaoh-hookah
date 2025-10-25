// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('primary-menu');
if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

// Tabs for menu section
const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = Array.from(document.querySelectorAll('.panel'));
function activateTab(tab) {
  tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
  panels.forEach(p => p.classList.remove('is-active'));
  tab.setAttribute('aria-selected', 'true');
  const panel = document.getElementById(tab.getAttribute('aria-controls'));
  if (panel) panel.classList.add('is-active');
}
tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab));
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}


