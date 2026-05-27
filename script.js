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
    window.open(`https://wa.me/5521998464517?text=${msg}`, '_blank');
    form.reset();
  });
}

// ── IMAGE GALLERY ───────────────────────────────────────────
function initGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;

  const imgs = [...gallery.querySelectorAll('img')];
  const dotsWrap = gallery.querySelector('.cat-gallery-dots');
  let current = 0;
  let timer;

  // build dots
  imgs.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Foto ${i + 1}`);
    d.addEventListener('click', e => { e.stopPropagation(); goTo(i); resetTimer(); });
    dotsWrap.appendChild(d);
  });

  function goTo(idx) {
    imgs[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = idx;
    imgs[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
  }

  function next() { goTo((current + 1) % imgs.length); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 3200);
  }

  gallery.addEventListener('click', () => { next(); resetTimer(); });

  resetTimer();
}

document.addEventListener('DOMContentLoaded', () => {
  initGallery('gallery-leggings');
  initGallery('gallery-dryfit');
});

// ── PALETTE HOVER LABEL ─────────────────────────────────────
document.querySelectorAll('.palette-item').forEach(item => {
  item.addEventListener('click', () => {
    const cor = item.querySelector('span').textContent;
    const msg = encodeURIComponent(
      `Olá! Vi a cor *${cor}* no site da Bmov e quero saber mais sobre os produtos nessa cor! 🎨`
    );
    window.open(`https://wa.me/5521998464517?text=${msg}`, '_blank');
  });
});
