// ── NAV SCROLL ──────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER ───────────────────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── REVEAL ON SCROLL ────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FORM → WHATSAPP ─────────────────────────────────────────
const form = document.getElementById('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome      = document.getElementById('nome').value.trim();
    const tel       = document.getElementById('tel').value.trim();
    const interesse = document.getElementById('interesse').value;

    if (!nome || !tel || !interesse) return;

    const msg = encodeURIComponent(
      `Olá, Bmov Moda Fitness! 💪\n\nMeu nome é *${nome}*\nWhatsApp: ${tel}\nTenho interesse em: *${interesse}*\n\nVim pelo site e quero saber mais!`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    form.reset();
  });
}

// ── PALETTE HOVER LABEL ─────────────────────────────────────
document.querySelectorAll('.palette-item').forEach(item => {
  item.addEventListener('click', () => {
    const cor = item.querySelector('span').textContent;
    const msg = encodeURIComponent(
      `Olá! Vi a cor *${cor}* no site da Bmov e quero saber mais sobre os produtos nessa cor! 🎨`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  });
});
