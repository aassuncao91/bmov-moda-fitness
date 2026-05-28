// ── NAV SCROLL ────────────────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── FAQ ACCORDION ─────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq__item');
  const isOpen = item.classList.contains('open');
  // Fecha todos
  document.querySelectorAll('.faq__item.open').forEach(i => i.classList.remove('open'));
  // Abre o clicado (se não estava aberto)
  if (!isOpen) item.classList.add('open');
}

// ── REVEAL ON SCROLL ───────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
