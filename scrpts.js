// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  // Fill year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if (mobileMenu.hasAttribute('hidden')) {
        mobileMenu.removeAttribute('hidden');
      } else {
        mobileMenu.setAttribute('hidden', '');
      }
    });
  }

  // Simple appointment form handler
  const form = document.getElementById('appointmentForm');
  const formMsg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // basic validation
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const department = form.querySelector('[name="department"]').value;

      if (!name || !email || !phone || !department) {
        formMsg.textContent = 'Please fill required fields.';
        formMsg.style.color = 'crimson';
        return;
      }

      // In a real site: send data to server (fetch POST).
      // For demo: show success and reset
      formMsg.textContent = 'Thanks! Your request was received — we will contact you soon.';
      formMsg.style.color = 'green';
      form.reset();
    });
  }
});
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  mobileMenu.hidden = expanded;
});

// Footer year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

