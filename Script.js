// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form
// NOTE: This currently just confirms submission locally. To actually receive
// messages, wire this up to a form backend (Formspree, Web3Forms, EmailJS,
// or your own endpoint) and replace the section marked below.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = '#E25C5C';
      return;
    }

    // --- Replace this block with a real submission call when ready ---
    // Example using Formspree:
    // fetch('https://formspree.io/f/yourFormId', {
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json' },
    //   body: new FormData(form)
    // }).then(() => { ...success state... });

    status.style.color = '#3D7A6B';
    status.textContent = `Thanks, ${name}. This form isn't connected to an inbox yet — email me directly at batavikki2002@gmail.com and I'll get back to you.`;
    form.reset();
  });
}